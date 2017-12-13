var data = {
    title: '项目详情',
    form: {}
}

export default {
    data: function() {
        return data;
    },
    mounted() {
        var _this = this;
        var objectId = _this.$route.params.objectId;
        
        this.getProjectById({
            objectId: objectId
        }).then(project => {
            console.log(project);
            _this.project = project;
            _this.form = project;
        });
    }
}