<template>
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">Add new task</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <form id="task-form" class="form-inactive">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" data-index="0" class="form-label">Task name</label>
                    <input type="text" class="form-control" id="task-name" required aria-describedby="">
                    <label for="exampleInputEmail1" class="form-label">Deadline</label>
                    <input type="date" class="form-control" id="deadline" required aria-describedby="">
                  </div>
                </form>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Back</button>
              <button type="submit" id="task-submit" form="task-form" class="btn btn-primary" >Submit</button>
          </div>
          </div>
      </div>
    </div>
</template>