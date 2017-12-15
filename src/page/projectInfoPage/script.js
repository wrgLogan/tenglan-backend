var data = {
    title: '编辑项目',
    form: {}
}

export default {
    data: function() {
        return data;
    },
    mounted() {
        this.getProject();
    },
    methods: {
        getProject() {
            var _this = this;
            var objectId = _this.$route.params.objectId;
            
            this.getProjectById({
                objectId: objectId
            }).then(project => {
                console.log(project);
                _this.project = project;
                _this.form = project;
            });
        },
        getFile(event) {
            if (event.target.files.length) {
                this.file = event.target.files[0];
            }
        },
        saveProject() {
            var _this = this;
            var objectId = _this.$route.params.objectId;

            var projectDetails = document.getElementById('projectDetails').innerHTML;
            var projectNotice = document.getElementById('projectNotice').innerHTML;
            var projectTeachers = document.getElementById('projectTeachers').innerHTML;

            var formData = {
                'title': this.form.attributes.title,
                'briefInt': this.form.attributes.briefInt,
                'planNum': parseInt(this.form.attributes.planNum),
                'startDate': this.form.attributes.startDate,
                'endDate': this.form.attributes.endDate,
                'projectDetails': projectDetails,
                'projectNotice': projectNotice,
                'projectTeachers': projectTeachers,
                'requirement1': this.form.attributes.requirement1,
                'requirement2': this.form.attributes.requirement2,
                'requirement3': this.form.attributes.requirement3,
                'requirement4': this.form.attributes.requirement4,
            }

            this.updateProject({
                objectId: objectId,
                form: formData,
                file: this.file
            }).then(res => {
                _this.$message({
                    message: '保存成功',
                    type: 'success'
                });
                _this.getProject();
            }).catch(err => {
                _this.$message({
                    message: '保存失败',
                    type: 'error'
                });
            })
        }
    }
}