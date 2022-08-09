# Summary

1. Edit the method `averageSomeCoursesPerYear` in courses file
1. Click the run button to run the unit tests
1. Repeat until all tests pass

# Problem Description

The Object `courseRecord` keeps track of the course results for a student. 

For each course it keeps track of:
* name - string e.g. "CS101"
* mark - double e.g. 81.1
* yearTaken - integer e.g. 2020
* status - enum: INCOMPLETE, WITHDRAWAL, COMPLETE

We need to implement the method `averageSomeCoursesPerYear`
This method takes in an `Array` of `courseNames` and `Array` of `courseRecords` and returns the average of these courses that have been completed (have a status of `COMPLETE`) by year. It returns an `Object` that maps `yearTaken` to a `number` that is the average of the indicated courses for that year.

In other words, for the courses listed in input parameter `courseNames`, for each year, compute the average of the course with a `status` of `COMPLETE`.

Feel free to look at the unit tests in `courses.test`. There are some edge cases.

# Environment

The editor includes code completion. Make sure code intelligence is enabled in the editor settings (click the gear on the left border to open the settings.)

See https://docs.repl.it/repls/editor for more info.
