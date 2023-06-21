Vue.component('pane', {
    name: 'pane',
    template: '\
    <transition> \
    <div class="pane" v-show="show"> \
    <slot></slot> \
    </div> \
    </transition>',
    data: function() {
        return {
            show: true
        }
    },
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        },
        closable: {
            type: Boolean
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav();
        },
        bye() {
            // beforeDestroy未生效 故在bye方法手动执行
            let refName;
            refName = "article" + this.name;
            console.log("refName:" + refName);
            document.getElementById(refName).innerHTML = '';
            this.$destroy();
            console.log("bye:", this);
        }
    },
    watch: {
        label() {
            this.updateNav();
        }
    },
    mounted() {
        this.updateNav();
    },
    // 未生效 原因未知
    beforeDestory() {
        console.log("beforeDestory:", this);
        let refName;
        refName = "article" + this.name;
        alert(refName);
        document.getElementById(refName).innerHTML = '';
    }
})