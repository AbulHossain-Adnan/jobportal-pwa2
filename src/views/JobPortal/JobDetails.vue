<template lang="">
<div>
    <div>
    <div id="titlebar">
      <div class="container">
        <div class="ten columns">
       
          <h2>Job Details</h2>
        </div>

        <div class="six columns">
         
        </div>
      </div>
    </div>
    </div>

<div class="container">
<div class="row">
  <div class="col-sm-8">
   <!-- Recent Jobs -->

		<div class="company-info">
			<!-- <img src="" alt=""> -->
            <img :src="jobdetails.company_logo" :alt="perkyrabbit" style="width:100px;" />
			<!-- <p>{{jobdetails.webs_logo}}</p> -->

			<div class="content">
				<h4>{{ jobdetails.company_name }}</h4>
				<span><a href="#"><i class="fa fa-link"></i> {{jobdetails.website_address}}</a></span>
				<!-- <span><a href="#"><i class="fa fa-twitter"></i> @kingrestaurants</a></span> -->
			</div>
			<div class="clearfix"></div>
		</div>

	
		
		<ul class="list-1">
			<!-- {{jobdetails.job_context}} -->
			<p v-html="jobdetails.job_context"></p>
		</ul>
		
		<br>

		<h4 class="margin-bottom-10">Job Responsibilities</h4>

		<ul class="list-1">
			
			<p v-html="jobdetails.job_responsibilities"></p>
		</ul>
		<!-- <ul class="list-1">
			{{jobdetails}}
		</ul> -->
		<br>

		<h4 class="margin-bottom-10">Job Requirments</h4>

		<ul class="list-1">
			<p v-html="jobdetails.requirment"></p>
		</ul>

		<br>

		<h4 class="margin-bottom-10">Education</h4>

		<p>SSC/JSC</p>

		<br>

		<h4 class="margin-bottom-10">Work Place</h4>

		<p>{{ jobdetails.job_workplace }}</p>


		<br>

		<h4 class="margin-bottom-10">Employment Status</h4>

		<p>{{ jobdetails.employment_status }}</p>

		<br>

		<h4 class="margin-bottom-10">Salary (Monthly BDT)</h4>

		<p>Tk. {{ jobdetails.min_salary }} To TK {{ jobdetails.max_salary }}</p>

		<br>

		<h4 class="margin-bottom-10">Benifits</h4>

		<ul  class="list-1">
			
			<p v-html="jobdetails.benefits"></p>
		
		</ul>
		
		<h4 class="margin-bottom-10">Apply At:  {{ jobdetails.resume_receiver_email }}  </h4>

  </div>
  <div class="col-sm-4">



<!-- Sort by -->
<div class="widget">
	<h4>Overview</h4>

	<div class="job-overview">
		
		<ul>
			<li>
				<i class="fa fa-map-marker"></i>
				<div>
					<strong>Location:</strong>
					<span>{{jobdetails.company_address}}</span>
				</div>
			</li>
			<li>
				<i class="fa fa-user"></i>
				<div>
					<strong>Job Title:</strong>
					<span>{{ jobdetails.job_title }}</span>
				</div>
			</li>
			<li>
				<i class="fa fa-clock-o"></i>
				<div>
					<strong>Employment Status:</strong>
					<span>{{jobdetails.employment_status}}</span>
				</div>
			</li>
			<li>
				<i class="fa fa-money"></i>
				<div>
					<strong>Rate:</strong>
					<span> Tk. {{ jobdetails.min_salary }}  - {{ jobdetails.max_salary }} (Monthly)</span>
				</div>
			</li>
		</ul>
		<a type="button" class="popup-with-zoom-anim button" @click="jobApplication()">Apply For This Job</a>
	</div>

</div>

<!-- </div> -->
  </div>
</div>
</div>
<!-- Content
================================================== -->
<div class="container">
	
</div>
    </div>
</template>
<script>
import Sidebar from "../../components/JobPortalDashboard/Sidebar.vue";
import PaginationComponent from "../../components/PaginationComponent.vue";
import { ElNotification } from "element-plus";
import axios from "axios";


export default {
  name: "CCCjobpostsTable",
  components: {
    Sidebar,
    PaginationComponent,
  },

  data() {
    return {
      	backendUrl: this.$store.state.backendUrl,
   
		jobdetails: [],
		imagePreview: "",

		// job id and resume id 
		jobApplicationData:{
			job_post_id: this.$route.query.jobId,
			resume_id: localStorage.getItem('resume_id'), 
		},
		// end
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

	// start job jobApplication 
		jobApplication(){
			this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You want to apply for this job!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Apply!'
                }).then((result) => {
                    if (result.isConfirmed) {
					axios.
					post(`${this.backendUrl}jobapplications`,this.jobApplicationData)
						.then((response) => {
								if(response.data !="") {
									ElNotification({
									title:response.data.status,
									message: response.data.message,
									type: response.data.status,
								});
								}
						})
						.catch(($e) => {
							
						});
                    }
                })
		},
	// end 

	// get job details data 
		getData() {
		axios.get(`${this.backendUrl}job-post/`+this.$route.query.jobId)
			.then((response) => {
				if (location.search.length < 1)
				{window.location.reload()}
			this.jobdetails = response.data;
			})
			.catch((e) => {
				this.$Progress.fail();
			});
		},
	// end 
  },
};
</script>