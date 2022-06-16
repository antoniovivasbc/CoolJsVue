<template>
    <div>
        <div class="project">
            <div class="project-info">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </div>
            <button type="button" class="btn btn-primary project-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Check me!
            </button>
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