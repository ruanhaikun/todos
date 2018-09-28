(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	let vm = new Vue({
		el: '#app',
		data: {
			newName: '',
			listStatus:'all',
			list: [{
					name: '吃饭',
					status: false
				},
				{
					name: '睡觉',
					status: true
				}, {
					name: '打豆豆',
					status: true
				}
			],
			editList: '',
		},
		methods: {
			AddList() {
				if (this.newName.trim() == '') {
					console.log("不能为空");
					this.newName = ''
					return

				}
				var obj = {
					name: this.newName,
					status: false
				}
				this.list.push(obj)
				this.newName = ''
			},
			deleteData(event) {
				console.log(event.currentTarget.checked);
				this.list.splice(index, 1)
			},
			// All() {
			// 	var b = this.active()
			// 	this.list = b
			// },
			// active() {
			// 	var oldList = this.list
			// 	var list = this.list;
			// 	var arr = []
			// 	Object.keys(list).forEach(function (key) {
			// 		console.log(key, list[key]);
			// 		if (list[key].status == false) {
			// 			arr.push({
			// 				name: list[key].name,
			// 				status: list[key].status
			// 			})
			// 		}
			// 	});

			// 	this.list = arr
			// 	return oldList;
			// },
			// completed() {
			// 	var list = this.list;
			// 	var arr = []
			// 	Object.keys(list).forEach(function (key) {
			// 		if (list[key].status) {
			// 			arr.push({
			// 				name: list[key].name,
			// 				status: list[key].status
			// 			})
			// 		}
			// 	});
			// 	this.list = arr
			// },
			isshow(valueStatus) {
				switch (this.listStatus) {
					case 'all':
						return true;
						break;
					case 'active':
						return !valueStatus;
						break;
					case 'completed':
						return valueStatus;
						break;
					default:
						return true;
					break;
				}
			},
			// clearcompleted() {
			// 	// var that = this;
			// 	var arr = [];
			// 	this.list.forEach(function (value, index) {
			// 		// if (value.status) {
			// 		// 	that.list.splice(index, 1);
			// 		// 	// console.log(index);
			// 		// }
			// 		if (value.status == false) {
			// 			arr.push(value)
			// 		}
			// 	})
			// 	this.list = arr;
			// 	this.arr = []
			// },
			toggleAll1(event) {
				// console.log(event.currentTarget.checked);
				// if (!event.currentTarget.checked) {
				// 	this.list.forEach(function (value, index) {
				// 		value.status = false;
				// 	})
				// } else {
				// 	this.list.forEach(function (value, index) {
				// 		value.status = true;
				// 	})
				// }

			}
		},
		computed: {
			toggleAll: {
				set(newValue){
					this.list.forEach(v => {
						v.status = newValue
					});
				},
				get(){
					var tempList = this.list.filter(value => {
						return !value.status
					})

					return !tempList.length
				}
			}
		},
		updated() {
			localStorage.setItem('todoList', JSON.stringify(this.list))
		},
		mounted() {
			if (!localStorage.getItem('todoList')) {
				return
			}
			this.list = JSON.parse(localStorage.getItem('todoList'))
		}
	})
})(window);
