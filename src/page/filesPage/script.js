export default {
    data(){
        return {
            title: '资料管理',
            fileList: [],
            uploadVisible: false,
            uploadFileObj: null,
            statusEnum: ['未上线', '已上线'],
            statusDialogVisible: false,
            pagination: {
                start: 0,
                limit: 10
            }
        }
    },
    mounted() {
        var AV = this.AV;
        var _this = this;
        this.getFiles();
    },
    methods: {
        handleCheck(item) {
            console.log(item);
        },
        getFiles() {
            var _this = this;
            this.getDownloadFiles({
                start: _this.pagination.start,
                limit: _this.pagination.limit
            }).then(res => {
                console.log(res);
                _this.pagination = res.pagination;
                res.list.forEach(file => {
                    file.createdAt = _this.formatDate(new Date(file.createdAt), 'yyyy-MM-dd hh:mm:ss');
                    file.statusTxt = _this.statusEnum[file.attributes.status];
                });
                _this.fileList = res.list;
            })
        },
        submitUpload() {
            var _this = this;
            console.log(_this.uploadFileObj);
            this.uploadFile({
                file: _this.uploadFileObj
            }).then(function(res) {
                _this.getFiles();
                _this.uploadVisible = false;
            });
        },
        onChange(file, files) {
            var _this = this;
            
            this.uploadFileObj = file.raw;
        },
        onRemove(file, files) {
            var _this = this;
            
            this.uploadFileObj = file.raw;
        },
        online(file){
            var _this = this;
            var fileObj = AV.Object.createWithoutData('DownloadFile', file.id);
            fileObj.set('status', '1');
            fileObj.save().then(function() {
                _this.getFiles();
            })
        },
        offline(file){
            var _this = this;
            var fileObj = AV.Object.createWithoutData('DownloadFile', file.id);
            fileObj.set('status', '0');
            fileObj.save().then(function() {
                _this.getFiles();
            })
        },
        pageChange(page) {
            var start = this.pagination.limit * (page - 1);
            this.pagination.start = start;
            this.getFiles();
        }
    },
}