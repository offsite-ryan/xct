var card_chart_options = {
    series: [{
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        id: undefined,
        height: 100,
        type: 'area',
        sparkline: {
            enabled: true
        },
        animations: {
            enabled: false,
        },
        toolbar: {
            show: false,
            tools: {
                // download: false,
                zoomin: false,
                zoomout: false,
            }
        },
        zoom: {
            allowMouseWheelZoom: false,
        },
        // group: undefined,
        // events: {
        //     click: function (event, chartContext, opts) {
        //         // The last parameter opts contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
        //         const text = prompt('enter text', null);
        //         if (text) {
        //             chartContext.addPointAnnotation({
        //                 x: opts.dataPointIndex,
        //                 y: opts.config.series[opts.seriesIndex].data[opts.dataPointIndex],
        //                 label: {
        //                     text,
        //                     style: {
        //                         fontSize:'28px',
        //                     }
        //                 },
        //                 marker: {
        //                     size: 5
        //                 }
        //             })
        //         }
        //         console.log(event);
        //     },
        // },
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
            opacityFrom: 0.6,
            opacityTo: 0,
            // stops: [20, 100, 100, 100]
        },
    },
    // stroke: {
    //     width: [15]
    // },
    // theme: {
    //     mode: 'dark',
    // },
    // colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    // colors: ['#298bac'],
    // colors: ['#1599ac'],
    colors: ['#41aadc'],
    // colors: ['#adff2f50'],
    // colors: ['#adff2f82'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
        // curve: 'stepline'
    },
    xaxis: {
        type: 'numeric',
        labels: {
            style: {
                colors: '#FFF'
            }
        },
        // axisTicks: {
        //     show: true,
        // }
        // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: [{
        show: true,
        labels: {
            show: true,
            minWidth: 30,
            style: {
                colors: '#FFF'
            }
        },
        tickAmount: 4,
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
    tooltip: {
        enabled: false,
        marker: {
            show: false,
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            // alert(JSON.stringify({ series, seriesIndex, dataPointIndex, w },null,2));
            return '<div class="w3-padding color-font w3-large" style="background-color:black;">' +
                `<span><span class="color-current">X:</span> ${w.config.series[seriesIndex].data[dataPointIndex].x}</span>` +
                '<br/>' +
                `<span><span class="color-current">Y:</span> ${series[seriesIndex][dataPointIndex]}</span>` +
                '</div>'
        },
        x: {
            format: 'dd/MM/yy HH:mm'
        },
        // y: {
        //     formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
        //         return value ? value.toFixed(2) : null;
        //     }
        // }
    },
};
