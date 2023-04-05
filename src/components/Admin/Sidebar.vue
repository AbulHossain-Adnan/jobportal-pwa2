<template>
  <div class="vertical-menu">
    <div data-simplebar class="h-100">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title" key="t-menu">Start</li>

          <li>
            <router-link :to="{ name: 'app.dashboard' }" class="waves-effect">
              <i class="bx bx-home-circle"></i>
              <span key="t-dashboards">Dashboard</span>
            </router-link>
          </li>

    

          <li>
              <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bx-home-circle"></i>
                  <span key="t-dashboards">Management</span>
              </a>
              <ul class="sub-menu" aria-expanded="true">
                  <li>
                      <a href="javascript: void(0);" class="has-arrow" key="t-vertical">For Employers</a>
                      <ul class="sub-menu" aria-expanded="false">
                       
                           <li>
                            <router-link :to="{ name: 'dashboard_managejobs' }" key="t-light-sidebar"> <i class="fa-sharp fa-solid fa-list"></i>   Job Posts</router-link>
                          </li>
                          <!-- <li>
                            <router-link :to="{ name: 'dashboard_jobapplications' }" key="t-light-sidebar">   <i class="fa-sharp fa-solid fa-list"></i> Job Applications </router-link>
                          </li> -->
                          <li>
                            <router-link :to="{ name: 'dashboard_jobapplicants' }" key="t-light-sidebar">   <i class="fa-sharp fa-solid fa-list"></i> Job Applicants </router-link>
                          </li>
          
                      </ul>
                  </li>

                  <li>
                      <a href="javascript: void(0);" class="has-arrow" key="t-horizontal">For Candidates</a>
                      <ul class="sub-menu" aria-expanded="true">

                          <!-- <li>
                            <router-link :to="{ name: 'dashboard_jobregister' }" key="t-horizontal"> <i class="fa-sharp fa-solid fa-id-card"></i>  Job  Registration </router-link>
                          </li> -->
                          <!-- <li><a href="#" key="t-topbar-light">Job Alerts</a></li> -->
                          <li>
                            <router-link :to="{ name: 'dashboard_step_one' }" key="t-horizontal"><i class="fa-sharp fa-solid fa-plus"></i>  Create Resume </router-link>
                          </li>
                          <li>
                            <router-link :to="{ name: 'dashboard_resumeview' }" key="t-horizontal"> <i class="fa-sharp fa-solid fa-eye"></i>  View Resume </router-link>
                          </li>

                          <li>
                            <router-link :to="{ name: 'dashboard_applyed_job_list' }" key="t-horizontal"> <i class="fa-solid fa-briefcase"></i>  Applyed jobs </router-link>
                          </li>

                      </ul>
                  </li>
              </ul>
          </li>

        

          <li>
              <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bx-home-circle"></i>
                  <span key="t-dashboards">MANAGE RESUME</span>
              </a>
              <ul class="sub-menu" aria-expanded="true">
                  <li>
                  <router-link :to="{ name: 'dashboard_step_one' }" key="t-light-sidebar"> <i class="fa-sharp fa-solid fa-plus"></i>  Create Resume </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'dashboard_step_one' }" key="t-light-sidebar"><i class="fa-sharp fa-solid fa-pen-to-square"></i>  Edit Resume </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'dashboard_resumeview' }" key="t-light-sidebar"> <i class="fa-sharp fa-solid fa-eye"></i>  View Resume </router-link>
                </li>
      
              </ul>
          </li>
          <li>
              <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bx-home-circle"></i>
                  <span key="t-dashboards">Account</span>
              </a>
              <ul class="sub-menu" aria-expanded="true">
               
                           <li>
                            <router-link :to="{ name: 'dashboard_profile' }" key="t-light-sidebar"> <i class="fa-sharp fa-solid fa-user"></i>  Profile </router-link>
                          </li>
                          <!-- <li>
                            <router-link :to="{ name: 'dashboard_jobapplications' }" key="t-light-sidebar"><i class="fa-sharp fa-solid fa-right-from-bracket"></i>  Logout </router-link>
                          </li> -->
              </ul>
          </li>

        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
