import { CourseRecords, CompletionStatus, averageSomeCoursesPerYear } from './courses';

let courseRecords: CourseRecords[];

const initializeCourseRecords = () => {
    courseRecords = [
        {name: 'MT101', mark: 80.0, yearTaken: '2020', status: CompletionStatus.COMPLETE},
        {name: 'CS101', mark: 81.0, yearTaken: '2020', status: CompletionStatus.INCOMPLETE},
        {name: 'HS101', mark: 82.0, yearTaken: '2020', status: CompletionStatus.WITHDRAWAL},
        {name: 'PS101', mark: 83.0, yearTaken: '2020', status: CompletionStatus.COMPLETE},
        {name: 'PH101', mark: 84.0, yearTaken: '2020', status: CompletionStatus.COMPLETE},
        {name: 'CS201', mark: 85.0, yearTaken: '2021', status: CompletionStatus.COMPLETE},
        {name: 'HS201', mark: 89.0, yearTaken: '2021', status: CompletionStatus.COMPLETE}
    ];
}

beforeAll(() => {
    initializeCourseRecords();
});

test('average courses per year with none', () => {
    let courseNames: string[] = [];
    let averagesPerYear : any = averageSomeCoursesPerYear(courseRecords, courseNames);
    expect(Object.keys(averagesPerYear).length).toBe(0);
});

test('average courses per year with many one year', () => {
    let courseNames = ['MT101', 'CS101', 'HS101', 'PH101'];
    let averagesPerYear : any = averageSomeCoursesPerYear(courseRecords, courseNames);
    expect(Object.keys(averagesPerYear).length).toBe(1);
    expect(averagesPerYear['2020']).toBeCloseTo((80.0 + 84.0) / 2, 2);
});

test('average courses per year with no matching', () => {
    let courseNames = ['NOT'];
    let averagesPerYear : any = averageSomeCoursesPerYear(courseRecords, courseNames);
    expect(Object.keys(averagesPerYear).length).toBe(0);
});

test('average courses per year with mix', () => {
    let courseNames = ['MT101', 'CS101', 'HS101', 'PS101', 'PH101', 'NOT', 'CS201', 'HS201'];
    let averagesPerYear : any = averageSomeCoursesPerYear(courseRecords, courseNames);
    expect(Object.keys(averagesPerYear).length).toBe(2);
    expect(averagesPerYear['2020']).toBeCloseTo((80.0 + 83.0 + 84.0) / 3, 2);
    expect(averagesPerYear['2021']).toBeCloseTo((85.0 + 89.0) / 2, 2);
});
