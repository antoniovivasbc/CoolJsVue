<template>
    <div>
        <div class="container">
            <ProjectComponent  :title="'Drag and drop table'" :description="'Drag items and place them where you want.*On mobile you have to click the first item and then click where you want to place it.'"/>
            <ProjectComponent :title="'Hangman game'" :description="'Choose a word, one tip and enjoy the game drawing the hanged using your mouse or finger (on mobile).'"/>
        </div>
        <div>
            <ModalComponent/>
        </div>
    </div>
</template>
<script>
    import ProjectComponent from './components/ProjectComponent.vue'
    import ModalComponent from '@/components/modal/ModalComponent.vue'
    export default {
        name: "App",
        components: {
    ProjectComponent,
    ModalComponent
        }
    }
</script>