<template>
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        {{btnValue}}
    </button>
</template>

<script>
   export default {
    name:'SecondaryButtonComponent',
    props:{
        btnValue:String
    }
   }
</script>