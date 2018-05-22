const HeaderJs = {
	data() {
		return  {
			title: null
		}
	},
	template: `
		<div>
			<center>
				<h1>To do list</h1>
			</center>
			<input type="text" v-model="title" placeholder="Title...">
		</div>
	`,
	updated() {
		console.log(this.title)
	}
}

const app = new Vue({
	components: {
		HeaderJs
	},
	el: '#app',
	data: {
		list: [
			{ text: 'Vue' },
			{ text: 'React' },
			{ text: 'Angular' }
		]
	},
	methods:{
		remove() {
			console.log(this);
			
		},

		edit(){

		}
	},
	template: 
	`<div>
	<header-js/>
		<ol>
			<li v-for="li in list">
				{{ li.text }}
				<button v-on:click="remove"></button>
				<button v-on:click="edit"></button>
			</li>
		</ol>
	</div>`
})

