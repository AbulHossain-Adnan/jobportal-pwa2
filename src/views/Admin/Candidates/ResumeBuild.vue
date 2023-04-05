<template lang="">
    <div>
        <div class="card mb-3">
            <div class="card-header text-white bg-success"><p class="text-white ml-10"> Resume Visibility to Employer(s):  <b><i class="fa-solid fa-lock-open"></i> Public</b> Change</p>
            </div>
            <div class="card-body">
            <div class="row">
                    <h4 class="card-title">Home /  Edit Resume</h4><br>
                        <div class="shadow-none mt-3  bg-light rounded">

                             <!-- Nav tabs -->
                        <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                            <li class="nav-item">
                                <router-link   :to="{ name: 'dashboard_step_one' }" class="btn btn-sm btn-soft-secondary nav-link " >
                                    <span class="d-none d-sm-block "> <h5><i class="fa-solid fa-user-graduate"></i></h5>  Personal</span> 
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link   :to="{ name: 'dashboard_two' }" class="btn btn-sm btn-soft-secondary nav-link">
                                    <span class="d-none d-sm-block"> <h5><i class="fa-solid fa-graduation-cap"></i></h5> Education/Training</span> 
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link   :to="{ name: 'dashboard_three' }" class="btn btn-sm btn-soft-secondary nav-link">
                                    <span class="d-none d-sm-block"><h5><i class="fa-sharp fa-solid fa-briefcase"></i></h5>  Employment</span> 
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link   :to="{ name: 'dashboard_fore' }" class="btn btn-sm btn-soft-secondary nav-link">
                                    <span class="d-none d-sm-block"><h5><i class="fa-solid fa-list"></i></h5>  Other Information</span> 
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link   :to="{ name: 'dashboard_five' }" class="btn btn-sm btn-soft-secondary nav-link">
                                    <span class="d-none d-sm-block"><h5><i class="fa-solid fa-camera"></i></h5>  Files</span> 
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    
    <router-view> </router-view>

</div>
</div>
</div>

<vue-progress-bar></vue-progress-bar>
      <notifications />
</div>
</template>
<script>

import PaginationComponent from "../../../components/PaginationComponent.vue";
import { ElNotification } from "element-plus";


import axios from "axios";
import Form from "vform";


 
import {
  Button,
  HasError,
  AlertError,
  AlertErrors,
  AlertSuccess,
} from "vform/src/components/bootstrap5";

export default {
  name: "CCCjobpostsTable",
  components: {

    PaginationComponent,
    Button,
    HasError,
    AlertError,
    AlertErrors,
  
    AlertSuccess,
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      //   backendUrl: "http://127.0.0.1:8000/",

      personaldetails: [],
      divisions:[],
      districts:[],
      thanas:[],
      addresses:[],
      storeMode:true,
      addressStoreMode:true,

      jobposts: [],

      form: new Form({
        id: "",
        job_portal_users: "",
        first_name: "",
        last_name: "",
        father_name: "",
        mother_name: "",
        birthdate: "",
        gender: "",
        religion: "",
        marital_status: "",
        nationality: "",
        passport_number: "",
        passport_issue_date: "",
        primary_number: "",
        emargency_number: "",
        email: "",
        blood_group: ""
      }),
      addressForm: new Form({
        addressDetails:
        [{
        id: "",
        job_portal_user_id: localStorage.getItem('auth_id'),
        division_id: "",
        district_id: "",
        thana_id: "",
        area: "",
        type: "",

    }]
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
    getData() {

    // fetching personal details from resumes table
      this.$Progress.start();
      let resumes =`${this.backendUrl}resumes`;
      axios
        .get(resumes).then((response) => {
          if(response.data.first_name) {
                this.form.fill(response.data);
                this.storeMode = false;
            }
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
        // end 

    // fetching division data
        let divisionUrl =`${this.backendUrl}division`;
      axios
        .get(divisionUrl).then((response) => {
         this.divisions = response.data;


        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });

           // fetching address data
           let auth_id = localStorage.getItem('auth_id');
           let addresses =`${this.backendUrl}user-address/`+auth_id;
      axios
        .get(addresses).then((response) => {
            if(response.data.length > 0) {
                this.addressForm.addressDetails = response.data;
            }
            if(response.data.length > 1) {
                this.addressStoreMode = false;
            }
         console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    },

   

    // Store PersonalDetails
    resumeStore() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}resumes`)
        .then((response) => {
          if (this.form.successful) {
                this.storeMode = false;
                ElNotification({
                    title: "Success",
                    message: "Data Stored SuccessFully",
                    type: "success",
                });
          } else {
                this.$Progress.fail();
                ElNotification({
                    title: "Error",
                    message: "Data Not Stored",
                    type: "error",
                });
            }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
    // End PersonalDetails Store\


       // Start resume Update
       resumeUpdate() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .put(`${this.backendUrl}resumes/` + this.form.id).then((response) => {
          this.getData();
          if (this.form.successful) {
                this.$Progress.finish();
                    ElNotification({
                        title: "Success",
                        message: "Data Updated Successfully",
                        type: "success",
                    });
            } else {
                    this.$Progress.fail();
                    ElNotification({
                        title: "Error",
                        message: "Data Not Updated",
                        type: "error",
                    });
                }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
    // End resume Update


    // Store Address data
     addressStore() {
        this.$Progress.start();
        this.addressForm.busy = true;
        this.addressForm
        .post(`${this.backendUrl}address`)
        .then((response) => {
            console.log(response.data);
            console.log('address respn');

          if (this.addressForm.successful) {
          
              ElNotification({
                  title: "Success",
                  message: "Data Stored SuccessFully",
                  type: "success",
                });
                this.$Progress.finish();
          } else {
                this.$Progress.fail();
                ElNotification({
                    title: "Error",
                    message: "Data Not Stored",
                    type: "error",
                });
            }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
    // End Address Store


    // update addresses 

    addMoreAddresses() {
        this.addressForm.addressDetails.push({
            id: "",
            job_portal_user_id: localStorage.getItem('auth_id'),
            division_id: "",
            district_id: "",
            thana_id: "",
            area: "",
            type: "",
        });
    },

    // remove multiple row addresses 
    removeAddress(index) {
        this.addressForm.addressDetails.splice(index,1);
    },
    // end

    // for fetching district data 
    changeDivisionEvent($event){
      let fetchDistrictsUrl = `${this.backendUrl}division/districts/`+$event.target.value;
      axios .get(fetchDistrictsUrl).then((response) => {
          this.districts = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // for fetching thanas data 
    changeDistrictEvent($event){
      let fetchThanasUrl = `${this.backendUrl}district/thanas/`+$event.target.value;
      axios.get(fetchThanasUrl).then((response) => {
          this.thanas = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>