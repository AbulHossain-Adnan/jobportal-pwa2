<template lang="">
       <!-- start page title -->
       <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 class="mb-sm-0 font-size-18">Job Details</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Jobs</a></li>
                                            <li class="breadcrumb-item active">Job Details</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- end page title -->

                        <div class="row">
                            <div class="col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="fw-semibold">Overview</h5>

                                        <div class="table-responsive">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="col">Job Title</th>
                                                        <td scope="col">{{jobposts.job_title}}</td>
                                                    </tr>
                                                    <!-- <tr>
                                                        <th scope="row">Experience:</th>
                                                        <td>{{jobposts.min_experience}} Years</td>
                                                    </tr> -->
                                                    <tr>
                                                        <th scope="row">Vacancy</th>
                                                        <td>{{jobposts.no_of_vacancies}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Job Type</th>
                                                        <td><span class="badge badge-soft-success">{{jobposts.employment_status}}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Status</th>
                                                        <td><span class="badge badge-soft-info">New</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Posted Date</th>
                                                        <td>{{jobposts.job_publish_date}} </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Close Date</th>
                                                        <td>{{jobposts.job_deadline }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Salary (Monthly BDT)</th>
                                                        <td>TK {{jobposts.min_salary }} to TK {{jobposts.max_salary }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- <div class="hstack gap-2">
                                            <button class="btn btn-soft-primary w-100">Apply Now</button>
                                            <button class="btn btn-soft-danger w-100">Contact Us</button>
                                        </div> -->
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <!-- <img src="assets/images/companies/adobe-photoshop.svg" alt="" height="50" class="mx-auto d-block"> -->
                                            <h5 class="mt-3 mb-1">{{jobposts.company_name}}</h5>
                                            <!-- <p class="text-muted mb-0">Since July 2017</p> -->
                                        </div>

                                        <ul class="list-unstyled mt-4">
                                            <li>
                                                <!-- <div class="d-flex">
                                                    <i class="bx bx-phone text-primary fs-4"></i>
                                                    <div class="ms-3">
                                                        <h6 class="fs-14 mb-2">Phone</h6>
                                                        <p class="text-muted fs-14 mb-0">+589 560 56555</p>
                                                    </div>
                                                </div> -->
                                            </li>
                                            <li class="mt-3">
                                                <div class="d-flex">
                                                    <i class="bx bx-mail-send text-primary fs-4"></i>
                                                    <div class="ms-3">
                                                        <h6 class="fs-14 mb-2">Contact Email</h6>
                                                        <p class="text-muted fs-14 mb-0">{{jobposts.resume_receiver_email}}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="mt-3">
                                                <div class="d-flex">
                                                    <i class="bx bx-globe text-primary fs-4"></i>
                                                    <div class="ms-3">
                                                        <h6 class="fs-14 mb-2">Website</h6>
                                                        <p class="text-muted fs-14 text-break mb-0">{{jobposts.website_address}}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="mt-3">
                                                <div class="d-flex">
                                                    <i class="bx bx-map text-primary fs-4"></i>
                                                    <div class="ms-3">
                                                        <h6 class="fs-14 mb-2">Location</h6>
                                                        <p class="text-muted fs-14 mb-0">{{jobposts.company_address}}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <!-- <div class="mt-4">
                                            <a href="#!" class="btn btn-soft-primary btn-hover w-100 rounded"><i class="mdi mdi-eye"></i> View Profile</a>
                                        </div> -->
                                    </div>
                                </div>
                            </div><!--end col-->
                            <div class="col-xl-9">
                                <div class="card">
                                    <div class="card-body border-bottom">
                                        <div class="d-flex">
                                            <!-- <img src="assets/images/companies/wechat.svg" alt="" height="50"> -->
                                            <div class="flex-grow-1 ms-3">
                                                <h5 class="fw-semibold">{{jobposts.job_title}}</h5>
                                                <ul class="list-unstyled hstack gap-2 mb-0">
                                                    <li>
                                                        <i class="bx bx-building-house"></i> <span class="text-muted">{{jobposts.company_name}}</span>
                                                    </li>
                                                    <li>
                                                        <i class="bx bx-map"></i> <span class="text-muted">{{jobposts.company_address}}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="fw-semibold mb-3">Job Context</h5>
                                        <p v-html="jobposts.job_context"></p>
                                        
                                        <h5 class="fw-semibold mb-3">Responsibilities:</h5>
                                        <ul class="vstack gap-3">
                                            <li>
                                                <p v-html="jobposts.job_responsibilities"></p>
                                            </li>
                                          
                                        </ul>

                                        <h5 class="fw-semibold mb-3">Requirements:</h5>
                                        <ul class="vstack gap-3">
                                            <li>
                                                <p v-html="jobposts.requirment"></p>
                                            </li>
                                           
                                        </ul>

                                        <h5 class="fw-semibold mb-3">Company Details:</h5>
                                        <ul class="vstack gap-3">
                                            <li>
                                                <p v-html="jobposts.company_details"></p>
                                            </li>
                                         
                                        </ul>

                                        <h5 class="fw-semibold mb-3">Benefits:</h5>
                                        <ul class="vstack gap-3 mb-0">
                                            <li>
                                                <p v-html="jobposts.benefits"></p>
                                            </li>
                                         
                                        </ul><br><br>

                                        <h5 class="fw-semibold mb-3">Company Details:</h5>
                                        <ul class="vstack gap-3 mb-0">
                                            <li>
                                                <p v-html="jobposts.company_details"></p>
                                            </li>
                                         
                                        </ul>

                                        <div class="mt-4">
                                            <ul class="list-inline mb-0">
                                                <!-- <li class="list-inline-item mt-1">
                                                    Share this job:
                                                </li>
                                                <li class="list-inline-item mt-1">
                                                    <a href="javascript:void(0)" class="btn btn-outline-primary btn-hover"><i class="uil uil-facebook-f"></i> Facebook</a>
                                                </li>
                                                <li class="list-inline-item mt-1">
                                                    <a href="javascript:void(0)" class="btn btn-outline-danger btn-hover"><i class="uil uil-google"></i> Google+</a>
                                                </li>
                                                <li class="list-inline-item mt-1">
                                                    <a href="javascript:void(0)" class="btn btn-outline-success btn-hover"><i class="uil uil-linkedin-alt"></i> linkedin</a>
                                                </li> -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div><!--end col-->
    
                        </div><!--end row-->
                        <vue-progress-bar></vue-progress-bar>
      <notifications />
</template>
<script>
  
  import PaginationComponent from "../../../../components/PaginationComponent.vue";
  
  import axios from "axios";
 

  export default {
    name: "CCCjobpostsTable",
    components: {
  
      PaginationComponent,
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



    getData() {
      this.$Progress.start();
	  axios.get(`${this.backendUrl}job-post/`+this.$route.query.jobId)
        .then((response) => {
            this.jobposts = response.data;

          if(response.data.job_category_id !=null) {
            let linkUrl = `${this.backendUrl}category/subcategories/`+response.data.job_category_id;
        axios
          .get(linkUrl)
          .then((response) => {
            console.log('categorysubcategory')
            console.log(response.data)
            this.categorysubcategories = response.data;
            this.$Progress.finish();
           
          })
          .catch((e) => {
            console.log(e);
            this.$Progress.fail();
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