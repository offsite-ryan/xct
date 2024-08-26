const optionsChamber = {
    series: [{
        data: [0, -40, 0, 40, 0]
    },
        // {
        //     type: 'line',
        //     data: [23, -40, 0, 40, 0, -40, 0, 40, 0, -40, 0, 40, 0]
        // }
    ],
    chart: {
        type: 'area',
        height: 200,
        sparkline: {
            // enabled: true
        },
        toolbar: {
            show: false,
            tools: {
                // download: false,
                zoomin: false,
                zoomout: false,
            }
        },
    },
    tooltip: {
        enabled: false,
    },
    stroke: {
        curve: 'stepline',
    },
    colors: ['#19c1daa8'],
    dataLabels: {
        enabled: false
    },
    // title: {
    //     text: 'Stepline Chart',
    //     align: 'left'
    // },
    markers: {
        hover: {
            sizeOffset: 4
        }
    },
    grid: {
        show: true,
        borderColor: '#494949',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [-40, 0, 40]
        },
    },
    annotations: {
        xaxis: [{
            x: 275,
            x2: 276,
            strokeDashArray: 0,
            opacity: 1,
            borderColor: '#775DD0',
            // label: {
            //     borderColor: '#775DD0',
            //     position: 'top',
            //     orientation: 'verticle',
            //     offsetY: -8,
            //     style: {
            //         fontSize: '16px',
            //         color: '#fff',
            //         background: '#775DD0',
            //     },
            //     text: 'Now',
            // }
        }
        ]
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: false,
            style: {
                colors: '#3d3d3d'
            }
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        // title:{
        //     text: 'Last 24h',
        //     style: {
        //         color: '#FFF'
        //     }
        // }
        // axisTicks: {
        //     show: true,
        // }
        // categories: [-24, '', '', '', '', '', '', '', '', '', '', '', 'Now']
        // categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        categories: [0, 1, 2, 3, 4, 5]
    },
    yaxis: [{
        show: true,
        labels: {
            show: true,
            minWidth: 30,
            style: {
                colors: '#929292',
                fontFamily: 'Verdana',
                fontSize: '15px',
            }
        },
        tickAmount: 2,
        title: {
            text: '',
            style: {
                color: '#FFF',
                fontFamily: 'Verdana',
                fontSize: '15px',
                fontWeight: 500,
            }
        }
        // min: undefined,
        // max: undefined,
        // forceNiceScale: true,
        // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    }],
};