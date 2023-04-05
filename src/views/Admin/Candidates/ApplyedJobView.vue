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
            <button class="nav-link active" id="application-tab" data-bs-toggle="tab" data-bs-target="#application" type="button" role="tab" aria-controls="overview" aria-selected="true">Applications</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="shortlist-tab" data-bs-toggle="tab" data-bs-target="#shortlist" type="button" role="tab" aria-controls="shortlist" aria-selected="false">WithdraApplications</button>
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
               

                <div class="col-md-8">
                <div class="row">
                  <div class="col-md-2" style="margin: auto">
                    <strong>Search By :</strong>
                  </div>
  
                  <div class="col-md-3">
                    <input
                      v-model="selectedDate.from_date"
                      type="date"
                      class="form-control form-control-sm"
                      placeholder="Keyword"
                    />
                    <!-- <select
                      v-model="fieldName"
                      id="fields"
                      class="form-control form-control-sm"
                    >
                      <option value="">Job Title</option>
                      <option value="">Company Name</option>
                    </select> -->
                  </div>
                  <div class="col-md-3">
                    <!-- <select
                      v-model="fieldName"
                      id="fields"
                      class="form-control form-control-sm"
                    >
                      <option value="">Job Title</option>
                      <option value="">Company Name</option>
                    </select> -->
                    <input
                      v-model="selectedDate.to_date"
                      type="date"
                      class="form-control form-control-sm"
                      placeholder="Keyword"
                    />
                  </div>
  
                  <div class="col-md-4">
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
                    <th scope="col">Job Title</th>
                  <th scope="col">Company Name</th>
                  <!-- <th scope="col"> Company Details</th> -->
                  <th scope="col"> Job Location</th>
                  <th scope="col"> Posted Date</th>
                  <th scope="col"> Expired Date</th>
                  <th scope="col"> Applyed Date</th>
                  <th scope="col"> Salary Range</th>
                  <th scope="col"> Viewed by Employeers ?</th>



                  <!-- <th scope="col">Is Approved</th> -->
                  <!-- <th scope="col">Applications <i class="fa-sharp fa-regular fa-file"></i></th> -->

                  <!-- <th scope="col">Status</th> -->

                  <th class="text-center">Actions</th>

                <!-- <th scope="col">No</th>
                <th scope="col">Job Title</th>
                <th scope="col">Company Name</th>
                <th scope="col">Location</th>
                <th scope="col">Experience</th>
                <th scope="col">Position</th>
                <th scope="col">Type</th>
                <th scope="col">Posted Date</th>
                <th scope="col">Last Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th> -->
                </tr>
                    </thead>

                    <tbody>

                      <tr v-for="item in jobApplications">
                    <th >{{ item.job_post.job_title }}</th>
                    <th >{{ item.job_post.company_name }}</th>
                    <th >{{ item.job_post.company_address }}</th>

                    <th >{{ item.job_post.job_publish_date }}</th>
                    <th >{{ item.job_post.job_deadline }}</th>

                    <th >{{item.applyed_date  }}</th>
                    <!-- <th >{{ item.job_workplace }}</th> -->
                    <td>{{ item.job_post.min_salary }} to {{ item.job_post.max_salary }}</td>
            
                    <!-- <td>
                     {{ item.is_approved }}
                      <p v-if="item.is_approved == Yes">
                         <span class="badge bg-success">Approved</span>
                        </p>
  
                    </td> -->
                    <td>
                        <b style="background-color:goldenrod;"><i class="fa-solid fa-check"></i></b>
                    </td>
                    <!-- <td><span class="badge bg-success">Active</span></td> -->

                    <td class="">
                        <ul class="list-unstyled hstack gap-1 mb-0">                                       
                        <!-- <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                            <router-link :to="{ path: '/dashboard-editjob', query: { jobId: item.id } }" class="btn btn-sm btn-info">
                                    <i class="mdi mdi-pencil-outline"></i>
                            </router-link>
                        </li> -->
                        <!-- <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                    
                            <router-link :to="{ path: '/dashboard-viewjob', query: { jobId: item.id } }" class="btn btn-sm btn-primary">
                              <i class="fa-solid fa-eye"></i>
                            </router-link>
                        </li> -->
                        <!-- <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                            <button @click="destroy(item.id)" type="button" class="btn btn-sm btn-danger"> <i class="mdi mdi-delete-outline"></i></button>
                        </li> -->
                       
                       
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="withdraw">
                            <button @click="applicationWithdrawModalShow(item.id)" type="button" class="btn btn-sm btn-secondary">
                              <i class="fa-solid fa-backward"></i>
                            </button>
                          </li>
                    </ul>
                   </td>
                  </tr>
                  <tr v-show="!jobApplications.length">
                <td colspan="9">
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


              <div v-if="jobApplications.length" class="d-flex">
                <div
                        class="col-md-4 pl-0"
                        style="margin: auto"
                        v-if="jobApplications.length"
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
                    <input
                      v-model="selectedDate.from_date"
                      type="date"
                      class="form-control form-control-sm"
                      placeholder="Keyword"
                    />
                  </div>
                  <div class="col-md-3">
                    <input
                      v-model="selectedDate.to_date"
                      type="date"
                      class="form-control form-control-sm"
                      placeholder="Keyword"
                    />
                  </div>
  
                  <div class="col-md-4">
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
                    <th scope="col">Job Title</th>
                  <th scope="col">Company Name</th>
                  <!-- <th scope="col"> Company Details</th> -->
                  <th scope="col"> Job Location</th>
                  <th scope="col"> Posted Date</th>
                  <th scope="col"> Expired Date</th>
                  <th scope="col"> Applyed Date</th>
                  <th scope="col"> Salary Range</th>
                  <th scope="col"> Viewed by Employeers ?</th>
                  <th class="text-center">Actions</th>
                </tr>
                    </thead>

                    <tbody>
                   <tr v-for="item in withdrawApplications">
                    <th >{{ item.job_post.job_title }}</th>
                    <th >{{ item.job_post.company_name }}</th>
                    <th >{{ item.job_post.company_address }}</th>

                    <th >{{ item.job_post.job_publish_date }}</th>
                    <th >{{ item.job_post.job_deadline }}</th>

                    <th >{{item.applyed_date  }}</th>
                    <!-- <th >{{ item.job_workplace }}</th> -->
                    <td>{{ item.job_post.min_salary }} to {{ item.job_post.max_salary }}</td>
                    <td>
                        <b style="background-color:goldenrod;"><i class="fa-solid fa-check"></i></b>
                    </td>
                    <td class="">
                        <ul class="list-unstyled hstack gap-1 mb-0">                                       

                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="add to Shortlist">
                            <button  @click="withdrawApplicationCancle(item.id)" type="button" class="btn btn-sm btn-secondary">
                              <i class="mdi mdi-account"></i>
                            </button>
                          </li>
                    </ul>
                   </td>
                  </tr>
                  <tr v-show="!withdrawApplications.length">
                <td colspan="9">
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
              <div v-if="withdrawApplications.length" class="d-flex">
                <div
                        class="col-md-4 pl-0"
                        style="margin: auto"
                        v-if="withdrawApplications.length"
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
    </div>



     <!--  applicationWithdrawModal -->
     <div class="modal fade" id="applicationWithdrawModal" tabindex="-1" aria-labelledby="applicationWithdrawModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="applicationWithdrawModalLabel">Withdraw job application</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="editMode ? update() : applicationWithdrawStore()" @keydown="applicationWithdrawForm.onKeydown($event)">
                            <div v-if="applicationWithdrawForm.progress" class="text-center">Progress: {{ applicationWithdrawForm.progress.percentage }}%</div>

                            <AlertError :form="applicationWithdrawForm" message="There were some problems with your input." />

                            <div class="modal-body">
                               
                                <div class="form-group">
                                    <label>Withdraw Reson</label>
                                    <textarea v-model="applicationWithdrawForm.withdraw_reson" rows="3" cols="50" name="withdraw_reson" :readonly="showMode==true ? true : false" class="form-control" placeholder="Enter withdraw reson here..."></textarea>
                                    <HasError :form="applicationWithdrawForm" field="withdraw_reson" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button  type="submit" class="btn btn-primary"> {{ editMode ? 'Update' : 'Submit' }}</button>
                            </div>
                        </form>
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
import { ElNotification } from "element-plus";
import Multiselect from "@vueform/multiselect"
import "@vueform/multiselect/themes/default.css"
import Form from "vform";

import {
  Button,
  HasError,
  AlertError,
  AlertErrors,
  AlertSuccess,
} from "vform/src/components/bootstrap5";
import PaginationComponent from "../../../components/PaginationComponent.vue";

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
    jobApplications: [],
    withdrawApplications: [],
    keyword: "",
    fieldName: "full_name",
    jobcategories: [],
    jobsubcategories: [],
    pagination: [],
    links: [],
    perPage: 10,
    selectedDate:{
        from_date:"",
        to_date:"",
      },
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

      applicationWithdrawForm: new Form({
        id: "",
        withdraw_reson: "",
      }),

      // job id and resume id 
		jobApplicationData:{
			job_post_id: this.$route.query.jobId,
			resume_id: localStorage.getItem('resume_id'), 
		},
		// end
  };
},

watch: {
    keyword: function () {
      this.getData();
    },
    selectedDate: {
		handler: function () {
		  this.getData();
		},
    deep: true,
  },
},
  mounted() {
    console.log("Component mounted.");
    this.getData();
  },

  

methods: {
  getData(url) {
      this.$Progress.start();
      let linkUrl = url ? url : `${this.backendUrl}user-job-application/`+localStorage.getItem('resume_id');
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            selectedDate: this.selectedDate,
            keyword: this.keyword,
          },
        })
        .then((response) => {
          this.jobApplications = response.data.data;
          this.pagination = response.data.meta;
          this.links = response.data.meta.links;
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
        this.$Progress.start();

    // fetching job WithDraw Application list  
      let withdrawApplications = url ? url : `${this.backendUrl}user-job-withdraw-application-list/`+localStorage.getItem('resume_id');
      axios
        .get(withdrawApplications, {
          params: {
            per_page: this.perPage,
            selectedDate: this.selectedDate,
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
    // end 
    },

     // open new training add modal 
       applicationWithdrawModalShow(id) {
        this.applicationWithdrawForm.id = id;
                $('#applicationWithdrawModal').modal('show');
            },
      // end 

  // withdraw Job Application
  withdrawApplication(id) {
    this.$swal
      .fire({
        title: "Are you sure?",
        text: "You want to Withdraw from this application!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, withdraw it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .get(`${this.backendUrl}job-applications/withdraw/` + id)
            .then((response) => {
              this.$swal.fire("Withdraw Successfully done!", response.data.message, "success");
              this.getData();
            });
        }
      });
  },
  // end


  // Cancle  Withdraw Application
    withdrawApplicationCancle(id) {
    this.$swal
      .fire({
        title: "Are you sure?",
        text: "You want to Cancle Withdraw for this application!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancle withdraw!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .get(`${this.backendUrl}job-applications/withdraw-cancle/` + id)
            .then((response) => {
              this.$swal.fire("Cancle withdraw Successfully done!", response.data.message, "success");
              this.getData();
            });
        }
      });
  },
// end

     // new Training Store 
     applicationWithdrawStore() {
                this.$Progress.start()
                this.applicationWithdrawForm.busy = true
                this.applicationWithdrawForm.post(`${this.backendUrl}job-applications/withdraw`)
                .then(response => {

                 
                  // this.$swal.fire("Withdraw Successfully done!", response.data.message, "success");
                  //  this.getData();
                    if(this.applicationWithdrawForm.successful) {
                      this.applicationWithdrawForm.reset();
                      this.applicationWithdrawForm.clear();
                      $('#applicationWithdrawModal').modal('hide');
                      this.getData();
                        this.$Progress.finish()
                        ElNotification({
                        title: "Success",
                        message: "Application Withdraw done",
                        type: "success",
                    });
                    } else{
                        this.$Progress.fail()
                        ElNotification({
                        title: "Error",
                        message: "Somethis went Wrong",
                        type: "error",
                    });
                    }
                })
                .catch(e => {
                    this.$Progress.fail()
                    console.log(e)
                })
            },
        // end

  
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

},
};
</script>
