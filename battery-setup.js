function viewBattery(index) {
    document.getElementById('table-batteries-recent').style.display = 'none';
    document.getElementById(`battery-view-${index}`).style.display = 'block';
    document.getElementById('battery-save-cancel').style.display = 'block';
}

function closeBattery() {
    document.getElementById('table-batteries-recent').style.display = 'block';
    document.getElementById('battery-view-1').style.display = 'none';
    document.getElementById('battery-view-2').style.display = 'none';
    // document.getElementById('battery-save-cancel').style.display = 'none';
}