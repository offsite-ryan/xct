var optionsHeatmap = {
    series: [
        {
            data: [
                {
                    x: 'New Delhi',
                    y: 218
                },
                {
                    x: 'Kolkata',
                    y: 149
                },
                {
                    x: 'Mumbai',
                    y: 184
                },
                {
                    x: 'Ahmedabad',
                    y: 55
                },
                {
                    x: 'Bangaluru',
                    y: 84
                },
                // {
                //     x: 'Pune',
                //     y: 31
                // },
                // {
                //     x: 'Chennai',
                //     y: 70
                // },
                // {
                //     x: 'Jaipur',
                //     y: 30
                // },
                // {
                //     x: 'Surat',
                //     y: 44
                // },
                // {
                //     x: 'Hyderabad',
                //     y: 68
                // },
                // {
                //     x: 'Lucknow',
                //     y: 28
                // },
                // {
                //     x: 'Indore',
                //     y: 19
                // },
                // {
                //     x: 'Kanpur',
                //     y: 29
                // }
            ]
        }
    ],
    legend: {
        show: false
    },
    chart: {
        height: 75,
        type: 'treemap',
        sparkline: {
            enabled: true
        },
        animations: {
            enabled: false,
        },
    },
    theme: {
        mode: 'dark'
    },
    // plotOptions: {
    //     heatmap: {
    //         // useFillColorAsStroke: true,
    //     }
    // },
    tooltip: {
        enabled: false,
    },
    grid: {
        show: true,
        borderColor: '#000',
    },
    title: {
        text: '',
        align: 'center'
    },
    colors: [
        '#70AD47',
        '#fcd00e',
        '#3d3d3d',
        // '#888888',
        '#FFF',
        '#ff0000',
    ],
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false
        }
    }
};
