// var app = new Vue({
//     el: '#app',
//     data: {
//         message: '',
//         list: [
//             {
//                 id: 1,
//                 name: 'iPhone 7',
//                 price: 6188,
//                 count: 1
//             },
//             {
//                 id: 2,
//                 name: 'iPad Pro',
//                 price: 5888,
//                 count: 1
//             },
//             {
//                 id: 3,
//                 name: 'MacBook Pro',
//                 price: 21488,
//                 count: 1
//             }
//         ]
//     },
//     computed: {
//         totalPrice: function() {
//             var total = 0;
//             for (var i = 0; i < this.list.length; i++) {
//                 var item = this.list[i];
//                 total += item.price * item.count;
//             }
//             return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
//         }
//     },
//     methods: {
//         handleReduce: function (index) {
//             if (this.list[index].count === 1) {
//                 return;
//             }
//             this.list[index].count--;
//         },
//         handleAdd: function (index) {
//             this.list[index].count++;
//         },
//         handleRemove: function (index) {
//             this.list.splice(index, 1);
//         }
//     }
// });

// var app = new Vue({
//     el: '#app',
//     data() {
//         return {
//             msg: 'hello',
//             link: '<a href="#">this is a link</a>',
//             url: 'http://www.baidu.com/',
//             list: [
//                 {
//                     id: 1,
//                     name: 'iphone x',
//                     price: 6100,
//                     count: 1,
//                     isCheck: false
//                 },
//                 {
//                     id: 2,
//                     name: 'ipad pro',
//                     price: 4000,
//                     count: 1,
//                     isCheck: true
//                 },
//                 {
//                     id: 3,
//                     name: 'mac pro',
//                     price: 20100,
//                     count: 1,
//                     isCheck: false
//                 }
//             ],
//             allChecked: false
//         }
//     },
//     computed: {
//         totalPrice: function () {
//             var total = 0;
//             for (var i = 0; i < this.list.length; i++) {
//                 if (this.list[i].isCheck) {
//                     var item = this.list[i];
//                     total += item.price * item.count;
//                 }
//             }
//             return total;
//         },
//         // allChecked: function () {
//         //     for (var i = 0; i < this.list.length; i++) {
//         //         if (!this.list[i].isCheck) {
//         //             return false
//         //         }
//         //     }
//         //     return true
//         // }
//     },
//     methods: {
//         handleReduce: function (index) {
//             if (this.list[index].count === 1) return;
//             this.list[index].count--;
//         },
//         handleAdd: function (index) {
//             this.list[index].count++;
//         },
//         handleRemove: function (index) {
//             this.list.splice(index, 1);
//         },
//         swap2Checked: function () {
//             this.allChecked = !this.allChecked
//             if (this.allChecked) {
//                 for (var i = 0; i < this.list.length; i++) {
//                     this.list[i].isCheck = true
//                 }
//             }else{
//                 for (var i = 0; i < this.list.length; i++) {
//                     this.list[i].isCheck = false
//                 }
//             }
//         },
//         changeStatus: function (index) {
//             this.list[index].isCheck = !this.list[index].isCheck
//             var flag = true
//             for (var i = 0; i < this.list.length; i++) {
//                     if(!this.list[i].isCheck){
//                         flag = false
//                     }
//             }
//             this.allChecked = flag
//         }
//     }
// })

var app = new Vue({
    el: '#app',
    data() {
        return {
            msg: 'hello',
            link: '<a href="#">this is a link</a>',
            url: 'http://www.baidu.com/',

            list: [{
                name: "电子产品",
                productList: [{
                    id: '1',
                    name: 'iPhone 7',
                    price: 6188,
                    count: 1,
                    isCheck: false
                },
                {
                    id: '2',
                    name: 'iPad Pro',
                    price: 5188,
                    count: 1,
                    isCheck: false
                },
                {
                    id: '3',
                    name: 'MacBook Pro',
                    price: 21488,
                    count: 1,
                    isCheck: false
                }
                ]
            },
            {
                name: "生活用品",
                productList: [{
                    id: '1',
                    name: '尺子',
                    price: 2.00,
                    count: 1,
                    isCheck: false
                },
                {
                    id: '2',
                    name: '包装箱',
                    price: 29.99,
                    count: 1,
                    isCheck: false
                },
                {
                    id: '3',
                    name: '毛巾',
                    price: 15.98,
                    count: 1,
                    isCheck: false
                }
                ]
            },
            {
                name: "水果蔬菜",
                productList: [{
                    id: '1',
                    name: '国产香蕉',
                    price: 2.88,
                    count: 1,
                    isCheck: false
                },
                {
                    id: '2',
                    name: '草莓',
                    price: 15.00,
                    count: 1,
                    isCheck: false
                },
                {
                    id: '3',
                    name: '车厘子',
                    price: 29.99,
                    count: 1,
                    isCheck: false
                }
                ]
            }
            ],
            allChecked: false
        }
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].productList.length; j++) {
                    var item = this.list[i].productList[j];
                    if (item.isCheck) {
                        total += item.price * item.count;
                    }
                }
            }
            return total != 0 ? total.toString().replace(/\B(?=(\d{3})+$)/g, ',') : 0;
        },

    },
    methods: {
        handleReduce: function (index,items) {
            
            if (items.productList[index].count === 1) return;
            items.productList[index].count--;
        },
        handleAdd: function (index,items) {
            console.log(items)
            items.productList[index].count++;
        },
        handleRemove: function (index,items) {
            items.productList.splice(index, 1);
        },
        swapTableChecked: function (e, items) {
            console.log(e)
            console.log(e.currentTarget.checked)
            if (e.currentTarget.checked) {
                for (var i = 0; i < items.productList.length; i++) {
                    items.productList[i].isCheck = true
                }
            } else {
                for (var i = 0; i < items.productList.length; i++) {
                    items.productList[i].isCheck = false
                }
            }
        },
        changeStatus: function (item) {
            item.isCheck = !item.isCheck
        },
        isTableAllChecked: function (items) {
            var flag = true
            for (var i = 0; i < items.productList.length; i++) {
                if (!items.productList[i].isCheck) {
                    return false
                }
            }
            return true
        },
        swapAllChecked: function (e) {
            if (e.currentTarget.checked) {
                for (var i = 0; i < this.list.length; i++) {
                    for (var j = 0; j < this.list[i].productList.length; j++) {
                        this.list[i].productList[j].isCheck = true;
                    }
                }
            } else {
                for (var i = 0; i < this.list.length; i++) {
                    for (var j = 0; j < this.list[i].productList.length; j++) {
                        this.list[i].productList[j].isCheck = false;
                    }
                }
            }
        },
        isAllChecked: function () {
            var flag = true
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].productList.length; j++) {
                    if (!this.list[i].productList[j].isCheck) {
                        return false
                    }
                }
            }
            return true
        }
    }
})