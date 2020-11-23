
export const gpaData = {
    labels: ['Spring 2017', 'Summer 2017', 'Fall 2017', 'Spring 2018', 'Fall 2018', 'Spring 2019', 'Fall 2019'],
    datasets: [
      {
        label: 'My GPA 2017-2019',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [3.45, 3.67, 3.42, 3.92, 4.00, 3.67, 3.90],
      }
    ]
  }
  
  export const gradeData = {
    labels: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-'],
    datasets: [
      {
        label: 'Grades',
        data: [8, 10, 4, 0, 3, 0, 1, 1, 0],
        borderWidth: 1,
        backgroundColor: [
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
        ],
        borderColor: [
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
          'rgba(8,153,125)',
        ]
      }
    ]
  }
  
  
  
  export const classTypeData = {
    labels: ['Computer Science', 'Information Technology', 'Accounting', 'Misc'],
    datasets: [
      {
        label: 'Courses',
        data: [5, 18, 2, 2],
        backgroundColor: [
          'rgba(240,60,85)',
          'rgba(40,161,137)',
          'rgba(191,239,60)',
          'rgba(252,138,63)',
        ],
        borderColor: [
          'rgba(172,5,28)',
          'rgba(4,116,94)',
          'rgba(127,171,5)',
          'rgba(181,75,6)',
        ],
      }
    ]
  }
  