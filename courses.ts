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

const createCourseAvgObj = (year: string, courseAvgObj: CourseAvg, courseMarksObj: CourseMarks) => {  
    
    for (const year in courseMarksObj) {
        if (!(year in courseAvgObj)) {
            courseAvgObj[year] = 0.0;
        }

        courseAvgObj[year] = courseMarksObj[year].totalMarks / courseMarksObj[year].numberOfCourses;
        
        return courseAvgObj;
    }
    
        
        // if (!(year in courseAvgObj)) {
        //     courseAvgObj[year] = 0.0;
        // }

        // courseAvgObj[year] = courseMarksObject[year].totalMarks / courseMarksObject[year].numberOfCourses;

        // return courseAvgObj
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

    const courseMarksObject: CourseMarks = {};
    const courseAvgObject: CourseAvg = {};

    for (let courseName of courseNames) {
        let courseRecord = courseRecords.find(courseRecord => courseRecord.name === courseName)
        if (courseRecord === undefined)
            continue;

        if (courseRecord.status !== CompletionStatus.COMPLETE)
            continue;
        
        let year = courseRecord.yearTaken;

        // Check if year exists in obj, if not add it as a new key
        if (!(year in courseMarksObject)) {
            courseMarksObject[year] = {
                totalMarks: 0.0,
                numberOfCourses: 0
            };
        }

        courseMarksObject[year].totalMarks += courseRecord.mark;
        courseMarksObject[year].numberOfCourses += 1;
    }

    for (const year in courseMarksObject) {
        if (!(year in courseAvgObject)) {
            courseAvgObject[year] = 0.0;
        }

        courseAvgObject[year] = courseMarksObject[year].totalMarks / courseMarksObject[year].numberOfCourses;
    }
        
    return courseAvgObject 
}

export { CompletionStatus, CourseRecords, averageSomeCoursesPerYear };
