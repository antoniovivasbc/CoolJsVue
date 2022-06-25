<template>
  <div class="modal-content">
    <HeaderComponent :titulo="'Add New Task'"/>
    <BodyComponent>
        <form id="task-form" class="form-inactive" @submit="createTask">
            <div class="mb-3">
              <label for="name" data-index="0" class="form-label">Task name</label>
              <input type="text" class="form-control" id="task-name" v-model="name" required aria-describedby="">
              <label for="deadline" class="form-label" >Deadline</label>
              <input type="date" class="form-control" id="deadline" v-model="deadline" required aria-describedby="">
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
    },
    data(){
      return{
        name:null,
        deadline:null
      }
    },
    methods:{
      async createTask(e){
        e.preventDefault();
        const data = {
          name:this.name,
          deadline:this.deadline
        }
        const dataToString = JSON.stringify(data)
        const request = await fetch("http://localhost:3000/tasks", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: dataToString
        })
        await request.json()
        this.$emit('change-modal-component', 'DragAndDropComponent')
      }
    }
   }
</script>