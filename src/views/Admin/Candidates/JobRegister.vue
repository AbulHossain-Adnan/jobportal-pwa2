<template>
    <div id="form">
      <div class="row">
        <div class="col-xl-12 m-auto">
            <div class="card">
                <div class="card-body">
                    <div class="col-xl-10 m-auto">
                        <h4 class="card-title mb-4"><b><h2 class="text-center">Job Seeker Registration</h2> </b></h4>
                        
                    <form class="row g-3"  @submit.prevent="submit()" @keydown="form.onKeydown($event)">
                    <div v-if="form.progress" class="text-center">
                        Progress: {{ form.progress.percentage }}%
                        </div>
                        <AlertError :form="form" message="There were some problems with your input." />

                        <h2>Personal Information :</h2> 
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
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Middle Name*</b></label
                                        >
                                        <input
                                        v-model="form.middle_name"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your Middle name"
                                        aria-label="Middle name"
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
                                                    aria-label="blood"
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
                                            ><b>Gender *</b> </label
                                        ><br>
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
                                        <textarea class="form-control" v-model="form.profile_objective" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                        <label for="floatingTextarea2">Write Your Profile Objective</label>
                                        </div>
                                        </div>  
                                        <h3>Educational Information:</h3> 
                                        <div class="col-12">
                                        <label for="inputAddress" class="form-label"
                                        ><b> department_id* </b></label
                                        >
                                        <select id="formrow-inputState" v-model="form.department_id" class="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Male">Web Development</option>
                                            <option value="Female">Design</option>
                                            <option value="Others">PhotoGrapher</option>
                                          </select>
                                          <HasError :form="form" field="department_id" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label"><b>Degree*</b></label>
                                        <input
                                        v-model="form.degree"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your Degree"
                                        aria-label="Degree"
                                        />
                                        <HasError :form="form" field="degree" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>major_id (optional)</b></label
                                        >
                                        <select id="formrow-inputState" v-model="form.major_id" class="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Male">Web Development</option>
                                            <option value="Female">Design</option>
                                            <option value="Others">PhotoGrapher</option>
                                          </select>
                                        <HasError :form="form" field="major_id" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>minor_id (optional)</b></label
                                        >
                                        <select id="formrow-inputState" v-model="form.minor_id" class="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Male">Web Development</option>
                                            <option value="Female">Design</option>
                                            <option value="Others">PhotoGrapher</option>
                                          </select>
                                        </div>
                                        <HasError :form="form" field="minor_id" />
                                        <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label"><b>CGPA*</b></label>
                                        <input
                                        v-model="form.cgpa"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your cgpa"
                                        aria-label="cgpa"
                                        />
                                        <HasError :form="form" field="cgpa" />
                                        </div>

                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Passing year* </b></label
                                        >
                                        <input
                                        v-model="form.passing_year"
                                        type="text"
                                        class="form-control"
                                        placeholder="passing year"
                                        aria-label="passing year"
                                        />
                                        <HasError :form="form" field="passing_year" />
                                        </div>

                                        <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label"
                                        ><b>Passing Semister*</b></label
                                        >
                                        <input
                                        v-model="form.passing_semister"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your passing_semister"
                                        aria-label="passing_semister"
                                        />
                                        <HasError :form="form" field="passing_semister" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Convocation Year*</b></label
                                        >
                                        <input
                                        v-model="form.convocation_year"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your convocation_year"
                                        aria-label="convocation_year"
                                        />
                                        </div>


                                        <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label"
                                        ><b>SSC Result*</b></label
                                        >
                                        <input
                                        v-model="form.ssc_result"
                                        type="integer"
                                        class="form-control"
                                        placeholder="e.g. 5.00, 4.25"
                                        aria-label="ssc_result"
                                        />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>HSC Result*</b></label
                                        >
                                        <input
                                        v-model="form.hsc_result"
                                        type="integer"
                                        class="form-control"
                                        placeholder="e.g. 5.00, 4.25"
                                        aria-label=" hsc_result"
                                        />
                                        </div>

                                        <h2>experience_years:</h2>


                                        <div class="col-12">
                                        <label for="inputAddress2" class="form-label">
                                        <b> Skills*</b></label
                                        >
                                        <select id="formrow-inputState" v-model="form.skills" class="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Male">Web Development</option>
                                            <option value="Female">Design</option>
                                            <option value="Others">PhotoGrapher</option>
                                          </select>
                                      
                                          <HasError :form="form" field="skill_ids" />
                                        </div>

                                        <div class="col-12">
                                        <label for="inputAddress2" class="form-label">
                                        <b> Co-curricular Activity*</b></label
                                        >
                                        <select id="formrow-inputState" v-model="form.co_curricular_activity_ids" class="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Male">Web Development</option>
                                            <option value="Female">Design</option>
                                            <option value="Others">PhotoGrapher</option>
                                          </select>
                                          <HasError :form="form" field="co_curricular_activity_ids" />
                                        </div>

                                        <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label"
                                        ><b>training_ids*</b></label
                                        >
                                        <select id="formrow-inputState" v-model="form.training_ids" class="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Male">Web Development</option>
                                            <option value="Female">Design</option>
                                            <option value="Others">PhotoGrapher</option>
                                          </select>
                                          <HasError :form="form" field="training_ids" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>achievement_ids*</b></label
                                        >
                                        <select id="formrow-inputState" v-model="form.achievement_ids" class="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Male">Web Development</option>
                                            <option value="Female">Design</option>
                                            <option value="Others">PhotoGrapher</option>
                                          </select>
                                        </div>

                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>experience_year* </b></label
                                        >
                                        <input
                                        v-model="form.experience_year"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your experience_year"
                                        aria-label="experience_year"
                                        />
                                        <HasError :form="form" field="experience_year" />
                                        </div>

                                  
                                        <h2>Family Information</h2>

                                        <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label"
                                        ><b>Father Name*</b></label
                                        >
                                        <input
                                        v-model="form.father_name"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your father_name"
                                        aria-label="father_name"
                                        />
                                        <HasError :form="form" field="father_name" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Occupation*</b></label
                                        >
                                        <input
                                        v-model="form.father_occupation"
                                        type="text"
                                        class="form-control"
                                        placeholder="Occupation"
                                        aria-label="Occupation"
                                        />
                                        <HasError :form="form" field="father_occupation" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Designation* </b></label
                                        >
                                        <input
                                        v-model="form.father_designation"
                                        type="text"
                                        class="form-control"
                                        placeholder="mother designation"
                                        aria-label="Designation"
                                        />
                                        <HasError :form="form" field="father_designation" />
                                        </div>

                                        <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label"
                                        ><b>Mother Name*</b></label
                                        >
                                        <input
                                        v-model="form.mother_name"
                                        type="text"
                                        class="form-control"
                                        placeholder="Yourmother_name"
                                        aria-label="mother_name"
                                        
                                        />
                                        <HasError :form="form" field="mother_name" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Occupation*</b></label
                                        >

                                        <input
                                        v-model="form.mother_occupation"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your Mother Occupation"
                                       
                                        />
                                        <HasError :form="form" field="mother_occupation" />
                                        </div>
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Designation* </b></label
                                        >
                                        <input
                                        v-model="form.mother_designation"
                                        type="text"
                                        class="form-control"
                                        placeholder="Designation"
                                        aria-label="Designation"
                                        />
                                        <HasError :form="form" field="mother_designation" />
                                        </div>

                                        <!-- <h2>Address</h2>


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
                                        </div> -->
                                        <div class="col-md-4">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Current Possition* </b></label
                                        >
                                        <input
                                        v-model="form.current_possition"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your current_possition"
                                        aria-label="current_possition"
                                        />
                                        <HasError :form="form" field="current_possition" />
                                        </div>

                                        <div class="col-12">
                                        <label for="inputAddress2" class="form-label">
                                        <b> Current Organization</b></label
                                        >
                                        <input
                                        v-model="form.current_organization"
                                        type="text"
                                        class="form-control"
                                        id="inputAddress2"
                                        placeholder="Apartment, studio, or floor"
                                        />
                                        <HasError :form="form" field="current_organization" />
                                        </div>

                                        <h2>Contact Information:</h2>

                                        <div class="col-md-6">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Personal Contact*</b></label
                                        >
                                        <input
                                        v-model="form.personal_contact"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your personal_contact"
                                        aria-label="personal_contact"
                                        />
                                        <HasError :form="form" field="personal_contact" />
                                        </div>

                                        <div>
                                          <label for="inputPassword4" class="form-label"
                                        ><b>Multiselect*</b></label
                                        >
                                        <Multiselect
                                          v-model="form.skill_ids"
                                          mode="tags"
                                          placeholder="Select skills"
                                          :close-on-select="false"
                                          :searchable="true"
                                          :create-option="false"
                                          :options="dependentSkills"
                                        />
                                      </div>
                                        <div class="col-md-6">
                                        <label for="inputPassword4" class="form-label"
                                        ><b>Email* </b></label
                                        >
                                        <input
                                        v-model="form.email"
                                        type="text"
                                        class="form-control"
                                        placeholder="Your email"
                                        aria-label="email"
                                        />
                                        <HasError :form="form" field="email" />
                                        </div>

                                        <div class="col-md-6">
                                        <label for="inputCity" class="form-label"
                                        ><b>Office Contact </b></label
                                        >
                                        <input  v-model="form.office_contact"  type="text" class="form-control" id="inputCity" placeholder="Enter your office contact" />
                                        <HasError :form="form" field="office_contact" />
                                        </div>
                                        <div class="col-md-6">
                                        <label for="inputCity" class="form-label"
                                        ><b>Job Application Status </b></label
                                        >
                                        <input  v-model="form.job_application_status" type="text" class="form-control" id="inputCity" />
                                        <HasError :form="form" field="job_application_status" />
                                        </div>

                                        <div class="col-md-6">
                                        <label for="inputCity" class="form-label"
                                        ><b>Linked In Profile Link </b></label
                                        >
                                        <input  v-model="form.linkedin_profile_link" type="text" class="form-control" id="inputCity" />
                                        <HasError :form="form" field="linkedin_profile_link" />
                                        </div>
                                        <div class="col-md-6">
                                        <label for="inputCity" class="form-label"
                                        ><b>Facebook Profile link </b></label
                                        >
                                        <input  v-model="form.fb_profile_link" type="text" class="form-control" id="inputCity" />
                                        <HasError :form="form" field="fb_profile_link" />
                                        </div>

                                        <!-- <div class="col-md-12">
                                        <label for="inputCity" class="form-label"
                                        ><b> Upload Resume/CV</b></label
                                        >
                                        <input type="file" class="form-control" id="inputCity" />
                                        </div> -->

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
                                      </div>
                                      <!-- end card body -->
                                  </div>
                                  <!-- end card -->
                              </div>
                              <!-- end col -->
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
  import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
  
  export default {
    name: "CCCjobpostsTable",
    components: {
  
      PaginationComponent,
      Button,
      HasError,
      Multiselect,
      AlertError,
      AlertErrors,
      AlertSuccess,
    },
  
    data() {
      return {
        // backendUrl: this.$store.state.backendUrl,
        backendUrl: "http://127.0.0.1:8000/",
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
          first_name: "",
          middle_name: "",
          last_name: "",
          blood_group: "",
          date_of_birth: "",
          profile_objective:"",
          gender:"",
          department_id:"",
          major_id:"",
          minor_id:"",
          cgpa:"",
          passing_year:"",
          passing_semister:"",
          ssc_result:"",
          convocation_year:"",
          ssc_result:"",
          hsc_result:"",
          // skill_ids: [],
          // co_curricular_activity_ids:[],
          // training_ids:[],
          // workshop_ids:[],
          // achievement_ids:[],
          experience_year:"",
          father_name:"",
          father_occupation:"",
          mother_name:"",
          mother_occupation:"",
          designation:"",
          current_organization:"",
          current_possition:"",
          personal_contact:"",
          office_contact:"",
          job_application_status:"",
          linkedin_profile_link:"",
          fb_profile_link:"",
        }),
      //   skillInfoForm: new Form({
      //   id: "",
      //   skill_ids: [],
      // }),
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
  
  



     // Store PersonalDetails
      submit() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}jobSeeker`)
        .then((response) => {
          if (this.form.successful) {
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
  
  
  
  
  
  
  