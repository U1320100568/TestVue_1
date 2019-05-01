
 var app = new Vue({
 	el:'#app',
 	data: {
 		topic:"HELLO",
 		subTopic: "VUE"
 	},
 	computed:{
 		title:{
 			get: function(){
 				return `${this.topic}    ${this.subTopic}`  ;
 			}
 		}
 	},
 	methods:{


 	},


 })