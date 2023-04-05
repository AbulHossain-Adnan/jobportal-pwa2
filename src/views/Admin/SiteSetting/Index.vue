<template>
  <div id="product">
    <div class="col-12">
      <div class="card">
        <div class="row card-header bg-transparent border-bottom">
          <div class="col-md-8">
            <h4 class="card-title">List Of sitesetting</h4>
            <span>
              This is an sitesetting related information about Alumni and
              Student
            </span>
          </div>
          <div class="col-md-4">
            <button
              type="button"
              @click="create"
              class="btn btn-sm btn-success float-end"
            >
              <i class="fas fa-plus"></i>Add SiteSetting
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
                    <option value="address">Address</option>
                    <option value="contact_email">Contact Email</option>
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
                <th>Contact Email</th>
                <th>Contact no</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(sitesetting, index) of sitesettings">
                <td>{{ sitesetting.id }}</td>
                <td>{{ sitesetting.contact_email }}</td>
                <td>{{ sitesetting.contact_no }}</td>
                <td>
                  <button
                    type="button"
                    @click="show(sitesetting)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    @click="edit(sitesetting)"
                    class="btn btn-primary btn-sm"
                  >
                    <i class="fas fa-edit"></i>
                  </button>

                  <button
                    type="button"
                    @click="destroy(sitesetting.id)"
                    class="btn btn-danger btn-sm"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>

              <tr v-show="!sitesettings.length">
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

          <div v-if="sitesettings.length" class="d-flex">
            <div
              class="col-md-4 pl-0"
              style="margin: auto"
              v-if="sitesettings.length"
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
                    <label>contact_number</label>
                    <input
                      v-model="form.contact_number"
                      type="text"
                      name="contact_number"
                      class="form-control"
                      placeholder="contact_number"
                    />
                    <HasError :form="form" field="contact_number" />
                  </div>

                  <div class="form-group">
                    <label>contact_email</label>
                    <input
                      v-model="form.contact_email"
                      type="text"
                      name="contact_email"
                      class="form-control"
                      placeholder="contact_email"
                    />
                    <HasError :form="form" field="contact_email" />
                  </div>

                  <div class="form-group">
                    <label>address</label>
                    <input
                      v-model="form.address"
                      type="text"
                      name="address"
                      class="form-control"
                      placeholder="address"
                    />
                    <HasError :form="form" field="address" />
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
  name: "sitesettingsTable",
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
      fieldName: "address",
      perPage: 10,
      sitesettings: [],
      pagination: [],
      links: [],

      form: new Form({
        id: "",
        contact_number: "",
        contact_email: "",
        address: "",
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
      let linkUrl = url ? url : `${this.backendUrl}site-settings`;
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            field_name: this.fieldName,
            keyword: this.keyword,
          },
        })
        .then((response) => {
          this.sitesettings = response.data.data;
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
        .post(`${this.backendUrl}site-settings`)
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
        .put(`${this.backendUrl}site-settings/` + this.form.id)
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
              .delete(`${this.backendUrl}site-settings/` + id)
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

<style></style>
