var app = new Vue({
    el: "#app",
    data: {
        username: '',
        message: '',
        list: []
    },
    methods: {
        handleSend: function () {
            if (this.username === '' || this.username.trim() === '') {
                window.alert('请输入昵称');
                return;
            }
            if (this.message === '' || this.message.trim() === '') {
                window.alert('请输入留言内容');
                return;
            }
            this.list.push({
                name: this.username,
                message: this.message
            });
            // 重置昵称和留言内容
            this.username = '';
            this.message = '';
        },
        handleReply: function (index) {
            var name = this.list[index].name;
            this.message = '回复@' + name + '：';
            this.$refs.message.focus();
        }
    }
});