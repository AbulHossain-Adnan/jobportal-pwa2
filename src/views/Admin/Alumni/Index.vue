<template>
  <div id="alumni">
    <div class="col-12">
      <div class="card">
        <div class="row card-header bg-transparent border-bottom">
          <div class="col-md-8">
            <h4 class="card-title">List Of Alumnis</h4>
            <span>
              This is an alumni related information
            </span>
          </div>
          <div class="col-md-4">
            <router-link :to="{ name: 'app.alumni_add' }" type="button" class="btn btn-sm btn-success float-end">
              <i class="fas fa-plus"></i>Add New
            </router-link>
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
                <th>EWU ID</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Designation/Department</th>
                <th>Convocation Year</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(alumni, index) of alumnis">
                <td>{{ index + 1 }}</td>
                <td>{{ alumni.ewu_id_no }}</td>
                <td class="text-center">
                  <img width="80" :src="alumni.photo" :alt="alumni.id">
                </td>
                <td>{{ alumni.name }}</td>
                <td>{{ alumni.email }}</td>
                <td>{{ alumni.contact_no }}</td>
                <td>{{ alumni.designation_department }}</td>
                <td>{{ alumni.convocation_year }}</td>
                <td>
                  <router-link :to="{ name: 'app.alumni_show', query: { id: alumni.id } }" type="button"
                    class="btn btn-info btn-sm"><i class="fas fa-eye"></i></router-link>

                  <router-link :to="{ name: 'app.alumni_edit', query: { id: alumni.id } }" type="button"
                    class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></router-link>

                  <!-- <button type="button" @click="destroy(alumni.id)" class="btn btn-danger btn-sm">
                    <i class="fas fa-trash-alt"></i>
                  </button> -->
                </td>
              </tr>

              <tr v-show="!alumnis.length">
                <td colspan="6">
                  <div class="alert alert-danger text-danger text-center" role="alert">
                    No data available in table :(
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div v-if="alumnis.length" class="d-flex">
            <div class="col-md-4 pl-0" style="margin: auto" v-if="alumnis.length">
              Showing {{ pagination.from }} to {{ pagination.to }} from
              {{ pagination.total }} entiries
            </div>

            <PaginationComponent :links="links" @get-data="getData" />
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
import PaginationComponent from "../../../components/PaginationComponent.vue";

export default {
  name: "Index",
  components: { PaginationComponent },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      editMode: false,
      keyword: "",
      fieldName: "name",
      perPage: 10,
      alumnis: [],
      pagination: [],
      links: [],
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
      let linkUrl = url ? url : `${this.backendUrl}alumni`;
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            field_name: this.fieldName,
            keyword: this.keyword,
          },
        })
        .then((response) => {
          this.alumnis = response.data.data;
          this.pagination = response.data.meta;
          this.links = response.data.meta.links;
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    },
  }
};
</script>
