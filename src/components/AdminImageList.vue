<template>
  <div class="adminimagelist">
    <div class="col-md-10 col-md-offset-1">
      <div>
        <router-link to="/admin/" class="btn btn-default"> Back</router-link>
        <router-link to="/admin/images/create" class="btn btn-success"> New Image</router-link>
      </div>
    </div>

    <div class="col-md-10 col-md-offset-1">

      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>

          <tr v-for="image in images">
            <td><img :src="image.thumbnail" width="200"/></td>
            <td>{{image.title}} </td>
            <td>
              <router-link :to="{ name: 'editimages', params: { id: image.id }}" class="btn btn-info"> Edit</router-link>
              <router-link :to="{ name: 'deleteimages', params: { id: image.id }}" class="btn btn-danger"> Delete</router-link>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { getAuthHeader } from '../services/auth.js'

  export default {
    name: 'adminimagelist',
    data () {
      return {
        images: [],
        errors: []
      }
    },
    created () {
      var config = {
        headers: getAuthHeader()
      }

      axios.get('http://vuebook.app/api/v1/images', config)
        .then(response => {
          this.images = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style scoped>
</style>
