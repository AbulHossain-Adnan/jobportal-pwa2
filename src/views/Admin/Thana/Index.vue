<template>
    <div id="product">
        <div class="col-12">
            <div class="card">
                <div class="row card-header bg-transparent border-bottom">
                    <div class="col-md-8">
                        <h4 class="card-title">List Of Thana</h4>
                        <span>
                            This is an Thana related information about Alumni and Student
                        </span>
                    </div>
                    <div class="col-md-4">
                        <button type="button" @click="create"  class="btn btn-sm btn-success float-end" > <i class="fas fa-plus"></i>Add Thana</button>
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
                                        <option value="name">Name</option>
                                        <option value="bn_name">Bangla Name</option>
                                        <option value="name">Division</option>
                                        <option value="name">District</option>
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
                            <th>Name</th>
                            <th>Bangla Name</th>
                            <th>Division</th>
                            <th>District</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>


                        <tbody>
                        <tr v-for="(thana, index) of thanas">
                            <td>{{ thana.id }}</td>
                            <td>{{ thana.name }}</td>
                            <td>{{ thana.bn_name }}</td>
                            <td>{{ thana.division.name }}</td>
                            <td>{{ thana.district.name }}</td>
                            <td>{{ thana.status }}</td>
                            <td>
                                <button type="button" @click="show(thana)" class="btn btn-info btn-sm">
                                    <i class="fas fa-eye"></i>
                                </button>

                                <button type="button" @click="edit(thana)" class="btn btn-primary btn-sm" >
                                    <i class="fas fa-edit"></i>
                                </button>

                                <button type="button" @click="destroy(thana.id)" class="btn btn-danger btn-sm">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>

                        <tr v-show="!thanas.length">
                            <td colspan="6">
                                <div class="alert alert-danger text-danger text-center" role="alert">
                                    No data available in table :(
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div v-if="thanas.length" class="d-flex">
                        <div class="col-md-4 pl-0" style="margin: auto;" v-if="thanas.length">
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
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Fire Station</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                                <div v-if="form.progress" class="text-center">Progress: {{ form.progress.percentage }}%</div>

                                <AlertError :form="form" message="There were some problems with your input." />

                                <div class="modal-body">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input v-model="form.name" type="text" name="name" class="form-control" placeholder="name" :readonly="showMode==true ? true : false">
                                        <HasError :form="form" field="name" />
                                    </div>
                                    <div class="form-group">
                                        <label>Bangla Name</label>
                                        <input v-model="form.bn_name" type="text" name="bn_name" class="form-control" placeholder="bn_name" :readonly="showMode==true ? true : false">
                                        <HasError :form="form" field="bn_name" />
                                    </div>
                                    <div class="form-group">
                                        <label>Division</label>
                                        <select v-if="showMode==false" name="division_id" v-model="form.division_id" class="form-control">
                                            <option value="">Select One</option>
                                            <option v-for="division in divisions" :value="division.id" v-html="division.name"></option>
                                        </select>
                                        <input v-else="showMode==true" v-model="form.division.name" type="text" name="division_id" class="form-control" placeholder="division_id" readonly>
                                        <HasError :form="form" field="division_id" />
                                    </div>
                                    <div class="form-group">
                                        <label>District</label>
                                        <select v-if="showMode==false" name="district_id" v-model="form.district_id" class="form-control">
                                            <option value="">Select One</option>
                                            <option v-for="district in districts" :value="district.id" v-html="district.name"></option>
                                        </select>
                                        <input v-if="showMode==true" v-model="form.district.name" type="text" name="district_id" class="form-control" placeholder="district_id" readonly>
                                        <HasError :form="form" field="district_id" />
                                    </div>
                                    <div class="form-group">
                                        <label>Status</label>
                                        <select v-if="showMode==false" name="status" v-model="form.status" class="form-control">
                                            <option value="">Select One</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                        <input v-if="showMode==true" v-model="form.status" type="text" name="status" class="form-control" placeholder="status" readonly>
                                        <HasError :form="form" field="status" />
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
                backendUrl: this.$store.state.backendUrl,
                editMode: false,
                showMode: false,
                keyword: "",
                fieldName: "name",
                perPage: 10,
                thanas: [],
                divisions: [],
                districts: [],
                pagination: [],
                links: [],

                form: new Form({
                    id: "",
                    name: "",
                    bn_name: "",
                    division: [],
                    district: [],
                    division_id: "",
                    district_id: "",
                    status: ""
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
        },

        methods: {
            getData(url) {
                this.$Progress.start();
                let linkUrl = url ? url :  `${this.backendUrl}thana`;
                axios.get(linkUrl, {
                    params: {
                        per_page: this.perPage,
                        field_name: this.fieldName,
                        keyword: this.keyword,
                    }
                })
                    .then((response) => {
                        this.thanas = response.data.data;
                        this.divisions = response.data.divisions;
                        this.districts = response.data.districts;
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
                console.log(id)
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
                this.form.post(`${this.backendUrl}thana`)
                    .then(response => {
                        this.getData()
                        $('#exampleModal').modal('hide')
                        if(this.form.successful){
                            this.$Progress.finish()
                            this.$notify({ type: "success", title: "Success", text: "Thana Added" });
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
                this.form.put(`${this.backendUrl}thana/`+this.form.id)
                    .then(response => {
                        this.getData()
                        $('#exampleModal').modal('hide')
                        if(this.form.successful){
                            this.$Progress.finish()
                            this.$notify({ type: "success", title: "Success", text: "Thana Updated" });
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
                        axios.delete(`${this.backendUrl}thana/`+id, )
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