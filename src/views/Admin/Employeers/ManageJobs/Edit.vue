<template>
    <div id="form">
      <div class="row">
          <div class="col-xl-11 m-auto">
              <div class="card">
                  <div class="card-body">
                      <h4 class="card-title mb-4">Job Vacancy</h4>    
                      <form @submit.prevent=" update()" @keydown="form.onKeydown($event)">
                              <div class="row">
                                    <div class="col-lg-6">
                                      <div class="mb-3">
                                        <!-- job title  -->
                                        <label  class="form-label">Position Name *</label>
                                        <input type="text"  v-model="form.job_title" class="form-control"  placeholder="Enter job position name">
                                        <HasError :form="form" field="job_title" />
                                      </div>
                                    </div>
                                      <div class="col-lg-6">
                                        <label for="formrow-inputState"  class="form-label">Job Location</label>
                                        <select name="division_id" id="division_idd" @change="changeDivisionEvent($event)" class="form-select" v-model="form.division_id">
                                        <option value="" selected>Choose...</option>
                                            <option v-for="item in divisions"   :value="item.id">{{item.name}}</option>
                                        </select>
                                        <HasError :form="form" field="division_id" />
                                    </div> 
                                 </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <div class="mb-3">
                                          <label  class="form-label">City *</label>
                                          <select name="district_id" id="formrow-inputState"  @change="changeDistrictEvent($event)"  class="form-select" v-model="form.district_id">
                                          <option value="" selected>Choose...</option>
                                          <option v-for="item in districts" :value="item.id" :key="item.id">{{item.name}}</option>
                                          </select>
                                          <HasError :form="form" field="district_id" />
                                        </div>
                                      </div>
                                      <div class="col-lg-6">
                                        <label for="formrow-firstname-input" class="form-label">Area *</label>
                                        <select name="thana_id" id="formrow-inputState" class="form-select" v-model="form.thana_id">
                                        <option value="" selected>Choose...</option>
                                            <option  v-for="item in thanas" :value="item.id" :key="item.id">{{item.name}}</option>
                                        </select>
                                        <HasError :form="form" field="thana_id" />
                                      </div>
                                          </div>
                                              <div class="row">
                                                <div class="col-md-12 mb-3">
                                                  <label for="formrow-firstname-input" class="form-label">Job context *</label>
                                                  <Editor  v-model="form.job_context" name="job_context" api-key="d96q2ppkalbf7qegddzixp72gwn2ivlzvdnzxor2th9jnen2"
                                                  :init="{           
                                                        height: 300,
                                                        plugins: [
                                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                                        ],
                                                        toolbar: 'undo redo | blocks | ' +
                                                        'bold italic backcolor | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat | help',

                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                                                        }"
                                                        />
                                                    <HasError :form="form" field="job_context" />
                                                 </div>
                                                  <div class="col-lg-12">
                                                    <label for="formrow-firstname-input" class="form-label">Job Responsibilities *</label>
                                                    <Editor  v-model="form.job_responsibilities" name="job_responsibilities" api-key="d96q2ppkalbf7qegddzixp72gwn2ivlzvdnzxor2th9jnen2"
                                                      :init="{           
                                                        height: 300,
                                                        plugins: [
                                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                                        ],
                                                        toolbar: 'undo redo | blocks | ' +
                                                        'bold italic backcolor | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat | help',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                                                        }"
                                                        />
                                                   </div>
                                                   <div class="col-lg-12 mt-3">
                                                    <label for="formrow-firstname-input" class="form-label">Job Requirment *</label>
                                                    <Editor  v-model="form.requirment" name="job_responsibilities" api-key="d96q2ppkalbf7qegddzixp72gwn2ivlzvdnzxor2th9jnen2"
                                                      :init="{           
                                                        height: 300,
                                                        plugins: [
                                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                                        ],
                                                        toolbar: 'undo redo | blocks | ' +
                                                        'bold italic backcolor | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat | help',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                                                        }"
                                                        />
                                                   </div>
                                                   <div class="col-lg-12 mt-3">
                                                    <label for="formrow-firstname-input" class="form-label">Benefits *</label>
                                                    <Editor  v-model="form.benefits" name="job_responsibilities" api-key="d96q2ppkalbf7qegddzixp72gwn2ivlzvdnzxor2th9jnen2"
                                                      :init="{           
                                                        height: 300,
                                                        plugins: [
                                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                                        ],
                                                        toolbar: 'undo redo | blocks | ' +
                                                        'bold italic backcolor | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat | help',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                                                        }"
                                                        />
                                                  </div>
                                                </div>
                                               <div class="row">
                                               <div class="col-lg-12">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label"> Vacancy</label>
                                                      <input type="integer"  v-model="form.no_of_vacancies" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 2, 3, 4, 5">
                                                     <HasError :form="form" field="no_of_vacancies" />
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                          <label for="formrow-inputState" class="form-label">Job Category</label>
                                                          <select id="formrow-inputState" class="form-select" @change="onChangeEvent($event)" v-model="form.job_category_id">
                                                              <option value="" selected>Choose...</option>
                                                              <option
                                                              v-for="jobcategory of jobcategories" :value="jobcategory.id" :key="jobcategory.id">
                                                            {{ jobcategory.title }}
                                                            </option>
                                                          </select>
                                                          <HasError :form="form" field="job_category_id" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="formrow-inputState" class="form-label">Job SubCategory</label>
                                                            <select id="formrow-inputState" class="form-select" v-model="form.job_sub_category_id">
                                                              <option value="" selected>Choose...</option>
                                                                <option
                                                                v-for="jobsub_category of categorysubcategories"
                                                                :value="jobsub_category.id"
                                                                :key="jobsub_category.id"
                                                              >
                                                                {{ jobsub_category.title }}
                                                              </option>
                                                            </select>
                                                            <HasError :form="form" field="job_sub_category_id" />
                                                        </div>
                                                    </div>
                                              </div>
                                               <div class="row">
                                            </div>
                                              <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label for="formrow-inputState" class="form-label">EmployMent Status</label>
                                                        <select id="formrow-inputState" class="form-select" v-model="form.employment_status">
                                                           <option value="" selected>Choose...</option>
                                                            <option value="Full Time">Full Time</option>
                                                            <option value="Part Time">Part Time</option>
                                                            <option value="Contractual">Contractual</option>
                                                            <option value="Internship">Internship</option>
                                                            <option value="Freelance">Freelance</option>
                                                        </select>
                                                       <HasError :form="form" field="employment_status" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label for="formrow-inputState" class="form-label">Job Level</label>
                                                        <select id="formrow-inputState" class="form-select" v-model="form.job_level">
                                                           <option value="" selected>Choose...</option>
                                                            <option value="Entry">Entry</option>
                                                            <option value="Mid">Mid</option>
                                                            <option value="Top">Top</option>
                                                        </select>
                                                        <HasError :form="form" field="job_level" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="formrow-email-input" class="form-label">Contact Email</label>
                                                        <input type="email" class="form-control" id="formrow-email-input"  v-model="form.resume_receiver_email"
                                                           placeholder="e.g. example@gmail.com">
                                                       <HasError :form="form" field="resume_receiver_email" />
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label"> Fastival Bonuses *</label>
                                                      <input type="integer" class="form-control" id="formrow-firstname-input"  v-model="form.festival_bonuses"   placeholder="e.g. 10000">
                                                      <HasError :form="form" field="festival_bonuses" />
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="row">
                                                   <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label for="formrow-inputState"  class="form-label">Job Workplace</label>
                                                        <select id="formrow-inputState" v-model="form.job_workplace" class="form-select">
                                                          <option value="">Choose One</option>
                                                          <option value="Work at office">Work at office</option>
                                                          <option value="Work from home">Work from home</option>
                                                        </select>
                                                        <HasError :form="form" field="job_workplace" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label for="formrow-inputState" class="form-label">Gender</label>
                                                        <select id="formrow-inputState" v-model="form.gender" class="form-select">
                                                          <option value="">Choose One</option>
                                                          <option value="Male">Male</option>
                                                          <option value="Female">Female</option>
                                                          <option value="Both">Both</option>
                                                        </select>
                                                        <HasError :form="form" field="gender" />
                                                    </div>
                                                </div>
                                            </div>
                                              <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label">Min Salary *</label>
                                                      <input type="text"   v-model="form.min_salary" class="form-control" id="formrow-firstname-input" placeholder="Enter Your First Name">
                                                      <HasError :form="form" field="min_salary" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label"> Max Salary *</label>
                                                      <input type="integer"  v-model="form.max_salary" class="form-control" id="formrow-firstname-input" placeholder="Enter Your First Name">
                                                      <HasError :form="form" field="max_salary" />
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label">Publish Date *</label>
                                                      <input type="date" class="form-control" id="formrow-firstname-input" v-model="form.job_publish_date" placeholder="Enter Your First Name">
                                                      <HasError :form="form" field="job_publish_date" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label"> Last Date *</label>
                                                      <input type="date" class="form-control" id="formrow-firstname-input"  v-model="form.job_deadline" placeholder="Enter Your First Name">
                                                      <HasError :form="form" field="job_deadline" />
                                                    </div>
                                                </div>
                                            </div>
                                         <h2>Company information</h2>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label">Company Name *</label>
                                                      <input   v-model="form.company_name" type="text" class="form-control" id="formrow-firstname-input" placeholder="company_name">
                                                      <HasError :form="form" field="company_name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                  <div class="mb-3">
                                                  <label for="formrow-firstname-input" class="form-label">Company business *</label>
                                                  <input   v-model="form.company_business" type="text" class="form-control" id="formrow-firstname-input" placeholder="company business">
                                                  <HasError :form="form" field="company_business" />
                                                  </div>
                                              </div>
                                            </div>
                                              <label for="formrow-firstname-input" class="form-label">Company Details *</label>
                                              <Editor  v-model="form.company_details" name="job_responsibilities" api-key="d96q2ppkalbf7qegddzixp72gwn2ivlzvdnzxor2th9jnen2"
                                                :init="{           
                                                  height: 200,
                                                  plugins: [
                                                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                  'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                                  ],
                                                  toolbar: 'undo redo | blocks | ' +
                                                  'bold italic backcolor | alignleft aligncenter ' +
                                                  'alignright alignjustify | bullist numlist outdent indent | ' +
                                                  'removeformat | help',
                                                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                                                  }"
                                                />
                                                <HasError :form="form" field="company_details" />
                                              <div class="row">
                                                <div class="col-lg-6 mt-4">
                                                      <div class="mb-3">
                                                        <label for="formrow-firstname-input" class="form-label"> Company Address *</label>
                                                        <input type="text" class="form-control" id="formrow-firstname-input"    v-model="form.company_address"  placeholder="company_address">
                                                        <HasError :form="form" field="company_address" />
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 mt-4">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label">Company Website *</label>
                                                      <input type="text" class="form-control" id="formrow-firstname-input" v-model="form.website_address"  placeholder="https://www.example.com">
                                                  
                                                    </div>
                                                </div>
                                              </div>
                                             <div class="row">
                                                

                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                      <label for="formrow-firstname-input" class="form-label"> Company Logo *</label>
                                                      <input type="file" class="form-control" id="formrow-firstname-input" placeholder="Enter Your First Name" @change="onImageChange">
                                                      <HasError :form="form" field="company_logo" />
                                                    </div>
                                                   
                                                </div>
                                                <div class="col-lg-2">
                                                  
                                                    <div class="mb-3">
                                                    <img class="mt-1" :src="imagePreviewResumeImage" width="100px;" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                  
                                                  <th >
                                                  <img :src="this.company_logo?this.company_logo: '' " class="rounded" style="width:200px;height: 147px;" width="250" :alt="Image">
                                                </th>

                                              </div>
                                            </div>
                                            <div>
                                              <button type="submit" class="btn btn-warning w-md">Update</button>
                                            </div>
                                        </form>
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
  
  import PaginationComponent from "../../../../components/PaginationComponent.vue";
  
  import axios from "axios";
  import Form from "vform";
  import Editor from '@tinymce/tinymce-vue'
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
      Editor
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
      imagePreviewResumeImage:"",
      pagination: [],
      links: [],
      divisions:[],
      districts:[],
      thanas:[],
      jobposts: [],
      company_logo:[],

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
        requirment: "",
        benefits: "",
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
        // company_logo: "",
        // status: "",
        division_id: "",
        district_id: "",
        thana_id: "",
        company_business:"",
        website_address:"",
      }),
    };
  },

  watch: {
    keyword: function () {
      this.getData();
      this.getDivision();
      this.getDistrict();
      this.getThana();
      this.getCategory();
      this.getSubCategory();
    },
  },

  mounted() {
    console.log("Component mounted.");
    this.getData();
    this.getDivision();
    this.getDistrict();
    this.getThana();
    this.getCategory();
    this.getSubCategory();
  },

  methods: {


    getDivision() {
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
      },
      // end 

      getDistrict() {
      // fetching district data
      let districtUrl =`${this.backendUrl}district`;
      axios
        .get(districtUrl).then((response) => {
         this.districts = response.data.data;
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
      },
      // end 

      getThana() {
      // fetching thana data
      let thanaUrl =`${this.backendUrl}thana`;
      axios
        .get(thanaUrl).then((response) => {
         this.thanas = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
      },
      // end 

    // fetching Category data
    getCategory() {
      let linkUrl = `${this.backendUrl}job-category`;
      axios
        .get(linkUrl)
        .then((response) => {
          console.log(response.data.data);
          console.log("category");
          this.jobcategories = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // end 
     // fetching Category data
     getSubCategory() {
      let linkUrl = `${this.backendUrl}jobsub-category`;
      axios
        .get(linkUrl)
        .then((response) => {

          this.categorysubcategories = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // end 

     // changeDivisionEvent to get district data 
     changeDivisionEvent($event) {
        let fetchDistrictsUrl = `${this.backendUrl}division/districts/`+$event.target.value;
        axios .get(fetchDistrictsUrl).then((response) => {
            this.districts = response.data;
            })
            .catch((e) => {
            console.log(e);
            });
        },

      // changeDistrictEvent to get thana data 
      changeDistrictEvent($event) {
        let fetchThanasUrl = `${this.backendUrl}district/thanas/`+$event.target.value;
        axios.get(fetchThanasUrl).then((response) => {
            this.thanas = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      },

       // changeCategoryEvent to get Subcategory data 
      onChangeEvent($event) {
        let linkUrl = `${this.backendUrl}category/subcategories/`+$event.target.value;
        axios
          .get(linkUrl)
          .then((response) => {
            this.categorysubcategories = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      },
    // end 
    
    // upload company logo 
    onImageChange(e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (file) => {
            this.imagePreviewResumeImage = reader.result;
            this.form.company_logo= reader.result;
        }
        reader.readAsDataURL(file);
      },
  // end 

  // Fetch Job post data 
      getData() {
        this.$Progress.start();
      axios.get(`${this.backendUrl}job-post/`+this.$route.query.jobId)
          .then((response) => {
            this.$Progress.finish();
            this.form.fill(response.data)
            this.company_logo = response.data.company_logo;
          })
          .catch((e) => {
            this.$Progress.fail();
          });
      },
  // end 

//  update Job Post data 
    update() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .put(`${this.backendUrl}job-post/` + this.form.id)
        .then((response) => {
          if (this.form.successful) {
            this.$router.push({ name: 'dashboard_managejobs'})
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
  // end 

  // delete job post data 
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
    // end 
  },
};
</script>