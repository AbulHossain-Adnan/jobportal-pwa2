<template lang="">
  <div>

    <div>
    <div id="titlebar">
      <div class="container">
        <div class="ten columns">
        
          <h2>All Categories</h2>
        </div>

        <div class="six columns">
         
        </div>
      </div>
    </div>
    </div>

<!-- Titlebar
================================================== -->
<!-- <div id="titlebar" class="photo-bg" style="background-image: url(sanuAsset/assets/all-categories-photo.jpg);">
	<div class="container">
		<div class="ten columns">
			<h2>All Categories</h2>
		</div>

		<div class="six columns">
			<a href="dashboard-add-job.html" class="button">Post a Job, It’s Free!</a>
		</div>

	</div>
</div> -->


<!-- Content
================================================== -->
<div id="categories">
	<!-- Categories Group -->
	<div class="categories-group">
		<div  v-for="item in jobcategories" class="container">
			<div class="four columns"><h4>{{ item.title }}</h4></div>
			<div v-for="subcategory in item.jobsubcategories" class="four columns">
				<ul>
					<li><a href="#">{{ subcategory.title}}</a></li>
				</ul>
			</div>
		</div>
    <br>
	</div>



</div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CccHome",

  data() {
    return {
        backendUrl: this.$store.state.backendUrl,

      jobcategories: [],
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
    getData() {
      let JobCategoryUrl = `${this.backendUrl}job-category`;
      axios
        .get(JobCategoryUrl)
        .then((response) => {
          this.jobcategories = response.data.data;
        
          console.log(response.data.data);
        })
        .catch((e) => {
          this.$Progress.fail();
        });

      // ccc news response
      axios.get(`${this.backendUrl}ccc-news`)
        .then((response) => {
          this.cccnews = response.data.data;
          console.log(this.cccnews[0].categories);
        })
        .catch((e) => {
          this.$Progress.fail();
        });

      axios
        .get(`${this.backendUrl}career-tips`)
        .then((response) => {
          this.careerTips = response.data.data;
          console.log(this.careerTips[0].categories);
        })
        .catch((e) => {
          this.$Progress.fail();
        });

      // ccc news response
      let noticeEventlinkUrl = `${this.backendUrl}notice-event`;
      axios
        .get(noticeEventlinkUrl)
        .then((response) => {
          this.notice_events = response.data;
        })
        .catch((e) => {
          this.$Progress.fail();
        });
    },
  },
};
</script>
