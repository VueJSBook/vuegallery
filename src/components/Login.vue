<template>
  <div class="login">
    <div class="col-md-10 col-md-offset-1">
      <div>
        <router-link to="/admin" class="btn btn-default"> Back</router-link>
      </div>
    </div>

    <div class="col-md-10 col-md-offset-1">
      <div v-if="status=='success'" class="alert alert-success" role="alert"> {{ message }} </div>
      <div v-if="status=='error'">
        <div v-for="error in errors">
          <div class="alert alert-danger" role="alert"> {{ error }} </div>
        </div>
      </div>
      <div class="well well bs-component">
        <form class="form-horizontal" @submit.prevent="validateForm">
          <fieldset>
            <legend>Login</legend>
            <div class="form-group">
              <label for="email" class="col-lg-2 control-label">Email</label>
              <div class="col-lg-10">
                <input v-validate="'required|email'" type="text" class="form-control" id="email" name="email" placeholder="Enter your email" v-model="user.email">
                <span v-show="ferrors.has('email')" class="text-danger">{{ ferrors.first('email') }}</span>
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-lg-2 control-label">Password</label>
              <div class="col-lg-10">
                <input v-validate="'required'" type="password" class="form-control" id="password" name="password" placeholder="Password" v-model="user.password">
                <span v-show="ferrors.has('password')" class="text-danger">{{ ferrors.first('password') }}</span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { signin } from '../services/auth.js'

  export default {
    name: 'login',
    data () {
      return {
        errors: [],
        user: {
          email: '',
          password: ''
        },
        status: '',
        message: ''
      }
    },
    methods: {
      validateForm (e) {
        this.$validator.validateAll()
        if (!this.ferrors.any()) {
          signin(this, this.user)
        }
      }
    }
  }
</script>

<style scoped>
</style>
