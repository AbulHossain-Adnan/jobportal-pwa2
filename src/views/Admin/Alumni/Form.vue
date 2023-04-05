<template>
    <div id="form">
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">{{ editMode ? 'Update' : 'Create' }} Alumni</h4>
                        <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                            <div class="row mb-3">
                                <label for="ewu_id_no" class="col-sm-3 col-form-label">EWU id number</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.ewu_id_no" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter Your University ID" />
                                <HasError :form="form" field="ewu_id_no" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="name" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.name" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter your name" />
                                <HasError :form="form" field="name" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="email" class="col-sm-3 col-form-label">E-mail Address</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Format: example@gmail.com" />
                                <HasError :form="form" field="email" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="contact_number" class="col-sm-3 col-form-label">Contact Number</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.contact_number" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Format: 01xxxxxxxxx" />
                                <HasError :form="form" field="contact_number" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="nid" class="col-sm-3 col-form-label">NID</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.nid" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter your National Identity Card Number" />
                                <HasError :form="form" field="nid" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="dob" class="col-sm-3 col-form-label">Date of Birth</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.dob" type="text" class="form-control shadow-lg bg-white rounded" placeholder="Format: DD-MM-YYYY" />
                                <HasError :form="form" field="dob" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="gender" class="col-sm-3 col-form-label">Gender</label>
                                <div class="col-sm-7 m-auto">
                                <select v-model="form.gender" class="form-select form-control shadow-lg rounded">
                                    <!-- <option :value="noselected">Choose One</option> -->
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <HasError :form="form" field="gender" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="blood_group" class="col-sm-3 col-form-label">Blood Group</label>
                                <div class="col-sm-7 m-auto">
                                <select v-model="form.blood_group" class="form-select form-control shadow-lg rounded">
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                                <HasError :form="form" field="blood_group" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="doj" class="col-sm-3 col-form-label">Date of Join</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.doj" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Format: DD-MM-YYYY" />
                                <HasError :form="form" field="doj" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="department_id" class="col-sm-3 col-form-label">Department</label>
                                <div class="col-sm-7 m-auto">
                                <select v-model="form.department_id" class="form-select form-control shadow-lg rounded">
                                    <option value="1">Department of Computer Science & Engineering</option>
                                    <option value="2">Department of Electrical & Electronic Engineering</option>
                                    <option value="3">Department of Genetic Engineering and Biotechnology</option>
                                </select>
                                <HasError :form="form" field="department_id" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="program_id" class="col-sm-3 col-form-label">Program</label>
                                <div class="col-sm-7 m-auto">
                                <select v-model="form.program_id" class="form-select form-control shadow-lg rounded">
                                    <option value="1">Undergraduate</option>
                                    <option value="2">Graduate</option>
                                    <option value="3">Diploma</option>
                                </select>
                                <HasError :form="form" field="program_id" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="passing_year" class="col-sm-3 col-form-label">Passing Semester And Year</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.passing_year" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Format: Spring 2021, Fall 2020" />
                                <HasError :form="form" field="passing_year" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="convocation_year" class="col-sm-3 col-form-label">Convocation Year</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.convocation_year" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter your convocation year" />
                                <HasError :form="form" field="convocation_year" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="professional_interest_ids" class="col-sm-3 col-form-label">Professional Interest</label>
                                <div class="col-sm-7 m-auto">
                                <select v-model="form.professional_interest_ids" class="form-select form-control shadow-lg bg-white rounded selectpicker" multiple aria-label="Default select example">
                                    <option :value="1">Web Development</option>
                                    <option :value="2">Web Design</option>
                                    <option :value="3">App Development</option>
                                </select>
                                <HasError :form="form" field="professional_interest_ids" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="achievement_ids" class="col-sm-3 col-form-label">Achievement</label>
                                <div class="col-sm-7 m-auto">
                                <select v-model="form.achievement_ids" class="form-select form-control shadow-lg bg-white rounded selectpicker" multiple aria-label="Default select example">
                                    <option :value="1">Achievement One</option>
                                    <option :value="2">Achievement Two</option>
                                    <option :value="3">Achievement Three</option>
                                </select>
                                <HasError :form="form" field="achievement_ids" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="skill_ids" class="col-sm-3 col-form-label">Skill</label>
                                <div class="col-sm-7 m-auto">
                                <select v-model="form.skill_ids" class="form-select form-control shadow-lg bg-white rounded selectpicker" multiple aria-label="Default select example">
                                    <option :value="1">Php</option>
                                    <option :value="2">Java</option>
                                    <option :value="3">Java</option>
                                </select>
                                <HasError :form="form" field="skill_ids" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="occupation" class="col-sm-3 col-form-label">Occupation</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.occupation" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter Your Occupation" />
                                <HasError :form="form" field="occupation" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="designation_department" class="col-sm-3 col-form-label">Designation / Department</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.designation_department" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter Designation or Department" />
                                <HasError :form="form" field="designation_department" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="organization_details" class="col-sm-3 col-form-label">Organization Name & Position</label>
                                <div class="col-sm-7 m-auto">
                                <textarea v-model="form.organization_details" class="form-control shadow-lg bg-white rounded" rows="2" cols="50" name="comment" placeholder="Enter text here..."></textarea>
                                <HasError :form="form" field="organization_details" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="experience" class="col-sm-3 col-form-label">Experience</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.experience" type="text" class="form-control shadow-lg bg-white rounded" placeholder="Enter Experience" />
                                <HasError :form="form" field="experience" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="linkedin_profile_link" class="col-sm-3 col-form-label">Linkedin Profile Link</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.linkedin_profile_link" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter Linkedin Profile Link" />
                                <HasError :form="form" field="linkedin_profile_link" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="image" class="col-sm-3 col-form-label">Image</label>
                                <div class="col-sm-7 m-auto">
                                <input @change="onImageChange" name="image" type="file" class="form-control shadow-lg bg-white rounded"
                                    id="file" />
                                <img class="mt-1" :src="imagePreview" style="width: 100px;" alt="">
                                <HasError :form="form" field="image" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="username" class="col-sm-3 col-form-label">Username</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.username" type="text" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter username" />
                                <HasError :form="form" field="username" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-sm-3 col-form-label">Password</label>
                                <div class="col-sm-7 m-auto">
                                <input v-model="form.password" type="password" name="password" class="form-control shadow-lg bg-white rounded"
                                    placeholder="Enter password" />
                                <HasError :form="form" field="password" />
                                </div>
                            </div>

                            <div>
                                <button :disabled="form.busy" type="submit" class="btn btn-primary">
                                    {{ editMode ? "Update" : "Create" }}
                                </button>
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
import axios from 'axios';
import Form from 'vform'
import { Button, HasError, AlertError, AlertErrors, AlertSuccess} from 'vform/src/components/bootstrap5'

export default {
    name: 'Form',
    components: { Button, HasError, AlertError, AlertErrors, AlertSuccess },

    data() {
      return {
        backendUrl: this.$store.state.backendUrl,
        editMode: false,
        imagePreview: "",
        form: new Form({
            id: "",
            ewu_id_no: "",
            name: "",
            email: "",
            contact_number: "",
            nid: "",
            dob: "",
            gender: "",
            blood_group: "",
            doj: "",
            department_id: "",
            program_id: "",
            passing_year: "",
            convocation_year: "",
            // job_interested_area_ids: "",
            professional_interest_ids: "",//
            // personal_interest_ids: "",
            achievement_ids: "",//
            skill_ids: "",//
            // training_ids: "",
            // co_curricular_activity_ids: "",
            occupation: "",
            designation_department: "",
            organization_details: "",
            experience: "",
            linkdin_profile_link: "",
            // facebook_profile_link: "",
            image: "",
            username: "",
            password: ""
        }),
      };
    },

    mounted() {
        console.log('Page Mounted!');
    },

    created() {
        axios.get(`${this.backendUrl}alumni/edit/${this.$route.query.id}`)
        .then((response) => {
            this.form.fill(response.data);
        });
    },

    methods: {
        onImageChange(e){
            this.form.image = e.target.files[0];
            console.log(this.form.image);

            let reader = new FileReader();
            reader.addEventListener('load', function () {
                this.imagePreview = reader.result;
            }.bind(this), false);

            if (this.form.image) {
                reader.readAsDataURL(this.form.image);
            }
        },

        store() {
            this.$Progress.start();
            this.form.busy = true;
            this.form.post(`${this.backendUrl}alumni`)
                .then((response) => {
                if (this.form.successful) {
                    this.$Progress.finish();
                    this.$notify({ type: "success", title: "Success", text: response.data.data.message });
                    this.form.reset()
                    $('#file').val('')
                    this.imagePreview = ''
                } else {
                    this.$Progress.fail();
                    this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
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
            this.form.put(`${this.backendUrl}alumni/` + this.form.id)
            .then((response) => {
                if (this.form.successful) {
                    this.$Progress.finish();
                    this.$notify({ type: "success", title: "Success", text: response.data.data.message });
                    this.$router.push({name: 'app.alumni_all'})
                } else {
                    this.$Progress.fail();
                    this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
                }
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },
    }
}
</script>










