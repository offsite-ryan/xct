function changeSystemTab(name) {
    ['general','hardware','calibration','notifications', 'users'].forEach((v)=>{
        document.getElementById(`view-system-${v}`).style.display = v === name ? 'block' : 'none';

        const elem = document.getElementById(`system-tab-view-${v}`);
        elem.classList.remove('tab-selected');
        if(v === name) {
            elem.classList.add('tab-selected');
        }
    });
}