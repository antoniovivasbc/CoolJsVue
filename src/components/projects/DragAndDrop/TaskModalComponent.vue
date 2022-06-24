<template>
  <div class="modal-content">
    <HeaderComponent :titulo="'Add New Task'"/>
    <BodyComponent>
        <form id="task-form" class="form-inactive">
            <div class="mb-3">
              <label for="exampleInputEmail1" data-index="0" class="form-label">Task name</label>
              <input type="text" class="form-control" id="task-name" required aria-describedby="">
              <label for="exampleInputEmail1" class="form-label">Deadline</label>
              <input type="date" class="form-control" id="deadline" required aria-describedby="">
            </div>
          </form>
    </BodyComponent>
    <FooterComponent>
        <PrimaryButtonComponent type="submit" form="task-form" :btnValue="'Submit'"/>
    </FooterComponent>
  </div>
</template>
<script>
    import HeaderComponent from "../../modal/HeaderComponent.vue";
    import BodyComponent from "../../modal/BodyComponent.vue";
    import FooterComponent from "../../modal/FooterComponent.vue";
    import PrimaryButtonComponent from "../../PrimaryButtonComponent.vue";
   export default {
    name: 'TaskModalComponent',
    components:{
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        PrimaryButtonComponent
    }
   }
</script>