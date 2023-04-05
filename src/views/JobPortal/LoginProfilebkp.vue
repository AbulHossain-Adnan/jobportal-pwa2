<template lang="">
    <div>
    <div>

      <!-- <div class="clearfix"></div> -->
      <!-- Titlebar
  ================================================== -->
      <!-- <div id="titlebar" class="single"> -->
  
      <!-- <div class="container">
  
          <div class="sixteen columns">
              <h2>My Account</h2>
              <nav id="breadcrumbs">
                  <ul>
                      <li>You are here:</li>
                      <li><a href="#">Home</a></li>
                      <li>My Account</li>
                  </ul>
              </nav>
          </div>
  
      </div> -->
      <!-- </div> -->
  
      <!-- Content
  ================================================== -->
      <br /><br />
      <!-- Container -->
      <div class="container"><br>
        <div class="row">
          <div class="col-sm-6 m-auto shadow-lg p-3 mb-5 bg-body rounded">
            <router-link :to="{ name: 'scout_home' }"
              ><h2>
                <i class="fa-sharp fa-solid fa-arrow-left"></i> Back
              </h2></router-link
            >
            <br />
            <h2 class="text-center"><b>LogIn Profile</b></h2><br> 
           
            <form class="form-horizontal" @submit.prevent="submit" @keydown="form.onKeydown($event)">

                <div v-if="form.progress" class="text-center">Progress: {{ form.progress.percentage }}%</div>
                <AlertError :form="form" message="There were some problems with your input." />
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" v-model="form.email" name="email" class="form-control" placeholder="Enter email">
                    <HasError :form="form" field="email" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <div class="input-group auth-pass-inputgroup">
                        <input type="password" v-model="form.password" name="password" class="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon">
                        <button class="btn btn-light " type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                    </div>
                    <HasError :form="form" field="password" />
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember-check">
                    <label class="form-check-label" for="remember-check">
                        Remember me
                    </label>
                </div>

                <div class="mt-3 d-grid">
                    <button class="btn btn-primary waves-effect waves-light" type="submit" :disabled="form.busy">Log In</button>
                </div>

                <div class="mt-4 text-center">
                    <h5 class="font-size-14 mb-3">Sign in with</h5>

                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="javascript::void()" class="social-list-item bg-primary text-white border-primary">
                                <i class="mdi mdi-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript::void()" class="social-list-item bg-info text-white border-info">
                                <i class="mdi mdi-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript::void()" class="social-list-item bg-danger text-white border-danger">
                                <i class="mdi mdi-google"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="mt-4 text-center">
                    <a href="auth-recoverpw.html" class="text-muted"><i class="mdi mdi-lock me-1"></i> Forgot your password?</a>
                </div>
                </form>
          </div>
          <div class="mt-5 text-center">

<div>
    <p>Don't have an account ? <a href="auth-register.html" class="fw-medium text-primary"> Signup now </a> </p>
    <p>© Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
</div>
</div>
        </div>
    </div>

      </div>
    </div>
  </template>
<script>
import axios from 'axios';
import Form from 'vform'
import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'
export default {
    name:"login",
    data(){
        return {
            backendUrl: this.$store.state.backendUrl,
            form: new Form({
                email: "",
                password: "",
            }),
        }
    },
    methods:{
        submit(){
         
            this.form.busy = true
            this.form.post(`${this.backendUrl}jobprofile/login`)
                .then(response => {
                    console.log('logged user')
                    console.log(response.data.auth_id)
                    localStorage.setItem('jobUserLoggedInToken',response.data.token)
                     localStorage.setItem('auth_id',response.data.auth_id)
                    if(this.form.successful){
                        this.$router.push({name: 'app.dashboard'})
                    }else{
                        this.$router.push({name: 'loginprofile'})
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

}
</script>
  