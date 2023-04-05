<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-sm-flex align-items-center justify-content-between"
      >
        <h4 class="mb-sm-0 font-size-18">Dashboard</h4>

        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Dashboards</a>
            </li>
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->

  <div class="row">
    <div class="col-xl-4">
      <div class="card overflow-hidden">
        <div class="bg-primary bg-soft">
          <div class="row">
            <div class="col-7">
              <div class="text-primary p-3">
                <h5 class="text-primary">Welcome Back !</h5>
                <p>Admin Dashboard</p>
              </div>
            </div>
            <div class="col-5 align-self-end">
              <img :src="$store.state.image" :alt="Image" class="img-fluid"/>
            </div>
          </div>
        </div>
        <div class="card-body pt-0">
          <div class="row">
            <div class="col-sm-4">
              <div class="avatar-md profile-user-wid mb-4">
                <img :src="$store.state.image" :alt="Image" class="img-thumbnail rounded-circle"/>
              </div>
              <h5 class="font-size-15 text-truncate">Wahid Molla</h5>
              <p class="text-muted mb-0 text-truncate">Admin</p>
            </div>

            <div class="col-sm-8">
              <div class="pt-4">
                <div class="row">
                  <div class="col-6">
                    <h5 class="font-size-15">25</h5>
                    <p class="text-muted mb-0">Departments</p>
                  </div>
                  <div class="col-6">
                    <h5 class="font-size-15">12,045</h5>
                    <p class="text-muted mb-0">Students</p>
                  </div>
                </div>
                <div class="mt-4">
                  <a
                    href="javascript: void(0);"
                    class="btn btn-primary waves-effect waves-light btn-sm"
                    >View Profile <i class="mdi mdi-arrow-right ms-1"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-8">
      <div class="row">
        <div class="col-md-4">
          <div class="card mini-stats-wid">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-grow-1">
                  <p class="text-muted fw-medium">Active Job Listings</p>
                  <h4 class="mb-0">12,351</h4>
                </div>

                <div class="flex-shrink-0 align-self-center">
                  <div
                    class="mini-stat-icon avatar-sm rounded-circle bg-primary"
                  >
                    <span class="avatar-title">
                      <i class="bx bx-copy-alt font-size-24"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mini-stats-wid">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-grow-1">
                  <p class="text-muted fw-medium">Total Job Views</p>
                  <h4 class="mb-0">12,045</h4>
                </div>

                <div class="flex-shrink-0 align-self-center">
                  <div
                    class="avatar-sm rounded-circle bg-primary mini-stat-icon"
                  >
                    <span class="avatar-title rounded-circle bg-primary">
                      <i class="bx bx-archive-in font-size-24"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mini-stats-wid">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-grow-1">
                  <p class="text-muted fw-medium">Total Applications</p>
                  <h4 class="mb-0">25</h4>
                </div>

                <div class="flex-shrink-0 align-self-center">
                  <div
                    class="avatar-sm rounded-circle bg-primary mini-stat-icon"
                  >
                    <span class="avatar-title rounded-circle bg-primary">
                      <i class="bx bx-purchase-tag-alt font-size-24"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->

      <div class="card">
        <div class="card-body">
          <div class="d-sm-flex flex-wrap">
            <h4 class="card-title mb-4">Email Sent</h4>
            <div class="ms-auto">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#">Week</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Month</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Year</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            id="stacked-column-chart"
            class="apex-charts"
            data-colors='["--bs-primary", "--bs-warning", "--bs-success"]'
            dir="ltr"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">Latest Jobs</h4>
          <div class="table-responsive">
            <table class="table align-middle table-nowrap mb-0">
              <thead class="table-light">
                <tr>
                  <th style="width: 20px">
                    <div class="form-check font-size-16 align-middle">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="transactionCheck01"
                      />
                      <label
                        class="form-check-label"
                        for="transactionCheck01"
                      ></label>
                    </div>
                  </th>
                  <th class="align-middle">ID</th>
                  <th class="align-middle">Name</th>
                  <th class="align-middle">Date</th>
                  <th class="align-middle">Place</th>
                  <th class="align-middle">Status</th>
                  <th class="align-middle">Departments</th>
                  <th class="align-middle">View Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="form-check font-size-16">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="transactionCheck02"
                      />
                      <label
                        class="form-check-label"
                        for="transactionCheck02"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <a href="javascript: void(0);" class="text-body fw-bold"
                      >#SK2540</a
                    >
                  </td>
                  <td>Neal Matthews</td>
                  <td>07 Oct, 2019</td>
                  <td>$400</td>
                  <td>
                    <span
                      class="badge badge-pill badge-soft-success font-size-11"
                      >Paid</span
                    >
                  </td>
                  <td><i class="fab fa-cc-mastercard me-1"></i> Mastercard</td>
                  <td>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                      data-bs-toggle="modal"
                      data-bs-target=".transaction-detailModal"
                    >
                      View Details
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="form-check font-size-16">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="transactionCheck03"
                      />
                      <label
                        class="form-check-label"
                        for="transactionCheck03"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <a href="javascript: void(0);" class="text-body fw-bold"
                      >#SK2541</a
                    >
                  </td>
                  <td>Jamal Burnett</td>
                  <td>07 Oct, 2019</td>
                  <td>$380</td>
                  <td>
                    <span
                      class="badge badge-pill badge-soft-danger font-size-11"
                      >Chargeback</span
                    >
                  </td>
                  <td><i class="fab fa-cc-visa me-1"></i> Visa</td>
                  <td>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                      data-bs-toggle="modal"
                      data-bs-target=".transaction-detailModal"
                    >
                      View Details
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="form-check font-size-16">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="transactionCheck04"
                      />
                      <label
                        class="form-check-label"
                        for="transactionCheck04"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <a href="javascript: void(0);" class="text-body fw-bold"
                      >#SK2542</a
                    >
                  </td>
                  <td>Juan Mitchell</td>
                  <td>06 Oct, 2019</td>
                  <td>$384</td>
                  <td>
                    <span
                      class="badge badge-pill badge-soft-success font-size-11"
                      >Paid</span
                    >
                  </td>
                  <td><i class="fab fa-cc-paypal me-1"></i> Paypal</td>
                  <td>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                      data-bs-toggle="modal"
                      data-bs-target=".transaction-detailModal"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check font-size-16">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="transactionCheck05"
                      />
                      <label
                        class="form-check-label"
                        for="transactionCheck05"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <a href="javascript: void(0);" class="text-body fw-bold"
                      >#SK2543</a
                    >
                  </td>
                  <td>Barry Dick</td>
                  <td>05 Oct, 2019</td>
                  <td>$412</td>
                  <td>
                    <span
                      class="badge badge-pill badge-soft-success font-size-11"
                      >Paid</span
                    >
                  </td>
                  <td><i class="fab fa-cc-mastercard me-1"></i> Mastercard</td>
                  <td>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                      data-bs-toggle="modal"
                      data-bs-target=".transaction-detailModal"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check font-size-16">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="transactionCheck06"
                      />
                      <label
                        class="form-check-label"
                        for="transactionCheck06"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <a href="javascript: void(0);" class="text-body fw-bold"
                      >#SK2544</a
                    >
                  </td>
                  <td>Ronald Taylor</td>
                  <td>04 Oct, 2019</td>
                  <td>$404</td>
                  <td>
                    <span
                      class="badge badge-pill badge-soft-warning font-size-11"
                      >Refund</span
                    >
                  </td>
                  <td><i class="fab fa-cc-visa me-1"></i> Visa</td>
                  <td>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                      data-bs-toggle="modal"
                      data-bs-target=".transaction-detailModal"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check font-size-16">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="transactionCheck07"
                      />
                      <label
                        class="form-check-label"
                        for="transactionCheck07"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <a href="javascript: void(0);" class="text-body fw-bold"
                      >#SK2545</a
                    >
                  </td>
                  <td>Jacob Hunter</td>
                  <td>04 Oct, 2019</td>
                  <td>$392</td>
                  <td>
                    <span
                      class="badge badge-pill badge-soft-success font-size-11"
                      >Paid</span
                    >
                  </td>
                  <td><i class="fab fa-cc-paypal me-1"></i> Paypal</td>
                  <td>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                      data-bs-toggle="modal"
                      data-bs-target=".transaction-detailModal"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end table-responsive -->
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>

<script>
  import axios from "axios";


  
  export default {
    name: "CCCNewsTable",
    components: {
    
    },
  
    data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      editMode: false,
      showMode: false,
      jobposts: [],
      jobcategories: [],
      jobsubcategories: [],
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
      let auth_id = localStorage.getItem('auth_id');
   
      let linkUrl = url ? url : `${this.backendUrl}jobprofile/home/`+auth_id;
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
            // field_name: this.fieldName,
            // keyword: this.keyword,
          },
        })
        .then((response) => {
       
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    },



    getDate() {

      let auth_id = localStorage.getItem('auth_id');

      console.log(auth_id);
      console.log('getdata');

 
    axios
        .get(`${this.backendUrl}jobprofile/home/`+auth_id)
        .then((response) => {
          console.log('getdata te asi');
        })
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
              .delete(`${this.backendUrl}job-post/` + id)
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

<style>

</style>
