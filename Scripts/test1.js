//柯萊伯瑞面試題
var array = [];
for(let i = 0 ; i<10;i++){
	array.push({index: i});
}
for(let g = 0 ; g<10; g++)
{
 	array[g].show = function (){
 		console.log(this.index + g)
 	}
}
for(let h = 0;h <10;h++){
	array[h].show();
}


 Vue.component("menu-section",{
 	template:"<ul><li v-for='item in menuItem'>{{item.name}}</li></ul>",
 	data: function(){
 		return {
 			menuItem:[{name: "全域 component1"},
 						{name:"全域 component2"},
 						{name:"全域 component3"}]
 		}
 	}
 });
 var app = new Vue({
 	el:'#app',
 	data: {
 		topic:"HELLO",
 		subTopic: "VUE",

 		
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
 	components:{
 		'description-section': {
 			template:"<p>{{des}}</p>",
 			data: function(){
 				return {
 					des:"在 vue instance 裡的 component"
 				}
 			}

 		}

 	}

 })

