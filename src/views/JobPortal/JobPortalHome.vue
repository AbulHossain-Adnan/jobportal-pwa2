<template lang="">
  <div>
    <!-- Banner
================================================== -->
    <div
      id="banner"
      class="with-transparent-header parallax background"
      style="
        background-image: url();
      "
      data-img-width="2000"
      data-img-height="1330"
      data-diff="300"
    >
    
      <div class="container">


        <!-- <div class="sixteen columns"> -->
          <div class="search-container">
            <!-- Form -->
            <h2>Find Job</h2>
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
              <!-- <input
               
                name="job_title"
                type="text"
                class="ico-01"
                placeholder="job title, keywords or company name"
                value=""
              /> -->
              <div class="form-group my-4">
                <input
                  v-model="job_title"
                  type="text"
                  name="job_title"
                  class="ico-01"
                  placeholder="job title, keywords or company name"
                  
                />
                <HasError :form="form" field="job_title" />
              </div>

              <input
                type="text"
                class="ico-02"
                placeholder="city, province or region"
                value=""
              />
              <HasError :form="form" field="job_title" />
              <button><i class="fa fa-search"></i></button>
            </form>

            <!-- Browse Jobs -->
            <div class="browse-jobs">
              Browse job offers by
              <a href="browse-categories.html"> category</a> or
              <a href="#">location</a>
            </div>

            <!-- Announce -->
            <!-- 				<div class="announce">
            We’ve over <strong>15 000</strong> job offers for you!
        </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>

    <!-- Content
================================================== -->

    <!-- Categories -->
    <div class="container">
      <!-- <div class="sixteen columns"> -->
        <h3 class="margin-bottom-20 margin-top-10">Popular Categories</h3>

        <!-- Popular Categories -->
        <div class="categories-boxes-container">
          <router-link
            :to="{ path: 'category-jobs', query: { CatId: item.id } }"
            v-for="(item, index) in jobcategories"
            class="category-small-box"
          >
            <i :class="item.icon"></i>
            <h4>{{ item.title }}</h4>
            <span>32</span>
          </router-link>
          <div v-show="!jobcategories.length">
            <td colspan="6">
              <div
                class="text-danger text-center"
                style="color: red"
                role="alert"
              >
                No data available in Category List :(
              </div>
            </td>
          </div>
        </div>

        <div class="clearfix"></div>
        <div class="margin-top-30"></div>

        <router-link :to="{ name: 'allcategory_jobs' }" class="button centered"
          >Browse All Category</router-link
        >
        <div class="margin-bottom-55"></div>
      <!-- </div> -->
    </div>


    

  <div class="container">
  <div class="row">

  <div class="col-sm-12">

            <h3 class="margin-bottom-25">Recent Jobs</h3>
            <div class="listings-container">
           
              <router-link
                :to="{ path: 'job-details', query: { jobId: item.id } }"
                class="listing full-time"
                v-for="(item, index) in recentjobs"
              >
                <div class="listing-logo">
                  <img src="" alt="" />
                </div>
                <div class="listing-title">
                  <h4>
                    {{ item.job_title }}
                    <span class="listing-type">{{
                      item.employment_status
                    }}</span>
                  </h4>
                  max_salary
                  <ul class="listing-icons">
                    <li><i class="ln ln-icon-Management"></i> King</li>
                    <li><i class="ln ln-icon-Map2"></i> Sydney</li>
                    <li>
                      <i class="ln ln-icon-Money-2"></i> ${{
                        item.min_salary
                      }}
                      - ${{ item.max_salary }}
                    </li>
                    <li><div class="listing-date new">new</div></li>
                  </ul>
                </div>
              </router-link>
              <div v-show="!recentjobs.length">
                <td colspan="6">
                  <div
                    class="text-danger text-center"
                    style="color: red"
                    role="alert"
                  >
                    No data available in Recent Job List :(
                  </div>
                </td>
              </div>
            </div>

            <div v-if="recentjobs.length" class="d-flex">
              <div
                class="col-md-4 pl-0"
                style="margin: auto"
                v-if="recentjobs.length"
              >
                Showing {{ pagination.from }} to {{ pagination.to }} from
                {{ pagination.total }} entiries
              </div>

              <PaginationComponent :links="links" @get-data="getData" />
            </div>
        
            <div class="margin-bottom-55 mt-4">    <router-link
              :to="{ name: 'scout_alljob' }"
              class="button centered"
            >
              <i class="fa fa-plus-circle"></i>Show More Jobs</router-link
            ></div>
 
  </div>
</div>
</div>

    <a
      href="browse-jobs.html"
      class="flip-banner margin-bottom-55"
      data-background=""
      data-color="#26ae61"
      data-color-opacity="0.93"
    >
      <div class="flip-banner-content">
        <h2 class="flip-visible">Step inside and see for yourself!</h2>
        <h2 class="flip-hidden">
          Get Started <i class="fa fa-angle-right"></i>
        </h2>
      </div>
    </a>
    <!-- Flip banner / End -->

    <div class="container">
    <div class="row">
      
          <h3 class="margin-bottom-25">Recent Posts</h3>
        </div>

        <div class="col-sm-4">
          <!-- <div class="one-third column"> -->
            <!-- Post #1 -->
            <div class="recent-post">
              <div class="recent-post-img">
                <a href="blog-single-post.html"><img src="" alt="" /></a>
                <div class="hover-icon"></div>
              </div>
              <a href="blog-single-post.html"
                ><h4>Hey Job Seeker, It’s Time To Get Up And Get Hired</h4></a
              >
              <div class="meta-tags">
                <span>October 10, 2015</span>
                <span><a href="#">0 Comments</a></span>
              </div>
              <p>
                The world of job seeking can be all consuming. From secretly
                stalking the open reqs page of your dream company to sending
                endless applications.
              </p>
              <a href="blog-single-post.html" class="button">Read More</a>
            </div>
          <!-- </div> -->
        </div>
        <div class="col-sm-4">
          <!-- <div class="one-third column"> -->
            <!-- Post #1 -->
            <div class="recent-post">
              <div class="recent-post-img">
                <a href="blog-single-post.html"><img src="" alt="" /></a>
                <div class="hover-icon"></div>
              </div>
              <a href="blog-single-post.html"
                ><h4>Hey Job Seeker, It’s Time To Get Up And Get Hired</h4></a
              >
              <div class="meta-tags">
                <span>October 10, 2015</span>
                <span><a href="#">0 Comments</a></span>
              </div>
              <p>
                The world of job seeking can be all consuming. From secretly
                stalking the open reqs page of your dream company to sending
                endless applications.
              </p>
              <a href="blog-single-post.html" class="button">Read More</a>
            </div>
          <!-- </div> -->
        </div>
        <div class="col-sm-4">
          <!-- <div class="one-third column"> -->
            <!-- Post #1 -->
            <div class="recent-post">
              <div class="recent-post-img">
                <a href="blog-single-post.html"><img src="" alt="" /></a>
                <div class="hover-icon"></div>
              </div>
              <a href="blog-single-post.html"
                ><h4>Hey Job Seeker, It’s Time To Get Up And Get Hired</h4></a
              >
              <div class="meta-tags">
                <span>October 10, 2015</span>
                <span><a href="#">0 Comments</a></span>
              </div>
              <p>
                The world of job seeking can be all consuming. From secretly
                stalking the open reqs page of your dream company to sending
                endless applications.
              </p>
              <a href="blog-single-post.html" class="button">Read More</a>
            </div>
          <!-- </div> -->
        </div>
    
    </div>
    <vue-progress-bar></vue-progress-bar>
        <notifications />
  </div>
</template>
<script>
import axios from "axios";
import Form from "vform";
import PaginationComponent from "../../components/PaginationComponent.vue";
import {
  Button,
  HasError,
  AlertError,
  AlertErrors,
  AlertSuccess,
} from "vform/src/components/bootstrap5";

export default {
  name: "CccHome",
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

      jobcategories: [],
      recentjobs: [],
      job_title: "",
      perPage: 4,
      skills: [],
      categories: [],
      subCategories: [],
      pagination: [],
      links: [],

      form: new Form({
        id: "",
        job_title: "",
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
      let JobCategoryUrl = `${this.backendUrl}job-category`;
      axios
        .get(JobCategoryUrl)
        .then((response) => {
          this.jobcategories = response.data.data;
          this.$Progress.finish();
        })
        .catch((e) => {
          this.$Progress.fail();
        });

      let linkUrl = url ? url : `${this.backendUrl}recent/jobs`;
      axios
        .get(linkUrl, {
          params: {
            per_page: this.perPage,
          },
        })
        .then((response) => {
          this.recentjobs = response.data.data;
          this.pagination = response.data.meta;
          this.links = response.data.meta.links;
        })
        .catch((e) => {
          console.log(e);
        });

      axios
        .get(`${this.backendUrl}career-tips`)
        .then((response) => {
          this.careerTips = response.data.data;
        })
        .catch((e) => {
          this.$Progress.fail();
        });

    },

    store() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}job/search`)
        .then((response) => {
        
          let value = this.job_title;
          this.$router.push({ name: "search_jobs", query: { search: value } });
      
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
  },
};
</script>
