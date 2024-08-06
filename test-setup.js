function selectTestEditorRow(e, i) {
    const isSelected = document.getElementById(`test-editor-row-${i}`).classList.contains('card-menu-option-selected');
    for (let x = 1; x < 6; x++) {
        document.getElementById(`test-editor-row-${x}`).classList.remove('card-menu-option-selected');
    }
    if (!isSelected) {
        document.getElementById(`test-editor-row-${i}`).classList.add('card-menu-option-selected');
    }
}

function toggleTestEditorRowDetail(id) {
    // elem = document.getElementById(`${elem.id}-detail`);
    // elem.style.display = elem.classList.contains('fa-caret-down') ? elem.classList.replace('fa-caret-down', 'fa-caret-up') : elem.classList.replace('fa-caret-up', 'fa-caret-down');

    let elem = document.getElementById(`${id}-detail`);
    elem.style.display = elem.style.display === 'none' ? 'none' : 'none';
    elem.style.borderBottom = elem.style.display === 'none' ? '0px' : '0px';

    // let elemIcon = document.getElementById(`${id}-detail-icon`);
    // const isShown = elemIcon.classList.contains('fa-caret-left');
    // elemIcon.style.display = isShown ? elemIcon.classList.replace('fa-caret-left', 'fa-caret-right') : elemIcon.classList.replace('fa-caret-right', 'fa-caret-left');

    // elem = document.getElementById('test-3-table')
    // elem.style.width = isShown ? '75%' : '100%';

    // elem = document.getElementById('test-3-sidebar')
    // elem.style.display = isShown ? '' : 'none';
    // elem.style.width = '22%';
}

function testEditorTableClick(e, table) {
    console.log(e, table);
}

function toggleTestRowDetail(id) {
    let elem = document.getElementById(`${id}-detail`);
    elem.style.display = elem.style.display === 'none' ? '' : 'none';

}

function onKeyDown(event) {
    if (event.code !== 'Delete' && event.code !== 'Backspace' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight') {
        if (event.target.innerText.length > 25) {
            event.preventDefault();
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

// const TEST_1 = {
//     steps: [
//         {name: 'CC/CV', indent: '0px', description: 'C/2 Charge', mode:'CC', setpoint:'C/2'}
//     ]
// }

const WAIT = '#f5c80a'
const CC_DISCHARGE = '#41abde';
const CV_DISCHARGE = '#386c85';
const CC_CHARGE = '#28c31e';
const CV_CHARGE = '#2b7926';
const REST = '#474747';
const NOTIFY = '#9c27b0';
const LOOP = 'blue';

function viewTest(index) {
    window.location.hash = `configuration-test-${index}`;
    document.getElementById('table-tests-recent').style.display = 'none';
    document.getElementById(`test-view-${index}`).style.display = 'block';
    // document.getElementById('test-save-cancel').style.display = 'block';

    const obj = {
        steps: [
            {
                indent: 0,
                color: WAIT,
                name: 'Wait',
                description: 'Wait for Chamber Temp',
                setpoint: '',
                end_condition: 'CHAMBER_1_TEMP >= 30 °C',
                step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123',
                estimated_duration: '<span class="color-zero">3h 30m</span>',
                step_safety_limits: '',
                log_rate: ''
            },
            {
                indent: 0,
                color: CC_CHARGE,
                name: 'CC Charge',
                description: 'Charge C/5',
                setpoint: 'C/5',
                end_condition: '<span class="color-zero">V > MAX_V * 0.9</span>',
                step_safety_limits: 'POUCH_CENTER > 30 °C',
                estimated_duration: '<span class="color-zero">5h</span>',
                log_rate: '<span class="color-zero">&Delta; t = 10s</span>'
            },
            {
                indent: 0,
                color: CV_CHARGE,
                name: 'CV Charge',
                description: 'Charge CV',
                setpoint: 'MAX_V',
                end_condition: '<span class="color-zero">I < 100 mA</span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero">1h</span>',
                log_rate: '<span class="color-zero">&Delta; t = 10s</span>'
            },
            {
                indent: 0,
                color: REST,
                name: "Rest",
                description: '',
                setpoint: '',
                end_condition: '<span class="_color-zero">t > 30m</span>',
                step_safety_limits: '',
                estimated_duration: '<span class="_color-zero">30m</span>',
                log_rate: '<span class="color-zero"></span>'
            },
            {
                indent: 0,
                color: LOOP,
                name: 'Loop',
                description: '',
                setpoint: '',
                end_condition: '<span class="color-zero"></span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero"></span>',
                log_rate: '<span class="color-zero"></span>'
            },
            {
                indent: 1,
                color: CC_DISCHARGE,
                name: 'CC Discharge',
                description: 'Discharge C/2',
                setpoint: '-C/2',
                end_condition: '<span class="color-zero">V <= MIN_V</span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero">4h</span>',
                log_rate: '<span class="color-zero">Δ V = 0.1</span>'
            },
            {
                indent: 1,
                color: REST,
                name: 'Rest',
                description: '',
                setpoint: '',
                end_condition: '<span class="_color-zero">t > 30m</span>',
                step_safety_limits: '',
                estimated_duration: '<span class="_color-zero">30m</span>',
                log_rate: '<span class="color-zero"></span>'
            },
            {
                indent: 1,
                color: CC_CHARGE,
                name: 'CC Charge',
                description: 'Charge C/2',
                setpoint: '+C/2',
                end_condition: '<span class="color-zero">V > MAX_V * 0.9</span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero">3h 30m</span>',
                log_rate: '<span class="color-zero">&Delta; t = 10s</span>'
            },
            {
                indent: 1,
                color: CV_CHARGE,
                name: 'CV Charge',
                description: 'Charge CV',
                setpoint: 'MAX_V',
                end_condition: '<span class="color-zero">I < 100 mA</span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero">1h</span>',
                log_rate: '<span class="color-zero">&Delta; t = 10s</span>'
            },
            {
                indent: 1,
                color: REST,
                name: 'Rest',
                description: '',
                setpoint: '',
                end_condition: '<span class="_color-zero">t > 30m</span>',
                step_safety_limits: '',
                estimated_duration: '<span class="_color-zero">30m</span>',
                log_rate: '<span class="color-zero"></span>'
            },
            {
                indent: 0,
                color: LOOP,
                name: 'Loop - End',
                description: '',
                setpoint: '',
                end_condition: 'LOOP_COUNT > 50',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero"></span>',
                log_rate: '<span class="color-zero"></span>'
            },
            {
                indent: 0,
                color: CC_DISCHARGE,
                name: 'CC Discharge',
                description: 'Storage Prep',
                setpoint: '-C/5',
                end_condition: '<span class="color-zero">V <= MAX_V * 0.30</span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero">4h</span>',
                log_rate: '<span class="color-zero"></span>'
            },
            {
                indent: 0,
                color: NOTIFY,
                name: 'NOTIFY',
                description: 'Test Complete',
                setpoint: '',
                end_condition: '<span class="color-zero"></span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero"></span>',
                log_rate: '<span class="color-zero"></span>'
            },
            // { index: 10, indent: 0, color: 'orange', name: 'Wait', description: 'Wait for Chamber Temp', setpoint: 'CHAMBER_TEMP >= 30 °C', end_condition: '<span class="color-zero">V > MAX_V * 0.9</span>', step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123', log_rate: '<span class="color-zero">&Delta; t = 10s</span>', estimated_duration: '<span class="color-zero">3h 30m</span>', step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123', log_rate: '<span class="color-zero">&Delta; t = 10s</span>' },
            // // { index: 10, colspan: '6' },
            // { index: 11, indent: 0, color: '#17d305', name: 'NAME 2', description: 'DESCRIPTION', setpoint: '', end_condition: '', step_safety_limits: '', log_rate: '', estimated_duration: '' },
        ]
    }
    obj.steps.forEach((v, i) => {
        v.index = i;
        v.name = v.name.toUpperCase();
    });
    w3.displayObject("test-6-steps", obj);


    const table = document.getElementById(`test-6-steps`);
    let insertAt = 2;
    obj.steps.forEach((v) => {
        document.getElementById(`test-6-step-row-${v.index}-indicator`).style.borderLeft = `10px solid ${v.color}`;
        document.getElementById(`test-6-step-row-${v.index}-indent`).style.paddingLeft = `${v.indent * 30}px`;

        const row = table.insertRow(insertAt);
        row.id = `test-6-step-row-${v.index}-detail`;
        row.style.display = 'none';
        let cell = row.insertCell(0);
        cell.innerHTML = `&nbsp;`;
        cell = row.insertCell(1);
        cell.colSpan = '6';
        cell.innerHTML = `<div class="_color-font"></span> <span contentEditable="true" placeholder="Add Comment..."></div>`;
        insertAt += 2;
        if (v.name === 'CV') {
            document.getElementById(`test-6-step-row-${v.index}`).style.borderTop = '';
        }
        if (v.name.startsWith('Loop')) {
            document.getElementById(`test-6-step-row-${v.index}-icon`).classList.replace('fa-ellipsis-v', 'fa-minus-square-o');
        }
        if (['LOOP - END', 'REST', 'WAIT'].indexOf(v.name) >= 0) {
            document.getElementById(`test-6-step-row-${v.index}-icon`).style.display = 'none';
        }

    });
    renderTest('test-6-canvas', obj.steps);
}

function closeTest() {
    document.getElementById('table-tests-recent').style.display = 'block';
    document.getElementById('test-view-1').style.display = 'none';
    document.getElementById('test-view-2').style.display = 'none';
    document.getElementById('test-view-3').style.display = 'none';
    document.getElementById('test-view-4').style.display = 'none';
    document.getElementById('test-view-5').style.display = 'none';
    document.getElementById('test-view-6').style.display = 'none';
    window.location.hash = 'configuration';
    // document.getElementById('test-save-cancel').style.display = 'none';
}

function collapseRowDetail(index) {
    if (index === 0) {
        const elem = document.getElementById('test-2-step-row-0-detail');
        const isShown = elem.style.display !== 'none';
        if (isShown) {
            // document.getElementById('test-2-step-row-0').style.display = 'none';
            document.getElementById('test-2-step-row-0-detail').style.display = 'none';
        } else {
            document.getElementById('test-2-step-row-0-detail').style.display = '';
        }
    } else if (index === 1) {
        const elem = document.getElementById('test-2-step-row-1-detail');
        const isShown = elem.style.display !== 'none';
        if (isShown) {
            // document.getElementById('test-2-step-row-0').style.display = 'none';
            document.getElementById('test-2-step-row-1-detail').style.display = 'none';
        } else {
            document.getElementById('test-2-step-row-1-detail').style.display = '';
        }
    } else if (index === 2) {
        const elem = document.getElementById('test-2-step-row-2-detail');
        const isShown = elem.style.display !== 'none';
        if (isShown) {
            // document.getElementById('test-2-step-row-0').style.display = 'none';
            document.getElementById('test-2-step-row-2-detail').style.display = 'none';
        } else {
            document.getElementById('test-2-step-row-2-detail').style.display = '';
        }
    } else if (index === 5) {
        const elem = document.getElementById('test-2-step-row-1-icon');
        const isShown = elem.classList.contains('fa-caret-up');
        if (isShown) {
            document.getElementById('test-2-step-row-1-icon').classList.replace('fa-caret-up', 'fa-caret-down');
            document.getElementById('test-2-step-row-2').style.display = 'none';
            document.getElementById('test-2-step-row-2-detail').style.display = 'none';
            document.getElementById('test-2-step-row-3').style.display = 'none';
            // document.getElementById('test-2-step-row-3-detail').style.display = 'none';
            document.getElementById('test-2-step-row-4').style.display = 'none';
        } else {
            document.getElementById('test-2-step-row-1-icon').classList.replace('fa-caret-down', 'fa-caret-up');
            document.getElementById('test-2-step-row-2').style.display = '';
            document.getElementById('test-2-step-row-3').style.display = '';
            document.getElementById('test-2-step-row-4').style.display = '';
        }
    } else if (index === 3) {
        const elem = document.getElementById('test-3-step-row-6-icon');
        const isShown = elem.classList.contains('fa-caret-up');
        if (isShown) {
            document.getElementById('test-3-step-row-6-icon').classList.replace('fa-caret-up', 'fa-caret-down');
            document.getElementById('test-3-step-row-7').style.display = 'none';
            document.getElementById('test-3-step-row-8').style.display = 'none';
        } else {
            document.getElementById('test-3-step-row-6-icon').classList.replace('fa-caret-down', 'fa-caret-up');
            document.getElementById('test-3-step-row-7').style.display = '';
            document.getElementById('test-3-step-row-8').style.display = '';
        }
    }
}

function renderTest(id, testSteps) {
    const canvas = document.getElementById(id);
    canvas.width = canvas.parentElement.parentElement.clientWidth;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const getX = (pct) => {
        return width * (pct / 100);
    }
    const getY = (pct) => {
        return height * (pct / 100);
    }
    const getW = (pct) => {
        return (width * (pct / 100));
    }

    const steps = [
        { label: 'WAIT', pct: 14.9, color: WAIT, endY: 50 },
        { label: 'CC', pct: 21.3, color: CC_CHARGE, endY: 22 }, // charge cc
        { label: 'CV', pct: 4.3, color: CV_CHARGE, endY: 20 }, // charge cv
        { label: 'REST', pct: 2.1, color: REST, endY: 20 },
        { label: 'CC', pct: 17, color: CC_DISCHARGE, endY: 80 }, // discharge
        { label: 'REST', pct: 2.1, color: REST, endY: 80 },
        { label: 'CC', pct: 14.9, color: CC_CHARGE, endY: 22 },
        { label: 'CV', pct: 4.3, color: CV_CHARGE, endY: 20 },
        { label: 'REST', pct: 2.1, color: REST, endY: 20 },
        { label: 'CC', pct: 16.7, color: CC_DISCHARGE, endY: 60 },
        { label: '', pct: 0.3, color: NOTIFY, endY: 60 },
    ];
    // background
    ctx.beginPath()
    let start = 0;
    steps.forEach((v) => {
        ctx.fillStyle = v.color;
        ctx.fillRect(getX(start), 0, getW(v.pct), height);
        start += v.pct;
    });
    ctx.stroke();

    // labels
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    start = 1;
    steps.forEach((v) => {
        ctx.fillText(v.label === 'REST' ? '' : v.label, getX(start), 20);
        start += v.pct;
    });
    ctx.stroke();

    // soc line
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    start = 0;
    ctx.lineWidth = 4;
    ctx.moveTo(getX(0), getY(50));
    steps.forEach((v) => {
        ctx.lineTo(getW(start + v.pct), getY(v.endY));
        start += v.pct;
    });
    ctx.stroke();

    // loop
    const loopStart = 4;
    const loopEnd = 9
    start = steps.slice(0, loopStart).map((v) => v.pct).reduce((p, c) => p + c);
    let end = steps.slice(loopStart, loopEnd).map((v) => v.pct).reduce((p, c) => p + c);
    console.log(start, end);


    ctx.strokeStyle = "black";
    const h = 89;
    ctx.beginPath();
    ctx.moveTo(getX(start), getY(h));
    ctx.lineTo(getW(start + end), getY(h));

    ctx.moveTo(getX(start), getY(h));
    ctx.lineTo(getX(start + 1), getY(h - 3));
    ctx.moveTo(getX(start), getY(h));
    ctx.lineTo(getX(start + 1), getY(h + 3));

    ctx.moveTo(getX(start + end), getY(h));
    ctx.lineTo(getX(start + end - 1), getY(h - 3));
    ctx.moveTo(getX(start + end), getY(h));
    ctx.lineTo(getX(start + end - 1), getY(h + 3));

    ctx.fillStyle = "black";
    ctx.fillText("50 times", getX(start + ((end) / 2)) - 50, getY(98.5));
    ctx.stroke();
}