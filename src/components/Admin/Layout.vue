<template>
  <div id="layout-wrapper">
    <!-- Header Start -->
    <Header></Header>
    <!-- Header End -->

    <!-- Left Sidebar Start -->
    <Sidebar></Sidebar>
    <!-- Left Sidebar End -->

    <div class="main-content">
      <!-- Page content start -->
      <div class="page-content">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
      <!-- Page content end -->

      <!-- Footer Start -->
      <Footer></Footer>
      <!-- Footer End -->
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";

export default {
  name: "Layout",
  components: { Header, Sidebar, Footer },

  beforeMount() {
    let dropzoneStyle = document.createElement("link");
    dropzoneStyle.setAttribute(
      "href",
      "assets/libs/dropzone/min/dropzone.min.css"
    );
    dropzoneStyle.setAttribute("rel", "stylesheet");
    dropzoneStyle.setAttribute("type", "text/css");
    document.head.appendChild(dropzoneStyle);

    let headStyle1 = document.createElement("link");
    headStyle1.setAttribute("href", "assets/css/bootstrap.min.css");
    headStyle1.setAttribute("rel", "stylesheet");
    headStyle1.setAttribute("type", "text/css");
    document.head.appendChild(headStyle1);

    let headStyle2 = document.createElement("link");
    headStyle2.setAttribute("href", "assets/css/icons.min.css");
    headStyle2.setAttribute("rel", "stylesheet");
    headStyle2.setAttribute("type", "text/css");
    document.head.appendChild(headStyle2);

    let headStyle3 = document.createElement("link");
    headStyle3.setAttribute("href", "assets/css/app.min.css");
    headStyle3.setAttribute("rel", "stylesheet");
    headStyle3.setAttribute("type", "text/css");
    document.head.appendChild(headStyle3);

    let bodyScript1 = document.createElement("script");
    // bodyScript1.setAttribute("src", "assets/libs/jquery/jquery.min.js");
    document.body.appendChild(bodyScript1);

    // let bodyScript2 = document.createElement("script");
    // bodyScript2.setAttribute(
    //   "src",
    //   "assets/libs/bootstrap/js/bootstrap.bundle.min.js"
    // );
    // document.body.appendChild(bodyScript2);

    let bodyScript3 = document.createElement("script");
    bodyScript3.setAttribute("src", "assets/libs/metismenu/metisMenu.min.js");
    document.body.appendChild(bodyScript3);

    let bodyScript4 = document.createElement("script");
    bodyScript4.setAttribute("src", "assets/libs/simplebar/simplebar.min.js");
    document.body.appendChild(bodyScript4);

    let bodyScript5 = document.createElement("script");
    bodyScript5.setAttribute("src", "assets/libs/node-waves/waves.min.js");
    document.body.appendChild(bodyScript5);

    let bodyScript6 = document.createElement("script");
    bodyScript6.setAttribute("src", "assets/libs/apexcharts/apexcharts.min.js");
    document.body.appendChild(bodyScript6);

    let bodyScript7 = document.createElement("script");
    bodyScript7.setAttribute("src", "assets/js/pages/dashboard.init.js");
    document.body.appendChild(bodyScript7);

    let tinymce = document.createElement("script");
    tinymce.setAttribute("src", "assets/libs/tinymce/tinymce.min.js");
    document.body.appendChild(tinymce);

    let textEditor = document.createElement("script");
    textEditor.setAttribute("src", "assets/js/pages/form-editor.init.js");
    document.body.appendChild(textEditor);

    let dropzoneScript = document.createElement("script");
    dropzoneScript.setAttribute(
      "src",
      "assets/libs/dropzone/min/dropzone.min.js"
    );
    document.body.appendChild(dropzoneScript);

    let bodyScript8 = document.createElement("script");
    bodyScript8.setAttribute("src", "assets/js/app.js");
    document.body.appendChild(bodyScript8);
  },
};
</script>
