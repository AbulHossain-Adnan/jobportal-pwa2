<template>
    <div id="product">
        <div class="col-12">
            <div class="card">
                <div class="row card-header bg-transparent border-bottom">
                    <div class="col-md-8">
                        <h4 class="card-title">List Of Skills</h4>
                        <span>
                            This is an Skill related information about Alumni and Student
                        </span>
                    </div>
                    <div class="col-md-4">
                        <button type="button" @click="create"  class="btn btn-sm btn-success float-end" > <i class="fas fa-plus"></i>Add Skill</button>
                    </div>
                </div>

                <div class="card-body">

                    <div class="row mb-3">
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-md-2" style="margin: auto 0;">
                                    <span>Show</span>
                                </div>

                                <div class="col-md-3">
                                    <select @change="getData(null)" v-model="perPage" class="form-select form-select-sm">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>

                                <div class="col-md-3" style="margin: auto 0;">
                                    <span>entries</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-2" style="margin: auto;">
                                    <strong>Search By :</strong>
                                </div>

                                <div class="col-md-3">
                                    <select v-model="fieldName" id="fields" class="form-select form-select-sm">
                                        <option value="title">Title</option>
                                        <option value="description">Description</option>
                                    </select>
                                </div>

                                <div class="col-md-7">
                                    <input v-model="keyword" type="text" class="form-control form-control-sm" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <table class="table table-bordered dt-responsive  nowrap w-100">
                        <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Sub-Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>


                        <tbody>
                        <tr v-for="(skill, index) of skills">
                            <td>{{ skill.id }}</td>
                            <td>{{ skill.title }}</td>
                            <td>{{ skill.description }}</td>
                            <td>
                                <span v-for="item in skill.categories">
                                    {{ item.name }} <span v-if="skill.categories.length!=1">,</span>
                                </span>
                            </td>
                            <td>
                                <span v-for="item in skill.subCategories">
                                    {{ item.name }},
                                </span>
                            </td>
                            <td>{{ skill.status }}</td>
                            <td>
                                <button type="button" @click="show(skill)" class="btn btn-info btn-sm">
                                    <i class="fas fa-eye"></i>
                                </button>

                                <button type="button" @click="edit(skill)" class="btn btn-primary btn-sm" >
                                    <i class="fas fa-edit"></i>
                                </button>

                                <button type="button" @click="destroy(skill.id)" class="btn btn-danger btn-sm">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>

                        <tr v-show="!skills.length">
                            <td colspan="6">
                                <div class="alert alert-danger text-danger text-center" role="alert">
                                    No data available in table :(
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div v-if="skills.length" class="d-flex">
                        <div class="col-md-4 pl-0" style="margin: auto;" v-if="skills.length">
                            Showing {{ pagination.from }} to {{ pagination.to }} from {{ pagination.total  }} entiries
                        </div>

                        <PaginationComponent
                                :links = 'links'
                                @get-data="getData"
                        />
                    </div>

                </div>
            </div>
            <!-- Create and Edit Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Skill</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                                <div v-if="form.progress" class="text-center">Progress: {{ form.progress.percentage }}%</div>

                                <AlertError :form="form" message="There were some problems with your input." />

                                <div class="modal-body row">
                                    <div class="col-xl-8">
                                        <div class="form-group my-2">
                                            <label>Title</label>
                                            <input v-model="form.title" type="text" name="title" class="form-control" placeholder="Title" :readonly="showMode==true ? true : false">
                                            <HasError :form="form" field="title" />
                                        </div>

                                        <div class="form-group my-2">
                                            <label>Description</label>
                                            <textarea v-model="form.description" rows="3" cols="50" name="description" :readonly="showMode==true ? true : false" class="form-control" placeholder="Enter description here..."></textarea>
                                            <HasError :form="form" field="description" />
                                        </div>

                                        <div class="form-group my-2">
                                            <label>Status</label>
                                            <select v-if="showMode==false" name="status" id="" class="form-control" v-model="form.status">
                                                <option value="">Select One</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            <input v-if="showMode==true" v-model="form.status" type="text" class="form-control" placeholder="Approval" :readonly="showMode==true ? true : false">
                                            <HasError :form="form" field="status" />
                                        </div>
                                    </div>
                                    <div class="col-xl-4">
                                        <div class="card">
                                            <div class="card-header bg-transparent border-bottom text-uppercase">
                                                <h4 class="card-title">Categories</h4>
                                                <div class="card-tools" style="position: absolute; right: 1rem; top: 0.5rem">
                                                    <a class="" data-bs-toggle="collapse" href="#collapseCategories" role="button" aria-expanded="false" aria-controls="collapseCategories">
                                                        <i class="fas fa-align-justify"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card-body collapse" id="collapseCategories">
                                                <ul class="list-unstyled" v-for="item in categories">
                                                    <li>
                                                        <input v-model="form.categories" type="checkbox" name="category" :value="item.id" > {{ item.name }}
                                                        <HasError :form="form" field="category" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header bg-transparent border-bottom text-uppercase">
                                                <h4 class="card-title">Sub-Categories</h4>
                                                <div class="card-tools" style="position: absolute; right: 1rem; top: 0.5rem">
                                                    <a class="" data-bs-toggle="collapse" href="#collapseSubCategories" role="button" aria-expanded="false" aria-controls="collapseSubCategories">
                                                        <i class="fas fa-align-justify"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card-body collapse" id="collapseSubCategories">
                                                <ul class="list-unstyled" v-for="item in subCategories">
                                                    <li>
                                                        <input v-model="form.subCategories" type="checkbox" name="subCategories" :value="item.id" > {{ item.name }}
                                                        <HasError :form="form" field="subCategories" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button v-if="showMode==false" :disabled="form.busy" type="submit" class="btn btn-primary"> {{ editMode ? 'Update' : 'Create' }}</button>
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
    import axios from 'axios';
    import Form from 'vform';
    import { Button, HasError, AlertError, AlertErrors, AlertSuccess} from 'vform/src/components/bootstrap5'
    import PaginationComponent from "../../../components/PaginationComponent.vue";

    export default {
        name: 'CCCNewsTable',
        components: { PaginationComponent, Button, HasError, AlertError, AlertErrors, AlertSuccess },

        data() {
            return {
                // backendUrl: this.$store.state.backendUrl,
                backendUrl: "http://127.0.0.1:8000/",

                editMode: false,
                showMode: false,
                keyword: "",
                fieldName: "title",
                perPage: 10,
                skills: [],
                categories: [],
                subCategories: [],
                pagination: [],
                links: [],

                form: new Form({
                    id: "",
                    title: "",
                    description: "",
                    categories: [],
                    subCategories: [],
                    status: "",
                }),

            };
        },

        watch: {
            keyword: function () {
                this.getData();
            }
        },

        mounted() {
            console.log("Component mounted.");
            this.getData();
            this.getCategory();
            this.getSubCategory();
        },

        methods: {
            getCategory() {
                let linkUrl =`${this.backendUrl}category`;
                axios.get(linkUrl)
                    .then((response) => {
                        this.categories = response.data.data;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            },
            getSubCategory() {
                let linkUrl =`${this.backendUrl}sub-category`;
                axios.get(linkUrl)
                    .then((response) => {
                        this.subCategories = response.data.data;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            },
            getData(url) {
                this.$Progress.start();
                let linkUrl = url ? url :  `${this.backendUrl}skill`;
                axios.get(linkUrl, {
                    params: {
                        per_page: this.perPage,
                        field_name: this.fieldName,
                        keyword: this.keyword,
                    }
                })
                    .then((response) => {
                        this.skills = response.data.data;
                        this.pagination = response.data.meta;
                        this.links = response.data.meta.links;
                        this.$Progress.finish();
                    })
                    .catch((e) => {
                        console.log(e);
                        this.$Progress.fail();
                    });
            },

            create() {
                this.editMode = false
                this.showMode = false
                this.form.reset()
                this.form.clear()
                // $("#image").val('')
                $("#exampleModal").modal("show");
            },

            show(id) {
                this.showMode = true
                this.form.reset()
                this.form.clear()
                this.form.fill(id)
                $("#exampleModal").modal("show");
            },

            edit(id) {
                this.editMode = true
                this.showMode = false
                this.form.reset()
                this.form.clear()
                this.form.fill(id)
                $("#exampleModal").modal("show");
            },

            onImageChange(e){
                this.form.image = e.target.files[0];
            },

            store() {
                this.$Progress.start()
                this.form.busy = true
                this.form.post(`${this.backendUrl}skill`)
                    .then(response => {
                        this.getData()
                        $('#exampleModal').modal('hide')
                        if(this.form.successful){
                            this.$Progress.finish()
                            this.$notify({ type: "success", title: "Success", text: "Skill Added" });
                        }else{
                            this.$Progress.fail()
                            this.$notify({type: "error", title: "Error", text: 'Something went wrong try again later'})
                        }
                    })
                    .catch(e => {
                        this.$Progress.fail()
                        console.log(e)
                    })
            },

            update() {
                this.$Progress.start()
                this.form.busy = true
                this.form.put(`${this.backendUrl}skill/`+this.form.id)
                    .then(response => {
                        this.getData()
                        $('#exampleModal').modal('hide')
                        if(this.form.successful){
                            this.$Progress.finish()
                            this.$notify({ type: "success", title: "Success", text: "Skill Updated" });
                        }else{
                            this.$Progress.fail()
                            this.$notify({type: "error", title: "Error", text: 'Something went wrong try again later'})
                        }
                    })
                    .catch(e => {
                        this.$Progress.fail()
                        console.log(e)
                    })
            },

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
                        axios.delete(`${this.backendUrl}skill/`+id, )
                        .then(response => {
                            this.$swal.fire(
                                'Deleted!',
                                response.data.message,
                                'success'
                            )
                            this.getData()
                        });
                    }
                })
            }
        }
    }
</script>

<style>

</style>