<template lang="">
    <div>
      <div class="clearfix"></div>
      <!-- Titlebar
  ================================================== -->
      <!-- <div id="titlebar" class="single"> -->
  
     <div class="container">
  
          <div  class="mb-15">
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
      <!-- </div> -->
  
      <!-- Content
  ================================================== -->
      <br /><br />
      <!-- Container -->
      <div class="container"><br>
        <div class="row">
          <div class="col-sm-9 m-auto shadow-lg p-3 mb-5 bg-body rounded">
            <router-link :to="{ name: 'scout_home' }"
              ><h2>
                <i class="fa-sharp fa-solid fa-arrow-left"></i> Back
              </h2></router-link
            >
            <br />
            <h2 class="text-center"><b>Create Profile</b></h2><br> 
           
            <form class="row g-3"  @submit.prevent="submit()" @keydown="form.onKeydown($event)">
                <div v-if="form.progress" class="text-center">
                      Progress: {{ form.progress.percentage }}%
                    </div>
                    <AlertError :form="form" message="There were some problems with your input." />
        
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label"
                ><b>First Name*</b></label
              >
              <input
              v-model="form.first_name"
                type="text"
                class="form-control"
                placeholder="Your First name"
                aria-label="First name"
              />
              <HasError :form="form" field="first_name" />
            </div>

            <div class="col-md-4">
              <label for="inputEmail4" class="form-label"
                ><b>Middle Name*</b></label
              >
              <input
              v-model="form.middle_name"
                type="text"
                class="form-control"
                placeholder="Your middle name"
                aria-label="middle name"
              />
              <HasError :form="form" field="middle_name" />
            </div>
        
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label"
                ><b>Last Name* </b></label
              >
              <input
              v-model="form.last_name"
                type="text"
                class="form-control"
                placeholder="Your Last name"
                aria-label="Last name"
              />
              <HasError :form="form" field="last_name" />
            </div>

            <div class="col-md-4">
              <label for="inputEmail4" class="form-label"
                ><b>Blood Group*</b></label
              >
              <input
              v-model="form.blood_group"
                type="text"
                class="form-control"
                placeholder="Type Your blood group"
                aria-label="First name"
              />
              <HasError :form="form" field="blood_group" />
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label"
                ><b>Date of Birth*</b></label
              >
              <input
              v-model="form.birthdate"
                type="date"
                class="form-control"
                aria-label="birthdate"
              />
              <HasError :form="form" field="birthdate" />
            </div>

            <div class="col-md-4">
                <label for="inputEmail4" class="form-label"
                  ><b>Gender *</b></label
                >
              <div class="btn-group">
              <input  type="radio" class="btn-check" value="Male" name="options" v-model="form.gender" id="option1" autocomplete="off"  />
              <label class="btn btn-secondary" for="option1"> <i class="fa-solid fa-person"></i> Male</label>

              <input type="radio" class="btn-check" value="Female" name="options" v-model="form.gender" id="option2" autocomplete="off" />
              <label class="btn btn-secondary" for="option2"> <i class="fa-solid fa-person"></i> Female</label>

              <input type="radio" class="btn-check" value="Others" name="options" v-model="form.gender" id="option3" autocomplete="off" />
              <label class="btn btn-secondary" for="option3">  <i class="fa-sharp fa-solid fa-venus"></i> Others</label>

            </div>
            <HasError :form="form" field="gender" />
            </div>
   
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label"
                ><b>Personal number*</b></label
              >
              <input
              v-model="form.personal_number"
                type="text"
                class="form-control"
                placeholder="Type Your Personal number"
                aria-label="phone number"
              />
              <HasError :form="form" field="personal_number" />
            </div>
            
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label"
                ><b>Office number (optional)</b></label
              >
              <input
              v-model="form.office_number"
                type="text"
                class="form-control"
                placeholder="Type Your Office number"
                aria-label="phone number"
              />
              <HasError :form="form" field="office_number" />
            </div>

            <div class="col-md-12">
              <label for="inputPassword4" class="form-label"
                ><b>Employment Status *</b></label
              >
              <select v-model="form.employment_status" name="employment_status"
                            class="form-select">
                            <option value="">Choose One</option>
                            <option value="General">General</option>
                            <option value="Student">Student</option>
                            <option value="Alumni">Alumni</option>
                          </select>
                          <HasError :form="form" field="employment_status" />
            </div>

          
            <div class="col-md-4" v-if="auth_id == null" >
              <label for="inputPassword4" class="form-label"
                ><b>Email* </b></label
              >
              <input
              v-model="form.email"
                type="email"
                class="form-control"
                placeholder="Type Your Email"
                aria-label="your email"
              />
              <HasError :form="form" field="email" />
            </div>
            <div class="col-md-4" v-if="auth_id == null" >
              <label for="inputPassword4" class="form-label"
                ><b>Password* </b></label
              >
              <input
              v-model="form.password"
                type="password"
                class="form-control"
                placeholder="Type Your password"
                aria-label="Last name"
              />
              <HasError :form="form" field="password" />
            </div>

            <div class="col-md-4" v-if="auth_id == null">
              <label for="username" class="form-label"
                ><b> Username* </b></label
              >
              <input
              v-model="form.username"
                type="text"
                class="form-control"
                placeholder="Type Your Username"
                aria-label="Last name"
              />
              <HasError :form="form" field="username" />
            </div>

            <div class="col-md-6">
              <label for="inputCity" class="form-label"
                ><b>NID No: </b></label
              >
              <input type="number" class="form-control" v-model="form.nid" id="inputCity" placeholder="Type Your NID Number"/>
              <HasError :form="form" field="nid" />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label"
                ><b>EWU ID NO: </b></label
              >
              <input type="number" class="form-control" id="inputCity" v-model="form.ewu_id_no" placeholder="Type Your EWU Id Number"/>
              <HasError :form="form" field="ewu_id_no" />
            </div>

            <div class="col-md-12">
              <label for="inputCity" class="form-label"
                ><b>Address: </b></label
              >
              <input type="text" class="form-control" id="inputCity" v-model="form.address" placeholder="Type Your Address" />
              <HasError :form="form" field="address" />
            </div>

        
            <div class="col-12">
              <button type="submit" class="btn btn-primary btn-lg">Create Profile</button>
            </div>
          </form>
          </div>
        </div>
      </div>
      <vue-progress-bar></vue-progress-bar>
        <notifications />
    </div>
  </template>
<script>
import axios from "axios";
import Cookies from 'js-cookie';
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
      auth_id: Cookies.get('authIdCookie'),
      form: new Form({
        first_name: "",
        middle_name:"",
        last_name: "",
        personal_number: "",
        office_number: "",
        email: "",
        password: "",
        blood_group: "",
        birthdate: "",
        nid: "",
        employment_status: "",
        ewu_id_no:"",
        address: "",
        username: "",
        gender:"",
      }),
    };
  },

  mounted() {
    this.getDependentData();
  },

  methods: {
    getDependentData() {
      axios.get(`${this.backendUrl}user/info`,{
        params:{
          token: Cookies.get('alumniLoggedInTokenCookie') ? Cookies.get('alumniLoggedInTokenCookie').split('|')[1] : Cookies.get('jobUserLoggedInToken').split('|')[1],
        }
      }).then((response) => {
        if (!response.data.data.resume){
          this.form.first_name = response.data.data.alumni.first_name
          this.form.last_name = response.data.data.alumni.last_name
          this.form.phone_no = response.data.data.alumni.contact_number
          this.form.blood_group = response.data.data.alumni.blood_group
          this.form.date_of_birth = response.data.data.alumni.dob
          this.form.nid = response.data.data.alumni.nid
          this.form.gender = response.data.data.alumni.gender
        }
      })
    },

    submit() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}jobprofile`,{
          params:{
            auth_id:Cookies.get('authIdCookie')
          }
        })
        .then((response) => {
          console.log(response)
          if (this.form.successful) {
            this.form.reset();
            this.form.clear();
            this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "Registration Success",
            });
            this.$router.push({ name: "loginprofile" });
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
          console.log(e);
        });
    },
  },
};
</script>
  