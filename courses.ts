enum CompletionStatus {
    INCOMPLETE,
    WITHDRAWAL,
    COMPLETE
}

interface CourseRecords {
    name: string,
    mark: number,
    yearTaken: string,
    status: CompletionStatus
}

interface CourseMarks {
    [key: string]: {
        totalMarks: number,
        numberOfCourses: number
    }
}

interface CourseAvg {
    [key: string]: number
}

const createCourseAvgPerYearObj = (courseMarksPerYearObj: CourseMarks) => { 
    const courseAvgObj: CourseAvg = {};

    for (const year in courseMarksPerYearObj) {
        if (!(year in courseAvgObj)) {
            courseAvgObj[year] = 0.0;
        }

        const { totalMarks , numberOfCourses  } = courseMarksPerYearObj[year]
        courseAvgObj[year] = totalMarks / numberOfCourses;
    }

    return courseAvgObj;
}

const averageSomeCoursesPerYear = (courseRecords: CourseRecords[], courseNames: string[]) => {
     /**
     * Return the average marks per year for the given courses.
     * Only include completes for the year.
     * @param courseRecords: {CourseRecords[]} array of courseRecord
     * @param courseNames: {string[]} array of Strings
     * @returns { string: number } yearTaken to average
     */

    // Complete this method
    if (courseNames.length === 0) 
        return 0;

    const courseMarksPerYearObj: CourseMarks = {};

    for (let courseName of courseNames) {
        let courseRecord = courseRecords.find(courseRecord => courseRecord.name === courseName)

        if (courseRecord === undefined)
            continue;

        if (courseRecord.status !== CompletionStatus.COMPLETE)
            continue;
        
        let { yearTaken: year } = courseRecord;

        // Check if year exists in obj, if not add it as a new key
        if (!(year in courseMarksPerYearObj)) {
            courseMarksPerYearObj[year] = {
                totalMarks: 0.0,
                numberOfCourses: 0
            };
        }

        courseMarksPerYearObj[year].totalMarks += courseRecord.mark;
        courseMarksPerYearObj[year].numberOfCourses += 1;
    }

    const courseAvgPerYearObj = createCourseAvgPerYearObj(courseMarksPerYearObj);
        
    return courseAvgPerYearObj;
}

export { CompletionStatus, CourseRecords, averageSomeCoursesPerYear };
