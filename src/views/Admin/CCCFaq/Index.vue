<template>
  <div id="product">
    <div class="col-12">
      <div class="card">
        <div class="row card-header bg-transparent border-bottom">
          <div class="col-md-8">
            <h4 class="card-title">List Of cccfaqs</h4>
            <span>
              This is an cccfaq related information about Alumni and Student
            </span>
          </div>
          <div class="col-md-4">
            <button
              type="button"
              @click="create"
              class="btn btn-sm btn-success float-end"
            >
              <i class="fas fa-plus"></i>Add cccfaq
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
                    <option value="faq_category">faq_category</option>
                    <option value="question">question</option>
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
                <th>question</th>
                <th>answer</th>
                <th>order</th>
                <th>faq_category</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(cccfaq, index) of cccfaqs">
                <td>{{ cccfaq.id }}</td>
                <td>{{ cccfaq.question }}</td>
                <td>{{ cccfaq.answer }}</td>
                <td>{{ cccfaq.order }}</td>
                <td>{{ cccfaq.faq_category }}</td>
                <td>{{ cccfaq.status }}</td>
                <td>
                  <button
                    type="button"
                    @click="show(cccfaq)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    @click="edit(cccfaq)"
                    class="btn btn-primary btn-sm"
                  >
                    <i class="fas fa-edit"></i>
                  </button>

                  <button
                    type="button"
                    @click="destroy(cccfaq.id)"
                    class="btn btn-danger btn-sm"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>

              <tr v-show="!cccfaqs.length">
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

          <div v-if="cccfaqs.length" class="d-flex">
            <div
              class="col-md-4 pl-0"
              style="margin: auto"
              v-if="cccfaqs.length"
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
                    <label>question</label>
                    <input
                      v-model="form.question"
                      type="text"
                      name="question"
                      class="form-control"
                      placeholder="question"
                      :readonly="showMode == true ? true : false"
                    />
                    <HasError :form="form" field="question" />
                  </div>

                  <div class="form-group">
                    <label>answer</label>
                    <textarea
                      v-model="form.answer"
                      rows="3"
                      cols="50"
                      name="answer"
                      :readonly="showMode == true ? true : false"
                      class="form-control"
                      placeholder="Enter answer here..."
                    ></textarea>
                    <HasError :form="form" field="answer" />
                  </div>

                  <div class="form-group">
                    <label>Order</label>
                    <input
                      v-model="form.order"
                      type="integer"
                      name="order"
                      class="form-control"
                      placeholder="order"
                      :readonly="showMode == true ? true : false"
                    />
                    <HasError :form="form" field="order" />
                  </div>

                  <div class="form-group">
                    <label>faq_category</label>
                    <input
                      v-model="form.faq_category"
                      type="text"
                      name="faq_category"
                      class="form-control"
                      placeholder="faq_category"
                      :readonly="showMode == true ? true : false"
                    />
                    <HasError :form="form" field="faq_category" />
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
                    v-if="showMode == false"
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
  name: "CCCNewsTable",
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
      showMode: false,
      keyword: "",
      fieldName: "faq_category",
      perPage: 10,
      cccfaqs: [],
      pagination: [],
      links: [],

      form: new Form({
        id: "",
        question: "",
        answer: "",
        order: "",
        faq_category: "",
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
      let linkUrl = url ? url : `${this.backendUrl}ccc-faq`;
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            field_name: this.fieldName,
            keyword: this.keyword,
          },
        })
        .then((response) => {
          this.cccfaqs = response.data.data;
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
      this.showMode = false;
      this.form.reset();
      this.form.clear();
      // $("#image").val('')
      $("#exampleModal").modal("show");
    },

    show(id) {
      this.showMode = true;
      this.form.reset();
      this.form.clear();
      this.form.fill(id);
      $("#exampleModal").modal("show");
    },

    edit(id) {
      this.editMode = true;
      this.showMode = false;
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
        .post(`${this.backendUrl}ccc-faq`)
        .then((response) => {
          this.getData();
          $("#exampleModal").modal("hide");
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "ccc-faq Added",
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
        .put(`${this.backendUrl}ccc-faq/` + this.form.id)
        .then((response) => {
          this.getData();
          $("#exampleModal").modal("hide");
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({
              type: "success",
              title: "Success",
              text: "ccc-faq Updated",
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
            axios.delete(`${this.backendUrl}ccc-faq/` + id).then((response) => {
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
