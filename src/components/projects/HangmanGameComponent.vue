<template>
    <HeaderComponent :titulo="'Hangman Game'"/>
    <BodyComponent>
    </BodyComponent>
    <FooterComponent>
    </FooterComponent>
</template>
<script>
    import HeaderComponent from "../modal/HeaderComponent.vue";
    import BodyComponent from "../modal/BodyComponent.vue";
    import FooterComponent from "../modal/FooterComponent.vue";
   export default {
    name: 'HangmanGameComponent',
    components:{
        HeaderComponent,
        BodyComponent,
        FooterComponent
    },
        emits:["change-modal-component"]
   }
</script>