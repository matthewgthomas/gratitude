library(tidyverse)
library(googledrive)

# drive_find(pattern = "Gratitudes")

drive_download("Gratitudes - 2024", path = "nlp/data/gratitudes.txt", type = "txt", overwrite = TRUE)

grats <- read_lines("nlp/data/gratitudes.txt")

grats <-
  grats |>
  as_tibble() |>
  slice(-c(1:3)) |>
  drop_na() |>

  mutate(
    month_year = my(value),

    # For days of the month, extract from rows that only contain a number (or a number followed by another number in parentheses: these are the running totals)
    day = str_extract(value, "^[0-9]+$|^[0-9]+.*\\)$"),
    day = str_remove(day, " \\(.*\\)")  # Keep only day of month
  ) |>
  fill(month_year, day) |>
  drop_na() |>
  mutate(
    date = dmy(paste0(day, " ", month(month_year), " ", year(month_year)))
  ) |>

  filter(!is.na(date)) |>
  filter(!value %in% c("", " ")) |>
  filter(!str_detect(value, "^[0-9]+$|^[0-9]+.*\\)$")) |>
  # Filter out any rows with just a month and year
  filter(!str_detect(value, paste(paste0(month.name, " [0-9]{4}"), collapse = "|"))) |>

  select(date, gratitude = value)

write_csv(grats, "nlp/data/gratitudes.csv")

drive_update("Gratitude/gratitudes.csv", media = "data/gratitudes.csv")
