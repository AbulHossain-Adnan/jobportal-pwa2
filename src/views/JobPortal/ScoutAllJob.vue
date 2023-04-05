<template lang="">
	<div>
	  <div id="titlebar">
		<div class="container">
		  <div class="ten columns">
			<span>We found   <b> {{ alljobposts.length }}</b>  jobs matching:</span>
			<h2>All Job Vacancies</h2>
		  </div>
  
		  <div class="six columns">
			<!-- <a href="dashboard-add-job.html" class="button"
			  >Post a Job, It’s Free!</a
			> -->
		  </div>
		</div>
	  </div>



	  <div class="container">
		<div class="row">

  <div class="col-sm-8 mt-15">
    <!-- <div class="padding-right"> -->
			<div class="listings-container">
			  <!-- Listing -->
			  <router-link
				:to="{ path: 'job-details', query: { jobId: item.id } }"
				v-for="(item, index) in alljobposts"
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
			  <div v-show="!alljobposts.length">
				<td colspan="6">
				  <div
					class="text-danger text-center"
					style="color: red"
					role="alert"
				  >
					No data available in Job List :(
				  </div>
				</td>
			  </div>
			</div>
			<div v-if="alljobposts.length" class="d-flex">
			  <div
				class="col-md-4 pl-0"
				style="margin: auto"
				v-if="alljobposts.length"
			  >
				Showing {{ pagination.from }} to {{ pagination.to }} from
				{{ pagination.total }} entiries
			  </div>
  
			  <PaginationComponent :links="links" @get-data="getData" />
			</div>
			<div class="clearfix"></div>
		  <!-- </div> -->
  </div>
  <div class="col-sm-4">
   <!-- Widgets -->
		<!-- <div class="five columns"> -->
		  <!-- Sort by -->
		  <div class="widget">
			<h4>Sort by</h4>
  
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
		  <div class="widget">
			<h4>Job Type</h4>
  
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
			<h4>Montly</h4>
			<label>Min Salary - Max Salary</label>
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
		<!-- </div> -->
  </div>
</div>
</div>








	
	</div>
  </template>
  <script>
  import axios from "axios";
  import PaginationComponent from "../../components/PaginationComponent.vue";
  
  export default {
	name: "CccHome",
	components: { PaginationComponent },
  
	data() {
	  return {
		  backendUrl: this.$store.state.backendUrl,
		// backendUrl: "http://127.0.0.1:8000/",
		alljobposts: [],
		prices: [],
		employment_status: [],
		perPage: 3,
		categories: [],
		subCategories: [],
		pagination: [],
		links: [],
  
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
	  getData(url) {
		console.log(this.selected);
		console.log('get method reload');
		  axios
			.get(`${this.backendUrl}job-post`, {
			  params: this.selected,
			})
			.then((response) => {
				console.log(response.data)
			  console.log('hi adnan');
			
  
			  this.alljobposts = response.data;
			})
			.catch((e) => {
			  this.$Progress.fail();
			});
  
	  },
	},
  };
  </script>
  