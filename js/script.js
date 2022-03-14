let app = new Vue({
    el : '#root',
    data: {
        newTodo : {
            text: '',
            done: false
        },
        todos: [
            {
                text: 'Fare i compiti',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Accendere il camino',
                done: false,
            },
        ]
    },
    methods:{
        addListItem(){
            if(this.newTodo.text.trim() != ''){
                this.newTodo.text.trim()
                this.todos.unshift(this.newTodo)
            }
            this.newTodo = {
                text: '',
                done: false
            }
        },
        removeListItem(index){
            this.todos.splice(index, 1)
        },
        done(){
            this.todos.done = true 
            console.log(this.todos.done)
        }
    }
})