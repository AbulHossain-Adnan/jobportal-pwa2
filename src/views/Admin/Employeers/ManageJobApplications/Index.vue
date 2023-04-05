<template>
  <div id="product">
    <div class="col-12">
      <div class="card">
        <div class="row card-header bg-transparent border-bottom">
          <div class="col-md-8">
            <h4 class="card-title">List Of Job Applications</h4>
            <span>
              This is an Job Applications related information
          
            </span>
          </div>
          <div class="col-md-4">
          </div>
        </div>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="application-tab" data-bs-toggle="tab" data-bs-target="#application" type="button" role="tab" aria-controls="overview" aria-selected="true">Application</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="shortlist-tab" data-bs-toggle="tab" data-bs-target="#shortlist" type="button" role="tab" aria-controls="shortlist" aria-selected="false">Shortlist</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="withdraw-application-tab" data-bs-toggle="tab" data-bs-target="#withdraw_application" type="button" role="tab" aria-controls="withdrawApplication" aria-selected="false">WithdrawApplication</button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="application" role="tabpanel" aria-labelledby="home-tab">
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-md-2" style="margin: auto 0">
                      <span>Show</span>
                    </div>

                    <div class="col-md-3">
                      <select
                              @change="getData(null)"
                              v-model="perPage"
                              class="form-control form-control-sm"
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>

                    <div class="col-md-3" style="margin: auto 0">
                      <span>entries</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <button @click="openForMail" :hidden="checkedItems.length === 0" class="btn btn-info" type="button">Click for Mail</button>
                </div>

                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-2" style="margin: auto">
                      <strong>Search By :</strong>
                    </div>

                    <div class="col-md-3">
                      <select
                              v-model="fieldName"
                              id="fields"
                              class="form-control form-control-sm"
                      >
                        <option value="full_name">Job Title</option>
                        <option value="email">Company Name</option>
                      </select>
                    </div>

                    <div class="col-md-7">
                      <input
                              v-model="keyword"
                              type="text"
                              class="form-control form-control-sm"
                              placeholder="Keyword"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-rep-plugin">
                <div class="table-responsive mb-0" data-pattern="priority-columns">
                  <table id="tech-companies-1" class="table table-bordered align-middle nowrap">
                    <thead>
                    <tr class="table-secondary">
                      <th>
                        <input type="checkbox" v-model="selectAll" @change="toggleAllCheckboxes">
                      </th>
                      <th>S.No</th>
                      <th scope="col">Full Name</th>
                      <th scope="col"> Email </th>
                      <th scope="col">Job Title</th>
                      <th scope="col">Company Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Posted Date</th>
                      <th scope="col">Last Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>

                    <tr v-if="jobapplications"  v-for="(item,index) in jobapplications">
                      <th><input type="checkbox" v-model="checkedItems" :value="item.id"></th>
                      <th style="width:5%;">{{ index+1 }}</th>
                      <th >{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }}</th>
                      <th v-if="item.job_post">{{ item.email }}</th>
                      <th v-if="item.job_post"> {{ item.job_post.job_title }}</th>
                      <th v-if="item.job_post"> {{ item.job_post.company_name }}</th>
                      <th v-if="item.job_post"> {{ item.job_post.company_address }}</th>
                      <th v-if="item.job_post"> {{ item.job_post.job_publish_date }}</th>
                      <th v-if="item.job_post"> {{ item.job_post.job_deadline }}</th>
                      <td v-if="item.job_post"><span class="badge bg-success">Active</span></td>
                      <td v-if="item.job_post">
                        <ul class="list-unstyled hstack gap-1 mb-0">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                            <router-link :to="{ name: 'dashboard_resumeview'}" class="btn btn-sm btn-info">
                              <i class="mdi mdi-eye-outline"></i>
                            </router-link>
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Download pdf">
                            <button  @click="download(item.id)" type="button" class="btn btn-sm btn-soft-primary"> <i class="mdi mdi-download-outline"></i></button>
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                            <button @click="destroy(item.id)" type="button" class="btn btn-sm btn-soft-danger"> <i class="mdi mdi-delete-outline"></i></button>
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="add to Shortlist">
                            <button v-if="item.job_status == 'New'" @click="addShortlist(item.id)" type="button" class="btn btn-sm btn-secondary">
                              <i class="mdi mdi-account"></i>
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                      <tr v-show="!jobapplications.length">
                        <td colspan="11">
                          <div
                            class="alert alert-danger text-danger text-center"
                            role="alert"
                          >
                            No data available in table :(
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <div v-if="jobapplications.length" class="d-flex">
                <div
                        class="col-md-4 pl-0"
                        style="margin: auto"
                        v-if="jobapplications.length"
                >
                  Showing {{ pagination.from }} to {{ pagination.to }} from
                  {{ pagination.total }} entiries
                </div>

                <PaginationComponent :links="links" @get-data="getData" />
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="shortlist" role="tabpanel" aria-labelledby="media-tab">
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-md-2" style="margin: auto 0">
                      <span>Show</span>
                    </div>

                    <div class="col-md-3">
                      <select
                              @change="getData(null)"
                              v-model="perPage"
                              class="form-control form-control-sm"
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>

                    <div class="col-md-3" style="margin: auto 0">
                      <span>entries</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-2" style="margin: auto">
                      <strong>Search By :</strong>
                    </div>

                    <div class="col-md-3">
                      <select
                              v-model="fieldName"
                              id="fields"
                              class="form-control form-control-sm"
                      >
                        <option value="full_name">Job Title</option>
                        <option value="email">Company Name</option>
                      </select>
                    </div>

                    <div class="col-md-7">
                      <input v-model="keyword" type="text" class="form-control form-control-sm" placeholder="Keyword"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-rep-plugin">
                <div class="table-responsive mb-0" data-pattern="priority-columns">
                  <table id="tech-companies-1" class="table table-bordered align-middle nowrap">
                    <thead>
                    <tr class="table-secondary">
                      <th scope="col">Full Name</th>
                      <th scope="col"> Email </th>
                      <th scope="col">Job Title</th>
                      <th scope="col">Company Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Posted Date</th>
                      <th scope="col">Last Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>


                    </tr>
                    </thead>

                    <tbody>

                    <tr v-for="item in shortlistedApplications">
                      <th >{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }}</th>
                      <th >{{ item.email }}</th>

                      <th> {{ item.job_post.job_title }}</th>
                      <th> {{ item.job_post.company_name }}</th>
                      <th> {{ item.job_post.company_address }}</th>
                      <!-- <th> {{ item.job_post.min_experience }} years</th> -->
                      <th> {{ item.job_post.job_publish_date }}</th>
                      <th> {{ item.job_post.job_deadline }}</th>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <ul class="list-unstyled hstack gap-1 mb-0">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                            <router-link :to="{ name: 'dashboard_resumeview'}" class="btn btn-sm btn-info">
                              <i class="mdi mdi-eye-outline"></i>
                            </router-link>
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Download pdf">
                            <button  @click="download(item.id)" type="button" class="btn btn-sm btn-soft-primary"> <i class="mdi mdi-download-outline"></i></button>
                          </li>
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Remove">
                            <button v-if="item.job_status == 'Interviewed'" @click="removeShortlist(item.id)" type="button" class="btn btn-sm btn-danger">
                              <i class="mdi mdi-account-remove"></i>
                            </button>
                          </li>

                        </ul>
                      </td>
                    </tr>
                    <tr v-show="!shortlistedApplications.length">
                        <td colspan="11">
                          <div
                            class="alert alert-danger text-danger text-center"
                            role="alert"
                          >
                            No data available in table :(
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <div v-if="shortlistedApplications.length" class="d-flex">
                <div
                        class="col-md-4 pl-0"
                        style="margin: auto"
                        v-if="shortlistedApplications.length"
                >
                  Showing {{ pagination.from }} to {{ pagination.to }} from
                  {{ pagination.total }} entiries
                </div>

                <PaginationComponent :links="links" @get-data="getData" />
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="withdraw_application" role="tabpanel" aria-labelledby="media-tab">
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-md-2" style="margin: auto 0">
                      <span>Show</span>
                    </div>

                    <div class="col-md-3">
                      <select
                              @change="getData(null)"
                              v-model="perPage"
                              class="form-control form-control-sm"
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>

                    <div class="col-md-3" style="margin: auto 0">
                      <span>entries</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-2" style="margin: auto">
                      <strong>Search By :</strong>
                    </div>

                    <div class="col-md-3">
                      <select
                              v-model="fieldName"
                              id="fields"
                              class="form-control form-control-sm"
                      >
                        <option value="full_name">Job Title</option>
                        <option value="email">Company Name</option>
                      </select>
                    </div>

                    <div class="col-md-7">
                      <input v-model="keyword" type="text"  class="form-control form-control-sm"    placeholder="Keyword"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-rep-plugin">
                <div class="table-responsive mb-0" data-pattern="priority-columns">
                  <table id="tech-companies-1" class="table table-bordered align-middle nowrap">
                    <thead>
                    <tr class="table-secondary">
                     
                      <th>S.No</th>
                      <th scope="col">Full Name</th>
                      <th scope="col"> Email </th>
                      <th scope="col">Job Title</th>
                      <th scope="col">Company Name</th>
                      <!-- <th scope="col">Location</th> -->
                      <th scope="col">Posted Date</th>
                      <th scope="col">Last Date</th>
                      <th scope="col">Withdraw Status</th>
                      <th scope="col">Withdraw Reson</th>
                      <!-- <th scope="col">Status</th> -->
                      <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-if="jobapplications"  v-for="(item,index) in withdrawApplications">
                      <th style="width:5%;">{{ index+1 }}</th>
                      <th >{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }}</th>
                      <th v-if="item.job_post">{{ item.email }}</th>
                      <th v-if="item.job_post"> {{ item.job_post.job_title }}</th>
                      <th v-if="item.job_post"> {{ item.job_post.company_name }}</th>
                      <!-- <th v-if="item.job_post"> {{ item.job_post.company_address }}</th> -->
                      <th v-if="item.job_post"> {{ item.job_post.job_publish_date }}</th>
                      <th v-if="item.job_post"> {{ item.job_post.job_deadline }}</th>

                      <!-- <th> {{ item.withdraw_status ==1? `<span class="badge bg-success">Active</span>`:"" }}</th> -->
                      <th> 
                          <span v-if="item.withdraw_status ==1" class="badge bg-warning">True</span>
                          <!-- <span v-else class="badge bg-success">Active</span> -->
                      </th>
                      <th > {{ item.withdraw_status ==1?item.withdraw_reson:"" }}</th>
                      <!-- <td v-if="item.job_post"><span class="badge bg-success">Active</span></td> -->
                      <td v-if="item.job_post">
                        <ul class="list-unstyled hstack gap-1 mb-0">
                          <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                            <router-link :to="{ name: 'dashboard_resumeview'}" class="btn btn-sm btn-info">
                              <i class="mdi mdi-eye-outline"></i>
                            </router-link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr v-show="!withdrawApplications.length">
                <td colspan="11">
                  <div
                    class="alert alert-danger text-danger text-center"
                    role="alert"
                  >
                    No data available in table :(
                  </div>
                </td>
              </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <div v-if="shortlistedApplications.length" class="d-flex">
                <div
                        class="col-md-4 pl-0"
                        style="margin: auto"
                        v-if="shortlistedApplications.length"
                >
                  Showing {{ pagination.from }} to {{ pagination.to }} from
                  {{ pagination.total }} entiries
                </div>

                <PaginationComponent :links="links" @get-data="getData" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- Create and Edit Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Notice-Event</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                @submit.prevent="editMode ? update() : store()"
                @keydown="form.onKeydown($event)"
              >
                <div v-if="form.progress" class="text-center">
                  Progress: {{ form.progress.percentage }}%
                </div>

                <AlertError
                  :form="form"
                  message="There were some problems with your input."
                />

                <div class="modal-body">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      v-model="form.title"
                      type="text"
                      name="title"
                      class="form-control"
                      placeholder="Title"
                      :readonly="showMode == true ? true : false"
                    />
                    <HasError :form="form" field="title" />
                  </div>

                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      v-model="form.description"
                      rows="3"
                      cols="50"
                      name="description"
                      :readonly="showMode == true ? true : false"
                      class="form-control"
                      placeholder="Enter description here..."
                    ></textarea>
                    <HasError :form="form" field="description" />
                  </div>
                  <div class="form-group">
                    <label>Time</label>
                    <input
                      v-model="form.time"
                      type="time"
                      name="time"
                      class="form-control"
                      placeholder="time"
                      :readonly="showMode == true ? true : false"
                    />
                    <HasError :form="form" field="time" />
                  </div>
                  <div class="form-group">
                    <label>Date</label>
                    <input
                      v-model="form.date"
                      type="date"
                      name="date"
                      class="form-control"
                      placeholder="date"
                      :readonly="showMode == true ? true : false"
                    />
                    <HasError :form="form" field="date" />
                  </div>

                  <div class="form-group">
                    <label>Status</label>
                    <select v-if="showMode==false" name="status"  class="form-control" v-model="form.status">
                      <option value="">Select One</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    <input v-if="showMode==true" v-model="form.status" type="text" class="form-control" placeholder="Approval" :readonly="showMode==true ? true : false">
                    <HasError :form="form" field="status" />
                  </div>

                  <!-- <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" name="image" id="image" class="form-control-file border" @change="onImageChange" />
                                        <HasError :form="form" field="image" />
                                    </div> -->

                  <!-- <div class="form-group">
                                      <input v-model="form.published" type="checkbox">
                                      <span> Published</span>
                                    </div> -->
                </div>
                <div class="modal-footer">
                  <button
                    v-if="showMode == false"
                    :disabled="form.busy"
                    type="submit"
                    class="btn btn-primary"
                  >
                    {{ editMode ? "Update" : "Create" }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Send Mail Modal -->
      <div class="modal fade" id="sendMailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="sendMailModalLabel">Mail Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="sendMail()">
                <div v-if="form.progress" class="text-center">Progress: {{ form.progress.percentage }}%</div>

                <AlertError :form="form" message="There were some problems with your input." />

                <div class="modal-body">
                  <div class="form-group">
                    <label>Send To</label>
                    <input type="text" v-model="mailForm.sendTo" class="form-control" placeholder="Enter Recipient's E-Mail Address" required>
                    <HasError :form="mailForm" field="sendTo" />
                  </div>

                  <div class="form-group">
                    <label>Subject</label>
                    <input type="text" v-model="mailForm.subject" class="form-control" placeholder="Mail Subject..." required>
                    <HasError :form="mailForm" field="subject"/>
                  </div>

                  <div class="form-group">
                    <label>Mail Body</label>
                    <textarea name="mail_body" v-model="mailForm.body" cols="30" rows="10" class="form-control"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
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
import Multiselect from "@vueform/multiselect"
import "@vueform/multiselect/themes/default.css"
import Form from "vform"

import {
  Button,
  HasError,
  AlertError,
  AlertErrors,
  AlertSuccess,
} from "vform/src/components/bootstrap5";
import PaginationComponent from "../../../../components/PaginationComponent.vue";

export default {
  name: "CCCNewsTable",
  components: {
    PaginationComponent,
    Button,
    HasError,
    AlertError,
    AlertErrors,
    Multiselect,
    AlertSuccess,
  },

  data() {
  return {
    backendUrl: this.$store.state.backendUrl,
    editMode: false,
    showMode: false,
    jobapplications: [],
    shortlistedApplications: [],
    withdrawApplications:[],
    keyword: "",
    fieldName: "full_name",
    jobcategories: [],
    jobsubcategories: [],
    pagination: [],
    links: [],
    perPage: 10,

    checkedItems: [],
    resumeFiles: [],
    selectAll: false,
    skillData:[],

    form: new Form({
      id: "",
      title: "",
      description: "",
      time: "",
      date: "",
    }),

    mailForm: new Form({
      id: "",
      sendTo: "",
      subject: "",
      body: "",
      applicantIds: [],
    }),

    // Specialization Skill Form added 
      skillForm: new Form({
        id:"",
        resume_id:localStorage.getItem('resume_id'),
        skill_ids:[],
        learned:[],
        description:"",
        extracurricular:"",
      }),
      //  end 
   
  };
},

watch: {
  keyword: function () {
    this.getData();
    this.getDependentData();
  },
},

mounted() {
  console.log("Component mounted.");
  this.getData();
  this.getDependentData();
},

methods: {
  getData(url) {
    this.$Progress.start();
    let jobId = this.$route.query.jobId;
      if(jobId){
        var linkUrl = url ? url : `${this.backendUrl}job-applications/`+jobId;
      }else {
        var linkUrl = url ? url : `${this.backendUrl}jobapplications`;
      }
    axios
      .get(linkUrl, {
        params: {
          per_page: this.perPage,
            field_name: this.fieldName,
            keyword: this.keyword,
        },
      })
      .then((response) => {

        // console.log(response.data)
        // console.log('response a ashse');

    
        this.jobapplications = response.data.data;
        this.pagination = response.data.meta;
        this.links = response.data.meta.links;
        this.$Progress.finish();
      })
      .catch((e) => {
        console.log(e);
        this.$Progress.fail();
      });

      //get shortlisted applications
    var linkUrlShortlist = url ? url : `${this.backendUrl}job-applications/allShortlist/`+jobId;
    axios.get(linkUrlShortlist, {
        params: {
          per_page: this.perPage,
          field_name: this.fieldName,
          keyword: this.keyword,
        },
      })
      .then((response) => {
        this.shortlistedApplications = response.data.data;
        this.pagination = response.data.meta;
        this.links = response.data.meta.links;
        this.$Progress.finish();
      })
      .catch((e) => {
        console.log(e);
        this.$Progress.fail();
      });


    //get withdraw applications
    var linkUrlShortlist = url ? url : `${this.backendUrl}job-applications/withdraw/`+jobId;
    axios.get(linkUrlShortlist, {
        params: {
          per_page: this.perPage,
          field_name: this.fieldName,
          keyword: this.keyword,
        },
      })
      .then((response) => {
        this.withdrawApplications = response.data.data;
        this.pagination = response.data.meta;
        this.links = response.data.meta.links;
        this.$Progress.finish();
      })
      .catch((e) => {
        console.log(e);
        this.$Progress.fail();
      });
  },

    // fetching Specialization skill data
    getDependentData() {
    axios.get(`${this.backendUrl}skill`)
        .then((response) => {
        let data =  response.data.data.map((item) => {
            return { value: item.id, label: item.title }
        })
        this.skillData = data;
        })
        .catch((e) => {
            this.$Progress.fail();
        });
    },
    // end


  create() {
    this.editMode = false;
    this.showMode = false;
  //   this.form.reset();
  //   this.form.clear();
    // $("#image").val('')
    $("#exampleModal").modal("show");
  },

  show(id) {
    this.showMode = true;
  //   this.form.reset();
  //   this.form.clear();
  //   this.form.fill(id);
    $("#exampleModal").modal("show");
  },

  edit(id) {
    this.editMode = true;
    this.showMode = false;
  //   this.form.reset();
  //   this.form.clear();
  //   this.form.fill(id);
    $("#exampleModal").modal("show");
  },

  // onImageChange(e) {
  //   this.form.image = e.target.files[0];
  // },

  store() {
    this.$Progress.start();
    this.form.busy = true;
    this.form
      .post(`${this.backendUrl}job-post`)
      .then((response) => {
        this.getData();
        // console.log("store a ayse");
        // console.log(response);

        $("#exampleModal").modal("hide");
        if (this.form.successful) {
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: "Success",
            text: "jobapplications Added",
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
    // this.$Progress.start();
    // this.form.busy = true;
    this.form
      .post(`${this.backendUrl}job-post/` + this.form.id)
      .then((response) => {
        // console.log("update");
        // console.log(response);

        this.getData();

        if (this.form.successful) {
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: "Success",
            text: "jobapplications Updated",
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

  download(id) {
      axios
        .get(`${this.backendUrl}application/download/` + id, {
          responseType: "arraybuffer",
        })
        .then((res) => {
      
          // solution 2
          var fileURL = window.URL.createObjectURL(new Blob([res.data]));
          var fileLink = document.createElement('a');
          fileLink.href = fileURL;
          fileLink.setAttribute('download', 'Resume.pdf');
          document.body.appendChild(fileLink);
          fileLink.click();
        });

      //   .catch((e) => {
      //     console.log(e);
      //     this.$Progress.fail();
      //   });
    },

  addShortlist(id) {
    this.$swal
      .fire({
        title: "Are you sure?",
        text: "You want to Shortlist this applicant!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, shortlist it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`${this.backendUrl}job-applications/shortlisted/` + id)
            .then((response) => {
              this.$swal.fire("Shortlisted!", response.data.message, "success");
              this.getData();
            });
        }
      });
  },

  removeShortlist(id) {
    this.$swal
      .fire({
        title: "Are you sure?",
        text: "You want to remove this applicant from Shortlist!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`${this.backendUrl}job-applications/removeShortlist/` + id)
            .then((response) => {
              this.$swal.fire("Removed From Shortlist!", response.data.message, "success");
              this.getData();
            });
        }
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

  toggleAllCheckboxes() {
    if (this.selectAll) {
      this.checkedItems = this.jobapplications.map((item) => item.id);
    } else {
      this.checkedItems = [];
    }
  },

  openForMail() {
    this.mailForm.applicantIds = this.checkedItems
    $("#sendMailModal").modal("show");
  },

  sendMail(){
    this.$Progress.start();
    this.mailForm.busy = true;
    this.mailForm.post(`${this.backendUrl}send-mail`)
            .then((response) => {
              if (this.mailForm.successful) {
                this.$Progress.finish();
                this.$notify({
                  type: "success",
                  title: "Success",
                  text: "Mail Sent Successfully",
                });
                $('#sendMailModal').modal('hide')
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
