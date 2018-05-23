new Vue ({
	el: '#app',
	data: {
		newTask: '',
		tasks: ['Shower', 'Eat', 'Code']
	},
	methods: {
		addTask(task) {
			this.tasks.push(task);
			this.newTask = '';
			console.log('ok');
			
		},
		removeTask(task) {
			for(i = 0; i < this.tasks.length; i++) {
				if (task === this.tasks[i]) {
					this.tasks.splice(i, 1);
					console.log('remove');
					
				}
			}
		}
	},
	template: 
		`<div>
			<h1>To do</h1>
			<label for="">Title:</label>
			<input type="text" placeholder="add task" v-model="newTask">
			<button v-on:click="addTask(newTask)"><i class="fas fa-plus"></i></button>

			<ol>
				<li v-for="task in tasks">
					{{ task }}<button v-on:click="removeTask(task)"><i class="fas fa-times" aria-hidden="true"></i></button>
				</li>
			</ol>
		</div>`
})
