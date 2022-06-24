<template>
    <HeaderComponent :titulo="'Drag and drop table'"/>
    <BodyComponent>
        <input type="text" placeholder="Search name" class="form-control" id="search-task">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Deadline</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="task-tbody">
            </tbody>
        </table>
    </BodyComponent>
    <FooterComponent>
        <PrimaryButtonComponent :btnValue="'New Task'" @click="$emit('change-modal-component','TaskModalComponent')"/>
    </FooterComponent>
</template>
<script>
    import HeaderComponent from "../../modal/HeaderComponent.vue";
    import BodyComponent from "../../modal/BodyComponent.vue";
    import FooterComponent from "../../modal/FooterComponent.vue";
    import PrimaryButtonComponent from "../../PrimaryButtonComponent.vue";
   export default {
    name: 'DragAndDropComponent',
    components:{
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        PrimaryButtonComponent
    }
   }
</script>