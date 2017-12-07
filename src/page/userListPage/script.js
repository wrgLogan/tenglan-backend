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
        // var query = new AV.Query('User');
        // query.include('username');
        // query.include('name');
        // query.include('university');
        // query.include('major');
        // query.include('birth');
        // query.find().then(function(users) {
        //     console.log(users);
        //     var arr = [];
        //     users.forEach(function(u) {
        //         if (u.)
        //     })
            
        // })

        _this.getUsers({
            start: 0,
            limit: 10
        }).then(function(res) {
            console.log(res);
            var users = res.list;
            _this.userList = users.map(function(r) { return r.attributes });
            _this.userList.forEach(function(user) {
                user.age = 16;
            });
        }).catch(function(err) {
            console.log(err);
        });
    },
    methods: {
        handleCheck(item) {
            console.log(item);
        },
        birthToAge(birth) {
            
        }
    }
}

