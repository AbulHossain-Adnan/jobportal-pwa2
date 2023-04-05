<template>
    <div id="product">
        <div class="col-12">
            <div class="card">
                <div class="row card-header bg-transparent border-bottom">
                        <div class="col-md-8">
                            <h4 class="card-title">Example</h4>
                            <span>
                                This is an experimental awesome solution for responsive tables with complex data
                            </span>
                        </div>
                        <div class="col-md-4">
                            <router-link :to="{name: 'app.blog-add'}" type="button" class="btn btn-sm btn-success float-end">
                                <i class="fas fa-plus"></i> Add New
                            </router-link>
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
                                    <th style="width: 5%">SL</th>
                                    <th class="text-center" style="width: 10%" >Image</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <!-- <th class="text-center" style="width: 10%">Published</th> -->
                                    <th class="text-center" style="width: 12%">Actions</th>
                                </tr>
                            </thead>


                        <tbody>
                                <tr v-for="(job_blog, index) of job_blogs">
                                    <td>
                                        {{ job_blog.id }}
                                    </td>

                                    <td class="text-center">
                                        <img width="80" :src="job_blog.image" :alt="job_blog.id">
                                    </td>

                                    <td>
                                        {{ job_blog.title }}
                                    </td>

                                    <td>
                                        {{ job_blog.description }}
                                    </td>

                                    <!-- <td v-if="cccnew.published" class="text-center">
                                        <span class="badge bg-success">Published</span>
                                    </td> -->

                                    <!-- <td v-else class="text-center">
                                        <span class="badge bg-warning">Unpublished</span>
                                    </td> -->

                                    <td class="text-center">
                                        <button type="button" @click="show(job_blog)" class="btn btn-info btn-sm">
                                            <i class="fas fa-eye"></i>
                                        </button>

                                        <button type="button" @click="edit(job_blog)" class="btn btn-primary btn-sm">
                                            <i class="fas fa-edit"></i>
                                        </button>

                                        <button type="button" @click="destroy(job_blog)" class="btn btn-danger btn-sm">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr v-show="!job_blogs.length">
                                    <td colspan="6">
                                    <div class="alert alert-danger text-danger text-center" role="alert">
                                        No data available in table :(
                                    </div>
                                    </td>
                                </tr>
                        </tbody>
                    </table>

                    <div v-if="job_blogs.length" class="d-flex">
                        <div class="col-md-4 pl-0" style="margin: auto;" v-if="job_blogs.length">
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
            <!-- <div class="modal fade" id="createEditModal" tabindex="-1" aria-labelledby="createEditModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="createEditModalTitle"> {{ editMode ? 'Update' : 'Create' }} CCC News</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                            <div class="modal-body">
                                <div v-if="form.progress" class="text-center">Progress: {{ form.progress.percentage }}%</div>

                                <AlertError :form="form" message="There were some problems with your input." />

                                <div class="mb-2">
                                    <label for="title" class="col-form-label">Title</label>
                                    <input v-model="form.title" name="title" type="text" class="form-control" placeholder="Title">
                                    <HasError :form="form" field="title" />
                                </div>

                                <div class="mb-2">
                                    <label for="description" class="col-form-label">Description</label>
                                    <textarea v-model="form.description" name="description" class="form-control" placeholder="Enter description here..." rows="4" cols="50"></textarea>
                                    <HasError :form="form" field="description" />
                                </div>

                                <div class="mb-2">
                                    <label for="image" class="col-form-label">Image</label>
                                    <input type="file" name="image" id="file" class="form-control form-control-file border" @change="onImageChange" />
                                    <HasError :form="form" field="image" />
                                    <img class="mt-1" :src="imagePreview" style="width: 100px;" alt="">
                                </div>

                                <div class="mt-3">
                                    <input v-model="form.published" type="checkbox">
                                    <span> Published</span>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button :disabled="form.busy" type="submit" class="btn btn-primary"> {{ editMode ? 'Update' : 'Create' }}</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div> -->
        </div>

        <vue-progress-bar></vue-progress-bar>
        <notifications />

    </div>
</template>

<script>
import axios from 'axios';
import Form from 'vform'
import { Button, HasError, AlertError, AlertErrors, AlertSuccess} from 'vform/src/components/bootstrap5'
import PaginationComponent from "../../../components/PaginationComponent.vue";

export default {
    name: 'Index',
    components: { PaginationComponent, Button, HasError, AlertError, AlertErrors, AlertSuccess },

    data() {
      return {
        // backendUrl: this.$store.state.backendUrl,
        backendUrl: "http://127.0.0.1:8000/",

        editMode: false,
        keyword: "",
        fieldName: "title",
        perPage: 10,
        job_blogs: [],
        pagination: [],
        links: [],

        form: new Form({
        id: "",
        title: "",
        description: "",
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
        let linkUrl = url ? url :  `${this.backendUrl}job-blog`;
        axios.get(linkUrl, {
            params: {
                per_page: this.perPage,
                field_name: this.fieldName,
                keyword: this.keyword,
            }
        })
        .then((response) => {
            console.log(response.data.data);
            this.job_blogs = response.data.data;
            this.pagination = response.data.meta;
            this.links = response.data.meta.links;
            this.$Progress.finish();
        })
        .catch((e) => {
            console.log(e);
            this.$Progress.fail();
        });
        },

        // create() {
        //     this.editMode = false
        //     this.form.reset()
        //     this.form.clear()
        //     $('#file').val('')
        //     this.imagePreview = `https://placehold.co/800?text=No+Image&font=roboto`
        //     $("#createEditModal").modal("show");
        // },

        // onImageChange(e){
        //     this.form.image = e.target.files[0];
        //     console.log(this.form.image);

        //     let reader = new FileReader();
        //     reader.addEventListener('load', function () {
        //         this.imagePreview = reader.result;
        //     }.bind(this), false);

        //     if (this.form.image) {
        //         reader.readAsDataURL(this.form.image);
        //     }
        // },

        store() {
            this.$Progress.start()
            this.form.busy = true
            this.form.post(`${this.backendUrl}job-blog`)
            .then(response => {
                this.getData()
                $('#createEditModal').modal('hide')
                if (this.form.successful) {
                    this.$Progress.finish()
                    this.$notify({ type: "success", title: "Success", text: response.data.data.message });
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

        // edit(cccnew) {
        //     console.log(cccnew);
        //     this.editMode = true
        //     this.form.reset()
        //     this.form.clear()
        //     $('#file').val('')
        //     this.imagePreview = cccnew.image
        //     this.form.fill(cccnew)
        //     $("#createEditModal").modal("show")
        // },

        // update() {
        //     this.$Progress.start()
        //     this.form.busy = true
        //     this.form.put(`${this.backendUrl}career-counselling/` + this.form.id)
        //     .then(response => {
        //         this.getData()
        //         $('#createEditModal').modal('hide')
        //         if (this.form.successful) {
        //             console.log(response);
        //             this.$Progress.finish()
        //             this.$notify({ type: "success", title: "Success", text: response.data.data.message });
        //         }else{
        //             this.$Progress.fail()
        //             this.$notify({type: "error", title: "Error", text: 'Something went wrong try again later'})
        //         }
        //     })
        //     .catch(e => {
        //         this.$Progress.fail()
        //         console.log(e)
        //     })
        // },

    }
}
</script>

<style>

</style>