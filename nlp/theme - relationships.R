library(tidyverse)
library(tidytext)

source("nlp/load gratitudes.R")

# Make a list of people's names
people_list <- c(tolower(people_cats$Person), "friend", "buddies", "the band", "family", "company", "five eyes")
people_list <- str_glue("\\b{people_list}\\b")  # Add word boundary marker
people_regex <- paste(people_list, collapse = "|")

grats_people <-
  grats |>
  mutate(gratitude = tolower(gratitude)) |>
  mutate(mentions_person = if_else(str_detect(gratitude, people_regex), TRUE, FALSE))

# ---- How has the proportion of people-related gratitudes changed over time? ----
# - This is the data for <PeopleTrends /> -
# Monthly
grats_people_monthly <-
  grats_people |>
  mutate(
    month = format(date, "%B %Y") |> my()
  ) |>
  count(month, mentions_person) |>
  group_by(month) |>
  mutate(prop = n/sum(n))

# Weekly
grats_people_weekly <-
  grats_people |>
  mutate(
    week_num = isoweek(date),
    # 'w' in the parsed string = weekday number; 1 = Monday
    end_of_week = parse_date_time(paste(year(date), week_num, 1, sep="/"),'Y/W/w') |> as_date()
  ) |>
  count(end_of_week, mentions_person) |>
  group_by(end_of_week) |>
  mutate(prop = n/sum(n))

# Daily
grats_people_daily <-
  grats_people |>
  count(date, mentions_person) |>
  group_by(date) |>
  mutate(prop = n/sum(n))

# Save people-oriented gratitutes data for <PeopleTrends />
grats_people_daily |>
  filter(mentions_person) |>
  select(-mentions_person) |>
  mutate(prop = round(prop, 3)) |>
  write_csv("src/data/grats-people-only-daily.csv")

grats_people_weekly |>
  filter(mentions_person) |>
  select(-mentions_person) |>
  rename(date = end_of_week) |>
  mutate(prop = round(prop, 3)) |>
  write_csv("src/data/grats-people-only-weekly.csv")

grats_people_monthly |>
  filter(mentions_person) |>
  select(-mentions_person) |>
  rename(date = month) |>
  mutate(prop = round(prop, 3)) |>
  write_csv("src/data/grats-people-only-monthly.csv")

# ---- Number of gratitudes per category of person ----
# Categories of people and how they've developed over time
people |>
  count(Category, sort = TRUE) |>
  mutate(prop = n/sum(n)) |>
  write_csv("src/data/people-categories.csv")
