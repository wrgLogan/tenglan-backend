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

        var role = AV.Object.createWithoutData('_Role', '5a1ef06a2f301e0063e5d67d');
        
        var query = new AV.Query('_User');
        
        query.equalTo('role', role);
        
        query.find().then(function (users) {
            _this.userList = users.map(function(r) { return r.attributes });
        });
    },
    methods: {
        handleCheck(item) {
            console.log(item);
        }
    }
}