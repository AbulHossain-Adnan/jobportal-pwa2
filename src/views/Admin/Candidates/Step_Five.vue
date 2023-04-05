<template lang="">
  <div>
      <div class="card mb-3">
      <div class="card-body">
          <div class="row">
                  <!-- Tab panes -->
                  <div class="tab-content  text-muted">
                      <div class="tab-pane active" id="personal1" role="tabpanel">
                          <div class="mt-4">
                              <div class="accordion" id="accordionExample">
                                  <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingOne">
                                      <button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      File Upload
                                      </button>
                                          </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="text-muted">
                                                <button v-if="resumeFiles < 1" type="button" class="btn btn-success float-right" @click="createResumeFile">Add new</button><br><br>
                                                <div class="row">
                                                    <div class="table-rep-plugin">
                                                    <div class="table-responsive mb-0" data-pattern="priority-columns">
                                                    <table id="tech-companies-1" class="table table-bordered align-middle nowrap ">
                                                    <thead>
                                                        <tr class="table-secondary">
                                                        <th scope="col"> Video</th>
                                                        <th scope="col"> cv/resume</th>
                                                        <th class="text-center">Actions</th>
                                                        </tr>
                                                    </thead>
                                          <tbody>
                                            <tr>
                                              <th v-if="resumeFiles.resume_video">
                                         
                                                <iframe
                                        :src="resumeFiles.resume_video" style="border: 2px solid white;" title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        
                                            </th>
                                            
                                            <th v-if="resumeFiles.resume_cv">
                                            <iframe
                                            :src="resumeFiles.resume_cv" style="border: 2px solid white;" title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </th>
                                           
                                            <td class="">
                                                <ul class="list-unstyled hstack gap-1 mb-0">                                       
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                <button class="btn btn-soft-info"  @click="editResumeFile(resumeFiles)"><i class="mdi mdi-pencil-outline"></i></button>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="delete">
                                                <button class="btn btn btn-soft-danger"  @click="destroy(resumeFiles.id)"><i class="mdi mdi-delete-outline"></i></button>
                                                </li>
                                            </ul>
                                        </td>
                                        </tr>
                                        <tr v-show="!resumeFiles">
                                        <td colspan="6">
                                        <div
                                            class="alert alert-danger text-danger text-center"
                                            role="alert"
                                        >
                                            No resume file in table :(
                                        </div>
                                        </td>
                                   </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                              </div>                   
                             </div>
                           </div>
                        </div>
                      </div>                     
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</div>
<vue-progress-bar></vue-progress-bar>
    <notifications />



<div class="modal fade" id="addressModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
              <form
                  @submit.prevent="resumeFileStore()" @keydown="form.onKeydown($event)">
                <div class="mb-3">
            
                    <label for="exampleFormControlTextarea1" class="form-label"> CV/Resume *</label>
                    <input type="file" id="resume-file-input" class="form-control" name="resume_cv" @change="onPdfFileChange($event)">
                    <HasError :form="resumeFileForm" field="resume_file" />
                    </div>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"> Sort Video (max 30 second) *</label>
                <input type="file" id="resume-file-input" class="form-control" name="resume_video" @change="onVideoChange($event)">

           
                <HasError :form="resumeFileForm" field="description" />
                </div>
                <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button v-if="editMode!=true" type="submit" class="btn btn-primary">Save changes</button>
            <button v-if="editMode == true" type="submit" class="btn btn-primary">Update</button>

      </div>

     </form>  
      </div>
     
    </div>
  </div>
</div>

</div>
</template>
<script>

import PaginationComponent from "../../../components/PaginationComponent.vue";
import { ElNotification } from "element-plus";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
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
    Multiselect,
    AlertErrors,
    AlertSuccess,
  },

data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      //  backendUrl: "http://127.0.0.1:8000/",

     
      training_summaries:[],
      editMode:false,
      resume_id:"",
      render_image:"",
      render_resume_file:"",
      resumeFiles:[],


        // Specialization Skill Form added 
        resumeFileForm: new Form({
            id:"",
            resume_cv: "",
            resume_video: "",
        }),
        //  end 
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
  // fetching resumes files data
    let $resume_id = localStorage.getItem('resume_id');
    this.$Progress.start();
      let resumesFiles =`${this.backendUrl}user/resume-files/`+$resume_id;
      axios
        .get(resumesFiles).then((response) => {
          this.resumeFiles = response.data;
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    },
  // end 

  // upload pdf and video 
    onPdfFileChange(event) {
      this.resumeFileForm.resume_cv = event.target.files[0];
    },

    onVideoChange(event) {
      this.resumeFileForm.resume_video = event.target.files[0];
    },
 // end 

  // Training Summary create and Edit modal 
  createResumeFile() {
    this.editMode = false;
    this.resumeFileForm.reset();
    this.resumeFileForm.clear();
    $("#addressModal").modal("show");
  },

  editResumeFile(item) {
    this.editMode = true;
    this.resumeFileForm.reset();
    this.resumeFileForm.clear();
    this.resumeFileForm.fill(item);
    $("#addressModal").modal("show");
  },
  // end ********************************

    // Start Resume file store
     resumeFileStore() {
let resume_id = localStorage.getItem('resume_id');
   
      this.$Progress.start();
      this.resumeFileForm.busy = true;
      this.resumeFileForm
        .post(`${this.backendUrl}resume-files`,{
          params: {
                    resume_id: resume_id,
                },
        }).then((response) => {
          this.getData();
          if (this.resumeFileForm.successful) {
            $("#addressModal").modal("hide");
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
    // End resume file store

  resumeFileUpdate() {
  this.$Progress.start();
  this.resumeFileForm.busy = true;
  this.resumeFileForm
    .put(`${this.backendUrl}resume-files/`+this.resumeFileForm.id).then((response) => {
      this.getData();
      if (this.resumeFileForm.successful) {
        $("#addressModal").modal("hide");
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
// End resume file Update

  destroy(id){
      // this.$swal
      this.$swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              axios.delete(`${this.backendUrl}resume-files/`+id, )
              .then(response => {
                  this.getData();
                  this.$swal.fire(
                      'Deleted!',
                      response.data.message,
                      'success'
                  )
                  // this.getUserAddresses();
              });
          }
      })
  },
  },
};
</script>