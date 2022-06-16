<template>
    <div class="modal-body task-modal">
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
    </div>
</template>