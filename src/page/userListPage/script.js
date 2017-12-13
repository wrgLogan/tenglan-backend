export default {
    data(){
        return {
            title: '用户列表',
            userList: []
        }
    },
    mounted() {
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
    methods: {
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
            
        }
    }
}

