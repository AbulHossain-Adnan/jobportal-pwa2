<template>
  <div id="sub-category">
    <div class="col-12">
      <div class="card">
        <div class="row card-header bg-transparent border-bottom">
          <div class="col-md-8">
            <h4 class="card-title">List Of Sub Categories</h4>
            <span>
              This is an sub category related information about Alumni and Student
            </span>
          </div>
          <div class="col-md-4">
            <button type="button" @click="create" class="btn btn-sm btn-success float-end">
              <i class="fas fa-plus"></i> Add New
            </button>
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
                  <select @change="getData(null)" v-model="perPage" class="form-select form-select-sm">
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
                  <select v-model="fieldName" id="fields" class="form-select form-select-sm">
                    <option value="name">Name</option>
                  </select>
                </div>

                <div class="col-md-7">
                  <input v-model="keyword" type="text" class="form-control" placeholder="Search" style="height:26px;" />
                </div>
              </div>
            </div>
          </div>

          <table class="table table-bordered dt-responsive nowrap w-100">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(subCategory, index) of subCategories">
                <td>{{ index + 1 }}</td>
                <td>{{ subCategory.category.name }}</td>
                <td>{{ subCategory.name }}</td>
                <td>{{ subCategory.status }}</td>
                <td>
                  <button type="button" @click="show(subCategory)" class="btn btn-info btn-sm">
                    <i class="fas fa-eye"></i>
                  </button>

                  <button type="button" @click="edit(subCategory)" class="btn btn-primary btn-sm">
                    <i class="fas fa-edit"></i>
                  </button>

                  <button type="button" @click="destroy(subCategory.id)" class="btn btn-danger btn-sm">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>

              <tr v-show="!subCategories.length">
                <td colspan="6">
                  <div class="alert alert-danger text-danger text-center" role="alert">
                    No data available in table :(
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div v-if="subCategories.length" class="d-flex">
            <div class="col-md-4 pl-0" style="margin: auto" v-if="subCategories.length">
              Showing {{ pagination.from }} to {{ pagination.to }} from
              {{ pagination.total }} entiries
            </div>

            <PaginationComponent
              :links="links"
              @get-data="getData" 
            />
          </div>
        </div>
      </div>

      <!-- Create and Edit Modal -->
      <div class="modal fade" id="createEditModal" tabindex="-1" aria-labelledby="createEditModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="createEditModalLabel"> {{ editMode ? 'Update' : 'Create' }} sub category</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                <div v-if="form.progress" class="text-center">
                  Progress: {{ form.progress.percentage }}%
                </div>
                <AlertError :form="form" message="There were some problems with your input." />

                <div class="modal-body">
                  <div class="form-group">
                      <label>Category</label>
                      <select v-model="form.category_id" name="category_id" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="category in categories" :value="category.id" v-html="category.name"></option>
                      </select>
                  </div>

                  <div class="form-group">
                    <label>Name</label>
                    <input v-model="form.name" type="text" name="name" class="form-control" placeholder="name"/>
                    <HasError :form="form" field="name" />
                  </div>

                  <div class="form-group mt-2">
                      <label>Status</label>
                      <select v-model="form.status" name="status" class="form-control form-select">
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                      </select>
                      <HasError :form="form" field="status" />
                  </div>
                </div>

                <div class="modal-footer">
                  <button :disabled="form.busy" type="submit" class="btn btn-primary">
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
import { Button, HasError, AlertError, AlertErrors, AlertSuccess} from "vform/src/components/bootstrap5";
import PaginationComponent from "../../../components/PaginationComponent.vue";

export default {
  name: "Index",
  components: { PaginationComponent, Button, HasError, AlertError, AlertErrors, AlertSuccess},

  data() {
    return {
      // backendUrl: this.$store.state.backendUrl,
     backendUrl: "http://127.0.0.1:8000/",

      editMode: false,
      keyword: "",
      fieldName: "name",
      perPage: 10,
      subCategories: [],
      pagination: [],
      links: [],

      categories: [],
      form: new Form({
        id: '',
        category_id: '',
        name: '',
        status: 'Active',
      }),
    };
  },

  watch: {
    keyword: function () {
      this.getData();
    },
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData(url) {
      this.$Progress.start();
      let linkUrl = url ? url : `${this.backendUrl}sub-category`;
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            field_name: this.fieldName,
            keyword: this.keyword,
          },
        })
        .then((response) => {
          this.categories = response.data.categories;
          this.subCategories = response.data.data;
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
      this.editMode = false;
      this.form.reset();
      this.form.clear();
      $("#createEditModal").modal("show");
    },

    store() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}sub-category`)
        .then((response) => {
          this.getData();
          $("#createEditModal").modal("hide");
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "Sub Category Added",
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

    edit(subCategory) {
      this.editMode = true;
      this.form.reset();
      this.form.clear();
      this.form.fill(subCategory);
      $("#createEditModal").modal("show");
    },

    update() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .put(`${this.backendUrl}sub-category/` + this.form.id)
        .then((response) => {
          this.getData();
          $("#createEditModal").modal("hide");
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "Sub Category Updated",
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
            axios.delete(`${this.backendUrl}sub-category/` + id)
            .then((response) => {
              this.$notify({
                type: "success",
                title: "Success",
                text: "Sub Category Deleted",
              });
              this.getData();
            });
          }
        });
    },
  },
};
</script>
