const TopPieChart = {

  chart: {
    type: 'pie',
    height: '130',
    width:'130',
    backgroundColor: '#2b2d3c'
  },

  title: {
    text: '',
    verticalAlign: 'middle',
    style: {
      fontFamily: 'Montserrat',
      color: '#2196f3',
      fontSize:'22',
      fontWeight: '600'
    }
  },

  plotOptions: {
    pie: {
      rounded: true,
      startAngle: 0,
      borderColor: null,
      colors: ['#2196f3', '#4c4f5e'],
    }
  },

  series: [{
    innerSize: '90%',
    dataLabels: {
      enabled: false
    }
  }],
  tooltip: {
    headerFormat: '',
    pointFormat: '<b>{point.y}</b>'
  },

  legend: {
    enabled: false
  },

  credits: {
    enabled: false
  }
};

export default TopPieChart;