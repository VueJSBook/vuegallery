<template>
  <div class="admindashboard container">

    <div class="row banner">

      <div class="col-md-12">

        <div class="list-group">
          <div class="list-group-item">
            <div class="row-action-primary">
              <h4 class="list-group-item-heading"><span class="glyphicon glyphicon-user"></span> Manage User</h4>
            </div>
            <div class="row-content">
              <router-link to="/admin/users" class="btn btn-default btn-raised">All Users</router-link>
              <router-link to="/admin/users/create" class="btn btn-primary btn-raised">New User</router-link>
            </div>
          </div>
          <div class="list-group-separator"></div>
          <div class="list-group-item">
            <div class="row-action-primary">
              <h4 class="list-group-item-heading"><span class="glyphicon glyphicon-picture"></span> Manage Images</h4>
            </div>
            <div class="row-content">
              <router-link to="/admin/images" class="btn btn-default btn-raised">All Images</router-link>
              <router-link to="/admin/images/create" class="btn btn-primary btn-raised">New Image</router-link>
            </div>
          </div>
          <div class="list-group-separator"></div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'admindashboard',
    data () {
      return {
        msg: 'Admin area'
      }
    }
  }
</script>

<style scoped>
</style>
