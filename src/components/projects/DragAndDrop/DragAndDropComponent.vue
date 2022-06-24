<template>
    <HeaderComponent :titulo="'Drag and drop table'"/>
    <BodyComponent>
        <input type="text" placeholder="Search name" class="form-control" id="search-task">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Deadline</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="task-tbody">
                <tr v-for="task in tasks" :key="task.id">
                    <td>{{task.name}}</td>
                    <td>{{task.deadline}}</td>
                    <td><button class='btn btn-danger delete-btn' @click="deleteTask(task.id)"><img src='img/lata-de-lixo.png' alt=''></button></td>
                </tr>
            </tbody>
        </table>
    </BodyComponent>
    <FooterComponent>
        <PrimaryButtonComponent :btnValue="'New Task'" @click="$emit('change-modal-component','TaskModalComponent')"/>
    </FooterComponent>
</template>
<script>
    import HeaderComponent from "../../modal/HeaderComponent.vue";
    import BodyComponent from "../../modal/BodyComponent.vue";
    import FooterComponent from "../../modal/FooterComponent.vue";
    import PrimaryButtonComponent from "../../PrimaryButtonComponent.vue";
    export default {
    name: 'DragAndDropComponent',
    components:{
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        PrimaryButtonComponent
    },
    data(){
        return{
            tasks:null,
            task_id:null
        }
    },
    emits:["change-modal-component", "TaskModalComponent"],
    methods:{
        async getTasks(){
            const request = await fetch ("http://localhost:3000/tasks")
            const data = await request.json()
            this.tasks = data
        },
        async deleteTask(id){
            const request = await fetch('http://localhost:3000/tasks/'+id, {
                method: "DELETE"
            })
            await request.json()
            this.getTasks()
        }
    },
    mounted(){
        this.getTasks()
    }
   }
</script>