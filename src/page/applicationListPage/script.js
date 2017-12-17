export default {
    data(){
        return {
            title: '审批列表',
            applicationList: [],
            applyStatus: null,
            statusOptions: [{
                label: '审核中',
                value: 'IN_REVIEW'
            },{
                label: '审核通过',
                value: 'SUCCESS'
            },{
                label: '审核失败',
                value: 'FAIL'
            },{
                label: '需要面试',
                value: 'NEED_INTERVIEW'
            },{
                label: '已删除',
                value: 'DELETED'
            }],
            statusDialogVisible: false,
            checkedApplication: null
        }
    },
    mounted() {
        var AV = this.AV;
        var _this = this;
        
        this.getApplicationList();
    },
    methods: {
        handleCheck(item) {
            console.log(item);
        },
        getApplicationList(){
            var _this = this;
            var passEnum = {
                'IN_REVIEW': '审核中',
                'SUCCESS': '审核通过',
                'FAIL': '审核失败',
                'NEED_INTERVIEW': '需要面试',
                'DELETED': '已删除'
            };
            this.getApplications().then(function(res) {
                console.log(res);
                
                res.list.forEach(function(item) {
                    // console.log(item);
                    item.createdAt = _this.formatDate(new Date(item.createdAt), 'yyyy-MM-dd hh:mm:ss');
                    item.passStatus = passEnum[item.attributes.status1];
                })

                _this.applicationList = res.list;
                
            })
        },
        showUpdate(application) {
            this.checkedApplication = application;
            this.statusDialogVisible = true;
            this.applyStatus = application.attributes.status1;
        },
        submitUpdateStatus() {
            var _this = this;

            _this.updateApplication({
                objectId: _this.checkedApplication.id,
                status: _this.applyStatus
            }).then(res => {
                _this.getApplicationList();
                this.statusDialogVisible = false;
            }).catch(err => {
                _this.$message({
                    message: err,
                    type: 'error'
                })
            })
        }
    }
}

