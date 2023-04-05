<template lang="">
	<div class="dashboard-nav">
	<div class="dashboard-nav-inner">

		<ul data-submenu-title="Start">
			<li class="active">
				<router-link :to="{ name: 'dashboard_home' }" 
                >Dashboard</router-link
              >
			</li>

		</ul>

		<ul data-submenu-title="Management">
			<li><a>For Employers</a>
				<ul>
					<li>
						 <router-link :to="{ name: 'all_jobs' }" >Manage Jobs</router-link>
					</li>
				
					<li>
						 <router-link :to="{ name: 'add_job' }" 
                >Add Job</router-link
              >
					</li>
				</ul>
			</li>

			<li><a>For Candidates</a>
				<ul>
					<li>
						<router-link :to="{ name: 'manage_resumes' }" >Manage Resume</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'manage_resumes' }" >Manage Resume</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'job_alert' }" 
                >Job Alerts</router-link
              >
					</li>
					<!-- <li><a href="dashboard-add-resume.html">Add Resume</a></li> -->
				</ul>
			</li>	
		</ul>	

		<ul data-submenu-title="Account">
			<li> <router-link :to="{ name: 'profile' }" 
                >My Profile</router-link
              ></li>
			<li>	<router-link :to="{ name: 'scout_login' }" >
						Log Out
				</router-link></li>
		</ul>
		
	</div>
</div>
</template>
<script>
export default {
	
}
</script>
<style lang="">
	
</style>