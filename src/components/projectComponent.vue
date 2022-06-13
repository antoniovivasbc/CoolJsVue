<template>
  <div>
      <div class="project">
          <div class="project-info">
              <h4> {{ title }} </h4>
              <p> {{ description }} </p>
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
    name: 'dragDropTable',
    data() {
      return {
        title: "Drag and drop table",
        description: "Drag items and place them where you want. <br> *On mobile you have to click the first item and then click where you want to place it."
      }
    }
  }
</script>