import AV from 'leancloud-storage'
window.AV = AV;

var install = function(Vue, option) {
    const APP_ID = option.appId;
    const APP_KEY = option.appKey;
    const MASTER_KEY = option.masterKey;

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY,
        masterKey: MASTER_KEY
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
        query.limit(limit);
        query.skip(start);
        
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

    // 通过用户id获取用户详情
    Vue.prototype.getUserInfoById = function(opt) {
        var opt = opt || {};
        var objectId = opt.objectId;
        
        var query = new AV.Query('_User');

        return new Promise(function(resolve, reject) {
            query.get(objectId).then(function(user) {
                resolve(user);
            }, function(err) {
                reject(err);
            })
        });
    }

    // 更新用户数据
    Vue.prototype.updateUserInfo = function(opt) {
        var opt = opt || {};
        var objectId = opt.objectId;
        // 配置可修改的字段
        var PARAMS_KEY = [ 
            'address', 
            'email', 
            'name', 
            'city', 
            'university', 
            'major', 
            'mobilePhoneNumber', 
            'idCard', 
            'education',
            'gender',
            'birth'
        ];

        var user = AV.Object.createWithoutData('_User', objectId);
        
        for (var key in opt.params) {
            if (PARAMS_KEY.indexOf(key) > -1) {
                user.set(key, opt.params[key]);
            }
        }
        return new Promise(function(resolve, reject) {
            user.save().then(function(res) {
                console.log(res)
                resolve(res);
            })
        })
       

    }

    // 获取项目列表
    Vue.prototype.getProjects = function(opt) {
        var opt = opt || {};
        var start = opt.start || 0;
        var limit = opt.limit || 10;

        // obj
        var query = new AV.Query('Project');
        query.include('downloadFile');
        query.include('downloadFile.file');
        query.limit(limit);
        query.skip(start);

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

    // 获取项目详情
    Vue.prototype.getProjectById = function(opt) {
        var opt = opt || {};
        var objectId = opt.objectId;

        var query = new this.AV.Query('Project');
        query.include('downloadFile');
        query.include('downloadFile.file');
        return new Promise((resolve, reject) => {
            query.get(objectId).then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        });
        
    }

    // 新增项目
    Vue.prototype.createProject = function(opt) {
        var opt = opt || {};
        var title = opt.title;
        var Project = AV.Object.extend('Project');
        var project = new Project();    

        return new Promise(function(resolve, reject) {
            project.set('title', opt.title);
            project.save().then(function(todo) {
                resolve(todo);
            }, function(err) {
                reject(err);
            })
        });

    }

    // 修改项目状态
    Vue.prototype.updateProjectStatus = function(opt) {
        var statusEnum = [{'未上线': 0, '即将启动': 1, '正在进行': 2, '往期项目': 3}];
        var opt = opt || {};
        var status = opt.status;
        var objectId = opt.objectId;

        var project = AV.Object.createWithoutData('Project', objectId);
        project.set('status', status);

        return new Promise(function(resolve, reject) {
            project.save().then(function(res) {
                resolve(res);
            }, function(err) {
                reject(err);
            })
        });
    }

    // 更新项目信息
    Vue.prototype.updateProject = function(opt) {}

    // 上传项目报名表
    Vue.prototype.uploadApplication = function(opt) {}

    // 获取申请表列表
    Vue.prototype.getApplications = function(opt) {
        var opt = opt || {};
        var start = opt.start || 0;
        var limit = opt.limit || 10;

        var query = new AV.Query('Application');

        query.include('project');
        query.include('applicant');
        query.limit(limit);
        query.skip(start);

        return new Promise(function(resolve, reject) {
            query.find().then(function(list) {
                query.count().then(function(count) {
                    resolve({
                        list: list,
                        pagination: {
                            start: start,
                            limit: limit,
                            total: count,
                            totalPage: Math.ceil(count / limit)
                        }
                    });
                });
            }, function(err) {
                reject(err);
            });
        })
    }

    // 更改申请状态
    Vue.prototype.updateApplication = function(opt) {
        var opt = opt || {};
        var status = opt.status;
        var objectId = opt.objectId;

        var apply = AV.Object.createWithoutData('Application', objectId);
        apply.set('status1', status);
        
        return new Promise((resolve, reject) => {
            apply.save().then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        })
    }

    // 上传资料
    Vue.prototype.uploadFile = function(opt) {
        var opt = opt || {};
        var file = opt.file;

        var fileObj = new AV.File(file.name, file);

        return new Promise(function(resolve, reject) {
            fileObj.save().then(function(fileItem) {
                var downloadFile = new AV.Object('DownloadFile');
                downloadFile.set('file', fileItem);
                downloadFile.set('fileName', file.name);
                downloadFile.set('type', 'newsFile');
                downloadFile.set('status', '0');

                downloadFile.save().then(function(res) {
                    resolve(res);
                }, function(err) {
                    reject(err);
                });
            });
        });
        
    }

    // 获取资料列表
    Vue.prototype.getDownloadFiles = function(opt) {
        var opt = opt || {};
        var start = opt.start || 0;
        var limit = opt.limit || 10;

        var query = new AV.Query('DownloadFile');
        query.include('file');
        query.equalTo('type', 'newsFile');

        return new Promise((resolve, reject) => {
            query.find().then(function(list) {
                query.count().then(count => {
                    resolve({
                        list: list,
                        pagination: {
                            start: start,
                            limit: limit,
                            total: count,
                            totalPage: Math.ceil(count / limit)
                        }
                    });
                }, err => {
                    reject(err);
                })
                
            }, err => {
                reject(err);
            });
        });
    }
}

export default {
    install: install
};