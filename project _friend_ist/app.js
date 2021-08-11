const app = Vue.createApp({
	data(){
		return{
			friends:[
				{
					id:'1', 
					name:'Andreceu Samba', 
					phone:'+26482554125', 
					email:'andreceu@gmail.com'
				},
				{
					id:'2', 
					name:'Karoline Kamana', 
					phone:'+26482554125', 
					email:'Karoline@gmail.com'
				},
			],
		};
	},
});

app.component('friend-contacto', {
	template:`
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{detailAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
	`, 
	data(){
		return {
			detailAreVisible:false,
			friend: {
					id:'1', 
					name:'Andreceu Samba', 
					phone:'+26482554125', 
					email:'andreceu@gmail.com'
				},
		};
	},
		methods: {
		toggleDetails(){
			this.detailAreVisible = !this.detailAreVisible;
		}
	}

});
app.mount('#app');