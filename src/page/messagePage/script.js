var data = {
    title: '消息列表',
    messages: [],
    addVisible: false,
    form: {
        title: '',
        content: ''
    },
    pagination: {
        start: 0,
        limit: 10
    }
};

export default {
    data() {
        return data;
    },
    methods: {
        getMsgs() {
            var _this = this;

            _this.getMessages({
                start: this.pagination.start,
                limit: this.pagination.limit
            }).then(res => {
                console.log(res);
                _this.pagination = res.pagination;
                res.list.forEach(msg => {
                    if (!msg.attributes.receiver) {
                        msg.attributes.receiver = {
                            attributes: {
                                name: '所有人'
                            }
                        }
                    }
                })
                _this.messages = res.list;
            })
        },
        submitAdd() {
            var _this = this;
            if (this.form.title == '' || this.form.content == '') {
                this.$message({
                    message: '请输入标题和内容',
                    type: 'warning'
                });

                return;
            }

            this.createMessage({
                type: 'public',
                title: this.form.title,
                content: this.form.content
            }).then(res => {
                _this.$message({
                    message: '创建成功',
                    type: 'success'
                });
                _this.addVisible = false;
                _this.getMsgs();
            },err => {
                _this.$message({
                    message: '创建失败',
                    type: 'err'
                });
            })
        },
        pageChange(page) {
            var start = this.pagination.limit * (page - 1);
            this.pagination.start = start;
            this.getMsgs();
        }
    },
    mounted() {
        this.getMsgs();
    }
}