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
                                        Specialization
                                        </button>
                                            </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <div class="text-muted">
                                                            <form
                                                                @submit.prevent="SpecializationStore()"
                                                                @keydown="skillForm.onKeydown($event)"
                                                                >

                                                                    <div class="row">
                                                                        
                                                                    
                                                                <div class="col-lg-11">
                                                                    <label for="formrow-firstname-input" class="form-label">Skills *</label>
                                                                        <Multiselect
                                                                            v-model="skillForm.skill_ids"
                                                                            mode="tags"
                                                                            placeholder="Select Area of expertice"
                                                                            :close-on-select="false"
                                                                            :create-option="false"
                                                                            :options="skillData"
                                                                        />
                                                                        <HasError :form="skillForm" field="skill_ids" />
                                                                    </div>
                                                                        </div>
                                                                            <div class="row">
                                                                              
                                                                                <div class="col-lg-10">
                                                                                    <div class="mb-3">
                                                                                        <label for="formrow-firstname-input" class="form-label">How did you learn the skill? *</label><br>
                                                                                        <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox"  v-model="skillForm.learned" id="inlineCheckbox1" value="self">
                                                                                            <label class="form-check-label" for="inlineCheckbox1">Self</label>
                                                                                        </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox"  v-model="skillForm.learned" id="inlineCheckbox2" value="job">
                                                                                            <label class="form-check-label" for="inlineCheckbox2">Job</label>
                                                                                        </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox"  v-model="skillForm.learned" id="inlineCheckbox3" value="educational">
                                                                                            <label class="form-check-label" for="inlineCheckbox3">Educational</label>
                                                                                        </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox"  v-model="skillForm.learned" id="inlineCheckbox3" value="professional_training">
                                                                                            <label class="form-check-label" for="inlineCheckbox3">Professional Training</label>
                                                                                        </div>

                                                                                        <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox"  v-model="skillForm.learned" id="inlineCheckbox3" value="ntvqf">
                                                                                            <label class="form-check-label" for="inlineCheckbox3">NTVQF </label>
                                                                                        </div>
                                                                                        <HasError :form="skillForm" field="learned" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- <div class="mt-3">
                                                                        <button type="button" class="btn btn-outline-success float-right">+Add  skill</button>
                                                                        </div> -->

                                                                            <div class="mb-3">
                                                                            <label for="exampleFormControlTextarea1" class="form-label"> Description *</label>
                                                                            <textarea class="form-control" id="exampleFormControlTextarea1"  v-model="skillForm.description" rows="3"></textarea>
                                                                            <HasError :form="skillForm" field="description" />
                                                                            </div>
                                                                            <div class="mb-3">
                                                                        <label for="exampleFormControlTextarea1" class="form-label">extracurricular *</label>
                                                                        <textarea class="form-control" id="exampleFormControlTextarea1"  v-model="skillForm.extracurricular" rows="3"></textarea>
                                                                        <HasError :form="skillForm" field="extracurricular" />
                                                                        </div>
                                                                            <div>
                                                                                <button v-if="specializationMode == true" type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                                                <button v-if="specializationMode == false" type="button"   @click.prevent="SpecializationUpdate" class="btn btn-success btn-lg ">Update</button>
                                                                            </div>
                            
                                                                        </form>  
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Language Proficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div class="text-muted">
                                                                <form
                                                                @submit.prevent="LanguageProficiencyStore()"
                                                                @keydown="languageProficiencyForm.onKeydown($event)"
                                                                >
                                                                    <div class="row" v-for="(row, index) in languageProficiencyForm.proficiencyDetails">
                                                                        <div class="col-lg-5">
                                                                            <label for="formrow-firstname-input" class="form-label">Language *</label>
                                                                            <input type="text"  :name="'language['+index+'][language]'" class="form-control" id="formrow-firstname-input"  v-model="row.language"
                                                                            name="language"
                                                                            placeholder="e.g. language">
                                                                            <HasError :form="languageProficiencyForm" :field="'proficiencyDetails.' + index + '.language'" />

                                                                        </div>

                                                                        <div class="col-lg-5">
                                                                            <label for="formrow-firstname-input" class="form-label"> Reading</label>
                                                                            <select :name="'language['+index+'][reading]'" id="formrow-inputState" class="form-select" v-model="row.reading">
                                                                                <option value="" selected>Choose...</option>
                                                                                <option value="High">High</option>
                                                                                <option value="Medium">Medium</option>
                                                                                <option value="Low">Low</option>
                                                                            </select>
                                                                        
                                                                            <HasError :form="languageProficiencyForm" :field="'proficiencyDetails.' + index + '.reading'" />
                                                                        </div>
                                                                    <!-- </div> -->

                                                                    <!-- <div class="row"> -->
                                                                        <div class="col-lg-5">
                                                                            <label for="formrow-firstname-input" class="form-label">Writing *</label>
                                                                            <select :name="'language['+index+'][writing]'" id="formrow-inputState" class="form-select" v-model="row.writing">
                                                                                <option value="" selected>Choose...</option>
                                                                                <option value="High">High</option>
                                                                                <option value="Medium">Medium</option>
                                                                                <option value="Low">Low</option>
                                                                            </select>
                                                                          
                                                                            <HasError :form="languageProficiencyForm" :field="'proficiencyDetails.' + index + '.writing'" />

                                                                        </div>

                                                                        <div class="col-lg-5">
                                                                            <label for="formrow-firstname-input" class="form-label"> Speaking</label>
                                                                            <select :name="'language['+index+'][speaking]'" id="formrow-inputState" class="form-select" v-model="row.speaking">
                                                                                <option value="" selected>Choose...</option>
                                                                                <option value="High">High</option>
                                                                                <option value="Medium">Medium</option>
                                                                                <option value="Low">Low</option>
                                                                            </select>
                                                                            <HasError :form="languageProficiencyForm" :field="'proficiencyDetails.' + index + '.speaking'" />

                                                                        </div>
                                                                        <div class="col-lg-2" v-if="index!=0">
                                                                        <button type="button" class="btn btn-outline-danger"  @click.prevent="removeLanguageProficiency(index)">Remove</button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mb-3">
                                                                    </div>
                                                                    <div>
                                                                        <button v-if="languageProficiencyStoreMode ==true" type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                                        <button v-if="languageProficiencyStoreMode ==false" type="submit" class="btn btn-success btn-lg w-md ml-3">Update</button>
                                                                        <button type="button" class="btn btn-outline-success float-right" @click.prevent="addMoreLanguageProficiency">+Add Language</button>
                                                                    </div>
                                                                </form> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        References
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div class="text-muted">
                                                                
                                                                <form
                                                                @submit.prevent="referenceStore()"
                                                                @keydown="referenceForm.onKeydown($event)"
                                                                >
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label">Name *</label>
                                                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="referenceForm.name"
                                                                            name="name"
                                                                            placeholder="e.g. name">
                                                                            <HasError :form="referenceForm" field="name" />
                                                                        </div>

                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label"> Designation</label>
                                                                            <input type="text"  v-model="referenceForm.designation" class="form-control" id="formrow-firstname-input"  placeholder="Entory you designation">
                                                                            <HasError :form="referenceForm" field="designation" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label">Organization *</label>
                                                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="referenceForm.organization"
                                                                            name="organization"
                                                                            placeholder="e.g. organization">
                                                                            <HasError :form="referenceForm" field="organization" />
                                                                        </div>

                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label"> Email *</label>
                                                                            <input type="text"  v-model="referenceForm.email" class="form-control" id="formrow-firstname-input"  placeholder="e.g. example@gmail.com">
                                                                            <HasError :form="referenceForm" field="email" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label">Relation *</label>
                                                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="referenceForm.relation"
                                                                            name="relation"
                                                                            placeholder="e.g. relation">
                                                                            <HasError :form="referenceForm" field="relation" />
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label"> Mobile *</label>
                                                                            <input type="text"  v-model="referenceForm.mobile" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 019xxxxxxxxxx">
                                                                                <HasError :form="referenceForm" field="mobile" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <label for="formrow-inputState" class="form-label">Address </label>
                                                                      
                                                                        <textarea  v-model="referenceForm.address" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                        <HasError :form="referenceForm" field="address" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="mb-3">
                                                                    </div>
                                                                    <div>
                                                                        <button v-if="referenceStoreMode== true" type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                                        <button v-if="referenceStoreMode== false" type="button" class="btn btn-success btn-lg w-md" @click.prevent="referenceUpdate">Update</button>
                                                                    </div>
                                                                </form>  
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
      //   backendUrl: "http://127.0.0.1:8000/",

      skillData:[],
      storeMode:true,
      specializationMode:true,
      languageProficiencyStoreMode:true,
      referenceStoreMode:true,
      specialization_id:"",
      jobposts: [],
      jobportaluser_id: localStorage.getItem('auth_id'),
      resume_id: localStorage.getItem('resume_id'),

        // LanguageProficiency Form added 
        languageProficiencyForm: new Form({
            proficiencyDetails: [{
                id: "",
                resume_id: localStorage.getItem('resume_id'),
                language: "",
                reading: "",
                writing: "",
                speaking: "",
            }]
        }),
        //  end 

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

        // Reference  Form added 
        referenceForm: new Form({
            id:"",
            resume_id: localStorage.getItem('resume_id'),
            name:"",
            designation:"",
            organization:"",
            email:"",
            relation:"",
            mobile:"",
            address:"",
        }),
        //  end 
    };
  },

  watch: {
    keyword: function () {
      this.getData();
      this.getDependentData();
      this.getSpecializeData();
      this.getLanguageProficiency();
      this.getReferenceData();
    },
  },

  mounted() {
    console.log("Component mounted.");
    this.getData();
    this.getDependentData();
    this.getSpecializeData();
    this.getLanguageProficiency();
    this.getReferenceData();
  },

  methods: {
    getData() {
    // fetching  resumes data
    this.$Progress.start();
      let resumes =`${this.backendUrl}resumes`;
      axios
        .get(resumes).then((response) => {
          this.resume_id = response.data.id;
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    // end 

    },
    // end 

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

    // fetching Specialization data
    getSpecializeData() {
        // alert(localStorage.getItem('resume_id'))
    axios.get(`${this.backendUrl}user-specialization/`+localStorage.getItem('resume_id'))
        .then((response) => {
            if(response.data.resume_id) {
                this.specializationMode = false;
                this.specialization_id = response.data.id;
            }
        this.skillForm.fill(response.data);
        })
        .catch((e) => {
            this.$Progress.fail();
        });
    },
    //   end


    // fetching  getLanguageProficiency data
    getLanguageProficiency(){
      let languageProficiency =`${this.backendUrl}language-proficiency`;
      axios
        .get(languageProficiency).then((response) => {
          if(response.data.length > 0) {
            this.languageProficiencyStoreMode = false;
            this.languageProficiencyForm.proficiencyDetails = response.data;
          }
        })
        .catch((e) => {
          console.log(e);
        });
        // end 
    },

    getReferenceData(){
      let reference =`${this.backendUrl}user-reference/`+localStorage.getItem('resume_id');
      axios
        .get(reference).then((response) => {
          if(response.data.resume_id) {
            this.referenceStoreMode = false;
            this.referenceForm.fill(response.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
       
    },


    // Store Specialization data
    SpecializationStore() {
      this.$Progress.start();
      this.skillForm.busy = true;
      this.skillForm
        .post(`${this.backendUrl}specialization`)
        .then((response) => {
            this.getSpecializeData();
          if (this.skillForm.successful) {
            this.$Progress.finish();
           
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
    // End Specialization Store


    // Start SpecializationUpdate
    SpecializationUpdate() {
      this.$Progress.start();
      this.skillForm.busy = true;
      this.skillForm
        .put(`${this.backendUrl}specialization/` + this.skillForm.id).then((response) => {
          this.getData();
          if (this.skillForm.successful) {
                this.$Progress.finish();
                ElNotification({
                    title: "Success",
                    message: "Data Updated Successfully",
                    type: "success",
                });
            }else{
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
    // End SpecializationUpdate Update


    // Store LanguageProficiency data
    LanguageProficiencyStore() {
        this.$Progress.start();
        this.languageProficiencyForm.busy = true;
        this.languageProficiencyForm
        .post(`${this.backendUrl}language-proficiency`,{
            params: {
                  resume_id: this.resume_id,
                },
        })
        .then((response) => {
            console.log(response.data);
            console.log('languageProficiencyForm respn');

          if (this.languageProficiencyForm.successful) {
          this.languageProficiencyStoreMode = false;
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
    // End languageProficiencyForm Store


    // Store reference data
        referenceStore() {

           
        this.$Progress.start();
        this.referenceForm.busy = true;
        this.referenceForm
        .post(`${this.backendUrl}reference`)
        .then((response) => {
           
        if (this.referenceForm.successful) {
        this.getReferenceData();
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
    // End reference Store


     // Start referenceUpdate
     referenceUpdate() {
      this.$Progress.start();
      this.referenceForm.busy = true;
      this.referenceForm
        .put(`${this.backendUrl}reference/` + this.referenceForm.id).then((response) => {
          this.getData();
          if (this.referenceForm.successful) {
                this.$Progress.finish();
                ElNotification({
                    title: "Success",
                    message: "Data Updated Successfully",
                    type: "success",
                });
            }else{
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
    // End referenceUpdate



    // Add more LanguageProficiency 
    addMoreLanguageProficiency() {
        this.languageProficiencyForm.proficiencyDetails.push({
            id: "",
            resume_id:"",
            Language : "",
            reading: "",
            writing: "",
            speaking: "",
        });
    },

    // end 

    // remove multiple row addresses 
    removeLanguageProficiency(index) {
        this.languageProficiencyForm.proficiencyDetails.splice(index,1);
    },
    // end
  },
};
</script>