<template>
    <div id="about-ccc">
        <div class="col-12">
            <div class="card">
                <div class="row card-header bg-transparent border-bottom">
                    <div class="col-md-8">
                        <h4 class="card-title">List Of About CCC</h4>
                        <span>
                            This is an About CCC related information
                        </span>
                    </div>
                    <div class="col-md-4">
                        <button type="button" @click="create"  class="btn btn-sm btn-success float-end" > <i class="fas fa-plus"></i> Add New</button>
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
                                        <option value="prelude">Prelude</option>
                                        <option value="objectives">Objectives</option>
                                        <option value="mission">Mission</option>
                                        <option value="conclusion">Conclusion</option>
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
                            <th>Prelude</th>
                            <th>Objectives</th>
                            <th>Mission</th>
                            <th>Conclusion</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>


                        <tbody>
                        <tr v-for="(aboutCcc, index) of aboutCccs">
                            <td>{{ aboutCcc.id }}</td>
                            <td>{{ aboutCcc.title }}</td>
                            <td>{{ aboutCcc.prelude }}</td>
                            <td>{{ aboutCcc.objectives }}</td>
                            <td>{{ aboutCcc.mission }}</td>
                            <td>{{ aboutCcc.conclusion }}</td>
                            <td>{{ aboutCcc.status }}</td>
                            <td>
                                <button type="button" @click="show(aboutCcc)" class="btn btn-info btn-sm">
                                    <i class="fas fa-eye"></i>
                                </button>

                                <!-- <button type="button" @click="edit(aboutCcc)" class="btn btn-primary btn-sm" >
                                    <i class="fas fa-edit"></i>
                                </button> -->

                                <router-link :to="{ name: 'app.about_ccc_form', params: { id: aboutCcc.id } }"
                    class="mr-2">Edit</router-link>

                                <button type="button" @click="destroy(aboutCcc.id)" class="btn btn-danger btn-sm">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>

                        <tr v-show="!aboutCccs.length">
                            <td colspan="8">
                                <div class="alert alert-danger text-danger text-center" role="alert">
                                    No data available in table :(
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div v-if="aboutCccs.length" class="d-flex">
                        <div class="col-md-4 pl-0" style="margin: auto;" v-if="aboutCccs.length">
                            Showing {{ pagination.from }} to {{ pagination.to }} from {{ pagination.total  }} entiries
                        </div>

                        <PaginationComponent
                            :links = 'links'
                            @get-data="getData"
                        />
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
                backendUrl: this.$store.state.backendUrl,
                editMode: false,
                showMode: false,
                keyword: "",
                fieldName: "title",
                perPage: 10,
                aboutCccs: [],
                pagination: [],
                links: [],

                // form: new Form({
                //     id: "",
                //     title: "",
                //     prelude: "",
                //     objectives: "",
                //     mission: "",
                //     conclusion: "",
                //     status: "",
                // }),

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
        },

        methods: {
            getData(url) {
                this.$Progress.start();
                let linkUrl = url ? url :  `${this.backendUrl}about-ccc`;
                axios.get(linkUrl, {
                    params: {
                        per_page: this.perPage,
                        field_name: this.fieldName,
                        keyword: this.keyword,
                    }
                })
                .then((response) => {   
                    this.aboutCccs = response.data.data;
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
                this.$router.push({ path: '/about-ccc-form' })
            },

            edit(aboutCccs) {
                console.log(aboutCccs);
                this.editMode = true
                this.showMode = false
                // this.form.reset()
                // this.form.clear()
                this.form.fill(aboutCccs)
                this.$router.push({ path: '/about-ccc-form' })
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