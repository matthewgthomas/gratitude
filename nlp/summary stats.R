library(tidyverse)
library(tidytext)
library(jsonlite)

source("nlp/load gratitudes.R")

# Total words
total_words <-
  grats |>
  unnest_tokens(word, gratitude) |>
  count() |>
  pull(n)

# How many people have I felt gratitude for in total?
num_people <-
  people |>
  distinct(Person) |>
  count() |>
  pull(n)

# Average number of people I'm grateful for, per month
monthly_people <-
  people |>
  group_by(Month) |>
  count() |>
  ungroup() |>
  summarise(mean = mean(n)) |>
  mutate(mean = round(mean, 0)) |>
  pull(mean)

# Categories of people
people_proportions <-
  people |>
  count(Category, sort = TRUE) |>
  mutate(prop = n/sum(n))

prop_friends <-
  people_proportions |>
  filter(Category == "Friend") |>
  mutate(prop = round(prop * 100, 0)) |>
  pull(prop)

prop_work <-
  people_proportions |>
  filter(Category == "Work") |>
  mutate(prop = round(prop * 100, 0)) |>
  pull(prop)

tibble(total_words, num_people, prop_friends, prop_work) |>
  toJSON() |>
  # Don't want [...] around the JSON string, which turns it into an array,
  # so manually remove the square brackets
  str_remove("\\[") |>
  str_remove("\\]") |>
  write_lines("src/data/stats.json")
