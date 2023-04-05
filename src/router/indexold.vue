import { createRouter, createWebHistory } from "vue-router";
import ScoutLayout from "../components/Scout/MasterLayout.vue";

// scout 
import ScoutHome from "../views/Scout/ScoutHome.vue";
import CategoryJobs from "../views/Scout/CategoryJobs.vue";
import AllCategoryJobs from "../views/Scout/AllCategoryJobs.vue";
import ScoutJobBlog from "../views/Scout/ScoutJobBlog.vue";
import SingleJobBlog from "../views/Scout/SingleJobBlog.vue";
import Contact from "../views/Scout/Contact.vue";
import ScoutLogin from "../views/Scout/ScoutLogin.vue";
import ScoutRegister from "../views/Scout/ScoutRegister.vue";
import ScoutAllJob from "../views/Scout/ScoutAllJob.vue";
import BrowseResume from "../views/Scout/BrowseResume.vue";
import JobDetails from "../views/Scout/JobDetails.vue";


// testing import
// const ScoutHome = () => import("../views/Scout/ScoutHome.vue");
// const AllCategoryJobs = () => import("../views/Scout/AllCategoryJobs.vue");


// job portal end

const routes = [

  {
    path: "/jobportal",
    component: ScoutLayout,
    redirect: "/jobportal/home",

    children: [
      {
        path: "home",
        name: "scout_home",
        component: ScoutHome,
        // component: () => import("../views/Scout/ScoutHome.vue"),
      },
      {
        path: "category-jobs",
        name: "category_jobs",
        component: CategoryJobs,
        // component: () => import("../views/Scout/CategoryJobs.vue"),
      },
      {
        path: "allcategory-jobs",
        name: "allcategory_jobs",
        component: () => import("../views/Scout/AllCategoryJobs.vue"),
      },
      {
        path: "job-blog",
        name: "job_blog",
        component: ScoutJobBlog,
        // component: () => import("../views/Scout/ScoutJobBlog.vue"),
      },
      {
        path: "single-job-blog",
        name: "single_job_blog",
        component: SingleJobBlog,
        // component: () => import("../views/Scout/SingleJobBlog.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: Contact,
        // component: () => import("../views/Scout/Contact.vue"),

      },
      {
        path: "scout-login",
        name: "scout_login",
        component: ScoutLogin,
        // component: () => import("../views/Scout/ScoutLogin.vue"),
      },
      {
        path: "scout-register",
        name: "scout_register",
        component: ScoutRegister,
        // component: () => import("../views/Scout/ScoutRegister.vue"),
      },

      {
        path: "scout-alljob",
        name: "scout_alljob",
        component: ScoutAllJob,
        // component: () => import("../views/Scout/ScoutAllJob.vue"),
      },
      {
        path: "browse-resume",
        name: "browse_resume",
        component: BrowseResume,
        // component: () => import("../views/Scout/BrowseResume.vue"),
      },
      {
        path: "job-details",
        name: "job_details",
        component: JobDetails,
        // component: () => import("../views/Scout/JobDetails.vue"),
      },
      
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
