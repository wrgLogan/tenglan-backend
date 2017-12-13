export default {
    data(){
        return {
            title: '审批列表',
            applicationList: []
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
        }
    }
}