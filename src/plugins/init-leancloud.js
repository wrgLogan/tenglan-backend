import AV from 'leancloud-storage'
window.AV = AV;

var install = function(Vue, option) {
    const APP_ID = option.appId;
    const APP_KEY = option.appKey;
    
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    Vue.prototype.AV = AV;
}

export default {
    install: install
};