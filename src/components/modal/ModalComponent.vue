<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
          <div class="modal-content" id="modal-content">
            <HeaderComponent/>
            <BodyComponent/>
            <FooterComponent/>
          </div>
      </div>
    </div>
</template>
<script>
import HeaderComponent from "@/components/modal/HeaderComponent.vue"
import BodyComponent from "@/components/modal/BodyComponent.vue"
import FooterComponent from "@/components/modal/FooterComponent.vue"
    export default {
        name:"ModalComponent",
        props: {
            title:String,
            description:String
        },
        components:{
            HeaderComponent,
            BodyComponent,
            FooterComponent
        }
    }
</script>