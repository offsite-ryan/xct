function changeConfigurationView(name) {
    // let hash = 'configuration';
    // hash = name === 'tests' ? 'configuration-test' : hash;
    // hash = name === 'batteries' ? 'configuration-battery' : hash
    // window.location.hash = hash;
    ['io-assignment','calculations','chambers'].forEach((v)=>{
        document.getElementById(`view-configuration-${v}`).style.display = v === name ? 'block' : 'none';

        const elem = document.getElementById(`configuration-tab-view-${v}`);
        elem.classList.remove('tab-selected');
        if(v === name) {
            elem.classList.add('tab-selected');
        }
    });
}