const ReportChart = {
  chart: {
    type: 'areaspline',
    backgroundColor: '#2b2d3c',
    margin: [0, 0, 0, 0]
  },
  title: {
    text: null
  },
  xAxis: {
    categories: [
      'MON',
      'TUE',
      'WED',
      'THU',
      'FRI',
      'SAT',
      'SUN'
    ],
    labels: {
      y: -10,
      style: {
        color: "#9ca1b2",
        fontSize: "16px",
        fontWeight: "400"

      }
    },
    gridLineColor: '#4d5466',
    gridZIndex: 4,
    tickWidth: 0,
    gridLineWidth: 1,
    lineColor: "#3a3d4c",
    crosshair:{
      zIndex: 4
    }
  },

  yAxis: {
    gridLineWidth: 0,
    tickWidth: 0,
    description: null,
    title: '',
    max: 14,
    min: 0,
    tickInterval: 3,
    labels: {
      enabled: false
    }

  },
  plotOptions: {
    areaspline: {
      marker: {
        enabled: false
      },
    },
    series: {
      lineWidth: 4,
      fillColor: {
        linearGradient: [0, 0, 0, 450],
        stops: [
          [0, '#284c72'],
          [1, '#282837']
        ]
      },
      color: '#2196f3',
      states: {
        hover: {
          color: "#2196f3",
        }
      },
      marker: {
        states: {
          hover: {
            fillColor: '#fff',
            lineColor: '#2196f3',
            lineWidth: 5,
            radius: 9
          }
        }
      }
    }
  },

  series: [{
    data: []
  }],
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '<b>{point.y}</b>',
    shared: true,
    crosshairs: true
  },
};

export default ReportChart;