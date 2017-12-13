export default {
    data(){
        return {
            title: '资料管理',
            fileList: [],
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
    },
}