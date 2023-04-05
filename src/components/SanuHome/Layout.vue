<template>
    <div id="home">
        <header>
            <!-- Start Preloader Area -->
            <!-- <div class="preloader-area">
                <div class="spinner">
                    <div class="inner">
                        <div class="disc"></div>
                        <div class="disc"></div>
                        <div class="disc"></div>
                    </div>
                </div>
            </div> -->
            <!-- End Preloader Area -->

            <!--Strat Top Header Area-->
            <div class="top-header-area">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="header-right-content">
                                <div class="list">
                                    <ul>
                                        <li>
                                           
                                        </li>
                                        <li>
                                          
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'loginprofile' }">Sign In </router-link>
                                      
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'createprofile' }">Create Account</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--End Top Header Area-->

            <!-- Start Navbar Area -->
            <div class="navbar-area nav-bg-1">
                <div class="mobile-responsive-nav">
                    <div class="container">
                        <div class="mobile-responsive-menu">
                            <div class="logo">
                                <a href="index.html">
                                    <img :src="$store.state.cccLogo" :alt="$store.state.alt" class="main-logo">
                                    <img :src="$store.state.cccLogo" :alt="$store.state.alt" class="white-logo">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="desktop-nav">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img :src="$store.state.cccLogo" :alt="$store.state.alt">
                            </a>
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <router-link :to="{ name: 'scout_home' }" class="nav-link active"
                                        >Home</router-link
                                        >
                                    </li>

                                    <li class="nav-item">
                                        <router-link :to="{ name: 'job_blog' }" class="nav-link "
                                        >Blog</router-link
                                        >
                                    </li>
                                  

                                  

                                    <li class="nav-item">
                                    <!-- <a href="#" class="nav-link dropdown-toggle ">
                                        Pages            
                                    </a> -->
                                    <!-- <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link :to="{ name: 'allcategory_jobs' }" class="nav-link"
                                                >Browse All Category Jobs</router-link
                                                >
                                        </li>
                                        <li class="nav-item">
                                            <router-link :to="{ name: 'job_blog' }" class="nav-link"
                                                >Blogs</router-link
                                                >
                                        </li>
                                        <li class="nav-item">
                                            <router-link :to="{ name: 'single_job_blog' }" class="nav-link"
                                                >Single Blog</router-link
                                                >
                                        </li>
                                    </ul> -->
                                </li>

                                    <li class="nav-item">
                                        <router-link :to="{ name: 'contact' }" class="nav-link"
                                        >Contact</router-link
                                        >
                                      
                                    </li>

                                    <li class="nav-item">
                                         <router-link :to="{ name: 'app.dashboard' }" class="nav-link"
                                        >Dashboard</router-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div class="others-option-for-responsive">
                    <div class="container">
                        <div class="dot-menu">
                            <!-- <div class="inner">
                               
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Navbar Area -->
        </header>




        <router-view></router-view>






        <footer>
            <!--Start Footer Area-->
            <div class="footer-area pt-30 pb-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="footer-logo-area">
                                <a href="index.html">
                                    <img :src="$store.state.cccLogo" :alt="$store.state.alt" />
                                </a>
                                <p>
                                    Sanu University was established by J.H Merthon in 1810 for the
                                    public benefit. Afterwards, it is recognized
                                </p>
                                <div class="contact-list">
                                    <ul>
                                        <li><a href="#">+01-9876-5556-7685</a></li>
                                        <li><a href="#">admin@ewu.edu</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-widjet">
                                <h3>Student</h3>
                                <div class="list">
                                    <ul>
                                        <li><a href="campus-life.html">Accessibility</a></li>
                                        <li><a href="campus-life.html">Financial Aid</a></li>
                                        <li><a href="campus-life.html">Food Services</a></li>
                                        <li><a href="campus-life.html">Housing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-widjet">
                                <h3>Our Campus</h3>
                                <div class="list">
                                    <ul>
                                        <li><a href="campus-life.html">Acedemic</a></li>
                                        <li>
                                            <a href="campus-life.html">Planning & Administration</a>
                                        </li>
                                        <li><a href="campus-life.html">Campus Safety</a></li>
                                        <li>
                                            <a href="campus-life.html">Office of the Chancellor</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <div class="footer-widjet">
                                <h3>Location Map</h3>
                                <div class="list">
                                    <div class="border-outline">
                                        <a href="index.html"><img :src="$store.state.cccMap"
                                                :alt="$store.state.alt" /></a>
                                    </div>
                                    <p class="text-white" style="margin-top: 10px">
                                        Follow Us :
                                        <a href="https://www.facebook.com" target="_blank"
                                            style="border: 1px solid rgb(187, 177, 177)">
                                            <i class="ri-facebook-fill"></i>
                                        </a>

                                        <a href="https://www.twitter.com" target="_blank"
                                            style="border: 1px solid rgb(187, 177, 177)"><i
                                                class="ri-twitter-fill"></i></a>
                                        <a href="https://instagram.com/?lang=en" target="_blank"
                                            style="border: 1px solid rgb(187, 177, 177)"><i
                                                class="ri-instagram-line"></i></a>
                                        <a href="https://linkedin.com/?lang=en" target="_blank"
                                            style="border: 1px solid rgb(187, 177, 177)"><i
                                                class="ri-linkedin-fill"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="shape">
                        <img :src="$store.state.image" :alt="$store.state.alt" />
                    </div> -->
                </div>
            </div>
            <!--End Footer Area-->
            <div style="margin-top: 2px"></div>

            <!--Start Copyright Area-->
            <div class="copyright-area">
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-lg-10 col-md-4">
                                <div class="social-content">
                                    <ul>
                                        <li><span>Quick Links</span></li>
                                        <li>
                                            <button type="button"
                                                class="btn btn-secondary btn-sm btn-responsive btn-block"
                                                style="border-radius: 20%">
                                                Apply Online
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="btn btn-secondary btn-sm btn-responsive btn-block"
                                                style="border-radius: 20%">
                                                Apply Online
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="btn btn-secondary btn-sm btn-responsive btn-block"
                                                style="border-radius: 20%">
                                                Apply Online
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="btn btn-secondary btn-sm btn-responsive btn-block"
                                                style="border-radius: 20%">
                                                Apply Online
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="btn btn-secondary btn-sm btn-responsive btn-block"
                                                style="border-radius: 20%">
                                                Apply Online
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button"
                                                class="btn btn-secondary btn-sm btn-responsive btn-block"
                                                style="border-radius: 20%">
                                                Apply Online
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-secondary btn-sm btn-responsive"
                                                style="border-radius: 20%">
                                                Apply Online
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--End Copyright Area-->

            <!-- Start Go Top Area -->
            <div class="go-top">
                <i class="ri-arrow-up-s-line"></i>
                <i class="ri-arrow-up-s-line"></i>
            </div>
            <!-- End Go Top Area -->
        </footer>
    </div>
</template>

<script>
export default {
    name: "Layout",

    beforeCreate() {
        // CSS
        let bodyStyle1 = document.createElement('link')
        bodyStyle1.setAttribute('href', 'home/assets/css/bootstrap.min.css')
        bodyStyle1.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle1)

        let bodyStyle2 = document.createElement('link')
        bodyStyle2.setAttribute('href', 'home/assets/css/meanmenu.css')
        bodyStyle2.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle2)

        let bodyStyle3 = document.createElement('link')
        bodyStyle3.setAttribute('href', 'home/assets/css/owl.carousel.min.css')
        bodyStyle3.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle3)

        let bodyStyle4 = document.createElement('link')
        bodyStyle4.setAttribute('href', 'home/assets/css/owl.theme.default.min.css')
        bodyStyle4.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle4)

        let bodyStyle5 = document.createElement('link')
        bodyStyle5.setAttribute('href', 'home/assets/css/magnific-popup.css')
        bodyStyle5.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle5)

        let bodyStyle6 = document.createElement('link')
        bodyStyle6.setAttribute('href', 'home/assets/css/flaticon.css')
        bodyStyle6.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle6)

        let bodyStyle7 = document.createElement('link')
        bodyStyle7.setAttribute('href', 'home/assets/css/remixicon.css')
        bodyStyle7.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle7)

        let bodyStyle8 = document.createElement('link')
        bodyStyle8.setAttribute('href', 'home/assets/css/odometer.min.css')
        bodyStyle8.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle8)

        let bodyStyle9 = document.createElement('link')
        bodyStyle9.setAttribute('href', 'home/assets/css/aos.css')
        bodyStyle9.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle9)

        let bodyStyle10 = document.createElement('link')
        bodyStyle10.setAttribute('href', 'home/assets/css/style.css')
        bodyStyle10.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle10)

        let bodyStyle11 = document.createElement('link')
        bodyStyle11.setAttribute('href', 'home/assets/css/dark.css')
        bodyStyle11.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle11)

        let bodyStyle12 = document.createElement('link')
        bodyStyle12.setAttribute('href', 'home/assets/css/responsive.css')
        bodyStyle12.setAttribute('rel', 'stylesheet')
        document.head.appendChild(bodyStyle12)

        
        // JS
        // let bodyScript1 = document.createElement('script')
        // bodyScript1.setAttribute('src', 'home/assets/js/jquery.min.js')
        // document.body.appendChild(bodyScript1)

        // let bodyScript2 = document.createElement('script')
        // bodyScript2.setAttribute('src', 'home/assets/js/bootstrap.bundle.min.js')
        // document.body.appendChild(bodyScript2)

        // let bodyScript3 = document.createElement('script')
        // bodyScript3.setAttribute('src', 'home/assets/js/jquery.meanmenu.js')
        // document.body.appendChild(bodyScript3)

        // let bodyScript4 = document.createElement('script')
        // bodyScript4.setAttribute('src', 'home/assets/js/owl.carousel.min.js')
        // document.body.appendChild(bodyScript4)

        // let bodyScript5 = document.createElement('script')
        // bodyScript5.setAttribute('src', 'home/assets/js/carousel-thumbs.min.js')
        // document.body.appendChild(bodyScript5)

        // let bodyScript6 = document.createElement('script')
        // bodyScript6.setAttribute('src', 'home/assets/js/jquery.magnific-popup.js')
        // document.body.appendChild(bodyScript6)

        // let bodyScript7 = document.createElement('script')
        // bodyScript7.setAttribute('src', 'home/assets/js/aos.js')
        // document.body.appendChild(bodyScript7)

        // let bodyScript8 = document.createElement('script')
        // bodyScript8.setAttribute('src', 'home/assets/js/odometer.min.js')
        // document.body.appendChild(bodyScript8)

        // let bodyScript9 = document.createElement('script')
        // bodyScript9.setAttribute('src', 'home/assets/js/appear.min.js')
        // document.body.appendChild(bodyScript9)

        // let bodyScript10 = document.createElement('script')
        // bodyScript10.setAttribute('src', 'home/assets/js/form-validator.min.js')
        // document.body.appendChild(bodyScript10)

        // let bodyScript11 = document.createElement('script')
        // bodyScript11.setAttribute('src', 'home/assets/js/contact-form-script.js')
        // document.body.appendChild(bodyScript11)

        // let bodyScript12 = document.createElement('script')
        // bodyScript12.setAttribute('src', 'home/assets/js/ajaxchimp.min.js')
        // document.body.appendChild(bodyScript12)

        let bodyScript13 = document.createElement('script')
        bodyScript13.setAttribute('src', 'home/assets/js/custom.js')
        document.body.appendChild(bodyScript13)
    }
}
</script>

<style>

</style>