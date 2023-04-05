<template lang="">
    <div>
    <div>

      <div class="clearfix"></div>
      <!-- Titlebar
  ================================================== -->
      <div class="mb-15">
  
      <div class="container">
  
          <div >
              <h2>My Account</h2>
              <!-- <nav id="breadcrumbs">
                  <ul>
                      <li>You are here:</li>
                      <li><a href="#">Home</a></li>
                      <li>My Account</li>
                  </ul>
              </nav> -->
          </div>
  
      </div>
     </div>
  
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
    <p>Don't have an account ? 
       
        <router-link class="fw-medium text-primary" :to="{ name: 'createprofile' }" ><h3>  Signup now </h3></router-link>
     </p>
    <!-- <p>© Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p> -->
</div>
</div>
        </div>
    </div>

      </div>
    </div>
  </template>
<script>
import axios from 'axios';
import { Workbox } from 'workbox-window';


import Form from 'vform'
import Cookies from 'js-cookie'
import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'
export default {
    created() {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/service-worker.js');

      wb.addEventListener('activated', (event) => {
        // refresh the page when the service worker is activated
        window.location.reload();
      });

      wb.register();

      // intercept API requests and cache the responses
      wb.routing.registerRoute(
        ({ url }) => url.pathname.startsWith('/api/jobprofile/login'),
        new wb.strategies.NetworkFirst({
          cacheName: 'api-cache',
          plugins: [
            new wb.cacheableResponse.CacheableResponsePlugin({
              statuses: [0, 200],
            }),
          ],
        })
      );
    }
  },


    name:"login",
    data() {
        return {
            backendUrl: this.$store.state.backendUrl,
            form: new Form({
                email: "",
                password: "",
            }),
        }
    },
    methods:{
        async submit(){
         
            this.form.busy = true

            const response = await axios.post(`${this.backendUrl}jobprofile/login`, this.form, {
            headers: {
                'Cache-Control': 'max-age=60', // cache the response for 60 seconds
            },
        });
        // const data = await response.json();

            var profile_name = response.data.resume.first_name+response.data.resume.middle_name;
            
            console.log('logged user test from adnan')
            console.log(response.data.resume.first_name)
            localStorage.setItem('jobUserLoggedInToken',response.data.token)
                localStorage.setItem('auth_id',response.data.auth_id)
                localStorage.setItem('resume_id',response.data.resume_id)
                localStorage.setItem('profile_name',profile_name)

            //set into cookies
            Cookies.set('jobUserLoggedInToken', response.data.token, { expires: 1/24 }) // expires in 1 hour
            Cookies.set('authIdCookie', response.data.auth_id, { expires: 1/24 }) // expires in 1 hour

          
            if(response.data.status == true) {
                console.log('logged user1')
                this.$router.push({name: 'app.dashboard'})
            }else{
                this.$router.push({name: 'loginprofile'})
            }
        }
    }

}
</script>


<!-- <script>
import axios from 'axios';


import Form from 'vform'
import Cookies from 'js-cookie'
import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'
export default {
    name:"login",
    data() {
        return {
            backendUrl: this.$store.state.backendUrl,
            form: new Form({
                email: "",
                password: "",
            }),
        }
    },
    methods:{
        async submit(){
         
            this.form.busy = true
            this.form.post(`${this.backendUrl}jobprofile/login`)
                .then(response => {

                    var profile_name = response.data.resume.first_name+response.data.resume.middle_name;
                 
                    console.log('logged user test from adnan')
                    console.log(response.data.resume.first_name)
                    localStorage.setItem('jobUserLoggedInToken',response.data.token)
                     localStorage.setItem('auth_id',response.data.auth_id)
                     localStorage.setItem('resume_id',response.data.resume_id)
                     localStorage.setItem('profile_name',profile_name)


                  //set into cookies
                  Cookies.set('jobUserLoggedInToken', response.data.token, { expires: 1/24 }) // expires in 1 hour
                  Cookies.set('authIdCookie', response.data.auth_id, { expires: 1/24 }) // expires in 1 hour

                    if(this.form.successful){
                      console.log('logged user1')
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
</script> -->
  