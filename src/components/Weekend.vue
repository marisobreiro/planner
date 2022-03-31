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
    <!-- Modal -->
    <div class="modal fade" id="task" tabindex="-1" aria-labelledby="task" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h5 class="modal-title" id="task">Adicionar tarefa</h5>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <input type="text" class="form-control border-dark shadow-none" id="formGroupExampleInput" placeholder="Digite aqui sua próxima tarefa" v-model="text" />
                    </div>
                </div>
                <div class="modal-footer border-top-0">
                    <button type="button" class="dbtn" v-on:click="addTodo(text)">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Weekend",

    props: {
        Weekend: String
    },

    data() {
        return {
            todos: [{id: 0, text: "Regar plantas"}],
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