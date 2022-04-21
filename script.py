#!/usr/bin/env python3
title = "Michael Li Senior Cello Recital"
works_by = ["Walton", "Beethoven", "Schubert"]

# TODO Invite your friends
# TODO Add the date to your calendar
location = "Ulrich Recital Hall"
date = "Sunday, May 1, 2022"
time = "8:00PM EST"

performers = [
  ("Michael Li", "Cello"),
  ("Sepehr Davallou", "Piano"),
  ("Jessica McKee", "Piano")
]


def perform_recital():
  # TODO Complete recital implementation
  print(title, works_by, location, date,
          time, performers)


perform_recital()
