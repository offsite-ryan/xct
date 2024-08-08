
const WAIT = '#f5c80a'
const CC_DISCHARGE = '#41abde';
const CV_DISCHARGE = '#386c85';
const CC_CHARGE = '#28c31e';
const CV_CHARGE = '#2b7926';
const REST = '#474747';
const NOTIFY = '#9c27b0';
const LOOP = 'blue';
const REPORT = '#795548';

// const WAIT = '#009688'
// const CC_DISCHARGE = '#41abde';
// const CV_DISCHARGE = '#386c85';
// const CC_CHARGE = '#3f51b5';
// const CV_CHARGE = '#8b9cff';
// // const CC_CHARGE = '#28c31e';
// // const CV_CHARGE = '#2b7926';
// const REST = '#808080';
// const NOTIFY = '#9c27b0';
// const LOOP = '#607d8b';
// const REPORT = '#795548';

function viewTest(index) {
    index = 0;
    if (index === 0) {
        window.location.hash = `configuration-test`;
        document.getElementById('table-tests-recent').style.display = 'none';
        document.getElementById(`test-view`).style.display = 'block';
    } else {
        window.location.hash = `configuration-test-${index}`;
        document.getElementById('table-tests-recent').style.display = 'none';
        document.getElementById(`test-view-${index}`).style.display = 'block';
        // document.getElementById('test-save-cancel').style.display = 'block';
    }
    // const obj = {
    //     steps: [
    //         {
    //             indent: 0,
    //             color: WAIT,
    //             name: 'Wait',
    //             description: 'Wait for Chamber Temp',
    //             setpoint: '',
    //             end_condition: 'CHAMBER_1_TEMP >= 30 °C',
    //             step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123',
    //             estimated_duration: '<span class="color-zero">3h 30m</span>',
    //             step_safety_limits: '',
    //             log_rate: ''
    //         },
    //         {
    //             indent: 0,
    //             color: CC_CHARGE,
    //             name: 'CC Charge',
    //             description: 'Charge C/5',
    //             setpoint: 'C/5',
    //             end_condition: '<span class="color-zero">V > MAX_V * 0.9</span>',
    //             step_safety_limits: 'POUCH_CENTER > 30 °C',
    //             estimated_duration: '<span class="color-zero">5h</span>',
    //             log_rate: '<span class="color-zero">&Delta; t = 10s</span>'
    //         },
    //         {
    //             indent: 0,
    //             color: CV_CHARGE,
    //             name: 'CV Charge',
    //             description: 'Charge CV',
    //             setpoint: 'MAX_V',
    //             end_condition: '<span class="color-zero">I < 100 mA</span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="color-zero">1h</span>',
    //             log_rate: '<span class="color-zero">&Delta; t = 10s</span>'
    //         },
    //         {
    //             indent: 0,
    //             color: REST,
    //             name: "Rest",
    //             description: '',
    //             setpoint: '',
    //             end_condition: '<span class="_color-zero">t > 30m</span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="_color-zero">30m</span>',
    //             log_rate: '<span class="color-zero"></span>'
    //         },
    //         {
    //             indent: 0,
    //             color: LOOP,
    //             name: 'Loop',
    //             description: '',
    //             setpoint: '',
    //             end_condition: '<span class="color-zero"></span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="color-zero"></span>',
    //             log_rate: '<span class="color-zero"></span>'
    //         },
    //         {
    //             indent: 1,
    //             color: CC_DISCHARGE,
    //             name: 'CC Discharge',
    //             description: 'Discharge C/2',
    //             setpoint: '-C/2',
    //             end_condition: '<span class="color-zero">V <= MIN_V</span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="color-zero">4h</span>',
    //             log_rate: '<span class="color-zero">Δ V = 0.1</span>'
    //         },
    //         {
    //             indent: 1,
    //             color: REST,
    //             name: 'Rest',
    //             description: '',
    //             setpoint: '',
    //             end_condition: '<span class="_color-zero">t > 30m</span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="_color-zero">30m</span>',
    //             log_rate: '<span class="color-zero"></span>'
    //         },
    //         {
    //             indent: 1,
    //             color: CC_CHARGE,
    //             name: 'CC Charge',
    //             description: 'Charge C/2',
    //             setpoint: '+C/2',
    //             end_condition: '<span class="color-zero">V > MAX_V * 0.9</span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="color-zero">3h 30m</span>',
    //             log_rate: '<span class="color-zero">&Delta; t = 10s</span>'
    //         },
    //         {
    //             indent: 1,
    //             color: CV_CHARGE,
    //             name: 'CV Charge',
    //             description: 'Charge CV',
    //             setpoint: 'MAX_V',
    //             end_condition: '<span class="color-zero">I < 100 mA</span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="color-zero">1h</span>',
    //             log_rate: '<span class="color-zero">&Delta; t = 10s</span>'
    //         },
    //         {
    //             indent: 1,
    //             color: REST,
    //             name: 'Rest',
    //             description: '',
    //             setpoint: '',
    //             end_condition: '<span class="_color-zero">t > 30m</span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="_color-zero">30m</span>',
    //             log_rate: '<span class="color-zero"></span>'
    //         },
    //         {
    //             indent: 0,
    //             color: LOOP,
    //             name: 'Loop - End',
    //             description: '',
    //             setpoint: '',
    //             end_condition: 'LOOP_COUNT > 50',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="color-zero"></span>',
    //             log_rate: '<span class="color-zero"></span>'
    //         },
    //         {
    //             indent: 0,
    //             color: CC_DISCHARGE,
    //             name: 'CC Discharge',
    //             description: 'Storage Prep',
    //             setpoint: '-C/5',
    //             end_condition: '<span class="color-zero">V <= MAX_V * 0.30</span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="color-zero">4h</span>',
    //             log_rate: '<span class="color-zero"></span>'
    //         },
    //         {
    //             indent: 0,
    //             color: NOTIFY,
    //             name: 'NOTIFY',
    //             description: 'Test Complete',
    //             setpoint: '',
    //             end_condition: '<span class="color-zero"></span>',
    //             step_safety_limits: '',
    //             estimated_duration: '<span class="color-zero"></span>',
    //             log_rate: '<span class="color-zero"></span>'
    //         },
    //         // { index: 10, indent: 0, color: 'orange', name: 'Wait', description: 'Wait for Chamber Temp', setpoint: 'CHAMBER_TEMP >= 30 °C', end_condition: '<span class="color-zero">V > MAX_V * 0.9</span>', step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123', log_rate: '<span class="color-zero">&Delta; t = 10s</span>', estimated_duration: '<span class="color-zero">3h 30m</span>', step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123', log_rate: '<span class="color-zero">&Delta; t = 10s</span>' },
    //         // // { index: 10, colspan: '6' },
    //         // { index: 11, indent: 0, color: '#17d305', name: 'NAME 2', description: 'DESCRIPTION', setpoint: '', end_condition: '', step_safety_limits: '', log_rate: '', estimated_duration: '' },
    //     ]
    // }
    test_definitions[index].steps.forEach((v, i) => {
        v.index = i;
        v.name = v.name.toUpperCase();
    });
    w3.displayObject("test-steps", test_definitions[index]);


    const table = document.getElementById(`test-steps`);
    let insertAt = 2;
    test_definitions[index].steps.forEach((v) => {
        document.getElementById(`test-step-row-${v.index}-indicator`).style.borderLeft = `10px solid ${v.color}`;
        document.getElementById(`test-step-row-${v.index}-indent`).style.paddingLeft = `${v.indent * 30}px`;

        const row = table.insertRow(insertAt);
        row.id = `test-step-row-${v.index}-detail`;
        row.style.display = 'none';
        let cell = row.insertCell(0);
        cell.innerHTML = `&nbsp;`;
        cell = row.insertCell(1);
        cell.colSpan = '6';
        cell.innerHTML = `<div class="_color-font"></span> <span contentEditable="true" placeholder="Add Comment..."></div>`;
        insertAt += 2;
        if (v.name === 'CV') {
            document.getElementById(`test-step-row-${v.index}`).style.borderTop = '';
        }
        if (v.name.startsWith('Loop')) {
            document.getElementById(`test-step-row-${v.index}-icon`).classList.replace('fa-ellipsis-v', 'fa-minus-square-o');
        }
        if (['LOOP - END', 'REST', 'WAIT'].indexOf(v.name) >= 0) {
            // document.getElementById(`test-step-row-${v.index}-icon`).style.display = 'none';
        }

    });
    renderTest('test-canvas', test_definitions[index].steps);
}

function renderTest(id, testSteps) {
    const canvas = document.getElementById(id);
    canvas.width = canvas.parentElement.parentElement.clientWidth;
    canvas.height = 150;
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

    const totalTime = testSteps.map((v) => v.duration).reduce((p, c) => p + c);
    const steps = [];
    let prevEndY = 50;
    testSteps.forEach((step) => {
        let endY = prevEndY;
        endY = step.name === 'CC CHARGE' ? 22 : endY;
        endY = step.name === 'CV CHARGE' ? 20 : endY;
        endY = step.name === 'CC DISCHARGE' ? 80 : endY;
        steps.push(
            {
                label: step.name.startsWith('LOOP') ? '' : step.name.split(' ')[0],
                pct: (step.duration / totalTime) * 100,
                color: step.color,
                endY,
            }
        )
        prevEndY = endY;
    })
    // const steps = [
    //     { label: 'WAIT', pct: 14.9, color: WAIT, endY: 50 },
    //     { label: 'CC', pct: 21.3, color: CC_CHARGE, endY: 22 }, // charge cc
    //     { label: 'CV', pct: 4.3, color: CV_CHARGE, endY: 20 }, // charge cv
    //     { label: 'REST', pct: 2.1, color: REST, endY: 20 },
    //     { label: 'CC', pct: 17, color: CC_DISCHARGE, endY: 80 }, // discharge
    //     { label: 'REST', pct: 2.1, color: REST, endY: 80 },
    //     { label: 'CC', pct: 14.9, color: CC_CHARGE, endY: 22 },
    //     { label: 'CV', pct: 4.3, color: CV_CHARGE, endY: 20 },
    //     { label: 'REST', pct: 2.1, color: REST, endY: 20 },
    //     { label: 'CC', pct: 16.7, color: CC_DISCHARGE, endY: 60 },
    //     { label: '', pct: 0.3, color: NOTIFY, endY: 60 },
    // ];

    // background
    ctx.beginPath()
    let start = 0;
    steps.forEach((v) => {
        // colored background
        ctx.fillStyle = v.color;
        ctx.fillRect(getX(start), 0, getW(v.pct), height);

        // outline
        ctx.fillStyle = 'black';
        ctx.rect(getX(start), 0, getW(v.pct), height);
        start += v.pct;
    });
    ctx.stroke();

    // labels
    ctx.beginPath();
    ctx.fillStyle = "black";
    // ctx.globalCompositeOperation = "xor";
    ctx.font = "20px Roboto";
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

function downloadTest() {
    downloadObjectAsJson(test_definitions[0], `${test_definitions[0].name} - ${new Date().toLocaleString()}`)
}
function downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function stepDelete() {
    const table = document.getElementById('test-steps');
    let index = null;
    var list = table.rows;
    let row = 0
    for (let item of list) {
        row++;
        if (item.classList.contains('table-row-selected')) {
            index = row;
        }
    }
    delete test_definitions[0].steps[(index / 2) - 1];

    const a = [];
    test_definitions[0].steps.forEach((v)=>{
        a.push(v);
    });
    test_definitions[0].steps = a;
    viewTest(0);
}
let test_definitions = [
    {
        name: '19d Charge / Discharge',
        last_modified: '07-Aug-2024',
        defaults: {
            safety_limits: [],
            log_point_conditions: [],
            end_conditions: [],
        },
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
                duration: 3.5,
                endY: 50,
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
                duration: 5,
                endY: 22,
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
                duration: 1,
                endY: 20,
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
                duration: 0.5,
                endY: 20,
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
                duration: 0,
                endY: 20,
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
                duration: 4,
                endY: 80,
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
                duration: 0.5,
                endY: 80,
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
                duration: 3.5,
                endY: 22,
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
                duration: 1,
                endY: 20,
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
                duration: 0.5,
                endY: 20,
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
                duration: 0,
                endY: 20,
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
                duration: 4,
                endY: 50,
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
                duration: 0.1,
                endY: 50,
                log_rate: '<span class="color-zero"></span>'
            },
            {
                indent: 0,
                color: REPORT,
                name: 'REPORT',
                description: 'Generate Report',
                setpoint: '',
                end_condition: '<span class="color-zero"></span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero"></span>',
                duration: 0.1,
                endY: 50,
                log_rate: '<span class="color-zero"></span>'
            },
            // { index: 10, indent: 0, color: 'orange', name: 'Wait', description: 'Wait for Chamber Temp', setpoint: 'CHAMBER_TEMP >= 30 °C', end_condition: '<span class="color-zero">V > MAX_V * 0.9</span>', step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123', log_rate: '<span class="color-zero">&Delta; t = 10s</span>', estimated_duration: '<span class="color-zero">3h 30m</span>', step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123', log_rate: '<span class="color-zero">&Delta; t = 10s</span>' },
            // // { index: 10, colspan: '6' },
            // { index: 11, indent: 0, color: '#17d305', name: 'NAME 2', description: 'DESCRIPTION', setpoint: '', end_condition: '', step_safety_limits: '', log_rate: '', estimated_duration: '' },
        ]
    },
    { steps: [
            {
                indent: 0,
                color: WAIT,
                name: 'Wait',
                description: 'Wait for Chamber Temp',
                setpoint: '',
                end_condition: 'CHAMBER_1_TEMP >= 30 °C',
                step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123',
                estimated_duration: '<span class="color-zero">3h 30m</span>',
                duration: 3.5,
                endY: 50,
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
                duration: 5,
                endY: 22,
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
                duration: 1,
                endY: 20,
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
                duration: 0.5,
                endY: 20,
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
                duration: 0,
                endY: 20,
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
                duration: 4,
                endY: 80,
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
                duration: 0.5,
                endY: 80,
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
                duration: 3.5,
                endY: 22,
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
                duration: 1,
                endY: 20,
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
                duration: 0.5,
                endY: 20,
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
                duration: 0,
                endY: 20,
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
                duration: 4,
                endY: 50,
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
                duration: 0.1,
                endY: 50,
                log_rate: '<span class="color-zero"></span>'
            },
            {
                indent: 0,
                color: REPORT,
                name: 'REPORT',
                description: 'Generate Report',
                setpoint: '',
                end_condition: '<span class="color-zero"></span>',
                step_safety_limits: '',
                estimated_duration: '<span class="color-zero"></span>',
                duration: 0.1,
                endY: 50,
                log_rate: '<span class="color-zero"></span>'
            },
            // { index: 10, indent: 0, color: 'orange', name: 'Wait', description: 'Wait for Chamber Temp', setpoint: 'CHAMBER_TEMP >= 30 °C', end_condition: '<span class="color-zero">V > MAX_V * 0.9</span>', step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123', log_rate: '<span class="color-zero">&Delta; t = 10s</span>', estimated_duration: '<span class="color-zero">3h 30m</span>', step_safety_limits: 'POUCH_CENTER > 30 °C<br/>123', log_rate: '<span class="color-zero">&Delta; t = 10s</span>' },
            // // { index: 10, colspan: '6' },
            // { index: 11, indent: 0, color: '#17d305', name: 'NAME 2', description: 'DESCRIPTION', setpoint: '', end_condition: '', step_safety_limits: '', log_rate: '', estimated_duration: '' },
        ] }
];