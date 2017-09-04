<template>
  <div class="adminimagedelete">
    <div class="col-md-10 col-md-offset-1">
      <div>
        <router-link to="/admin" class="btn btn-default"> Back</router-link>
      </div>
    </div>

    <div class="col-md-10 col-md-offset-1">
      <div class="well well bs-component">
        <form class="form-horizontal" @submit.prevent="deleteImage">
          <fieldset>
            <legend>Are you sure that you want to delete {{ image.title }}?</legend>

            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary">Delete</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { getAuthHeader } from '../services/auth.js'

  export default {
    name: 'adminimagedelete',
    data () {
      return {
        errors: [],
        image: []
      }
    },
    created () {
      this.getImage(this.$route.params.id)
    },
    methods: {
      getImage: function (id) {
        axios.get('http://vuebook.app/api/v1/images/' + id)
          .then(response => {
            console.log(response.data)
            this.image = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      deleteImage: function () {
        var config = {
          headers: getAuthHeader()
        }
        const url = 'http://vuebook.app/api/v1/images/' + this.$route.params.id
        axios.delete(url, config)
          .then(response => {
            console.log(response.data)
            this.$router.push('/admin/images')
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style scoped>
</style>
