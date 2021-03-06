
Highcharts.chart('container', {
    credits: {
        enabled: false
    },
    chart: {
        type: 'column',
        backgroundColor: "rgb(230, 243, 230)"
    },
    title: {
        text: '2016 Gen. Election: College National Average vs. UVM'
    },
    xAxis: {
        categories: [
            'Voting Rate of Registered Students', 'Voting Rate of All Students', 'Voting Rate of Undergrads'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: '% of Students'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [
        {
            name: 'National',
            data: [
                68, 50.4, 47.2
            ],
            color: "gold"

        }, {
            name: 'UVM',
            data: [
                62.7, 46.2, 42.8
            ],
            color: "#007155"
        }
    ]
});