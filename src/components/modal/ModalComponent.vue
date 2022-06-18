<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
          <div class="modal-content" id="modal-content">
            <slot></slot>
          </div>
      </div>
    </div>
</template>
<script>
    export default {
        name:"ModalComponent"
    }
</script>