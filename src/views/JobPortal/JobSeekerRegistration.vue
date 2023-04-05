<template>
    <div id="register">
      <div class="register-area pt-100 pb-70">
        <div class="container">
          <div class="shadow-none p-3 mb-5 bg-light rounded">
            <form @submit.prevent="store()" @keydown="form.onKeydown($event)">
              <div v-if="form.progress" class="text-center">
                Progress: {{ form.progress.percentage }}%
              </div>
  
              <AlertError :form="form" message="There were some problems with your input." />
  
              <div class="row mb-3">
                <label for="ewu_id_no" class="col-sm-3 col-form-label">EWU id number</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.ewu_id_no" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter Your University ID" />
                  <HasError :form="form" field="ewu_id_no" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="title" class="col-sm-3 col-form-label">Title</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.title" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Add Title" />
                  <HasError :form="form" field="title" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="first_name" class="col-sm-3 col-form-label">First Name</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.first_name" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter your first name" />
                  <HasError :form="form" field="first_name" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="middle_name" class="col-sm-3 col-form-label">Middle Name</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.middle_name" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter your middle name" />
                  <HasError :form="form" field="middle_name" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="last_name" class="col-sm-3 col-form-label">Last Name</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.last_name" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter your last name" />
                  <HasError :form="form" field="last_name" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="personal_email" class="col-sm-3 col-form-label"> Personal E-mail Address</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.personal_email" type="email" class="form-control" id="personal_email"
                    placeholder="Format: personal@example.com" />
                  <HasError :form="form" field="personal_email" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="university_email" class="col-sm-3 col-form-label">University E-mail Address</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.university_email" type="email" class="form-control" id="university_email"
                    placeholder="Format: university@example.com"  />
                  <HasError :form="form" field="university_email" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="company_email" class="col-sm-3 col-form-label">Company E-mail Address</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.company_email" type="email" class="form-control" id="company_email"
                    placeholder="Format: company@example.com"  />
                  <HasError :form="form" field="company_email" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="contact_number" class="col-sm-3 col-form-label">Contact Number</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.contact_number" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Format: 01xxxxxxxxx" />
                  <HasError :form="form" field="contact_number" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="nid" class="col-sm-3 col-form-label">NID</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.nid" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter your National Identity Card Number" />
                  <HasError :form="form" field="nid" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="dob" class="col-sm-3 col-form-label">Date of Birth</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.dob" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Format: DD-MM-YYYY" />
                  <HasError :form="form" field="dob" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="gender" class="col-sm-3 col-form-label">Gender</label>
                <div class="col-sm-7 m-auto">
                  <select v-model="form.gender" class="form-select form-control shadow-lg rounded">
                    <option value="">Select One</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <HasError :form="form" field="gender" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="blood_group" class="col-sm-3 col-form-label">Blood Group</label>
                <div class="col-sm-7 m-auto">
                  <select v-model="form.blood_group" class="form-select form-control shadow-lg rounded">
                    <option value="">Select One</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                  <HasError :form="form" field="blood_group" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="department_id" class="col-sm-3 col-form-label">Department</label>
                <div class="col-sm-7 m-auto">
                  <select v-model="form.department_id" class="form-control form-select shadow-lg rounded">
                      <option value="">Select One</option>
                      <option v-for="(item,index) in departments" :value="item.id">{{item.title}}</option>
                  </select>
                  <HasError :form="form" field="department_id" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="program_id" class="col-sm-3 col-form-label">Program</label>
                <div class="col-sm-7 m-auto">
                  <select v-model="form.program_id" class="form-select form-control shadow-lg rounded">
                    <option value="">Select One</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Diploma">Diploma</option>
                  </select>
                  <HasError :form="form" field="program_id" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="passing_year" class="col-sm-3 col-form-label">Passing Semester And Year</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.passing_year" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Format: Spring 2021, Fall 2020" />
                  <HasError :form="form" field="passing_year" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="convocation_year" class="col-sm-3 col-form-label">Convocation Year</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.convocation_year" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter your convocation year" />
                  <HasError :form="form" field="convocation_year" />
                </div>
              </div>
  
              <!-- <div class="row mb-3">
                <label for="achievement_ids" class="col-sm-3 col-form-label">Achievement</label>
                <div class="col-sm-7 m-auto">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h6 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Select One
                        </button>
                      </h6>
                      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul class="list-unstyled" v-for="(item, index) in achievements">
                              <li>
                                <input v-model="form.achievement_ids" type="checkbox" name="achievement_ids" :value="item.id">
                                {{ item.title }}
                                <HasError :form="form" field="achievement_ids" />
                              </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
  
              <!-- <div class="row mb-3">
                <label for="skill_ids" class="col-sm-3 col-form-label">Skills</label>
                <div class="col-sm-7 m-auto">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Select One
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul class="list-unstyled" v-for="(item, index) in skills">
                              <li>
                                <input v-model="form.skill_ids" type="checkbox" name="skill_ids" :value="item.id"> {{ item.title
                                }}
                                <HasError :form="form" field="skill_ids" />
                              </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
  
              <div class="row mb-3">
                <label for="occupation" class="col-sm-3 col-form-label">Occupation</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.occupation" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter Your Occupation" />
                  <HasError :form="form" field="occupation" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="designation_department" class="col-sm-3 col-form-label">Designation / Department</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.designation_department" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter Designation or Department" />
                  <HasError :form="form" field="designation_department" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="organization_details" class="col-sm-3 col-form-label">Organization Name & Position</label>
                <div class="col-sm-7 m-auto">
                  <textarea v-model="form.organization_details" class="form-control shadow-lg bg-white rounded" rows="3"
                    cols="50" name="comment" placeholder="Enter text here..."></textarea>
                  <HasError :form="form" field="organization_details" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="doj" class="col-sm-3 col-form-label">Date of Join</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.doj" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Format: DD-MM-YYYY" />
                  <HasError :form="form" field="doj" />
                </div>
              </div>
  
              <!-- <div class="row mb-3">
                <label for="experience" class="col-sm-3 col-form-label">Experience</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.experience" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter Experience" />
                  <HasError :form="form" field="experience" />
                </div>
              </div> -->
  
              <div class="row mb-3">
                <label for="linkedin_profile_link" class="col-sm-3 col-form-label">Linkedin Profile Link</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.linkedin_profile_link" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter Linkedin Profile Link" />
                  <HasError :form="form" field="linkedin_profile_link" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="image" class="col-sm-3 col-form-label">Image</label>
                <div class="col-sm-7 m-auto">
                  <input @change="onImageChange" name="image" type="file" class="form-control shadow-lg bg-white rounded"
                    id="file" />
                  <img class="mt-1" :src="imagePreview" style="width: 100px;" alt="">
                  <HasError :form="form" field="image" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="username" class="col-sm-3 col-form-label">Username</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.username" type="text" class="form-control shadow-lg bg-white rounded"
                    placeholder="Enter username" />
                  <HasError :form="form" field="username" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="email" class="col-sm-3 col-form-label">Login E-mail</label>
                <div class="col-sm-7 m-auto">
                  <select v-model="form.email" class="form-select form-control shadow-lg rounded" placeholder="Choose One" @click="getEmails()">
                    <option v-for="item in emails" :value="item">{{ item }}</option>
                  </select>
                  <HasError :form="form" field="email" />
                </div>
              </div>
  
              <div class="row mb-3">
                <label for="password" class="col-sm-3 col-form-label">Password</label>
                <div class="col-sm-7 m-auto">
                  <input v-model="form.password" type="password" name="password"
                    class="form-control shadow-lg bg-white rounded" placeholder="Enter password" />
                  <HasError :form="form" field="password" />
                </div>
              </div>
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">program_degree</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.program_degree" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <HasError :form="form" field="program_degree" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Major(if any)</label>
              <div class="col-sm-7 m-auto">
                <select class="form-select shadow-lg p-3 bg-white rounded" v-model="form.major_minor"
                  aria-label="Default select example">
                  <option :value="noselected">choose one</option>
                  <option :value="History">History</option>
                  <option :value="Geography">Geography</option>
                  <option :value="Psychology">Psychology</option>
                  <option :value="Law">Law</option>
                </select>
                <HasError :form="form" field="major_minor" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">CGPA *</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.cgpa" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <small id="emailHelp" class="form-text text-muted">
                  e.g. 3.00, 4.00, 5.00</small>
                <HasError :form="form" field="cgpa" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Skills *</label>
              <div class="col-sm-7 m-auto">
                <select class="form-select shadow-lg p-3 bg-white rounded" v-model="form.skill"
                  aria-label="Default select example">
                  <option :value="noselected">choose one</option>
                  <option :value="time_management">time Management</option>
                  <option :value="study_management">study_management</option>
                  <option :value="stress_management">stress_management</option>
                </select>
                <HasError :form="form" field="skill" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Extra/Co Curricular Activities*</label>
              <div class="col-sm-7 m-auto">
                <select class="form-select shadow-lg p-3 bg-white rounded" v-model="form.extra_activity"
                  aria-label="Default select example">
                  <option :value="noselected">choose one</option>
                  <option :value="Leadership_skill">Leadership skills</option>
                  <option :value="Communication_skill">
                    Communication skills
                  </option>
                  <option :value="Collaboration_skill">Collaboration</option>
                  <option :value="Organizational_skill">
                    Organizational skills
                  </option>
                </select>
                <HasError :form="form" field="extra_activity" />
              </div>
            </div> -->
  
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Club Name(clubbing Experience</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.club_name" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <small id="emailHelp" class="form-text text-muted">e.g. Bussyness club(exclusive event
                  Conrdinator/Member</small>
                <HasError :form="form" field="club_name" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Passing semester and year*</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.passing_year" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <small id="emailHelp" class="form-text text-muted">e.g. Spring 2021, Fall 2020</small>
                <HasError :form="form" field="passing_year" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Current Status</label>
              <div class="col-sm-7 m-auto">
                <select class="form-select" aria-label="Default select example">
                  <option selected>choose one</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="3">Four</option>
                </select>
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Organization Name & Designation</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.organization_name" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <small id="emailHelp" class="form-text text-muted">e.g. Uniliver Management Trainee (if business)
                  Derector:Abc
                  Enterprise</small>
                <HasError :form="form" field="organization_name" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Experience</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.experience" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <small id="emailHelp" class="form-text text-muted">e.g. Sales 1year ,Engineering 2years</small>
                <HasError :form="form" field="experience" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Looking for</label>
              <div class="col-sm-7 m-auto">
                <div class="form-check">
                  <div class="form-check form-check-inline">
                    <input v-model="form.full_time_job" class="form-check-input" type="checkbox" id="inlineCheckbox1"
                      :value="full_time_job" />
                    <label class="form-check-label" for="inlineCheckbox1">Full time Job</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input v-model="form.part_time_job" class="form-check-input" type="checkbox" id="inlineCheckbox2"
                      :value="part_time_job" />
                    <label class="form-check-label" for="inlineCheckbox2">Part-time Job</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input v-model="form.contructual" class="form-check-input" type="checkbox" id="inlineCheckbox3"
                      :value="contructual" />
                    <label class="form-check-label" for="inlineCheckbox3">Contructual</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input v-model="form.internship_job" class="form-check-input" type="checkbox" id="inlineCheckbox4"
                      :value="internship_job" />
                    <label class="form-check-label" for="inlineCheckbox4">Intership Job</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input v-model="form.experience_job" class="form-check-input" type="checkbox" id="inlineCheckbox5"
                      :value="experience_job" />
                    <label class="form-check-label" for="inlineCheckbox5">Experience Job</label>
                  </div>
                </div>
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Job Preferences
              </label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.job_preference" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <small id="emailHelp" class="form-text text-muted">e.g. Salesman, merketing, Engineering etc</small>
                <HasError :form="form" field="job_preference" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Industry Preferences</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.industry_preference" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <small id="emailHelp" class="form-text text-muted">e.g. Banking Industry, Software Firm,Food Industry
                  etc</small>
                <HasError :form="form" field="industry_preference" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Job Location Preferences</label>
              <div class="col-sm-7 m-auto">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="job_location" v-model="form.job_location_preference"
                    id="inlineRadio1" :value="all_bangladesh" />
                  <label class="form-check-label" for="inlineRadio1">All Bangladesh</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="job_location" v-model="form.job_location_preference"
                    id="inlineRadio2" :value="dhaka" />
                  <label class="form-check-label" for="inlineRadio2">Dhaka</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="job_location" v-model="form.job_location_preference"
                    id="inlineRadio3" :value="barishal" />
                  <label class="form-check-label" for="inlineRadio3">Barishal</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="job_location" v-model="form.job_location_preference"
                    id="inlineRadio4" :value="rajshahi" />
                  <label class="form-check-label" for="inlineRadio4">Rajshahi</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="job_location" v-model="form.job_location_preference"
                    id="inlineRadio5" :value="khulna" />
                  <label class="form-check-label" for="inlineRadio3">Khulna</label>
                </div>
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label" placeholder="Input Here...">Current
                Residences</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.current_residence" type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Input Here..." :readonly="showMode == true ? true : false" />
                <small id="emailHelp" class="form-text text-muted">e.g. Gulshan, Uttora, Banosree etc</small>
                <HasError :form="form" field="current_residence" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Home District*</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.home_district" type="text" class="form-control" id="inputEmail3"
                  placeholder="Input Here..." />
                <small id="emailHelp" class="form-text text-muted">e.g. Manikganj, Dhaka, gazipur etc</small>
                <HasError :form="form" field="home_district" />
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Collage*</label>
              <div class="col-sm-7 m-auto">
                <div class="form-check form-check-inline">
                  <input selected class="form-check-input" type="radio" name="collage" v-model="form.collage"
                    id="inlineRadio1" :value="bangla_medium" />
                  <label class="form-check-label" for="inlineRadio1">Bangla-Medium</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="collage" v-model="form.collage" id="inlineRadio2"
                    :value="english_medium" />
                  <label class="form-check-label" for="inlineRadio2">English-Medium</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="collage" v-model="form.collage" id="inlineRadio3"
                    :value="english" />
                  <label class="form-check-label" for="inlineRadio3">English</label>
                </div>
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">School*</label>
              <div class="col-sm-7 m-auto">
                <div class="form-check form-check-inline">
                  <input v-model="form.school" :value="bangla_medium" class="form-check-input" type="radio" name="school"
                    id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">Bangla-Medium</label>
                </div>
                <div class="form-check form-check-inline">
                  <input v-model="form.school" :value="english_medium" class="form-check-input" type="radio" name="school"
                    id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">English-Medium</label>
                </div>
                <div class="form-check form-check-inline">
                  <input v-model="form.school" :value="english" class="form-check-input" type="radio" name="school"
                    id="inlineRadio3" value="option3" />
                  <label class="form-check-label" for="inlineRadio3">English</label>
                </div>
              </div>
            </div> -->
  
              <!-- <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">CV/Resume *</label>
              <div class="col-sm-7 m-auto">
                <input type="file" class="form-control" id="inputEmail3" />
              </div>
            </div> -->
  
              <div class="col-md-12 text-center">
                <button type="submit" class="default-btn">
                  Submit<span></span>
                </button>
              </div>
  
            </form>
          </div>
        </div>
        <vue-progress-bar></vue-progress-bar>
        <notifications />
      </div>
      <vue-progress-bar></vue-progress-bar>
        <notifications />
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Form from "vform";
  import { Button, HasError, AlertError, AlertErrors, AlertSuccess } from "vform/src/components/bootstrap5";
  
  export default {
    name: "Register",
    components: {
      Button,
      HasError,
      AlertError,
      AlertErrors,
      AlertSuccess,
    },
  
    data() {
      return {
        backendUrl: this.$store.state.backendUrl,
        imagePreview: "",
        valueFrom: "alumni_create",
        form: new Form({
          id: "",
          ewu_id_no: "",
          title: "",
          first_name: "",
          middle_name: "",
          last_name: "",
          personal_email: "",
          university_email: "",
          company_email: "",
          contact_number: "",
          nid: "",
          dob: "",
          gender: "",
          blood_group: "",
          department_id: "",
          program_id: "",
          passing_year: "",
          convocation_year: "",
          // achievement_ids: [],
          // skill_ids: [],
          occupation: "",
          designation_department: "",
          organization_details: "",
          doj: "",
          experience: "",
          linkedin_profile_link: "",
          image: "",
          email: "",
          username: "",
          password: ""
        }),
  
        departments: [],
        // skills: [],
        // achievements: [],
        emails:[],
      };
    },
  
    mounted() {
      this.getDependentData();
    },
  
    methods: {
      // setEmails() {
      //   if (this.form.personal_email) {
      //     this.emails.push(this.form.personal_email);
      //     // console.log(this.emails);
      //   }
  
      //   if (this.form.university_email) {
      //     this.emails.push(this.form.university_email);
      //   }
  
      //   if (this.form.company_email) {
      //     this.emails.push(this.form.company_email);
      //   }
      // },
  
      getEmails() {
        if (Number(this.form.personal_email.length) > 0) {
          // this.emails.push(this.form.personal_email);
          this.emails[0] = this.form.personal_email;
        } else {
          this.emails[0] = null;
        }
  
        if (Number(this.form.university_email.length) > 0) {
          // this.emails.push(this.form.university_email);
          this.emails[1] = this.form.university_email;
        } else {
          this.emails[1] = null;
        }
  
        if (Number(this.form.company_email.length) > 0) {
          // this.emails.push(this.form.company_email);
          this.emails[2] = this.form.company_email;
        } else {
          this.emails[2] = null;
        }
      },
  
      getDependentData() {
        this.$Progress.start();
        axios.get(`${this.backendUrl}/department`)
          .then((response) => {
            this.departments = response.data.data;
            console.log(this.departments);
            this.$Progress.finish();
          })
          .catch((e) => {
            this.$Progress.fail();
          });
  
        // axios.get(`${this.backendUrl}/achievement`)
        //   .then((response) => {
        //     this.achievements = response.data.data;
        //     console.log(this.achievements);
        //   })
        //   .catch((e) => {
        //     this.$Progress.fail();
        //   });
  
        // axios.get(`${this.backendUrl}/skill`)
        //   .then((response) => {
        //     this.skills = response.data.data;
        //     console.log(this.skills);
        //   })
        //   .catch((e) => {
        //     this.$Progress.fail();
        //   });
      },
  
      onImageChange(e){
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (file) => {
          this.imagePreview = reader.result;
          this.form.image = reader.result;
        }
        reader.readAsDataURL(file);
      },
  
      store() {
        this.$Progress.start();
        this.form.busy = true;
        this.form.post(`${this.backendUrl}/alumni/register`, {
          params: {
            valueFrom: this.valueFrom,
          },
        })
          .then((response) => {
            if (this.form.successful) {
              this.$Progress.finish();
              this.$notify({ type: "success", title: "Success", text: response.data.message });
              this.form.reset()
              $('#file').val('')
              this.imagePreview = ''
              this.professional_interest_ids = ""
            } else {
              this.$Progress.fail();
              this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
            }
          })
          .catch((e) => {
            this.$Progress.fail();
            console.log(e);
          });
      },
    },
  };
  </script>
  
  <style>
  
  </style>
  