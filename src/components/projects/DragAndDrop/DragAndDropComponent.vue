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
            <tbody id="task-tbody" class="drop-zone" @dragenter.prevent @dragover.prevent>
                <tr v-for="task in tasks" :key="task.id" class="draggable-element" draggable="true" @dragstart="startDragTask($event, task)" @drop="onDrop($event, task)" >
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
        }
    },
    emits:["change-modal-component", "TaskModalComponent"],
    methods:{
        async getTasks(){
            const request = await fetch ("http://localhost:3000/tasks")
            const tasksData = await request.json()
            this.tasks = tasksData
            return tasksData
        },
        async deleteTask(id){
            const request = await fetch('http://localhost:3000/tasks/'+id, {
                method: "DELETE"
            })
            await request.json()
            this.getTasks()
        },
        async startDragTask(event, task){
            event.dataTransfer.setData('draggedTaskId', task.id)
            event.dataTransfer.setData('draggedTaskName', task.name)
            event.dataTransfer.setData('draggedTaskDeadline', task.deadline)
        },
        async onDrop(event, task){
            var draggedTask = {
                id: event.dataTransfer.getData('draggedTaskId', task.id),
                name: event.dataTransfer.getData('draggedTaskName', task.name),
                deadline: event.dataTransfer.getData('draggedTaskDeadline', task.deadline)
            }
            var taskUnder = task
            if (draggedTask.id != taskUnder.id){
                var newData = JSON.stringify({name: taskUnder.name, deadline: taskUnder.deadline})
                var request = await fetch('http://localhost:3000/tasks/'+draggedTask.id,{
                    method: 'PATCH',
                    headers: {"Content-type": "application/json"},
                    body: newData
                })
                await request.json()
                newData = JSON.stringify({name: draggedTask.name, deadline: draggedTask.deadline})
                request = await fetch('http://localhost:3000/tasks/'+taskUnder.id,{
                    method: 'PATCH',
                    headers: {"Content-type": "application/json"},
                    body: newData
                })
                await request.json()
                this.getTasks()
            }
        }
    },
    mounted(){
        this.getTasks()
    }
   }
</script>