<template>
    <section class="bg-light day-weekend d-flex flex-column justify-content-between">
        <div class="mx-3">
            <h2 class="subtitle">{{ Weekend }}</h2>
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
            <button type="button" class="dbtn" data-bs-toggle="modal" data-bs-target="#task"><i class="fas fa-sm fa-plus"></i></button>
            <button class="dbtn" v-on:click="removeTodos()"><i class="far fa-sm fa-trash-alt"></i></button>
        </div>      
    </section>
</template>

<script>
export default {
    name: "Weekend",

    props: {
        Weekend: String
    },

    data() {
        return {
            todos: [{id: 0, text: ""}],
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