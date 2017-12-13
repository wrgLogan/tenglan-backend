export default {
    data(){
        return {
            title: '审批列表',
            applicationList: [],
            applyStatus: null,
            statusOptions: [{
                label: '未通过',
                value: 'NO'
            },{
                label: '通过',
                value: 'YES'
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
                'NO': '否',
                'YES': '是'
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

