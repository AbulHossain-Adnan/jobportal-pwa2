<template lang="">
    <div>
        <div class="row">
        <div class="col-sm-6">
        <div class="card">
         <div class="card-body">
                <div class="col-sm-12  text-center">
                    <div class="card" style="width: 15rem;">
                    <img :src="$store.state.resume_image" :alt="Image" class="img-thumbnail rounded-circle"/>
                    </div>
                </div>
                <form class="row g-3"  @submit.prevent="update()" @keydown="form.onKeydown($event)">
                <div v-if="form.progress" class="text-center">
                      Progress: {{ form.progress.percentage }}%
                    </div>
                    <AlertError :form="form" message="There were some problems with your input." />
        
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label" ><b>First Name*</b></label>
              <input v-model="form.first_name" type="text" class="form-control" placeholder="Your First name" aria-label="First name"/>
              <HasError :form="form" field="first_name" />
            </div>

            <div class="col-md-12">
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
        
            <div class="col-md-12">
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

            <div class="col-md-12">
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
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label"
                ><b>Date of Birth*</b></label
              >
              <input
              v-model="form.birthdate"
                type="date"
                class="form-control"
                aria-label="Middle name"
              />
              <HasError :form="form" field="birthdate" />
            </div>

            <div class="col-md-12">
                <div class="mt-4">
                <label for="inputEmail4" class="form-label"
                  ><b>Gender *</b></label
                ><br>
              <div class="btn-group">
              <input  type="radio" class="btn-check" value="Male" name="options" v-model="form.gender" id="option1" autocomplete="off" checked />
              <label class="btn btn-secondary" for="option1"> <i class="fa-solid fa-person"></i> Male</label>

              <input type="radio" class="btn-check" value="Female" name="options" v-model="form.gender" id="option2" autocomplete="off" />
              <label class="btn btn-secondary" for="option2"> <i class="fa-solid fa-person"></i> Female</label>

              <input type="radio" class="btn-check" value="Others" name="options" v-model="form.gender" id="option3" autocomplete="off" />
              <label class="btn btn-secondary" for="option3">  <i class="fa-sharp fa-solid fa-venus"></i> Others</label>
            </div>
            </div>
            <HasError :form="form" field="gender" />
            </div>
   
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label"
                ><b>Phone number*</b></label
              >
              <input
              v-model="form.personal_number"
                type="text"
                class="form-control"
                placeholder="Type Your phome number"
                aria-label="phone number"
              />
              <HasError :form="form" field="personal_number" />
            </div>

            <!-- <div class="col-md-12">
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
            </div> -->

            <!-- <div class="col-md-12">
              <label for="inputCity" class="form-label"
                ><b>NID No: </b></label
              >
              <input type="number" class="form-control" v-model="form.nid" id="inputCity" placeholder="Type Your NID Number"/>
              <HasError :form="form" field="nid" />
            </div> -->
            <div class="col-md-12">
              <label for="inputCity" class="form-label"
                ><b>EWU ID NO: </b></label
              >
              <input type="number" class="form-control" id="inputCity" v-model="form.ewu_id_no" placeholder="Type Your EWU Id Number"/>
              <HasError :form="form" field="ewu_id_no" />
            </div>

            <!-- <div class="col-md-12">
              <label for="inputCity" class="form-label"
                ><b>Address: </b></label
              >
              <input type="text" class="form-control" id="inputCity" v-model="form.address" placeholder="Type Your Address" />
              <HasError :form="form" field="address" />
            </div> -->

        
            <div class="col-12">
              <button type="submit" class="btn btn-primary btn-lg">Update</button>
            </div>
          </form>
        </div>
    </div>
</div>

    <div class="col-sm-6">
        <div class="card">
         <div class="card-body">
            <form class="row g-3"  @submit.prevent="accountUpdate()" @keydown="accountForm.onKeydown($event)">
                <div v-if="form.progress" class="text-center">
                Progress: {{ form.progress.percentage }}%
                </div>
                <!-- <AlertError :form="form" message="There were some problems with your input." /> -->
                <div class="col-md-12">
                    <div class="mt-10">
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
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label"
                ><b>Current Password* </b></label
              >
              <input
              v-model="accountForm.currentpassword"
                type="currentpassword"
                class="form-control"
                placeholder="Type Your currentpassword"
                aria-label="Last name"
              />
              <HasError :form="accountForm" field="password" />
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label"
                ><b>New Password* </b></label
              >
              <input
              v-model="accountForm.newpassword"
                type="newpassword"
                class="form-control"
                placeholder="Type Your newpassword"
                aria-label="newpassword"
              />
              <HasError :form="accountForm" field="newpassword" />
            </div>
            <div class="col-6">
              <button type="submit" class="btn btn-primary btn-lg">Update</button>
            </div>
          </form>
        </div>
    </div>
</div>

        </div>
    </div>
</template>
<script>
import axios from "axios";
import Form from "vform";
import { ElNotification } from "element-plus";
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
        id:"",
        first_name: "",
        middle_name: "",
        last_name: "",
        personal_number: "",
        email: "",
        password: "",
        blood_group: "",
        birthdate: "",
        nid: "",
        // employment_status: "",
        ewu_id_no:"",
        // address: "",
        // username: "",
        gender:"",
      }),

      // accountUpdate form 
      accountForm: new Form({
        id:"",
        currentpassword:"",
        newpassword:"",
      }),
    };
  },
  watch: {
    keyword: function () {
      this.getData();
    },
  },

  mounted() {
    console.log("Component mounted.");
    this.getData();
  },

  methods: {

    getData(url) {
     
      let auth_id = localStorage.getItem('auth_id');
   
      let linkUrl = url ? url : `${this.backendUrl}jobprofile/home/`+auth_id;
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            // field_name: this.fieldName,
            // keyword: this.keyword,
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log('sddddddddddddddddddddddddddddddddddddddddddddd');

            this.form.fill(response.data.resumes);
            // this.form.employment_status = response.data.employment_status;
            // this.form.nid = response.data.nid;
            // this.form.address = response.data.address;

         
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    },


// update resume profile 
    update() {
      let resume_id = localStorage.getItem('resume_id');
   
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .put(`${this.backendUrl}jobprofile/` + resume_id)
        .then((response) => {
          if (this.form.successful) {
            // this.$router.push({ name: 'dashboard_managejobs'})
            ElNotification({
                    title:  response.data.type,
                    message:  response.data.message,
                    type: response.data.type,
                });
          } else {
            this.$Progress.fail();
            ElNotification({
                    title:  response.data.type,
                    message:  response.data.message,
                    type: response.data.type,
                });
          }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },

    accountUpdate() {

      let auth_id = localStorage.getItem('auth_id');
      this.$Progress.start();
      this.accountForm.busy = true;
      this.accountForm
        .put(`${this.backendUrl}jobprofile/account-update/` + auth_id)
        .then((response) => {

          if (response.data.type == 'success') {
            this.accountForm.reset();
            this.accountForm.clear();

            ElNotification({
                    title:  response.data.type,
                    message:  response.data.message,
                    type: response.data.type,
                });
          } else {
            this.$Progress.fail();
            ElNotification({
                    title:  response.data.type,
                    message:  response.data.message,
                    type: response.data.type,
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
  