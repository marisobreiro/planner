<template>
    <section class="bg-light day d-flex flex-column mr-3">
        <header>
            <h2 class="subtitle">{{ Weekday }}</h2>
        </header>
        <main class="p-3 d-flex flex-column tasks">
            <form v-for="todo in todos" v-bind:key="todo.id" class="flex-row task">
                <input type="checkbox"><label for="task">{{ todo.text }}</label>
                <!-- <div class="d-none task__functions">
                    <button id="clr"><i class="far fa-sm fa-trash-alt"></i></button>
                    <button id="edt"><i class="far fa-sm fa-edit"></i></button>
                </div> -->
            </form>
        </main>
        <footer class="align-self-end m-2 day-actions">
            <button class="btn-dlt" v-on:click="removeTodos()"><i class="far fa-sm fa-trash-alt"></i></button>
        </footer>
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
            todos: [{id: 1, text: "Regar plantas"}, {id: 2, text:"Estudar Vue"}],
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

<style>
    label {
        margin-left: 0.5rem;
    }
</style>