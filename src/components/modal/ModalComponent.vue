<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div :class="modalClasses">
          <div class="modal-content" id="modal-content">
            <slot></slot>
          </div>
      </div>
    </div>
</template>
<script>
    export default {
        name:"ModalComponent",
        props:{
          modalClasses:{
            type:String,
            default:'modal-dialog'
          }
      }
    }
    
</script>