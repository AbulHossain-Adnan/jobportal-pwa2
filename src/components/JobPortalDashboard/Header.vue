<template>
  <div>
    <!-- Header
================================================== -->
    <header class="dashboard-header">
      <div class="container">
        <div class="sixteen columns">
          <!-- Logo -->
          <div id="logo">
            <h1>
              <router-link :to="{ name: 'scout_home' }">
                <img src="" alt="Work" />
              </router-link>
            </h1>
          </div>

          <!-- Menu -->
          <nav id="navigation" class="menu">
            <ul id="responsive">
              <li>
                <router-link :to="{ name: 'dashboard_home' }">Home</router-link>
              </li>

              <li>
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <router-link :to="{ name: 'all_jobs' }"
                      >Manage Jobs</router-link
                    >
                  </li>

                  <li>
                    <router-link :to="{ name: 'add_job' }"
                      >Add Job Vacancy</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'manage_resumes' }"
                      >Manage Resumes</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'add_resume' }"
                      >Add Resume</router-link
                    >
                  </li>

                  <li>
                    <router-link :to="{ name: 'app.dashboard' }"
                      >Home</router-link
                    >
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">Browse Listings</a>
                <ul>
                  <li>
                    <router-link :to="{ name: 'all_jobs' }"
                      >Manage Jobs</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'jobapplications' }"
                      >Manage JobApplications</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'manage_resumes' }"
                      >Manage Resumes</router-link
                    >
                  </li>
                </ul>
              </li>

              <li>
                <router-link :to="{ name: 'job_register' }"
                  ><i class="fa fa-eye"></i> Job Registration</router-link
                >
              </li>
            </ul>

            <ul class="responsive float-right">
              <li>
                <router-link :to="{ name: 'dashboard_home' }"
                  ><i class="fa fa-cog"></i> Dashboard</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'scout_login' }">
                  Log Out
                </router-link>
              </li>
            </ul>
          </nav>

          <!-- Navigation -->
          <div id="mobile-navigation">
            <a href="#menu" class="menu-trigger"
              ><i class="fa fa-reorder"></i
            ></a>
          </div>
        </div>
      </div>
    </header>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
