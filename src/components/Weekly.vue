<template>
    <section class="container-fluid d-flex flex-row flex-column flex-lg-row justify-content-center align-itens-center p-5">
       <Day Weekday="Segunda" />
       <Day Weekday="Terça" />
       <Day Weekday="Quarta" />
       <Day Weekday="Quinta" />
       <Day Weekday="Sexta" />
       <div class="d-flex flex-column justify-content-between">
           <Weekend Weekend="Sábado" />
           <Weekend Weekend="Domingo" />
       </div>
    </section>
    <section class="container-fluid d-flex justify-content-end fixed-bottom p-5">
        <a href="#addDailyTask" class="dbtn"><i class="fas fa-sm fa-plus"></i></a>
        <a href="#dltAll" class="dbtn"><i class="far fa-sm fa-trash-alt"></i></a>
    </section>
    <div id="addDailyTask" class="modal">
        <div class="modal__container">
            <a href="#fechar" title="Fechar" class="fechar"><i class="fas fa-times"></i></a>
            <h2 class="subtitle">Adicionar tarefa</h2>
            <input class="inputtask" type="text" name="task" id="task" v-model="task" placeholder="Digite aqui sua próxima tarefa">
            <button class="savebtn">Salvar</button>
        </div>
    </div>
</template>

<script>
import Day from './Day.vue'
import Weekend from './Weekend.vue'

export default {
    components: {
        Day,
        Weekend,
    }
}
</script>

<style>
    .day {
        height: 60vh;
        width: 20vw;
        margin-right: 1rem;
        overflow-y: scroll
    }

    .day-weekend {
        height: 30vh;
        width: 15vw;
        overflow-y: scroll
    }

    .dinput {
        border: 1px solid black;
        border-radius: 1rem;
        width: 1rem !important;
        height: 1rem !important;
        margin-right: 0.5rem !important;
    } 
    
    input:checked{
        background-color: #000000 !important;
    }

    .task {
        width: 100%;
        padding: 0.5rem;
    }
    
    .task:hover {
        background-color: #c4c3c3;
    }

    .task:hover .task__functions{
        display: flex !important;
    }

    .task__functions button {
        border: none;
        background-color: #c4c3c3;
    }

    @media screen and (max-width: 540px) {
        .day {
            width: 80vw;
        }
    }

</style>


