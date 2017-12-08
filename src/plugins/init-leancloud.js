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

    // 获取用户列表
    Vue.prototype.getUsers = function(opt) {
        var opt = opt || {};
        var start = opt.start || 0;
        var limit = opt.limit || 10;
        // 普通用户角色
        var role = AV.Object.createWithoutData('_Role', '5a1ef06a2f301e0063e5d67d');
        
        var query = new AV.Query('_User');
        
        query.equalTo('role', role);
        
        return new Promise(function(resolve, reject) {
            
            query.find().then(function (list) {
                query.count().then(function (count) {
                    resolve({
                        list: list,
                        start: start,
                        limit: limit,
                        total: count,
                        totalPage: Math.ceil(count / limit)
                    });
                }, function (err) {
                    reject(err);
                });
            }, function(err) {
                reject(err);
            });
        });
        
    }

    // 修改用户数据
    Vue.prototype.updateUserInfo = function(opt) {}

    // 获取项目列表
    Vue.prototype.getProjects = function(opt) {}

    // 新增项目
    Vue.prototype.createProject = function(opt) {}

    // 更新项目信息
    Vue.prototype.updateProject = function(opt) {}

    // 上传项目报名表
    Vue.prototype.uploadApplication = function(opt) {}
}

export default {
    install: install
};