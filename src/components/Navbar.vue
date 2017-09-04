<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">{{ brand }}</a>
      </div>

      <!-- Navbar Right -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="/">Home</a></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Member
              <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu" v-show="!isLoggedIn">
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
            <ul class="dropdown-menu" role="menu" v-show="isLoggedIn">
              <li><a href="/admin">Admin</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { loggedIn } from '../services/auth.js'
  import { EventBus } from '../services/event-bus.js'

  export default {
    data () {
      return {
        brand: 'Vue.js Book',
        isLoggedIn: loggedIn()
      }
    },
    created () {
      EventBus.$on('login', () => {
        this.isLoggedIn = loggedIn()
      })
      EventBus.$on('logout', () => {
        this.isLoggedIn = loggedIn()
      })
    }
  }
</script>

