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
function viewTest(index) {
    document.getElementById('table-tests-recent').style.display = 'none';
    document.getElementById(`test-view-${index}`).style.display = 'block';
    document.getElementById('test-save-cancel').style.display = 'block';
}

function closeTest() {
    document.getElementById('table-tests-recent').style.display = 'block';
    document.getElementById('test-view-1').style.display = 'none';
    document.getElementById('test-view-2').style.display = 'none';
    document.getElementById('test-view-3').style.display = 'none';
    document.getElementById('test-view-4').style.display = 'none';
    document.getElementById('test-view-5').style.display = 'none';
    document.getElementById('test-save-cancel').style.display = 'none';
}

function collapseRowDetail(index) {
    if (index === 1) {
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