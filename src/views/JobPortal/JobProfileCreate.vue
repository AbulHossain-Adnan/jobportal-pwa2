<template>
    <div id="register">
      <div class="row justify-content-center">
            <div class="col-md-5 mt-10">
              <div class="card overflow-hidden">
                <div class="bg-primary bg-soft">
                  <div class="row">
                    <div class="col-7">
                      <div class="text-primary p-4">
                        <h5 class="text-primary">Free Register</h5>
                        <p>Get your free Skote account now.</p>
                      </div>
                    </div>
                    <div class="col-5 align-self-end">
                      <img :src="$store.state.image" :alt="Image" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div>
                    <a href="index.html">
                      <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                          <img :src="$store.state.image" :alt="Image" class="rounded-circle" height="34" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div class="p-2">
                    <form @submit.prevent="submit()" @keydown="form.onKeydown($event)">
                      <div v-if="form.progress" class="text-center">
                        Progress: {{ form.progress.percentage }}%
                      </div>
                      <AlertError :form="form" message="There were some problems with your input." />
  
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input v-model="form.name" type="text" name="name" class="form-control" placeholder="Enter name" required />
                            <HasError :form="form" field="name" />
                          </div>
  
                          <div class="mb-3">
                            <label for="mobile" class="form-label">Mobile</label>
                            <input v-model="form.mobile" type="text" name="mobile" class="form-control" placeholder="Enter mobile" />
                            <HasError :form="form" field="mobile" />
                          </div>
  
                          <div class="mb-3">
                            <label for="phone_no" class="form-label">Phone no</label>
                            <input v-model="form.phone_no" type="text" name="phone_no" class="form-control" placeholder="Enter phone no" />
                            <HasError :form="form" field="phone_no" />
                          </div>
  
                          <div class="mb-3">
                            <label for="nid" class="form-label">NID</label>
                            <input v-model="form.nid" type="text" name="nid" class="form-control" placeholder="Enter nid" />
                            <HasError :form="form" field="nid" />
                          </div>
  
                          <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <textarea v-model="form.address" rows="3" cols="50" name="address" class="form-control"
                              placeholder="Enter address here..."></textarea>
                            <HasError :form="form" field="address" />
                          </div>
                        </div>
  
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="bn_name" class="form-label">Bangla name</label>
                            <input v-model="form.bn_name" type="text" name="bn_name" class="form-control"
                              placeholder="Enter bangla name" required/>
                            <HasError :form="form" field="bn_name" />
                          </div>
  
                          <div class="mb-3">
                            <label for="employment_status" class="form-label">Employment status</label>
                            <select v-model="form.employment_status" name="employment_status"
                              class="form-select">
                              <option value="General">General</option>
                              <option value="Student">Student</option>
                              <option value="Alumni">Alumni</option>
                            </select>
                            <HasError :form="form" field="employment_status" />
                          </div>
  
                          <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input v-model="form.email" type="email" name="email" class="form-control"
                              placeholder="Enter email" required />
                            <HasError :form="form" field="email" />
                          </div>
  
                          <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input v-model="form.username" type="text" name="username" class="form-control"
                              placeholder="Enter username" required />
                            <HasError :form="form" field="username" />
                          </div>
  
                          <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input v-model="form.password" type="password" name="password" class="form-control"
                              placeholder="Enter password" required />
                            <HasError :form="form" field="password" />
                          </div>
                        </div>
                      </div>
  
                      <div class="mt-4 d-grid">
                        <button :disabled="form.busy" type="submit" class="btn btn-primary waves-effect waves-light">
                          Register
                        </button>
                      </div>
  
                      <div class="mt-4 text-center">
                        <h5 class="font-size-14 mb-3">Sign up using</h5>
  
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
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-5 text-center">
                <div>
                  <p>
                    Already have an account ?
                    <a href="auth-login.html" class="fw-medium text-primary">
                      Login</a>
                  </p>
                  <p>
                    ©Skote. Crafted with
                    <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
  
      <vue-progress-bar></vue-progress-bar>
      <notifications />
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { setupCache } from 'axios-cache-adapter';



  const cache = setupCache({
  maxAge: 15 * 60 * 1000, // cache for 15 minutes
  exclude: { query: false }, // include query parameters in cache key
});

const api = axios.create({
  adapter: cache.adapter,
});

  import Form from "vform";
  import {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
  } from "vform/src/components/bootstrap5";
  
  export default {
    name: "Register",
    components: { Button, HasError, AlertError, AlertErrors, AlertSuccess },
  
    data() {
      return {
        backendUrl: this.$store.state.backendUrl,
        form: new Form({
          name: "",
          bn_name: "",
          mobile: "",
          phone_no: "",
          email: "",
          nid: "",
          employment_status: "General",
          address: "",
          username: "",
          password: "",
        }),
      };
    },
  
    methods: {
      submit() {
        this.$Progress.start();
        this.form.busy = true;
        this.form
          api.post(`${this.backendUrl}auth/register`)
          .then((response) => {
            if (this.form.successful) {
              this.form.reset();
              this.form.clear();
              this.$Progress.finish();
              this.$notify({
                type: "success",
                title: "Success",
                text: "Registration Success",
              });
            
            } else {
              this.$Progress.fail();
              this.$notify({
                type: "error",
                title: "Error",
                text: "Something went wrong try again later",
              });
            }
          })
          .catch((e) => {
            this.$Progress.fail();
           
          });
      },
    },
  };
  </script>
  