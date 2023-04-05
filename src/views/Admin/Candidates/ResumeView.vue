<template lang="">
    <div >

        <div class="card ">
            <div class="card-header text-white bg-secondary mb-3"> Profile Image</div><br> <br>
            <div class="card-body">
            <div class="row">
            <div class="col-sm-11 m-auto"> 
            <div class="col-sm-12">
            </div>
       <br>
     <br>
    <br>

    <div class="shadow-none p-2 mb-5 bg-light rounded">
      <table class="table">
      <tbody>
        <tr>
          <td> 
            <table>
              <tr>
                Completeness of JobPortal Resume (5/8)
              </tr>
              <td>
                Last updated on: 18 Jan 2023
              </td>
              <td>
               
                <button> Download CV</button>
              </td>
            </table>
            <p> Address: saturia, Dhamrai, Dhamrai, Dhaka 1350 </p>
              <!-- <p>  Secondary Mobile No :01884006096 </p> -->
             <!-- <p>  Emergency Contact No : 01998100733 </p>
             <p>  Primary Email : adnan@perkyrabbit.com </p>  -->
          </td>
          <td>
		      <router-link :to="{ name: 'dashboard_step_one' }"> <i class="fa-solid fa-pen-to-square"></i>Edit JobPortal Resume</router-link>
          </td>
        </tr>
      
      </tbody>
    </table>
     </div>
     
     <h3>Download:  <button @click.prevent="testPDF"> <i class="fa-solid fa-file-pdf"></i></button>  <button @click.prevent="testPDF"></button><i class="fa-solid fa-file-word"></i> </h3>
      <!-- <h3>Download:  <button @click="generatePDF"> <i class="fa-solid fa-file-pdf"></i></button>  <button @click.prevent="testPDF"></button><i class="fa-solid fa-file-word"></i> </h3> -->
     <div  id="element-to-convert">
      <table class="table">
      <tbody>
        <tr>
          <td> 
            <table>
           
              <tr>
               
              </tr>
              <td>
              
              </td>
              <!-- <td>
            
              </td> -->
            </table>
            <h2 class="mt-4"> {{resumes.first_name}}  {{resumes.middle_name}}  {{resumes.last_name}} 	</h2>
            <span>Address: </span><br>
            <span v-if="resumes.presentAddress"> {{resumes.presentAddress.area}} , {{resumes.presentAddress.division.name}}, {{resumes.presentAddress.district.name}} , {{resumes.presentAddress.thana.name}}</span><br>
           <span>Primary Mobile No:  {{resumes.personal_number}}</span><br> 
            <span>Office Mobile No : {{resumes.office_number}}</span><br>
            <span>Primary Email :  {{resumes.email}}  </span><br>
       

          </td>
          <td>
      


            <!-- <i class="fa-solid fa-eye"></i>View Resume: -->
           <div class="text-white">profile image</div> 

            <!-- <img src="assets/images/adnan.png" alt="" style="width:153px; margin-right:-60px;"> -->
            <img v-if="loading !=true" class="" :src="resumes.resume_images" :alt="resume_image" style="width:153px; margin-right:-60px;" />
          </td>
        </tr>
      
      </tbody>
    </table>
    <div v-if ="resumes.career_application" class="shadow-none p-2 mb-2 bg-light rounded"><b><u>Career Objective:</u></b></div>


    <table class="table">
      <tbody>
        <td>
            <p v-if ="resumes.career_application" v-html="resumes.career_application.brief_profile"> </p>
        </td>
      </tbody>
    </table>

        <div v-if="resumes.career_summary" class="shadow-none p-2 mb-3 bg-light rounded"><b><u>Career Summary:</u></b></div>
       
       <div v-if="resumes.career_summary" class="ml-2 mb-3"> 
        {{resumes.career_summary}}
      </div>
      <div v-if="resumes.special_qualfication"  class="shadow-none p-2 mb-3 bg-light rounded"><b><u>Special Qualification::</u></b></div>
        <div v-if="resumes.special_qualfication"  class="ml-2">
           {{resumes.special_qualfication}}
        </div>
          

        <div class="shadow-none p-2 mb-2 bg-light rounded"><b><u>Employment History:</u></b></div>
                <div class="row">
                  <div v-if="resumes.employmenthistory" class="col-sm-12" v-for="(item, index) in resumes.employmenthistory" :key="index">
                    <div class="ml-2 mb-2">
                    <span><b>Total Year of Experience :  {{ getDiffInYears(item.start_date, item.todate) }}</b></span><br>
                      <span><b>  {{index+1}}. 	{{item.designation}}</b></span><br>
                      <b>Job Preriod: </b><br>
                    <span> {{item.start_date}}  to  {{item.todate}}</span><br>
                    <b>{{item.company_name}}</b><br>
                    <span>{{item.job_location}}</span><br>
                    <!-- <span>Area of Expertise</span><br>  -->
                    <b> Duties/Responsibilities</b><br>
                    <span> {{item.responsibilities}}</span><br>   
                  </div> 
                  </div>

                </div>
                <div class="shadow-none p-2 mb-3 bg-light rounded"><b><u>Academic Qualification:</u></b></div>   
                    <div class="table-rep-plugin">
                        <div class="table-responsive mb-0" data-pattern="priority-columns">
                            <table id="tech-companies-1" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Exam Title</th>
                                    <th data-priority="1">Concentration/Major</th>
                                    <th data-priority="3">Institute</th>
                                    <th data-priority="1">Result</th>
                                    <th data-priority="3">Pas.Year</th>
                                    <th data-priority="3">Duration</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <th scope="row">SSC</th>
                                  <td>Computer</td>
                                  <td>Saturia Ideal Scholl</td>
                                  <td>4.69</td>
                                  <td>2026</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                   <th scope="row">SSC</th>
                                   <td>Computer</td>
                                   <td>Saturia Ideal Scholl</td>
                                   <td>4.69</td>
                                   <td>2026</td>
                                   <td>@mdo</td>
                                 </tr>
                                <tr>
                                  <th scope="row">SSC</th>
                               
                                  <td>Saturia Ideal Scholl</td>
                                  <td>4.69</td>
                                  <td>2026</td>
                                  <td>@mdo</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div  v-if="resumes.training_summary" class="shadow-none p-2 bg-light rounded"><b><u>Training Summary:</u></b></div>   
                    <div class="table-rep-plugin">
                        <div class="table-responsive mb-0" data-pattern="priority-columns">
                            <table id="tech-companies-1" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Training Title</th>
                                    <th data-priority="1">Topic</th>
                                    <th data-priority="3">Institute</th>
                                    <th data-priority="3">Location</th>
                                    <th data-priority="3">Duration(in days)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-if="resumes.training_summary"  v-for="item in resumes.training_summary"> 
                                  <th scope="row">{{item.training.title}}</th>
                                  <td>{{item.topics_covered}}</td>
                                  <td>{{item.institute}}</td>
                                  <td>{{item.location}}</td>
                                  <td>{{item.duration}}</td>
                                </tr>
                                </tbody>
                            </table>
                           </div>
                         </div>
                      <div  v-if="resumes.professional_certificaion"
                       class="shadow-none p-2 mb-3 bg-light rounded"><b><u>Professional Qualification:</u></b></div>   
                      <div class="table-rep-plugin">
                        <div class="table-responsive mb-0" data-pattern="priority-columns">
                            <table id="tech-companies-1" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Certification</th>
                                    <th data-priority="3">Institute</th>
                                    <th data-priority="1">Location</th>
                                    <th data-priority="3">From</th>
                                    <th data-priority="3">To</th>
                                </tr>
                                </thead>
                                <tbody>
                                  <tr v-if="resumes.professional_certificaion" v-for="item in resumes.professional_certificaion"> 
                                  <th scope="row">{{item.title}}</th>
                                  <td>{{item.organization}}</td>
                                  <td>{{item.location}}</td>
                                  <td>{{item.start_date}}</td>
                                  <td>{{item.end_date}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                <div class="shadow-none p-2 mb-3 bg-light rounded"><b><u>Career and Application Information:</u></b></div>
                <table id="tech-companies-1" class="table table-striped table-bordered">
                  <thead v-if="resumes.career_application">
                      <tr>
                          <th style="width:50%"> Looking For</th>
                          <th v-if="loading !=true" style="width:45%">  {{resumes.career_application.looking_for}}</th>
                      </tr>
                      <tr>
                          <th style="width:50%"> Available For</th>
                          <th v-if="loading !=true" style="width:45%">{{resumes.career_application.available_for}}</th>
                      </tr>
                      <tr>
                          <th style="width:50%">  Present Salary</th>
                          <th v-if="loading !=true"  style="width:45%">TK {{resumes.career_application.present_salary}}</th>
                      </tr>
                      <tr>
                          <th style="width:50%">   Expected Salary</th>
                          <th v-if="loading !=true"  style="width:45%">TK {{resumes.career_application.expected_salary}}</th>

                      </tr>
                      </thead>
                      <tbody>
                                 
                      </tbody>
                  </table>
                  <div class="shadow-none p-2 mb-2 bg-light rounded"><b><u>Specialization:</u></b></div>   
                  <div class="table-rep-plugin">
                        <div class="table-responsive mb-0" data-pattern="priority-columns">
                            <table id="tech-companies-1" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th style="width:15%">Fields of Specialization</th>
                                    <th style="width:40%" >Description</th>
                                    <th style="width:45%">Extracurriculam Activity</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <th scope="row">
                                    <div v-if="resumes.specializeSkills" class="row" v-for="(item,index) in resumes.specializeSkills">
                                    <div class="col-sm-12">
                                   {{index+1}}: {{item.title}}
                                    </div>
                                  </div>
                                  </th>
                                  <td v-if="resumes.specialization">
                                   {{resumes.specialization.description}}
                                  </td>
                                  <td v-if="resumes.specialization">
                                    {{resumes.specialization.extracurricular}}
                                   </td>
                                 
                                </tr>
                               
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="shadow-none p-2 mb-3 bg-light rounded"><b><u>Language Proficiency:</u></b></div>   
                    <div class="table-rep-plugin">
                            <div class="table-responsive mb-0" data-pattern="priority-columns">
                                <table id="tech-companies-1" class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Language</th>
                                        <th data-priority="3">Reading</th>
                                        <th data-priority="1">Writing</th>
                                        <th data-priority="3">Speaking</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                      <tr v-for="item in resumes.languages"> 
                                      <th scope="row">{{item.language}}</th>
                                      <td>{{item.reading}}</td>
                                      <td>{{item.writing}}</td>
                                      <td>{{item.speaking}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                      <div class="shadow-none p-2 mb-3 bg-light rounded"><b><u>Personal Details :</u></b></div>
                        <p>Father's Name 	: 	{{resumes.father_name}}</p>
                        <p>Mother's Name 	: 	{{resumes.mother_name}}</p>
                        <p>Gender 	: 	{{resumes.gender}}</p>
                        <p>Height (Meter) 	: 	0</p>
                        <p>Marital Status 	: 	{{resumes.marital_status}}</p>
                        <p>Nationality 	: 	{{resumes.nationality}}</p>
                        <p>National Id No. 	: 	{{resumes.national_id}}</p>
                        <p>Religion 	: 	{{resumes.religion}}</p>
                        <p>Permanent Address 	: <span v-if="resumes.permanentAddress"> {{resumes.permanentAddress.area}} , {{resumes.permanentAddress.division.name}}, {{resumes.permanentAddress.district.name}} , {{resumes.permanentAddress.thana.name}}</span><br></p>
                        <p>Blood Group 	: 	{{resumes.blood_group}}</p>
                        <div class="text-center"> <b ><u >DEVELOPED AND MAINTAINS BY PERKYRABBIT CORPORATION LIMITED</u></b></div><br><br> 
                    </div>
                   <hr>
      
               </div>
             </div>
            </div>
          </div>
        </div>
</template>
<script>

import PaginationComponent from "../../../components/PaginationComponent.vue";
import { ElNotification } from "element-plus";
import html2pdf from "html2pdf.js";
import html2canvas from 'html2canvas';

import axios from "axios";
import Form from "vform";
import jsPDF from 'jspdf';


// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';


import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {
  Button,
  HasError,
  AlertError,
  AlertErrors,
  AlertSuccess,
} from "vform/src/components/bootstrap5";

export default {
  name: "CCCjobpostsTable",
  components: {

    PaginationComponent,
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      //   backendUrl: "http://127.0.0.1:8000/",

      loading:true,
      editMode: false,
      showMode: false,
      keyword: "",
      fieldName: "job_title",
      perPage: 5,
      trainingSummaries: [],
      jobcategories: [],
      jobsubcategories: [],
      categorysubcategories: [],
      personaldetails: [],
      divisions:[],
      districts:[],
      thanas:[],
      test:['test data'],
      createmode:true,
      links: [],
      storeMode:false,
      resumes: [],
      resume_image:"",
      jobportaluser_id: localStorage.getItem('auth_id'),

      animals: [
        ['column1','column2','column3','column4']
      ],

   
    };
  },

  watch: {
    keyword: function () {
      // this.getData();
    },
  },

    mounted() {
    
    console.log("Component mounted.");
    this.getResume();
  },

  methods: {

    testPDF() {
      html2pdf(document.getElementById("element-to-convert"), {
				margin: 4,
  			filename: "Resume.pdf",
			});
    },
    exportPdf() {
      let docDefinition = {
  content: [
    {
      layout: 'lightHorizontalLines', // optional
      table: {
        headerRows: 1,
        widths: [ '*', 'auto', 100, '*' ],

        body: this.animals
      }
    }
  ]
};
const pdf = pdfMake.createPdf(docDefinition).download();
    },


    // fetching resume data 
    async getResume() {
      const response = await fetch(`${this.backendUrl}user/resume/`+this.jobportaluser_id);
      const data = await response.json();
      console.log('resume response');
      console.log(data);

      this.resumes = data;
      this.resume_image = data.resume_image;
      this.loading = false;
    },
   // end 


  //  generatePDF() {
  //   console.log(this.resume_image);
  //       const element = document.querySelector('#element-to-convert');
  //       html2canvas(element).then(canvas => {
  //         const pdf = new jsPDF();
  //         let imageUrl = this.resume_image;
  //         pdf.addImage(canvas.toDataURL(imageUrl), 'jpg', 0, 0, 211, 298);
  //         console.log(pdf);
  //         pdf.save('my-pdf-file.pdf');
  //       });
  //     },
































    // userPresentAddress() {
    //   this.$Progress.start();
    //   let userPresentAddress =`${this.backendUrl}user-present-address/`+this.jobportaluser_id;
    //   axios
    //     .get(userPresentAddress).then((response) => {
    //       // this.resumes = response.data;

    //       console.log(response.data);
          
    //       console.log('hello from present address response data');
    //       this.$Progress.finish();
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //       this.$Progress.fail();
    //     });

    // },

  //  testPDF() {
  //     const element = document.querySelector('#element-to-convert');
  //     html2canvas(element).then(canvas => {
  //       var pdf = new jsPDF()
  //       pdf.setFontSize(20);
  //       pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
  //       pdf.save('fileName.pdf');
  //     });
  //   },


    // testPDF() {
    //   const element = document.querySelector('#element-to-convert');
    //   html2canvas(element).then(canvas => {
    //     const doc = new jsPDF({
    //     format: "a4",
    //     orientation: "portrait",
    //   });
    //   doc.setFontSize(25);

    //   // doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
    //   doc.save('fileName.pdf');
    //   });
    // },



      getDiffInYears(startDate, endDate) {
          // create date objects from the input strings
      const date1 = new Date(startDate);
      const date2 = new Date(endDate);

      // calculate the difference in years and months between the two dates
      const diffInMonths = (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());

      // calculate the number of years and remaining months
      const years = Math.floor(diffInMonths / 12);
      const months = diffInMonths % 12;

      // build the result string and return it
      let result = "";
      if (years > 0) {
        result += years + " year" + (years > 1 ? "s " : " ");
      }
      if (months > 0) {
        result += months + " month" + (months > 1 ? "s" : "");
      }
      if (result === "") {
        result = "0 months";
      }
       return result;
    }

  },
};
</script>
