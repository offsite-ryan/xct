function loadDataFiles() {
    const count = 5000
    const simu_data = new data();
    const file_data = {
        v: simu_data.getData('v', 1, count),  // voltage
        i: simu_data.getData('i', 1, count),  // current
        t: simu_data.getData('t', 1, count),  // temperature
        // p: simu_data.getData('p', 0, count),  // power
        // rt: simu_data.getData('rt', 0, count), // runtime
    }
    const obj = { files: [] };

    const optionsDataFiles = JSON.parse(JSON.stringify(card_chart_options));
    optionsDataFiles.chart.type = 'line';
    optionsDataFiles.chart.height = 300;
    optionsDataFiles.chart.sparkline.enabled = false;
    optionsDataFiles.legend = { fontSize: '24px', labels: { useSeriesColors: true } };
    optionsDataFiles.stroke.width = [2];
    delete optionsDataFiles.fill;
    optionsDataFiles.tooltip.custom = card_chart_options.tooltip.custom;
    optionsDataFiles.series = [];
    for (let x = 1; x <= 5; x++) {
        const factor = 25; // x === 4 ?  75 : 25;
        optionsDataFiles.series.push({ name: x.toString(), data: simu_data.getData('v', x === 4 ? (x * 5) + 15 : x * 3, count, factor) })
    }
    optionsDataFiles.yaxis[0].title.text = 'Voltage';
    optionsDataFiles.yaxis[0].title.style.fontSize = '20px';
    chartDataFiles = new ApexCharts(document.getElementById(`data-result-chart`), optionsDataFiles);
    chartDataFiles.render();

    
    const optionsDataFilesI = JSON.parse(JSON.stringify(card_chart_options));
    optionsDataFilesI.chart.type = 'line';
    optionsDataFilesI.chart.height = 300;
    optionsDataFilesI.chart.sparkline.enabled = false;
    optionsDataFilesI.legend = { fontSize: '24px', labels: { useSeriesColors: true } };
    optionsDataFilesI.stroke.width = [2];
    delete optionsDataFilesI.fill;
    optionsDataFilesI.tooltip.custom = card_chart_options.tooltip.custom;
    optionsDataFilesI.series = [];
    for (let x = 1; x <= 5; x++) {
        const factor = 25; // x === 4 ?  75 : 25;
        optionsDataFilesI.series.push({ name: x.toString(), data: simu_data.getData('c', x === 4 ? (x * 5) + 15 : x * 3, count, factor) })
    }
    optionsDataFilesI.yaxis[0].title.text = 'Capacity';
    optionsDataFilesI.yaxis[0].title.style.fontSize = '20px';
    // optionsDataFilesI.xaxis.title = { text: 'Time', style: { color: '#FFF', fontSize: '20px'} };
    const chartDataFilesI = new ApexCharts(document.getElementById(`data-result-chart-i`), optionsDataFilesI);
    chartDataFilesI.render();

    const optionsDataFilesScatter = JSON.parse(JSON.stringify(card_chart_options));
    optionsDataFilesScatter.chart.type = 'scatter';
    optionsDataFilesScatter.chart.height = 300;
    optionsDataFilesScatter.chart.sparkline.enabled = false;
    optionsDataFilesScatter.legend = { fontSize: '24px', labels: { useSeriesColors: true } };
    optionsDataFilesScatter.stroke.width = [2];
    delete optionsDataFilesScatter.fill;
    delete optionsDataFilesScatter.xaxis.type;
    // delete optionsDataFilesScatter.tooltip.custom;
    optionsDataFilesScatter.tooltip.custom = card_chart_options.tooltip.custom;
    optionsDataFilesScatter.tooltip.enabled = true;
    optionsDataFilesScatter.series = [];
    for (let x = 1; x <= 5; x++) {
        const factor = 25; // x === 4 ?  75 : 25;
        const data_1 = simu_data.getData('v', x === 4 ? (x * 5) + 15 : x * 3, count, factor);
        const data_2 = simu_data.getData('t', x === 4 ? (x * 5) + 15 : x * 3, count, factor);
        const series_data = [];
        data_1.forEach((v, i) => {
            series_data.push([data_2[i], v]);
        })
        optionsDataFilesScatter.series.push({ name: x.toString(), data: series_data })
    }
    optionsDataFilesScatter.yaxis[0].title.text = 'Voltage';
    optionsDataFilesScatter.yaxis[0].title.style.fontSize = '20px';
    optionsDataFilesScatter.xaxis.title = { text: 'Temperature', style: { color: '#FFF', fontSize: '20px'} };
    chartDataFilesScatter = new ApexCharts(document.getElementById(`data-result-chart-scatter`), optionsDataFilesScatter);
    chartDataFilesScatter.render();


    for (let i = 0; i < 25; i++) {
        let color = i % 7 === 0 ? '#70ad47' : (i % 13 === 0 ? '#fcd00e' : '#c0c0c0');
        const check = '<i class="fa fa-square-o"></i>'; // [1, 4, 5, 7, 8].indexOf(i) >= 0 ? '<i class="fa fa-check-square-o color-current"></i>' : '<i class="fa fa-square-o"></i>';
        const display = 'none'; // [1, 4, 5, 7, 8].indexOf(i) >= 0 ? '' : 'none';
        const image = `<img src="./assets/data-file-${i === 4 ? 5 : (i === 7 ? 7 : 6)}.png" style="width:350px;height:250px;padding-top:20px;" />`;
        const image2 = `<img src="./assets/data-file-${i === 4 ? 5 : (i === 7 ? 7 : 6)}.png" style="width:300px;height:250px;padding:20px;" />`;
        obj.files.push({
            name: `TXW6323-0${i}_106`,
            project: 'AX345',
            test_procedure: '19d C/2 Charge - Discharge (6)',
            battery_type: 'TXW-MI',
            datapoints: '250',
            channel: Math.floor((24 * Math.random()) + 1),
            chamber: `10${Math.floor((4 * Math.random()) + 1)}`,
            datatime: new Date().toLocaleString(),
            badge: `<span class="w3-right" style="background-color:${color};height:20px;width:20px;border-radius:10px;padding:3px 10px 3px 10px;">&nbsp;</span>`,
            check,
            display,
            image,
            image2,
        })
    }
    w3.displayObject("data-files", obj);
    obj.files.forEach((v) => {
        // document.getElementById(`data-file-tile-${v.name}`).style.display = v.display;
        document.getElementById(`data-file-tile-${v.name}-2`).style.display = v.display;
    })
    // document.getElementById('modal-data-files-compare').style.display = 'block'
}
function click_data_file_row(elem) {
    const index = elem.parentElement.rowIndex - 1;
    const name = elem.parentElement.children[2].innerText;
    // console.log(index, name);
    if (elem.children[0].classList.contains('fa-square-o')) {
        elem.children[0].classList.replace('fa-square-o', 'fa-check-square-o');
        elem.children[0].classList.add('color-current');
        elem.parentElement.classList.add('table-row-selected');
        document.getElementById(`data-file-tile-${name}-2`).style.display = '';
    } else {
        elem.children[0].classList.replace('fa-check-square-o', 'fa-square-o');
        elem.children[0].classList.remove('color-current');
        elem.parentElement.classList.remove('table-row-selected');
        document.getElementById(`data-file-tile-${name}-2`).style.display = 'none';
    }
}
function click_data_file_card(elem) {
    if (elem.classList.contains('fa-square-o')) {
        elem.classList.replace('fa-square-o', 'fa-check-square-o');
        elem.classList.add('color-current');
    } else {
        elem.classList.replace('fa-check-square-o', 'fa-square-o');
        elem.classList.remove('color-current');
    }
}
function click_data_files_view(option) {
    console.log(option);
    ['table', 'tiles', 'compare'].forEach((v) => {
        document.getElementById(`data-files-${v}`).style.display = 'none';
    })
    document.getElementById(`data-files-${option}`).style.display = option === 'table' ? '' : 'flex';
}
