import axios from 'axios'
import decode from 'jwt-decode'
import { EventBus } from './event-bus.js'

export default {

  signup: function (context, user) {
    axios.post('http://vuebook.app/api/v1/register', user)
      .then(response => {
        console.log(response.data)
        if (response.data.user) {
          console.log('A new user has been created')
          context.status = 'success'
          context.message = response.data.message
          context.errors = null
          context.$router.push('/login')
        } else {
          context.status = 'error'
          context.errors = response.data.errors
        }
      })
      .catch(e => {
        context.errors.push(e)
      })
  },
  signin: function (context, user) {
    axios.post('http://vuebook.app/api/v1/login', user)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          console.log(response.data.token)
          context.$router.push('/admin')
        } else {
          context.status = 'error'
          context.errors = response.data
        }
      })
      .catch(e => {
        context.status = 'error'
        context.errors.push(e)
      })
  }
}

export function signin (context, user) {
  axios.post('http://vuebook.app/api/v1/login', user)
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        console.log(response.data.token)
        EventBus.$emit('login', 'logged in')
        context.$router.push('/admin')
      } else {
        context.status = 'error'
        context.errors = response.data
      }
    })
    .catch(e => {
      context.status = 'error'
      context.errors.push(e)
    })
}

export function auth (to, from, next) {
  console.log(loggedIn())
  if (!loggedIn()) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

export function loggedIn () {
  let token = getToken()
  return !!token && !tokenNotExpired(token)
}

export function getToken () {
  return localStorage.getItem('token')
}

export function tokenExpirationDate (encodedToken) {
  let token = decode(encodedToken)
  if (!token.exp) { return null }
  const date = new Date(0)
  date.setUTCSeconds(token.exp)
  return date
}

export function tokenNotExpired (token) {
  let expirationDate = tokenExpirationDate(token)
  return expirationDate < new Date()
}

export function getAuthHeader () {
  return {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
}

export function logout (context) {
  localStorage.removeItem('token')
  EventBus.$emit('logout', 'logged out')
}
