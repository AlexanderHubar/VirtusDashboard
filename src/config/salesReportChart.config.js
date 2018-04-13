const ReportChart = {
  chart: {
    type: 'column',
    height: '300',
    backgroundColor: '#2f3242'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5', '6',
      '7', '8', '9', '10', '11', '12'],
    labels: {
      style: {
        color: "#9ca1b2",
        fontSize: "16px",
        fontWeight: "400"
      }
    },
    tickWidth: 0,
    gridLineWidth: 0,
    lineColor: "#505464"
  },
  yAxis: {
    gridLineColor: "#505464",

    tickWidth: 0,
    description: null,
    title: '',
    max: 230,
    min: 10,
    tickInterval: 40,
    labels: {
      enabled: false
    }

  },
  plotOptions: {
    column: {
      borderColor: '#2f3242'
    },
    spline: {
      marker: {
        enabled: false
      },
    },
    series: {
      color: '#505464',
      states: {
        hover: {
          color: "#2196f3"
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
    shared: true

  },
};

export default ReportChart;