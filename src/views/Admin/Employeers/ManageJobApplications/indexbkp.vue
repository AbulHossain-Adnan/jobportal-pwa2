<template>
    <div id="product">
      <div class="col-12">
        <div class="card">
          <div class="row card-header bg-transparent border-bottom">
            <div class="col-md-8">
              <h4 class="card-title">List Of Job Applications</h4>
              <span>
                This is an Job Application related information
            
              </span>
            </div>
            <div class="col-md-4">

            </div>
          </div>
  
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
                      <option value="full_name">Full Name</option>
                      <option value="email">Email</option>
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
            <!-- <div class="table-responsive">
            <table class=" table table-bordered dt-responsive nowrap w-100"> -->
              <div class="table-rep-plugin">
              <div class="table-responsive mb-0" data-pattern="priority-columns">
                  <table id="tech-companies-1" class="table table-striped">
              <thead>
                <tr class="table-secondary">
                  <th scope="col">Full Name</th>
                  <th scope="col"> Email </th>
                  <!-- <th scope="col">Status</th>
                    <th scope="col">Actions</th> -->
                    
                    <!-- <th scope="col">No</th> -->
                <!-- <th scope="col">Company Name</th> -->
                <th scope="col">Job Title</th>
                <th scope="col">Company Name</th>
                <th scope="col">Location</th>
                <!-- <th scope="col">Experience(required)</th> -->
                <!-- <th scope="col">Position</th> -->
                <!-- <th scope="col">Type</th> -->
                <th scope="col">Posted Date</th>
                <th scope="col">Last Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>


                </tr>
              </thead>
  
              <tbody>

                    <tr v-for="item in jobapplications">
                      <th >{{ item.full_name }}</th>
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
                          <a href="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                      </li> 
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                          <router-link :to="{ path: '/dashboard-createjob', query: { jobId: item.id } }" class="btn btn-sm btn-soft-info">
                                  <i class="mdi mdi-pencil-outline"></i>
                                

                          </router-link>
                      </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Download pdf">
                        <button  @click="download(item.id)" type="button" class="btn btn-sm btn-soft-primary"> <i class="mdi mdi-download-outline"></i></button>
                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                          <button @click="destroy(item.id)" type="button" class="btn btn-sm btn-soft-danger"> <i class="mdi mdi-delete-outline"></i></button>
                      </li> 
                  </ul>
                             </td>
                    </tr>

                    </tbody>
            </table>
          </div>
        </div>

  
            <div v-if="jobposts.length" class="d-flex">
              <div
                class="col-md-4 pl-0"
                style="margin: auto"
                v-if="jobposts.length"
              >
                Showing {{ pagination.from }} to {{ pagination.to }} from
                {{ pagination.total }} entiries
              </div>
  
              <PaginationComponent :links="links" @get-data="getData" />
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
      </div>
  
      <vue-progress-bar></vue-progress-bar>
      <notifications />
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Form from "vform";
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
      AlertSuccess,
    },
  
    data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      editMode: false,
      showMode: false,
      jobapplications: [],
      jobcategories: [],
      jobsubcategories: [],
      pagination: [],
      links: [],
      perPage: 10,
      jobposts: [],
      dialog: false,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      keyword: "",
      fieldName: "full_name",

      form: new Form({
        id: "",
        age: "",
        job_sub_category_id: "",
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
      let jobId = this.$route.query.jobId;
      if(jobId){
        var linkUrl = url ? url : `${this.backendUrl}job-applications/`+jobId;
      }else{
        var linkUrl = url ? url : `${this.backendUrl}jobapplications`;
      }
      this.$Progress.start();
     
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            field_name: this.fieldName,
            keyword: this.keyword,
          },
        })
        .then((response) => {
          console.log(response);
          console.log("job-post response");
          this.jobapplications = response.data.data;
          this.pagination = response.data.meta;
          this.links = response.data.meta.links;
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
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

    editApplication() {
      this.dialog = true;
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

    onImageChange(e) {
      this.form.image = e.target.files[0];
    },

    store() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}job-post`)
        .then((response) => {
          this.getData();
          console.log("store a ayse");
          console.log(response);

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
          console.log("update");
          console.log(response);

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

    destroy(id) {

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
              .delete(`${this.backendUrl}jobapplications/` + id)
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
