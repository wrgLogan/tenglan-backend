export default {
    data(){
        return {
            title: '用户列表',
            userList: [],
            checkedUser: null,
            form: {
                title: '',
                content: ''
            },
            addVisible: false
        }
    },
    mounted() {
        this.getAllUsers();
    },
    methods: {
        getAllUsers() {
            var AV = this.AV;
            var _this = this;
    
            _this.getUsers({
                start: 0,
                limit: 10
            }).then(function(res) {
                console.log(res);
                var users = res.list;
                _this.userList = users.map(function(r) { 
                    var obj = r.attributes;
                    obj.objectId = r.id;
                    return obj;
                });
                _this.userList.forEach(function(user) {
                    user.age = 16;
                });
            }).catch(function(err) {
                console.log(err);
            });
        },
        handleCheck(item) {
            
            this.updateUserInfo({
                objectId: item.objectId,
                params: {
                    address: '友谊路6号'
                }
            }).then(function() {
                console.log('save success');
            })
        },
        birthToAge(birth) {
            
        },
        showAdd(user) {
            this.addVisible = true;
            this.checkedUser = user;
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
                receiverObjectId: this.checkedUser.objectId,
                title: this.form.title,
                content: this.form.content,
                type: 'private'
            }).then(res => {
                _this.getAllUsers();
                _this.addVisible = false;
                _this.$message({
                    message: '发送成功',
                    type: 'success'
                });
            }).catch(err => {
                _this.$message({
                    message: '发送成功',
                    type: 'error'
                })
            });
        }
    }
}

