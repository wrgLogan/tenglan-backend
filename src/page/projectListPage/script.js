export default {
    data(){
        return {
            title: '项目列表',
            projectList: [{
                title: '上海大学通信学院幼儿提高班',
                applyNum: 100,
                passNum: 5,
                status: '上线',
                application: '上海大学通信学院幼儿提高班报名表.docx'
            }]
        }
    },
    mounted() {
        var AV = this.AV;
        var _this = this;
        

    },
    methods: {
        handleCheck(item) {
            console.log(item);
        }
    }
}