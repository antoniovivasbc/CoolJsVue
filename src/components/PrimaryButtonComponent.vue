<template>
    <button type="button" class="btn btn-primary project-btn">
        {{btnValue}}
    </button>
</template>

<script>
   export default {
    name:'PrimaryButtonComponent',
    props:{
        btnValue:String
    }
   }
</script>