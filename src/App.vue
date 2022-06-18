<template>
    <div>
        <div class="container">
            <ProjectComponent  :title="'Drag and drop table'" :description="'Drag items and place them where you want.*On mobile you have to click the first item and then click where you want to place it.'">
                <CheckButtonComponent  @click="DragAndDropModal()"/>
            </ProjectComponent>
            <ProjectComponent :title="'Hangman game'" :description="'Choose a word, one tip and enjoy the game drawing the hanged using your mouse or finger (on mobile).'">
                <CheckButtonComponent @click="HangmanGameModal()"/>
            </ProjectComponent>
        </div>
        <ModalComponent>
            <component v-bind:is="component" />
        </ModalComponent>
    </div>
</template>
<script>
    import ProjectComponent from '@/components/ProjectComponent.vue'
    import CheckButtonComponent from '@/components/CheckButtonComponent.vue'
    import ModalComponent from '@/components/modal/ModalComponent.vue'
    import DragAndDropComponent from './components/projects/DragAndDropComponent.vue'
    import HangmanGameComponent from './components/projects/HangmanGameComponent.vue'
    export default {
        name: "App",
        components: {
            ProjectComponent,
            CheckButtonComponent,
            ModalComponent,
            DragAndDropComponent,
            HangmanGameComponent
        },
        data(){
            return{
                component:ModalComponent
            }
        },
        methods:{
            DragAndDropModal(){
                this.component = DragAndDropComponent
            },
            HangmanGameModal(){
                this.component = HangmanGameComponent
            }
        }
    }
</script>