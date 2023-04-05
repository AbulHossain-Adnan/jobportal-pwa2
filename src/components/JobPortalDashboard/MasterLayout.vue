<template>
  <div>
    <!-- Header Start -->
    <Header></Header>
    <!-- Header End -->
  


    <!-- main content start -->
    <router-view></router-view>
    <!-- main content end -->
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";



export default {
  name: "MasterLayout",
  components: { Header, Sidebar },
};
</script>
