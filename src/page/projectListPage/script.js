export default {
    data(){
        return {
            title: '项目列表',
            projectList: [],
            addProjForm: {
                title: ''
            },
            dialogFormVisible: false,
            statusDialogVisible: false,
            formLabelWidth: '80px',
            statusOptions: [{
                label: '未上线',
                value: '0'
            },{
                label: '即将启动',
                value: '1'
            },{
                label: '正在进行',
                value: '2'
            },{
                label: '往期项目',
                value: '3'
            }],
            projStatus: null,
            checkedProj: null
        }
    },
    mounted() {
        var AV = this.AV;
        var _this = this;
        // var statusEnum = ['未开始','进行中','已结束'];
        this.getUsers(0, 10);
    },
    methods: {
        handleCheck(item) {
            console.log(item);
        },
        submitAddProject() {
            var _this = this;

            this.createProject({
                title: this.addProjForm.title
            }).then(function() {
                _this.dialogFormVisible = false;
                _this.getUsers(0, 10);
            })
        },
        getUsers(start, limit) {
            var _this = this;
            var statusEnum = {'0': '未上线', '1': '即将启动', '2': '正在进行', '3': '往期项目'};
            _this.getProjects({start: start, limit: limit}).then(function(res) {
                var projectList = [];
                res.list.forEach(function(item) {
                    var obj = item.attributes;
                    obj.projStatus = statusEnum[item.attributes.status];
                    obj.objectId = item.id;
                    projectList.push(obj);
                });
    
                console.log(projectList);
    
                _this.projectList = projectList;
            })
        },
        updateStatus: function(proj) {
            var _this = this;
            _this.checkedProj = proj;
            _this.projStatus = proj.status;
            _this.statusDialogVisible = true;
        },
        submitUpdateStatus: function() {
            var _this = this;

            this.updateProjectStatus({
                status: this.projStatus,
                objectId: this.checkedProj.objectId
            }).then(function(){
                _this.statusDialogVisible = false;
                _this.getUsers(0, 10);
            });
        }
    },
}