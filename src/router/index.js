import { createRouter, createWebHistory } from "vue-router";
import LayoutVue from "../components/SanuHome/Layout.vue";
import Cookies from 'js-cookie';
import axios from 'axios'
import store from "../store";


// scout 
import JobPortalHome from "../views/JobPortal/JobPortalHome.vue";

// jobportal landing home routes 
const routes = [

  {
    path: "/",
    component: LayoutVue,
    redirect: "home",
      // meta: {
      //     requiresGuest: true
      // },
    children: [
      {
        path: "home",
        name: "scout_home",
        component: JobPortalHome,
        meta:{
              requiresAuth: true
          },
      },
      {
        path: "category-jobs",
        name: "category_jobs",
        // component: CategoryJobs,
        component: () => import("../views/JobPortal/CategoryJobs.vue"),
      },
      {
        path: "allcategory-jobs",
        name: "allcategory_jobs",
        // component: AllCategoryJobs,
        component: () => import("../views/JobPortal/AllCategoryJobs.vue"),
      },
      {
        path: "search-jobs",
        name: "search_jobs",
        // component: SearchJobs,
        component: () => import("../views/JobPortal/SearchJobs.vue"),
      },
      {
        path: "job-blogs",
        name: "job_blog",
        // component: ScoutJobBlog,
        component: () => import("../views/JobPortal/ScoutJobBlog.vue"),
      },
      {
        path: "single-job-blog",
        name: "single_job_blog",
        // component: SingleJobBlog,
        component: () => import("../views/JobPortal/SingleJobBlog.vue"),
      },
      {
        path: "contact",
        name: "contact",
        // component: Contact,
        component: () => import("../views/JobPortal/Contact.vue"),

      },
      {
        path: "login",
        name: "scout_login",
        // component: ScoutLogin,
        component: () => import("../views/JobPortal/ScoutLogin.vue"),
      },
      {
        path: "createprofile",
        name: "createprofile",
        component: () => import("../views/JobPortal/CreateProfile.vue"),
      },
      {
        path: "loginprofile",
        name: "loginprofile",
        // component: LoginProfile,
        component: () => import("../views/JobPortal/LoginProfile.vue"),
      },
      {
        path: "jobprofilecreate",
        name: "jobprofilecreate",
        // component: jobprofilecreate,
        component: () => import("../views/JobPortal/JobProfileCreate.vue"),
      },
      {
        path: "alljobs",
        name: "scout_alljob",
        // component: ScoutAllJob,
              meta:{
         requiresAuth: true
     },
        component: () => import("../views/JobPortal/ScoutAllJob.vue"),
      },
      {
        path: "job-details",
        name: "job_details",
        // component: JobDetails,
              meta:{
         requiresAuth: true
     },
        component: () => import("../views/JobPortal/JobDetails.vue"),
      },
      {
        path: "browse-resume",
        name: "browse_resume",
        // component: BrowseResume,
        component: () => import("../views/JobPortal/BrowseResume.vue"),
      },
      {
        path: "applyjob",
        name: "applyjob",
        // component: applyJob,
        component: () => import("../views/JobPortal/ApplyJob.vue"),
      },
      
      
    ],
  },


  // Dashboard route
 {
  path: "/app",
  name: "app",
  component: () => import("../components/Admin/Layout.vue"),
     meta:{
         requiresAuth: true
     },
  children: [
    {
      path: "/dashboard",
      name: "app.dashboard",
      component: () => import("../views/Admin/Dashboard.vue"),
    },

    {
      path: "/notice-event",
      name: "app.notice-event",
      component: () => import("../views/Admin/NoticeEvent/Index.vue"),
    },

    {
      path: "/dashboard-managejobs",
      name: "dashboard_managejobs",
      component: () => import("../views/Admin/Employeers/ManageJobs/Index.vue"),
    },

    {
      path: "/dashboard-createjob",
      name: "dashboard_createjob",
      component: () => import("../views/Admin/Employeers/ManageJobs/Create.vue"),
    },

    {
      path: "/dashboard-editjob",
      name: "dashboard_editjob",
      component: () => import("../views/Admin/Employeers/ManageJobs/Edit.vue"),
    },
    {
      path: "/dashboard-viewjob",
      name: "dashboard_viewjob",
      component: () => import("../views/Admin/Employeers/ManageJobs/View.vue"),
    },
    {
      path: "/dashboard-jobapplications",
      name: "dashboard_jobapplications",
      component: () => import("../views/Admin/Employeers/ManageJobApplications/Index.vue"),
    },

    {
      path: "/dashboard-jobapplicants",
      name: "dashboard_jobapplicants",
      component: () => import("../views/Admin/Employeers/ManageJobApplicants/Index.vue"),
    },

    {
      path: "/dashboard-jobregister",
      name: "dashboard_jobregister",
      component: () => import("../views/Admin/Candidates/JobRegister.vue"),
    },

    {
      path: "/dashboard-resumeview",
      name: "dashboard_resumeview",
      component: () => import("../views/Admin/Candidates/ResumeView.vue"),
    },

    {
      path: "/dashboard-applyedjob-list",
      name: "dashboard_applyed_job_list",
      component: () => import("../views/Admin/Candidates/ApplyedJobView.vue"),
    },


    {
      path: "/dashboard-resumebuild",
      name: "dashboard_resumebuild",
      component: () => import("../views/Admin/Candidates/ResumeBuild.vue"),


      children: [
        {
          path: "/dashboard-resumecreate-step_01_view",
          name: "dashboard_step_one",
          component: () => import("../views/Admin/Candidates/Step_One.vue"),
        },
        {
          path: "/dashboard-resumecreate-step_02_view",
          name: "dashboard_two",
          component: () => import("../views/Admin/Candidates/Step_Two.vue"),
        },
        {
          path: "/dashboard-resumecreate-step_03_view",
          name: "dashboard_three",
          component: () => import("../views/Admin/Candidates/Step_Three.vue"),
        },

        {
          path: "/dashboard-resumecreate-step_04_view",
          name: "dashboard_fore",
          component: () => import("../views/Admin/Candidates/Step_Fore.vue"),
        },

        {
          path: "/dashboard-resumecreate-step_05_view",
          name: "dashboard_five",
          component: () => import("../views/Admin/Candidates/Step_Five.vue"),
        },
      ],
     
    },

   

    {
      path: "/dashboard-profile",
      name: "dashboard_profile",
      component: () => import("../views/Admin/Candidates/Profile.vue"),
    },
  
   
  ],

   
   
 

},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !localStorage.getItem("loggedInToken")) {
//     next({ name: "loginprofile" });
//   } else if (
//     to.meta.requiresWithoutAuth &&
//     localStorage.getItem("loggedInToken")
//   ) {
//     next({ name: "dashboard_home" });
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
    const isAlumniAuthenticated = !!Cookies.get('alumniLoggedInTokenCookie')
    const isJobAuthenticated = !!Cookies.get('jobUserLoggedInToken')
    const isAuthenticatedAuthId = Cookies.get('authIdCookie')
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const requiresGuest = to.matched.some(record => record.meta.requiresGuest)

    if (isAuthenticatedAuthId && Cookies.get('alumniLoggedInTokenCookie')){
        axios.get(`${store.state.backendUrl}user/info`,{
            params:{
                token:Cookies.get('alumniLoggedInTokenCookie').split('|')[1]
            }
        }).then((response) => {
            console.log(response.data.data.resume)
            if (response.data.data.resume == null && requiresAuth){
                next({ name: 'createprofile' })
            } else if(response.data.data.resume != null && requiresGuest){
                next({name: 'app.dashboard'})
            } else {
                next()
            }
        })
    } else if(isAuthenticatedAuthId && Cookies.get('jobUserLoggedInToken')){
        axios.get(`${store.state.backendUrl}user/info`,{
            params:{
                token:Cookies.get('jobUserLoggedInToken').split('|')[1]
            }
        }).then((response) => {
            console.log(response.data.data.resume)
            if (response.data.data.resume == null && requiresAuth){
                next({ name: 'createprofile' })
            } else if(response.data.data.resume != null && requiresGuest){
                next({name: 'app.dashboard'})
            } else {
                next()
            }
        })
    } else{
        if (requiresAuth){
            next({ name: 'loginprofile' })
        } else{
            next()
        }
    }

})

export default router;
