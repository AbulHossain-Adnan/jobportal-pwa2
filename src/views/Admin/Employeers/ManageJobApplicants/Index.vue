<template>
  <div id="product">
    <div class="col-12">
      <div class="card">
        <div class="row card-header bg-transparent border-bottom">
          <div class="col-md-8">
            <h4 class="card-title">List Of Job Applicants</h4>
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
                    <option value="email">Email</option>
                    <option value="address">Address</option>
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
                <table id="tech-companies-1" class="table table-bordered align-middle nowrap ">
            <thead>
              <tr class="table-secondary">
                <th scope="col">Image</th>
                <th scope="col">Full Name</th>

                <th scope="col"> Email</th>
                <th scope="col"> EWU_ID_NO</th>
                <th scope="col"> Status</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
                  <tr v-for="item in applicants">
                  <th >
                    <img :src="item.profile_image?item.profile_image:$store.state.resume_image" class="rounded" style="width:60px;height: 65px;" width="250" :alt="Image">
                  </th>

                  <th >{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }}</th>
                  <th >{{ item.email }}</th>
                  <th >{{ item.ewu_id_no }}</th>
                  <td><span class="badge bg-success">Active</span></td>
                  <td class="">
                    <ul class="list-unstyled hstack gap-1 mb-0">                                       
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Profile">
                        <router-link :to="{ name: 'dashboard_resumeview'}" class="btn btn-sm btn-info">
                      <i class="mdi mdi-eye-outline"></i>
                    </router-link>
                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="add to Shortlist">
                        <button  @click="addRating(item)" type="button" class="btn btn-sm btn-warning">
                          <i class="fa-solid fa-star"></i>
                        </button>
                      </li>
                  </ul>
                 </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
          <div v-if="applicants.length" class="d-flex">
            <div
              class="col-md-4 pl-0"
              style="margin: auto"
              v-if="applicants.length"
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
      <!-- add Rating Modal -->
      <div class="modal fade" id="addRating" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addRatingLabel">User Ratings</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="ratingStore()">
                <div v-if="form.progress" class="text-center">Progress: {{ form.progress.percentage }}%</div>
                <AlertError :form="ratingForm" message="There were some problems with your input." />
                <div class="">
                    <img :src="this.resume_image?this.resume_image:$store.state.resume_image" class="rounded" style="width:150px;height: 160px;" width="250" :alt="Image">
                </div>
                <div class="modal-body">
                  <div class="">
                </div>
                <br>
                  <div class="row" v-for="(row, index) in ratingForm.ratingFormDetails">                                                 
                    <div class="col-lg-5">
                        <label for="formrow-firstname-input" class="form-label">Skill *</label>
                            <Multiselect  :name="'rating['+index+'][skill_ids]'" v-model="row.skill_ids"
                                    :searchable="true"  :options="skillData"  placeholder="Select Area of expertice"/>                             
                            <HasError :form="ratingForm" :field="'ratingFormDetails.' + index + '.skill_ids'" />
                        </div>
                        <div class="col-lg-1 mt-4">
                                    <!-- <label for="formrow-firstname-input" class="form-label">addnew  *</label> -->
                                <button style="margin-top: 8px;" type="button" class="btn btn-success" @click="skillStoreModal()">
                                <i class="fa fa-plus-circle"></i>
                                </button>
                            </div>
                        <div class="col-lg-4 mt-2">
                        <label for="formrow-firstname-input" class="form-label">rating *</label>
                        <div class="form-group">
                    <!-- <label for="formrow-firstname-input" class="form-label">Ratings *</label><br> -->
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="row.rating"   :name="'rating['+index+'][rating]'" id="inlineRadio1" value="1">
                            <label class="form-check-label" for="inlineRadio1">1</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="row.rating"  :name="'rating['+index+'][rating]'" id="inlineRadio2" value="2">
                            <label class="form-check-label" for="inlineRadio2">2</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="row.rating"  :name="'rating['+index+'][rating]'" id="inlineRadio3" value="3">
                            <label class="form-check-label" for="inlineRadio3">3</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="row.rating"  :name="'rating['+index+'][rating]'" id="inlineRadio4" value="4">
                            <label class="form-check-label" for="inlineRadio4">4</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="row.rating" name="inlineRadioOptions" id="inlineRadio5" value="5">
                            <label class="form-check-label" for="inlineRadio5">5</label>
                          </div>
                        
                            <HasError :form="ratingForm" :field="'ratingFormDetails.' + index + '.rating'" />
                          </div>
                           
                        </div>
                        <div class="col-lg-1 mt-4" v-if="index!=0">
                        <button type="button" class="btn btn-outline-danger"  @click.prevent="removeRatingForm(index)">Remove</button>
                        </div>
                      </div>
                      <button type="button" class="btn btn-outline-success float-right" @click.prevent="addMoreRatingForm">+Add more</button><br>

                  <div class="form-group">
                    <label>Add note +</label>
                    <textarea name="mail_body" v-model="ratingForm.note" cols="20" rows="3" class="form-control"></textarea>
                    <HasError :form="ratingForm" field="note" />
                  </div>
                </div>
                <div class="modal-footer">
                  <button  type="submit" class="btn btn-primary">Submit</button>
                  <!-- <button v-if="ratingStoreMode == false" type="button" @click="ratingUpdate()" class="btn btn-info">Update</button> -->
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



         <!--  skillStoreModal -->
         <div class="modal fade" id="skillStoreModal" tabindex="-1" aria-labelledby="skillStoreModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="skillStoreModalLabel">Add new skill</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="editMode ? update() : skillStore()" @keydown="skillForm.onKeydown($event)">
                                <div v-if="form.progress" class="text-center">Progress: {{ form.progress.percentage }}%</div>

                                <AlertError :form="skillForm" message="There were some problems with your input." />

                                <div class="modal-body row">
                                    <div class="col-xl-12">
                                        <div class="form-group my-2">
                                            <label>Title</label>
                                            <input v-model="skillForm.title" type="text" name="title" class="form-control" placeholder="Title" :readonly="showMode==true ? true : false">
                                            <HasError :form="skillForm" field="title" />
                                        </div>

                                        <div class="form-group my-2">
                                            <label>Description</label>
                                            <textarea v-model="skillForm.description" rows="3" cols="50" name="description" :readonly="showMode==true ? true : false" class="form-control" placeholder="Enter description here..."></textarea>
                                            <HasError :form="skillForm" field="description" />
                                        </div>

                                        <div class="form-group my-2">
                                            <label>Status</label>
                                            <select v-if="showMode==false" name="status" id="" class="form-control" v-model="skillForm.status">
                                                <option value="">Select One</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            <input v-if="showMode==true" v-model="skillForm.status" type="text" class="form-control" placeholder="Approval" :readonly="showMode==true ? true : false">
                                            <HasError :form="skillForm" field="status" />
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="modal-footer">
                                    <button  :disabled="form.busy" type="submit" class="btn btn-primary"> {{ editMode ? 'Update' : 'Create' }}</button>
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
import Multiselect from "@vueform/multiselect"
import "@vueform/multiselect/themes/default.css"
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
    Multiselect,
    AlertSuccess,
  },

  data() {
  return {
    backendUrl: this.$store.state.backendUrl,
    editMode: false,
    showMode: false,
    applicants: [],
    keyword: "",
    fieldName: "email",
    jobcategories: [],
    jobsubcategories: [],
    pagination: [],
    links: [],
    perPage: 10,
    skillData:[],
    ratingStoreMode: true,
    resume_image:"",
    resume_id:"",
    form: new Form({
      id: "",
      title: "",
      description: "",
      time: "",
      date: "",
    }),

      // add skill form 
              skillForm: new Form({
                id: "",
                title: "",
                description: "",
                status: "",
            }),
      // end 

    // open new skill Store modal 
      skillStoreModal() {
        this.skillForm.reset();
        this.skillForm.clear();
        $('#skillStoreModal').modal('show');
        $("#addRating").modal("hide");
      },
      // end 

    // rating Form added 
    ratingForm: new Form({
      ratingFormDetails: [{
        id:"",
        rating:"",
        skill_ids:"",
      }],
      note:"",
  }),
  //  end 

      //  add More RatingForm 
        addMoreRatingForm() {
          this.ratingForm.ratingFormDetails.push({
            id:"",
            rating:"",
            skill_ids:"",
          });
      },
    // end 

      // remove multiple row rating 
      removeRatingForm(index) {
        this.ratingForm.ratingFormDetails.splice(index,1);
    },
    // end
   
  };
},

watch: {
  keyword: function () {
    this.getData();
    this.getDependentData();
    // this.getRatingData();
  },
},

mounted() {
  console.log("Component mounted.");
  this.getData();
  this.getDependentData();
  // this.getRatingData();
},

methods: {
  getData(url) {
    this.$Progress.start();
    let linkUrl = url ? url : `${this.backendUrl}jobprofile`;
    axios
      .get(linkUrl, {
        params: {
          per_page: this.perPage,
          field_name: this.fieldName,
          keyword: this.keyword,
        },
      })
      .then((response) => {
    
        this.applicants = response.data.data;
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

  addRating(item) {

      this.ratingForm.reset();
      this.ratingForm.clear();
      this.resume_id = item.id;
      this.resume_image = item.profile_image;

      if(item.user_rating != "") {
            let resumes =`${this.backendUrl}job-profile/user-ratings/`+item.id;
            axios
            .get(resumes).then((response) => {
              this.ratingForm.ratingFormDetails = response.data;
              this.ratingForm.note = response.data[0]['note'];
              this.ratingStoreMode = false;
      })
        .catch((e) => {
        console.log(e);
        this.$Progress.fail();
        });
  } 
  $("#addRating").modal("show");
  },

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
            text: "applicants Added",
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
            text: "applicants Updated",
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


  // rating store
  ratingStore() {

    this.$Progress.start();
    this.ratingForm.busy = true;
    this.ratingForm
      .post(`${this.backendUrl}job-profile/store/user-ratings`,{
                params: {
                  resume_id: this.resume_id,
                },
            })
      .then((response) => {
        $("#addRating").modal("hide");
        if (this.ratingForm.successful) {
          this.getData();
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: "Success",
            text: "Data Stored Successfully",
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


  // skill store 
    skillStore() {
          this.$Progress.start()
          this.skillForm.busy = true
          this.skillForm.post(`${this.backendUrl}skill`)
              .then(response => {
               
                 
                  if(this.skillForm.successful){
                    
                      this.skillForm.reset();
                      this.skillForm.clear();
                      $('#skillStoreModal').modal('hide')
                      this.getDependentData();
                      $('#addRating').modal('show')
                      this.$Progress.finish()
                      this.$notify({ type: "success", title: "Success", text: "Skill Added" });
                  }else {
                      this.$Progress.fail()
                      this.$notify({type: "error", title: "Error", text: 'Something went wrong try again later'})
                  }
              })
              .catch(e => {
                  this.$Progress.fail()
                  console.log(e)
              })
        },

  
  ratingUpdate() {
    this.$Progress.start();
    this.ratingForm.busy = true;
    this.ratingForm
      .put(`${this.backendUrl}job-profile/update/user-ratings/` + this.ratingForm.id)
      .then((response) => {
        this.getData();

        if (this.ratingForm.successful) {
          $("#addRating").modal("hide");
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: "Success",
            text: "Data  Updated Successfully",
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
