library(tidyverse)
library(tidytext)
library(udpipe)

source("nlp/load gratitudes.R")

# ---- How many words of gratitude in total? ----
# Total words
grats |>
  unnest_tokens(word, gratitude) |>
  count()

# ---- Common words, nouns, adjectives, and verbs ----
# Tag parts of speech
grats_pos <-
  grats |>
  mutate(doc_id = format(date, "%B %Y")) |>
  select(doc_id, text = gratitude) |>
  udpipe("english") |>
  as_tibble()

# Make a .csv containing my commonly used words
grats_words |>
  mutate(word = str_to_sentence(word), sort = TRUE) |>
  count(word, sort = TRUE) |>
  slice_max(n, n = 10) |>
  write_csv("src/data/common-words.csv")

grats_pos |>
  filter(upos == "NOUN") |>
  mutate(word = str_to_sentence(lemma)) |>
  count(word, sort = TRUE) |>
  slice_max(n, n = 10) |>
  write_csv("src/data/common-nouns.csv")

grats_pos |>
  filter(upos == "ADJ") |>
  mutate(word = str_to_sentence(token)) |>
  count(word, sort = TRUE) |>
  slice_max(n, n = 10) |>
  write_csv("src/data/common-adj.csv")

grats_pos |>
  filter(upos == "VERB") |>
  mutate(word = str_to_sentence(lemma)) |>
  count(word, sort = TRUE) |>
  slice_max(n, n = 10) |>
  write_csv("src/data/common-verbs.csv")

# ---- What do I tend to describe as 'delicious' or 'tasty'? ----
# Fetch bigrams
grats_bigram <-
  grats |>
  unnest_tokens(bigram, gratitude, token = "ngrams", n = 2) |>
  filter(!is.na(bigram))

# Remove stopwords
grats_bigram <-
  grats_bigram |>
  separate(bigram, c("word1", "word2"), sep = " ") |>
  filter(!word1 %in% stop_words$word) |>
  filter(!word2 %in% stop_words$word)

grats_bigram |>
  filter(str_detect(word1, "unstruct"))

# What do I think is delicious, fun, tasty, lovely, ...?
grats_bigram |>
  filter(str_detect(word1, "delicious|tasty|fun$|lovely|interesting|good")) |>
  count(word1, word2, sort = TRUE) |>

  filter(n > 1) |>

  ggplot(aes(x = reorder(word2, n), y = n)) +
  geom_col() +
  facet_wrap(~word1, scales = "free") +
  coord_flip()

# ---- Evolution of themes ----
cumulative_labels <-
  grats_filtered |>
  group_by(date, labels) |>
  count() |>
  ungroup() |>

  group_by(labels) |>
  mutate(running_total = cumsum(n)) |>
  ungroup()

cumulative_labels_filtered <-
  cumulative_labels |>
  filter(labels != "") |>
  filter(!str_detect(labels, "personal")) |>
  select(date, theme = labels, running_total)

for (current_theme in unique(cumulative_labels_filtered$theme)) {
  theme_no_spaces <- str_replace_all(current_theme, " ", "-")

  cumulative_labels_filtered |>
    filter(theme == current_theme) |>
    select(-theme) |>
    write_csv(str_glue("src/data/themes-{theme_no_spaces}.csv"))
}
