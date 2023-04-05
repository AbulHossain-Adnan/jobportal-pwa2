<template>
  <div id="product">
    <div class="col-12">
      <div class="card">
        <div class="row card-header bg-transparent border-bottom">
          <div class="col-md-8">
            <h4 class="card-title">List Of studentwelfare</h4>
            <span>
              This is an studentwelfare related information about Alumni and
              Student
            </span>
          </div>
          <div class="col-md-4">
            <button
              type="button"
              @click="create"
              class="btn btn-sm btn-success float-end"
            >
              <i class="fas fa-plus"></i>Add studentwelfare
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
                  <select
                    @change="getData(null)"
                    v-model="perPage"
                    class="form-select form-select-sm"
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
                    class="form-select form-select-sm"
                  >
                    <option value="title">Title</option>
                    <option value="description">Description</option>
                  </select>
                </div>

                <div class="col-md-7">
                  <input
                    v-model="keyword"
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>

          <table class="table table-bordered dt-responsive nowrap w-100">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>name</th>
                <th>designation_id</th>
                <th>contact_hours</th>
                <th>contact_no</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(studentwelfare, index) of studentwelfares">
                <td>{{ studentwelfare.id }}</td>
                <td>{{ studentwelfare.name }}</td>
                <td>{{ studentwelfare.designation_id }}</td>
                <td>{{ studentwelfare.contact_hours }}</td>
                <td>{{ studentwelfare.contact_no }}</td>
                <td>Published</td>
                <td>
                  <button
                    type="button"
                    @click="show(studentwelfare)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    @click="edit(studentwelfare)"
                    class="btn btn-primary btn-sm"
                  >
                    <i class="fas fa-edit"></i>
                  </button>

                  <button
                    type="button"
                    @click="destroy(studentwelfare)"
                    class="btn btn-danger btn-sm"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>

              <tr v-show="!studentwelfares.length">
                <td colspan="6">
                  <div
                    class="alert alert-danger text-danger text-center"
                    role="alert"
                  >
                    No data available in table :(
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div v-if="studentwelfares.length" class="d-flex">
            <div
              class="col-md-4 pl-0"
              style="margin: auto"
              v-if="studentwelfares.length"
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
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
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
                    <label>Name *</label>
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="name"
                    />
                    <HasError :form="form" field="name" />
                  </div>

                  <div class="form-group">
                    <label>designation_id *</label>
                    <input
                      v-model="form.designation_id"
                      type="text"
                      name="designation_id"
                      class="form-control"
                      placeholder="designation_id"
                    />
                    <HasError :form="form" field="designation_id" />
                  </div>

                  <div class="form-group">
                    <label>Contact Hours *</label>
                    <input
                      v-model="form.contact_hours"
                      type="text"
                      name="contact_hours"
                      class="form-control"
                      placeholder="contact_hours"
                    />
                    <HasError :form="form" field="contact_hours" />
                  </div>

                  <div class="form-group">
                    <label>Contact No *</label>
                    <input
                      v-model="form.contact_no"
                      type="text"
                      name="contact_no"
                      class="form-control"
                      placeholder="contact_no"
                    />
                    <HasError :form="form" field="contact_no" />
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
import PaginationComponent from "../../../components/PaginationComponent.vue";

export default {
  name: "studentwelfaresTable",
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
      keyword: "",
      fieldName: "name",
      perPage: 10,
      studentwelfares: [],
      pagination: [],
      links: [],

      form: new Form({
        id: "",
        name: "",
        designation_id: "",
        contact_hours: "",
        contact_no: "",
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
      this.$Progress.start();
      let linkUrl = url ? url : `${this.backendUrl}student-welfare`;
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            field_name: this.fieldName,
            keyword: this.keyword,
          },
        })
        .then((response) => {
          console.log("hi");
          this.studentwelfares = response.data.data;
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
      // $("#image").val('')
      $("#exampleModal").modal("show");
    },

    edit(id) {
      this.editMode = true;
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
        .post(`${this.backendUrl}student-welfare`)
        .then((response) => {
          this.getData();
          $("#exampleModal").modal("hide");
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "Skill Added",
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
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .put(`${this.backendUrl}student-welfare/` + this.form.id)
        .then((response) => {
          this.getData();
          $("#exampleModal").modal("hide");
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "Skill Updated",
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
  },
};
</script>

<style></style>
