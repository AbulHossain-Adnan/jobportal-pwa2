<template lang="">
  <div>
    <!-- Dashboard -->
    <div id="dashboard">
      <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
      <Sidebar></Sidebar>

      <!-- Content
================================================== -->
      <div class="dashboard-content">
        <!-- Titlebar -->
        <div id="titlebar">
          <div class="row">
            <div class="col-md-12">
              <h2>Job Registration Form</h2>
              <!-- Breadcrumbs -->
              <nav id="breadcrumbs">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li>Job Registration Form</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <form class="row g-3"  @submit.prevent="submit()" @keydown="form.onKeydown($event)">
        <div v-if="form.progress" class="text-center">
              Progress: {{ form.progress.percentage }}%
            </div>
            <AlertError :form="form" message="There were some problems with your input." />

  <h2><b>Personal Information :</b></h2> 
  <div class="col-md-6">
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
  <!-- <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Middle Name*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div> -->
  <div class="col-md-6">
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
              v-model="form.date_of_birth"
                type="date"
                class="form-control"
                aria-label="Middle name"
              />
              <HasError :form="form" field="date_of_birth" />
  </div>

  <div class="col-md-4">
      <label for="inputEmail4" class="form-label"
        ><b>Gender *</b></label
      >
      <div class="btn-group">
              <input  type="radio" class="btn-check" value="Male" name="options" v-model="form.gender" id="option1" autocomplete="off" checked />
              <label class="btn btn-secondary" for="option1"> <i class="fa-solid fa-person"></i> Male</label>

              <input type="radio" class="btn-check" value="Female" name="options" v-model="form.gender" id="option2" autocomplete="off" />
              <label class="btn btn-secondary" for="option2"> <i class="fa-solid fa-person"></i> Female</label>

              <input type="radio" class="btn-check" value="Others" name="options" v-model="form.gender" id="option3" autocomplete="off" />
              <label class="btn btn-secondary" for="option3">  <i class="fa-sharp fa-solid fa-venus"></i> Others</label>

            </div>
            <HasError :form="form" field="gender" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label"><b>Profile Objective* </b></label>
    <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
    <label for="floatingTextarea2">Write Your Profile Objective</label>
  </div>
  </div>  
<h3><b>Educational Information:</b></h3> 
  <div class="col-12">
    <label for="inputAddress" class="form-label"
      ><b> Department* </b></label
    >
    <input
      type="text"
      class="form-control"
      id="inputAddress"
      placeholder="1234 Main St"
    />
  </div>

  <div class="col-md-4">
    <label for="inputEmail4" class="form-label"><b>Degree*</b></label>
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Major (optional)</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Minor (optional)</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>

  <div class="col-md-4">
    <label for="inputEmail4" class="form-label"><b>CGPA*</b></label>
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>

  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Passing year* </b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Last name"
      aria-label="Last name"
    />
  </div>

  <div class="col-md-4">
    <label for="inputEmail4" class="form-label"
      ><b>Passing Semister*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Convocation Year*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>
 

  <div class="col-md-4">
    <label for="inputEmail4" class="form-label"
      ><b>SSC Result*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>HSS Result*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>

  <h2>Experiences:</h2>


  <div class="col-12">
    <label for="inputAddress2" class="form-label">
      <b> Skills*</b></label
    >
    <input
      type="text"
      class="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>

  <div class="col-12">
    <label for="inputAddress2" class="form-label">
      <b> Co-curricular Activity*</b></label
    >
    <input
      type="text"
      class="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>

  <div class="col-md-4">
    <label for="inputEmail4" class="form-label"
      ><b>Training*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Achievement*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>

  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Experience* </b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Last name"
      aria-label="Last name"
    />
  </div>

  <!-- <div class="col-12">
    <label for="inputAddress2" class="form-label">
      <b> Professional Interest*</b></label
    >
    <input
      type="text"
      class="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div> -->

  <!-- <div class="col-12">
    <label for="inputAddress2" class="form-label">
      <b> Personal Interest*</b></label
    >
    <input
      type="text"
      class="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div> -->

 

  <h2>Family Information</h2>

  <div class="col-md-4">
    <label for="inputEmail4" class="form-label"
      ><b>Father Name*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Occupation*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Designation* </b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Last name"
      aria-label="Last name"
    />
  </div>

  <div class="col-md-4">
    <label for="inputEmail4" class="form-label"
      ><b>Mother Name*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Occupation*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Designation* </b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Last name"
      aria-label="Last name"
    />
  </div>

  <h2>Address</h2>

  
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label"
      ><b>Present Address*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"
      ><b>Permanent Address*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>

  <div class="col-md-4">
    <label for="inputEmail4" class="form-label"
      ><b>Country/District*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your First name"
      aria-label="First name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Living Country*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label"
      ><b>Current Possition* </b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Last name"
      aria-label="Last name"
    />
  </div>

  <div class="col-12">
    <label for="inputAddress2" class="form-label">
      <b> Current Organization</b></label
    >
    <input
      type="text"
      class="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>

  <h2>Contact Information:</h2>

  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"
      ><b>Personal Contact*</b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Middle name"
      aria-label="Middle name"
    />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"
      ><b>Email* </b></label
    >
    <input
      type="text"
      class="form-control"
      placeholder="Your Last name"
      aria-label="Last name"
    />
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label"
      ><b>Office Contact </b></label
    >
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label"
      ><b>Job Application Status </b></label
    >
    <input type="text" class="form-control" id="inputCity" />
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label"
      ><b>Linked In Profile Link </b></label
    >
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label"
      ><b>Facebook Profile link </b></label
    >
    <input type="text" class="form-control" id="inputCity" />
  </div>

  <div class="col-md-12">
    <label for="inputCity" class="form-label"
      ><b> Upload Resume/CV</b></label
    >
    <input type="file" class="form-control" id="inputCity" />
  </div>

  <div class="col-12">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="gridCheck"
      />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
      </div>
      <!-- Content / End -->
    </div>
    <vue-progress-bar></vue-progress-bar>
        <notifications />
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Sidebar from "../../components/JobPortalDashboard/Sidebar.vue";
import PaginationComponent from "../../components/PaginationComponent.vue";

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
    Sidebar,
    PaginationComponent,
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
    QuillEditor,
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      //   backendUrl: "http://127.0.0.1:8000/",

      editMode: false,
      showMode: false,
      keyword: "",
      fieldName: "job_title",
      perPage: 5,
      jobposts: [],
      jobcategories: [],
      jobsubcategories: [],
      categorysubcategories: [],
      pagination: [],
      links: [],

      jobposts: [],

      form: new Form({
        id: "",
        job_category_id: "",
        job_sub_category_id: "",
        job_title: "",
        job_code: "",
        company_name: "",
        company_details: "",
        company_address: "",
        no_of_vacancies: "",
        employment_status: "",
        resume_receiver_email: "",
        job_responsibilities: "",
        job_workplace: "",
        min_salary: "",
        max_salary: "",
        festival_bonuses: "",
        gender: "",
        min_experience: "",
        job_level: "",
        job_context: "",
        job_publish_date: "",
        job_deadline: "",
        company_logo: "",
        // min_academic_level:"",
        status: "",
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
    this.getCategory();
    this.getSubCategory();
  },

  methods: {
    getCategory() {
      this.$Progress.start();
      let linkUrl = `${this.backendUrl}job-category`;
      axios
        .get(linkUrl)
        .then((response) => {
          console.log(response.data.data);
          console.log("category");
          this.jobcategories = response.data.data;
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    },

    onChangeEvent($event){
      // alert($event.target.value);

      let linkUrl = `${this.backendUrl}category/subcategories/`+$event.target.value;
      axios
        .get(linkUrl)
        .then((response) => {
          console.log('categorysubcategory')
          console.log(response.data)
          this.categorysubcategories = response.data;
         
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getSubCategory() {
      let linkUrl = `${this.backendUrl}jobsub-category`;
      axios
        .get(linkUrl)
        .then((response) => {
          this.jobsubcategories = response.data.data;
          console.log(this.jobsubcategories);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getData(url) {
      // this.$Progress.start();
      // let linkUrl = url ? url : `${this.backendUrl}job-post`;
      // axios
      //   .get(linkUrl, {
      //     params: {
      //       per_page: this.perPage,
      //       // field_name: this.fieldName,
      //       // keyword: this.keyword,
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response.data.data);
      //     this.jobposts = response.data.data;
      //     this.pagination = response.data.meta;
      //     this.links = response.data.meta.links;
      //     this.$Progress.finish();
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //     this.$Progress.fail();
      //   });
    },

    create() {
      this.editMode = false;
      this.showMode = false;
      this.form.reset();
      this.form.clear();
      // $("#image").val('')
      $("#exampleModal").modal("show");
    },

    show(id) {
      this.showMode = true;
      this.form.reset();
      this.form.clear();
      this.form.fill(id);
      $("#exampleModal").modal("show");
    },

    edit(id) {
      this.editMode = true;
      this.showMode = false;
      this.form.reset();
      this.form.clear();
      this.form.fill(id);
      $("#exampleModal").modal("show");
    },

    onImageChange(e){
      let file = e.target.files[0];
            let reader = new FileReader();

            reader.onloadend = (file) => {
                this.imagePreview = reader.result;
                this.form.company_logo= reader.result;
            }
            reader.readAsDataURL(file);
            },


    store() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}job-post`)
        .then((response) => {

          console.log(response)
         
       

     
          if (this.form.successful) {

            this.$router.push({ name: 'all_jobs'})
            // this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "jobposts Added",
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
          console.log(e);
        });
    },

    update() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .put(`${this.backendUrl}job-post/` + this.form.id)
        .then((response) => {
          this.getData();
          $("#exampleModal").modal("hide");
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "jobposts Updated",
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
          console.log(e);
        });
    },

    destroy(id) {
      // this.$swal
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`${this.backendUrl}job-post/` + id)
              .then((response) => {
                this.$swal.fire("Deleted!", response.data.message, "success");
                this.getData();
              });
          }
        });
    },
  },
};
</script>





