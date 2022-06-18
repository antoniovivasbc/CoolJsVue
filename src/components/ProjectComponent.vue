<template>
    <div>
        <div class="project">
            <div class="project-info">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </div>
        <slot/>
        </div>
        <hr>
    </div>
</template>
<script>
    export default {
        name:"ProjectComponent",
        props: {
            title:String,
            description:String
        }
    }
</script>