library(tidyverse)
library(tidytext)
library(udpipe)
library(googledrive)
library(googlesheets4)

# ---- Gratitude journal entries ----
grats <- read_csv("nlp/data/gratitudes.csv")

grats_words <-
  grats |>
  unnest_tokens(word, gratitude) |>
  anti_join(stop_words)

# ---- People to whom I feel gratitude ----
people <- read_sheet("https://docs.google.com/spreadsheets/d/1DPIodl_Nz0ulXktLfR91kL0ni0jvqsQhwklTJcB4_I4/edit?usp=sharing")

people <-
  people |>
  fill(Month)

# Load people and their categories
people_cats <- read_sheet("https://docs.google.com/spreadsheets/d/1DPIodl_Nz0ulXktLfR91kL0ni0jvqsQhwklTJcB4_I4/edit?usp=sharing", sheet = "People categories")

# ---- Themed gratitudes ----
# Fetch latest data based on themes using the zero-shot classifier
drive_download("gratitudes_labeled.csv", path = "nlp/data/gratitudes_labeled.csv", overwrite = TRUE)

grats_cats <- read_csv("nlp/data/gratitudes_labeled.csv")

grats_cats <-
  grats_cats |>
  select(-sequence) |>
  mutate(
    labels = str_remove(labels, "\\[") |> str_remove("\\]") |> str_remove_all("\\'"),
    scores = str_remove(scores, "\\[") |> str_remove("\\]")
  ) |>
  mutate(labels = str_replace(labels, "self-care, solitude", "solitude and self-care"))

# Separate labels and scores into their own rows
# Need to do this in separate tibbles then merge
grats_labels <-
  grats_cats |>
  select(-scores) |>
  separate_longer_delim(labels, delim = ", ") |>
  mutate(id = row_number())

grats_scores <-
  grats_cats |>
  select(-labels) |>
  separate_longer_delim(scores, delim = ", ") |>
  mutate(scores = as.numeric(scores)) |>
  mutate(id = row_number())

grats_cats <-
  left_join(grats_labels, grats_scores, join_by(id, date, gratitude)) |>
  select(-id)

# Keep entries with clearly attributable themes
# Some entries might have more than one theme - I'll explore theme co-occurrence later
grats_filtered <-
  grats_cats |>
  filter(scores > 0.5)

rm(grats_labels, grats_scores)
