<template lang="">
  <div>
    <div>
    <div id="titlebar">
      <div class="container">
        <div class="ten columns">
          <span>We found {{ categoryjobs.length }}  matching:</span>
          <h2>Category Job Vacancies</h2>
        </div>

        <div class="six columns">
          <!-- <a href="dashboard-add-job.html" class="button"
            >Post a Job, It’s Free!</a
          > -->
        </div>
      </div>
    </div>
    </div>
    <!-- Content
================================================== -->

<div class="container">
<div class="row justify-content-md-center">

  <div class="col-sm-8">
    <!-- <div class="padding-left"> -->
          <div class="listings-container">
            <!-- Listing -->
            <router-link
              :to="{ path: 'job-details', query: { jobId: item.id } }"
              v-for="(item, index) in categoryjobs"
              class="listing full-time"
            >
              <div class="listing-logo">
                <img src="" alt="" />
              </div>
              <div class="listing-title">
                <h4>
                  {{ item.job_title }}
                  <span class="listing-type">{{ item.employment_status }}</span>
                </h4>
                <ul class="listing-icons">
                  <li><i class="ln ln-icon-Management"></i> King</li>
                  <li><i class="ln ln-icon-Map2"></i> Sydney</li>
                  <li>
                    <i class="ln ln-icon-Money-2"></i> ${{ item.min_salary }} -
                    ${{ item.max_salary }}
                  </li>
                  <li><div class="listing-date new">new</div></li>
                </ul>
              </div>
            </router-link>
          </div>
          <div v-show="!categoryjobs.length">
              <td colspan="6">
                <div
                  class="text-danger text-center"
                  style="color: red"
                  role="alert"
                >
                  No data available in data List :(
                </div>
              </td>
            </div>
          <div class="clearfix"></div>

         
        <!-- </div> -->
  </div>
  <div class="col-sm-4">
    

<!-- start  -->
<div class="widget">
 
  <!-- Select -->
  <!-- <select
    data-placeholder="Choose Category"
    class="chosen-select-no-single"
  >
    <option selected="selected" value="recent">Newest</option>
    <option value="oldest">Oldest</option>
    <option value="expiry">Expiring Soon</option>
    <option value="ratehigh">Hourly Rate – Highest First</option>
    <option value="ratelow">Hourly Rate – Lowest First</option>
  </select> -->
</div>

<!-- Location -->
<!-- <div class="widget">
  <h4>Location</h4>
  <form action="#" method="get">
    <input type="text" placeholder="State / Province" value="" />
    <input type="text" placeholder="City" value="" />

    <input type="text" class="miles" placeholder="Miles" value="" />
    <label for="zip-code" class="from">from</label>
    <input
      type="text"
      id="zip-code"
      class="zip-code"
      placeholder="Zip-Code"
      value=""
    /><br />

    <button class="button">Filter</button>
  </form>
</div> -->

<!-- Job Type -->
<!-- <b>Job Type</b><br>  -->
<label><b>Job Type</b></label>



<div class="widget">

  <ul class="checkboxes">
    <li>
      <input
       
        id="check-1"
        type="checkbox"
        name="check"
        checked
      />
      <label for="check-1">Any Type</label>
    </li>
    <li>
      <input
        v-model="selected.employment_status"
        id="check-2"
        type="checkbox"
        name="check"
        :value="0"
      />
      <label for="check-2">Full-Time <span>(312)</span></label>
    </li>
    <li>
      <input
        v-model="selected.employment_status"
        id="check-3"
        type="checkbox"
        name="check"
        :value="1"
      />

      <label for="check-3">Part-Time <span>(269)</span></label>
    </li>
    <li>
      <input
        v-model="selected.employment_status"
        id="check-4"
        type="checkbox"
        name="check"
        :value="2"
      />
      <label for="check-4">Contructual <span>(46)</span></label>
    </li>
    <li>
      <input
        v-model="selected.employment_status"
        id="check-5"
        type="checkbox"
        name="check"
        :value="3"
      />
      <label for="check-5">Internship <span>(46)</span></label>
    </li>
    <li>
      <input
        v-model="selected.employment_status"
        id="check-7"
        type="checkbox"
        name="check"
        :value="4"
      />
      <label for="check-7">Freelance <span>(119)</span></label>
    </li>
  </ul>
</div>

<!-- Rate/Hr -->
<div class="widget">
  <!-- <b>Montly</b><br> -->
  <label><b>Montly</b></label>
  <ul class="checkboxes">
    <li>
      <input
        v-model="selected.prices"
        id="check-8"
        type="checkbox"
        name="check"
        value="check-8"
        checked
      />
      <label for="check-8">Any Rate</label>
    </li>
    <li>
      <input
        v-model="selected.prices"
        id="check-9"
        type="checkbox"
        name="check"
        :value="0"
      />
      <label for="check-9">$10000 - $20000 <span>(297)</span></label>
    </li>
    <li>
      <input
        v-model="selected.prices"
        id="check-10"
        type="checkbox"
        name="check"
        :value="1"
      />
      <label for="check-10">$20000 - $30000 <span>(78)</span></label>
    </li>
    <li>
      <input
        v-model="selected.prices"
        id="check-11"
        type="checkbox"
        name="check"
        :value="2"
      />
      <label for="check-11">$30000 - $40000 <span>(98)</span></label>
    </li>
    <li>
      <input
        v-model="selected.prices"
        id="check-12"
        type="checkbox"
        name="check"
        :value="3"
      />
      <label for="check-12">$40000 -$50000 <span>(21)</span></label>
    </li>
  </ul>
</div>
<!-- end  -->

  </div>
</div>
</div>

    <vue-progress-bar></vue-progress-bar>
        <notifications />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CccHome",

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      prices: [],
      employment_status: [],
      categoryjobs: [],
      selected: {
        prices: [],
        employment_status: [],
      },
    };
  },

  watch: {
    keyword: function () {
      this.getData();
    },
    selected: {
      handler: function () {
        this.getData();
      },
      deep: true,
    },
  },

  mounted() {
    console.log("Component mounted.");
    this.getData();
  },

  methods: {
    getData() {
      this.$Progress.start();
      axios
        .get(`${this.backendUrl}singlecategory/jobs/` + this.$route.query.CatId, {
            params: this.selected,
          })
        .then((response) => {
          console.log(response.data);
          console.log('category response');

          this.categoryjobs = response.data;
          this.$Progress.finish();
        })
        .catch((e) => {
          this.$Progress.fail();
        });

        // axios
        //   .get(`${this.backendUrl}jobpostsearch/` + this.$route.query.search, {
        //     params: this.selected,
        //   })
        //   .then((response) => {
        //     console.log('hi adnan');
        //     console.log(response);

        //     this.searchjobs = response.data;
        //   })
        //   .catch((e) => {
        //     this.$Progress.fail();
        //   });
    },
  },
};
</script>
