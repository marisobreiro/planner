<template>
    <section class="bg-light day d-flex flex-column justify-content-between mr-3">
        <div class="mx-3">
            <h2 class="subtitle">{{ Weekday }}</h2>
            <div class="d-flex flex-row align-items-center justify-content-between task" v-for="todo in todos" v-bind:key="todo.id">
                <div class="d-flex flex-row align-items-center">
                    <div class="d-flex align-items-center">
                        <input type="checkbox" class="dinput"><label for="task">{{ todo.text }}</label>
                    </div>
                </div>
                <div class="d-none task__functions">
                    <button id="clr"><i class="far fa-sm fa-trash-alt"></i></button>
                    <button id="edt"><i class="far fa-sm fa-edit"></i></button>
                </div>
            </div>
        </div>
        <div class="d-flex flex-row justify-content-end pb-2">
            <form action="">
                <input type="text" name="" id="inputTask" class="border-0 border-bottom border-dark bg-light mx-2" placeholder="Inserir nova tarefa" v-model="text">
                <button type="button" class="dbtn" v-on:click="addTodo(text)"><i class="fas fa-sm fa-plus"></i></button>
            </form>
            
            <button class="dbtn" v-on:click="removeTodos()"><i class="far fa-sm fa-trash-alt"></i></button>
        </div>      
    </section>
</template>

<script>
export default {
    name: "Day",

    props: {
        Weekday: String
    },

    data() {
        return {
            todos: [{id: 1, text: "Regar plantas"}],
        }
    },

    methods: {
        addTodo(text) {
            if (text !== ' ') {
                this.todos.push ({
                    id: this.todos.length + 1,
                    text,
                })
            }
        },
        
        removeTodos() {
            this.todos = [];
        }
    }
}
</script>