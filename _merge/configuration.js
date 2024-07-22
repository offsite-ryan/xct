function changeConfigurationView(name) {
    ['tests','batteries','calculations','io-assignment'].forEach((v)=>{
        document.getElementById(`view-configuration-${v}`).style.display = v === name ? 'block' : 'none';

        const elem = document.getElementById(`configuration-tab-view-${v}`);
        elem.classList.remove('tab-selected');
        if(v === name) {
            elem.classList.add('tab-selected');
        }
    });
}