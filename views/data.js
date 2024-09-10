function loadDataFiles() {
    const obj = { files: [] };
    for (let i = 0; i < 25; i++) {
        let color = i % 7 === 0 ? '#70ad47' : (i % 13 === 0 ? '#fcd00e' : '#c0c0c0');
        const check = [1, 4, 5, 7, 8].indexOf(i) >= 0 ? '<i class="fa fa-check-square-o color-current"></i>' : '<i class="fa fa-square-o"></i>';
        const display = [1, 4, 5, 7, 8].indexOf(i) >= 0 ? '' : 'none';
        const image = `<img src="./assets/data-file-${i === 4 ? 5 : (i === 7 ? 7 : 6)}.png" style="width:350px;height:250px;padding-top:20px;" />`;
        const image2 = `<img src="./assets/data-file-${i === 4 ? 5 : (i === 7 ? 7 : 6)}.png" style="width:250px;height:250px;padding-top:20px;" />`;
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
        document.getElementById(`data-file-tile-${v.name}`).style.display = v.display;
        document.getElementById(`data-file-tile-${v.name}-2`).style.display = v.display;
    })
}
function click_data_file_row(elem) {
    if (elem.children[0].classList.contains('fa-square-o')) {
        elem.children[0].classList.replace('fa-square-o', 'fa-check-square-o');
        elem.children[0].classList.add('color-current');
        elem.parentElement.classList.add('table-row-selected');
    } else {
        elem.children[0].classList.replace('fa-check-square-o', 'fa-square-o');
        elem.children[0].classList.remove('color-current');
        elem.parentElement.classList.remove('table-row-selected');
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