export const classTypeOptions =
{
  title: {
    text: "Course Distribution Among Majors"
  },
}

export const gradeOptions = {
  scales:
  {
    yAxes:
    [
      {
        gridLines: {
          drawOnChartArea: false,
          lineWidth: 4,
          drawTicks: false,
        },
        ticks: {
          padding: 10,
        }
      }
    ],
    xAxes:
    [
      {
        gridLines: {
          drawOnChartArea: false,
          lineWidth: 4,
        },
        ticks: {
          beginAtZero: true,
          padding: 5,
        },
      }
    ],
  },
}

export const gpaOptions = {
  title: {
    text: "GPA Over Time"
  }
}
