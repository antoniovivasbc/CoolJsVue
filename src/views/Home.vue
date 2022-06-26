<template>
    <div>
        <div class="container">
            <ProjectComponent  :title="'Drag and drop table'" :description="'Drag items and place them where you want. *On mobile you have to click the first item and then click where you want to place it.'">
                <PrimaryButtonComponent data-bs-toggle="modal" data-bs-target="#exampleModal" :btnValue="'Check me!'" @click="ChangeModalComponent('DragAndDropComponent')"/>
            </ProjectComponent>
            <ProjectComponent :title="'Hangman game'" :description="'Choose a word, one tip and enjoy the game drawing the hanged using your mouse or finger (on mobile).'">
                <PrimaryButtonComponent data-bs-toggle="modal" data-bs-target="#exampleModal" :btnValue="'Check me!'" @click="ChangeModalComponent('HangmanGameComponent')"/>
            </ProjectComponent>
        </div>
        <ModalComponent :modalClasses="'modal-dialog modal-lg'">
            <component v-bind:is="component" @change-modal-component="ChangeModalComponent"/>
        </ModalComponent>
    </div>
</template>
<script>
    import ProjectComponent from '@/components/ProjectComponent.vue'
    import PrimaryButtonComponent from '@/components/PrimaryButtonComponent.vue'
    import ModalComponent from '@/components/modal/ModalComponent.vue'
    import DragAndDropComponent from '@/components/projects/DragAndDrop/DragAndDropComponent.vue'
    import TaskModalComponent from '@/components/projects/DragAndDrop/TaskModalComponent.vue'
    import HangmanGameComponent from '@/components/projects/HangmanGameComponent.vue'
    export default {
        name: "App",
        components: {
            ProjectComponent,
            PrimaryButtonComponent,
            ModalComponent,
            DragAndDropComponent,
            TaskModalComponent,
            HangmanGameComponent
        },
        data(){
            return{
                component:null
            }
        },
        methods:{
            ChangeModalComponent(component){
                this.component = component
            }
        }
    }
</script>
<style scoped>
@media screen and (max-width: 550px) {
    .project-btn{
        min-width: 80px;
        font-size: 10px!important;
    }
}
</style>