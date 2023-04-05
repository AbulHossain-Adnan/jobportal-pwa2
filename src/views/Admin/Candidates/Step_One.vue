<template lang="">
    <div>
        <div class="card mb-3">
           
            <div class="card-body">
            <div class="row">
                   
                    <!-- Tab panes -->
                    <div class="tab-content  text-muted">
                        <div class="tab-pane active" id="personal1" role="tabpanel">
                            <div class="mt-4">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Personal Details
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="text-muted">
                                                    <div v-if="2+2 == 4">
                                                    <form
                                                    @submit.prevent="resumeStore()"
                                                    @keydown="form.onKeydown($event)"
                                                    >
                                                     
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <label for="formrow-firstname-input" class="form-label">First Name *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.first_name"
                                                                name="first_name"
                                                                placeholder="e.g. Md Adnan">
                                                                <HasError :form="form" field="first_name" />
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <label for="formrow-firstname-input" class="form-label">Middle Name *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.middle_name"
                                                                name="middle_name"
                                                                placeholder="e.g. hossain">
                                                                <HasError :form="form" field="middle_name" />
                                                            </div>

                                                            <div class="col-lg-4">
                                                                <label for="formrow-firstname-input" class="form-label"> Last Name *</label>
                                                                <input type="text"  v-model="form.last_name" class="form-control" id="formrow-firstname-input"  placeholder="e.g. joy">
                                                                    <HasError :form="form" field="last_name" />
                                                            </div>
                                                        </div>

                                                        <!-- <div class="row">
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">Father Name *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.father_name"
                                                                name="father_name"
                                                                placeholder="Enter Your Father name">
                                                                <HasError :form="form" field="father_name" />
                                                            </div>

                                                            <div class="col-lg-6">
    
                                                                <label for="formrow-firstname-input" class="form-label"> Mother Name *</label>
                                                                <input type="integer"  v-model="form.mother_name" class="form-control" id="formrow-firstname-input"  placeholder="Enter Your Mother Name">
                                                                    <HasError :form="form" field="mother_name" />
                                                            </div>
                                                        </div> -->

                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Birth Date *</label>
                                                                <input type="date" class="form-control" id="formrow-firstname-input" v-model="form.birthdate" placeholder="Enter Your birthdate">
                                                                <HasError :form="form" field="birthdate" />
                                                                </div>
                                                            </div>

                                                            <div class="col-lg-6">
                                                                <div class="mb-3">
                                                                    <label for="formrow-inputState" class="form-label">Gender</label>
                                                                    <select id="formrow-inputState" v-model="form.gender" class="form-select">
                                                                    <option value="">Choose One</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                    <option value="Others">Both</option>
                                                                    </select>
                                                                    <HasError :form="form" field="gender" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                    <label for="formrow-inputState" class="form-label">Religion *</label>
                                                                    <select id="formrow-inputState" class="form-select" v-model="form.religion">
                                                                    <option value="">Choose...</option>
                                                                        <option value="Islam">Islam</option>
                                                                        <option value="Buddhism">Buddhism</option>
                                                                        <option value="Hinduism">Hinduism</option>
                                                                        <option value="Christianity">Christianity</option>
                                                                        <option value="jainism">jainism</option>
                                                                        <option value="Sikhism">Sikhism</option>
                                                                        <option value="Others">Others</option>
                                                                    </select>
                                                                <HasError :form="form" field="religion" />
                                                            </div>
                                                            <div class="col-lg-6">
                                                                    <label for="formrow-inputState" class="form-label">Marital Status</label>
                                                                    <select id="formrow-inputState" class="form-select" v-model="form.marital_status">
                                                                    <option value="" selected>Choose...</option>
                                                                        <option value="Married">Married</option>
                                                                        <option value="Unmarried">Unmarried</option>
                                                                        <option value="Single">Single</option>
                                                                        <option value="Others">Others</option>
                                                                    </select>
                                                                    <HasError :form="form" field="marital_status" />
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">Nationality *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.nationality"
                                                                name="nationality"
                                                                placeholder="e.g. Bangladesh">
                                                                <HasError :form="form" field="nationality" />
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label"> National Id *</label>
                                                                <input type="integer"  v-model="form.national_id" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 25455855258">
                                                                <HasError :form="form" field="national_id" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">Passport Number (optional)</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.passport_number"
                                                                name="passport_number"
                                                                placeholder="e.g. 255696855">
                                                                <HasError :form="form" field="passport_number" />
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">Passport Issue Date (optional)</label>
                                                                <input type="date" class="form-control" id="formrow-firstname-input" v-model="form.passport_issue_date" placeholder="Enter Your passport_issue_date">
                                                                <HasError :form="form" field="passport_issue_date" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label"> Personal Contact *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.personal_number"
                                                                name="personal_number"
                                                                placeholder="e.g. 01998100733">
                                                                <HasError :form="form" field="personal_number" />
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">Office Contact (optional)</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input" v-model="form.office_number" placeholder="Enter Your office_number">
                                                                <HasError :form="form" field="office_number" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                    <label for="formrow-email-input" class="form-label"> Email *</label>
                                                                    <input type="email" class="form-control" id="formrow-email-input"  v-model="form.email"
                                                                    placeholder="e.g. example@gmail.com">
                                                                <HasError :form="form" field="email" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="formrow-firstname-input" class="form-label">Blood Group *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"    v-model="form.blood_group" placeholder="e.g. A+,A-,B+,B-">
                                                                <HasError :form="form" field="blood_group" />
                                                            </div>
                                                        </div>
                                                         <div class="row">
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">LinkedIn profile link (optional)</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.father_name"
                                                                name="linkedin_profile"
                                                                placeholder="e.g. https://www.linkedin.com/in/abul-hossain-1a98b0231">
                                                                <HasError :form="form" field="linkedin_profile" />
                                                            </div>

                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label"> Facebook profile link (optional)</label>
                                                                <input type="text"  v-model="form.facebook_profile" class="form-control" id="formrow-firstname-input"  placeholder="e.g. https://www.facebook.com/in/abul-hossain-1a98b0231">
                                                                <HasError :form="form" field="facebook_profile" />
                                                            </div>
                                                        </div><br>
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">Profile Image</label>
                                                                <input type="file" name="resume_image" @change="onImageChangeMainLogo"   class="form-control" id="formrow-firstname-input">
                                                            </div>
                                                            <div class="col-md-2">
                                                            <div class="mb-3">
                                                            <img class="mt-1" :src="imagePreviewResumeImage" style="width: 100px;" alt="" />
                                                            </div>
                                                            <td class="m-auto">
                                                            <img style="width:100px; height:120px;" width="80" height="40" :src="resume_image" :alt="ddd">
                                                        </td>
                                                        </div>
                                                        </div>
                                                        <div>
                                                            <button v-if="storeMode == true" type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                            <button v-if="storeMode == false" type="button" @click="resumeUpdate()" class="btn btn-success btn-lg w-md ">Update</button>
                                                        </div>
                                                        <!-- <div v-if="storemode == false">
                                                            <button type="button" @click="update()" class="btn btn-success btn-lg w-md ">Update</button>
                                                            <button type="button" @click="destory(personaldetails.id)" class="btn btn-danger btn-lg w-md ml-3">Delete</button>
                                                        </div> -->
                                                    </form>  
                                                </div>
                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#presentAddress" aria-expanded="false" aria-controls="presentAddress">
                                        Address Details
                                        </button>
                                    </h2>
                                    
                        <div id="presentAddress" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body"> 
                        <div class="text-muted">
                <div>                                   
            </div>
                           
            <button v-if="addresses.length < 2" type="button" class="btn btn-success float-right" @click="addressCreate">Add new</button><br><br>
            <div class="row">
            <div class="table-rep-plugin">
              <div class="table-responsive mb-0" data-pattern="priority-columns">
                  <table id="tech-companies-1" class="table table-bordered align-middle nowrap ">
              <thead>
                <tr class="table-secondary">
                 
                  <th scope="col"> Division</th>
                  <th scope="col"> District</th>
                  <th scope="col"> Thana</th>
                  <th scope="col"> Area</th>
                  <th scope="col"> Type</th>
                  <th class="text-center">Actions</th>
                </tr>
              </thead>
  
              <tbody>
                    <tr v-for="item in addresses">
                    <th >{{ item.division.name  }}</th>
                    <th >{{ item.district.name  }}</th>
                    <th >{{ item.thana.name  }}</th>
                    <th >{{ item.area}}</th>
                    <th >{{ item.type}}</th>
                    <td class="">
                        <ul class="list-unstyled hstack gap-1 mb-0">                                       
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                           <button class="btn btn-soft-info"  @click="edit(item)"><i class="mdi mdi-pencil-outline"></i></button>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="delete">
                           <button class="btn btn btn-soft-danger"  @click="destroy(item.id)"><i class="mdi mdi-delete-outline"></i></button>
                        </li>
                    </ul>
                   </td>
                  </tr>
                  <tr v-show="!addresses.length">
                <td colspan="6">
                  <div
                    class="alert alert-danger text-danger text-center"
                    role="alert"
                  >
                    No user address available in table :(
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>            
     </div>
    </div>
</div>
</div>
                               
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Career and Application Information
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="text-muted">
                    <form @submit.prevent="careerApplicationStore()" @keydown="careerApplicationForm.onKeydown($event)">
                        <div class="row">
                            <div class="col-lg-12">
                            <label for="exampleFormControlTextarea1" class="form-label"><b>Brief Profile *</b></label>
                                <Editor  v-model="careerApplicationForm.brief_profile" name="brief_profile" api-key="d96q2ppkalbf7qegddzixp72gwn2ivlzvdnzxor2th9jnen2"
                                :init="{           
                                        height: 200,
                                        plugins: [
                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',

                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                                        }"
                                        />
                                    <HasError :form="careerApplicationForm" field="brief_profile" />
                            </div>
                         </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="formrow-firstname-input" class="form-label">Present Salary *</label>
                                <input type="integer" class="form-control" id="formrow-firstname-input"  v-model="careerApplicationForm.present_salary"
                                name="present_salary"
                                placeholder="e.g. 20000">
                                <HasError :form="careerApplicationForm" field="present_salary" />
                            </div>
                            <div class="col-lg-6">
                                <label for="formrow-firstname-input" class="form-label"> Expected Salary*</label>
                                <input type="integer"   v-model="careerApplicationForm.expected_salary" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 40000">
                                <HasError :form="careerApplicationForm" field="expected_salary" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio"  name="looking_for" v-model="careerApplicationForm.looking_for" id="inlineRadio1" value="Entry Level">
                                    <label class="form-check-label" for="inlineRadio1">Entry Level</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio"  name="looking_for" v-model="careerApplicationForm.looking_for" id="inlineRadio2" value="Mid Level">
                                    <label class="form-check-label" for="inlineRadio2">Mid Level</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio"  name="looking_for" v-model="careerApplicationForm.looking_for" id="inlineRadio3" value="Top Level">
                                    <label class="form-check-label" for="inlineRadio3"> Top Level</label>
                                </div>
                                <HasError :form="careerApplicationForm" field="looking_for" />
                            </div>
                            <div class="col-lg-6">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" v-model="careerApplicationForm.available_for" id="inlineRadio3" value="Full Time">
                                    <label class="form-check-label" for="inlineRadio1">Full Time</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" v-model="careerApplicationForm.available_for" id="inlineRadio4" value="Part Time">
                                    <label class="form-check-label" for="inlineRadio2">Part Time</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" v-model="careerApplicationForm.available_for" id="inlineRadio5" value="Contractual">
                                    <label class="form-check-label" for="inlineRadio3">Contractual</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" v-model="careerApplicationForm.available_for" id="inlineRadio6" value="Internship">
                                    <label class="form-check-label" for="inlineRadio3">Internship</label>
                                </div>
                                <div class="form-check form-check-inline">
                                <div class="mb-3">
                                    <input class="form-check-input" type="radio" v-model="careerApplicationForm.available_for"  id="inlineRadio7" value="Freelance">
                                    <label class="form-check-label" for="inlineRadio3">Freelance</label>
                                </div>
                                
                            </div>
                            <HasError :form="careerApplicationForm" field="available_for" />
                        </div>
                    </div>
                        <div class="mb-3">
                        </div>
                        <div>
                            <button v-if="careerApplicationStoreMode == true" type="submit" class="btn btn-success btn-lg w-md">Save</button>
                            <button v-if="careerApplicationStoreMode == false" type="button" @click="careerApplicationUpdate()" class="btn btn-success btn-lg w-md ">Update</button>
                        
                        </div>
                    </form>  
                </div>
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFore">
            <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFore" aria-expanded="false" aria-controls="headingFore">
        Prefferred Areas
            </button>
        </h2>

        <div id="collapseFore" class="accordion-collapse collapse" aria-labelledby="headingFore" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="text-muted">
                    <form
                    @submit.prevent="JobPrefferedAreaStore()"
                    @keydown="form.onKeydown($event)"
                    >
                    <div class="row">
                    <div class="col-lg-6 mt-4">
                    <label for="skill_ids" class="mb-0">Professional interest *</label>
                    <div class="form-group">
                    <Multiselect
                        v-model="prefferedAreasForm.job_category_ids"
                        mode="tags"
                        placeholder="Select Categories"
                        :close-on-select="false"
                        :create-option="false"
                        :options="dependentJobCategories"
                    />
                    <HasError :form="prefferedAreasForm" field="job_category_ids" />

                    </div>
                </div>
        
                    <div class="col-lg-6 mt-4">
                    <label for="skill_ids" class="mb-0">Personal interest *</label>
                    <div class="form-group">
                    <Multiselect
                        v-model="prefferedAreasForm.personal_interest"
                        mode="tags"
                        placeholder="Select Categories"
                        :close-on-select="false"
                        :create-option="false"
                        :options="personalInterests"
                    />
                    <HasError :form="prefferedAreasForm" field="job_category_ids" />

                    </div>
                </div>
            </div>

                    <div class="row">
                        <!-- <h2 class="mt-11">Job interested area</h2> -->
                        <div class="col-lg-6 mt-4">
                        <label for="formrow-inputState" class="form-label">Job Interested area</label>
                        <Multiselect
                        v-model="prefferedAreasForm.job_area_districts"
                        mode="tags"
                        placeholder="Select Categories"
                        :close-on-select="false"
                        :create-option="false"
                        :options="dependentDistricts"

                    />
                            <HasError :form="prefferedAreasForm" field="job_area_districts" />
                     </div>
                     
                        
                        <div class="col-lg-6 mt-4">
                            <label for="formrow-inputState" class="form-label">Organization Type (multiselect)</label>
                            <Multiselect
                                v-model="prefferedAreasForm.organization_types"
                                mode="tags"
                                placeholder="Select Categories"
                                :close-on-select="false"
                                :create-option="false"
                                :options="dependentCompanyTypes"
                                    />
                            <HasError :form="prefferedAreasForm" field="organization_types" />
                        </div>
                    </div>

                    <div class="mb-3">
                    </div>
                    <div>
                        <button v-if="jobPrefferdAreaStoreMode == true" type="submit" class="btn btn-success btn-lg w-md">Save</button>
                        <button v-if="jobPrefferdAreaStoreMode == false" type="button" @click="prefferdAreaUpdate()" class="btn btn-success btn-lg w-md ">Update</button>
                    </div>
                </form>  
            </div>
        </div>
    </div>
</div>

<div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="headingSix">
        Other Relavent Information
        </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="text-muted">
                    <form
                        @submit.prevent="resumeUpdate()" @keydown="form.onKeydown($event)">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Career Summary</label>
                                        <textarea v-model="form.career_summary" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        <HasError :form="form" field="career_summary" />
                                    </div>
                                </div>                                                                            
                            </div>
                                <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Special Qualfication</label>
                                        <textarea v-model="form.special_qualfication"  class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                                        <HasError :form="form" field="special_qualfication" />
                                    </div>
                                </div>                                                                            
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <label for="formrow-inputState" class="form-label">keyword *</label>
                                    <input type="text" class="form-control" id="formrow-email-input"  v-model="form.keyword">
                                    <HasError :form="form" field="keyword" />
                                </div>
                            </div>

                        <div class="mb-3">
                            </div>
                            <div>
                                <!-- <button  type="submit" class="btn btn-success btn-lg w-md">Save</button> -->
                                <button  type="button" @click="resumeUpdate()" class="btn btn-success btn-lg w-md ">Save</button>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="headingFive">
        Family Information
        </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="text-muted">
                    <form
                        @submit.prevent="resumeUpdate()" @keydown="form.onKeydown($event)">
                                <div class="row">
                                    <div class="col-lg-6">
                                 
                                        <label for="formrow-firstname-input" class="form-label">Father Name</label>

                                        <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.father_name"
                                        name="father_name"
                                        placeholder="Enter Your Father name">
                                        <HasError :form="form" field="father_name" />
                                    </div>

                                    <div class="col-lg-6">

                                        <label for="formrow-firstname-input" class="form-label">  Occupation</label>
                                        <input type="integer"  v-model="form.father_occupation" class="form-control" id="formrow-firstname-input"  placeholder="Enter Your father occupation">
                                            <HasError :form="form" field="father_occupation" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label for="formrow-firstname-input" class="form-label"> Designation </label>
                                        <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.father_designation"
                                        name="father_designation"
                                        placeholder="Enter Your father_designation">
                                        <HasError :form="form" field="father_designation" />
                                    </div>

                                    <div class="col-lg-6">

                                        <label for="formrow-firstname-input" class="form-label"> Organization</label>
                                        <input type="integer"  v-model="form.father_organization" class="form-control" id="formrow-firstname-input"  placeholder="Enter Your father_organization">
                                            <HasError :form="form" field="father_organization" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <label for="formrow-firstname-input" class="form-label">Mother Name</label>
                                        <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.mother_name"
                                        name="mother_name"
                                        placeholder="Enter Your mother name">
                                        <HasError :form="form" field="mother_name" />
                                    </div>

                                    <div class="col-lg-6">

                                        <label for="formrow-firstname-input" class="form-label">   Occupation</label>
                                        <input type="integer"  v-model="form.mother_occupation" class="form-control" id="formrow-firstname-input"  placeholder="Enter Your mother occupation">
                                            <HasError :form="form" field="mother_occupation" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label for="formrow-firstname-input" class="form-label"> Designation</label>
                                        <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.mother_designation"
                                        name="mother_designation"
                                        placeholder="Enter Your mother_designation">
                                        <HasError :form="form" field="mother_designation" />
                                    </div>

                                    <div class="col-lg-6">

                                        <label for="formrow-firstname-input" class="form-label">  Organization</label>
                                        <input type="integer"  v-model="form.mother_organization" class="form-control" id="formrow-firstname-input"  placeholder="Enter Your mother_organization">
                                            <HasError :form="form" field="mother_organization" />
                                    </div>
                                </div>
                               
                           

                        <div class="mb-3">
                            </div>
                            <div>
                                <!-- <button  type="submit" class="btn btn-success btn-lg w-md">Save</button> -->
                                <button  type="button" @click="resumeUpdate()" class="btn btn-success btn-lg w-md ">Save</button>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
</div>
</div>
</div>
            <div class="modal fade" id="addressModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="editMode? addressUpdate():addressStore()" @keydown="form.onKeydown($event)"> 
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <label for="formrow-firstname-input" class="form-label">Living Country *</label><br>
                                                <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="living_country" id="inlineRadio1" value="option1">
                                                <label class="form-check-label" for="inlineRadio1">Inside Bangladesh</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="living_country" id="outside_bangladesh" value="option2">
                                                <label class="form-check-label" for="inlineRadio2">Outside Bangladesh</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="mb-4">
                                                    <label for="formrow-firstname-input" class="form-label">Division*</label>
                                                    <select name="division_id" id="division_idd" @change="changeDivisionEvent($event)" class="form-select" v-model="addressForm.division_id">
                                                    <option value="" selected>Choose...</option>
                                                        <option v-for="item in divisions"   :value="item.id">{{item.name}}</option>
                                                    </select>
                                                    <HasError :form="addressForm" field="division_id" />
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label"> District *</label>
                                                <select name="district_id" id="formrow-inputState"  @change="changeDistrictEvent($event)"  class="form-select" v-model="addressForm.district_id">
                                                <option value="" selected>Choose...</option>
                                                <option v-for="item in districts" :value="item.id" :key="item.id">{{item.name}}</option>
                                                </select>
                                                <HasError :form="addressForm" field="district_id" />
                                            </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Thana *</label>
                                                <select name="thana_id" id="formrow-inputState" class="form-select" v-model="addressForm.thana_id">
                                                <option value="" selected>Choose...</option>
                                                    <option  v-for="item in thanas" :value="item.id" :key="item.id">{{item.name}}</option>
                                                </select>
                                                <HasError :form="addressForm" field="thana_id" />
                                            </div>
                                        </div>
                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label">  Area *</label>
                                                <input name="area" type="text" v-model="addressForm.area"   class="form-control" id="formrow-firstname-input"  placeholder="Type Your House/Road">
                                                <HasError :form="addressForm" field="area" />
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label">Address  Type *</label>
                                                <select name="type" id="formrow-inputState" class="form-select" v-model="addressForm.type">
                                                <option value="" selected>Choose...</option>
                                                    <option value="present">present</option>
                                                    <option value="permanent">permanent</option>
                                                </select>
                                                <HasError :form="addressForm" field="type" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">
                            {{editMode?"Update":"Save"}}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     </div>  
        <vue-progress-bar></vue-progress-bar>
         <notifications />
</div>
</template>
<script>

import PaginationComponent from "../../../components/PaginationComponent.vue";
import { ElNotification } from "element-plus";
import Multiselect from "@vueform/multiselect";
import Editor from '@tinymce/tinymce-vue'
import "@vueform/multiselect/themes/default.css";

import axios from "axios";
import Form from "vform";


 
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
    Multiselect,
    PaginationComponent,
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
    Editor
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      //   backendUrl: "http://127.0.0.1:8000/",

      editMode:false,
      imagePreviewResumeImage:"",
      resumes:[],
      personaldetails: [],
      divisions:[],
      districts:[],
      thanas:[],
      addresses:[],
      dependentJobCategories:[],
      dependentDistricts:[],
      dependentCompanyTypes:[],
      storeMode:true,
      careerApplicationStoreMode:true,
      addressStoreMode:true,
      jobPrefferdAreaStoreMode:true,
      render_image:"",
      personalInterests: ['Painting','Architecture','Music','Drama and theater','Photography','Editing'],
      personalInterestss:[],
      resume_id:localStorage.getItem('resume_id'),
      jobportaluser_id: localStorage.getItem('auth_id'),


    //   for resume personal data form 
      form: new Form({
        id: "",
        jobportaluser_id: localStorage.getItem('auth_id'),
        first_name: "",
        middle_name: "",
        last_name: "",
        birthdate: "",
        gender: "",
        religion: "",
        marital_status: "",
        nationality: "",
        passport_number: "",
        passport_issue_date: "",
        personal_number: "",
        office_number: "",
        email: "",
        blood_group: "",
        career_summary: "",
        special_qualfication: "",
        keyword: "",
        linkedin_profile: "",
        facebook_profile: "",
        father_name: "",
        father_occupation: "",
        father_designation: "",
        father_organization: "",
        mother_name: "",
        mother_occupation: "",
        mother_designation: "",
        mother_organization: "",
        resume_image: "",
      }),

    //   end 


    // address form created 
    addressForm: new Form({
        id: "",
        user_id: localStorage.getItem('auth_id'),
        resume_id: localStorage.getItem('resume_id'),
        division_id: "",
        district_id: "",
        thana_id: "",
        area: "",
        type: "",
      }),
   // end 

//    var outside_bangladesh =

   livingCountry() {
    let livingData = $('#outside_bangladesh').val();
   console.log(livingData);
   console.log('living a ashse');

   },

     //addMoreEmploymentHistory 
     addMoreEmploymentHistory() {
        this.employment.EmploymentHistory.push({
        id: "",
        resume_id:"",
        company_name: "",
        company_business: "",
        designation: "",
        department: "",
        start_date: "",
        todate: "",
        responsibilities: "",
        job_location: "",
        skill_ids:[],
        });
    },
   // remove multiple row addresses


  // address cresate and edit modal open    
  addressCreate() {
      this.editMode = false;
      this.addressForm.reset();
      this.addressForm.clear();
      $("#addressModal").modal("show");
    },

    edit(item) {
      this.editMode = true;
      this.addressForm.reset();
      this.addressForm.clear();
      this.addressForm.fill(item);
      $("#addressModal").modal("show");
    },
    // end 

      
    // create application form 
      careerApplicationForm: new Form({
        id: "",
        resume_id: "",
        brief_profile: "",
        present_salary: "",
        expected_salary : "",
        available_for: "",
        looking_for: "",
      }),
    //   end 


    // create prefferenceAreaForm 
      prefferedAreasForm: new Form({
        id: "",
        resume_id: "",
        job_category_ids: [],
        job_area_districts: [],
        organization_types: [],
        personal_interest: [],

      }),
    //  end
    };
  },

  watch: {
    keyword: function () {
      this.livingCountry();
      this.getData();
      this.getUserAddresses();
      this.getDependentData();
      this.getCareerApplicationData();
      this.getJobPrefferdAreaData();
    },
  },

  mounted() {
    console.log("Component mounted.");
    this.livingCountry();
    this.getData();
    this.getUserAddresses();
    this.getDependentData();
    this.getCareerApplicationData();
    this.getJobPrefferdAreaData();
  },

  methods: {
    getData() {
      this.$Progress.start();
      let resumes =`${this.backendUrl}user/resume/`+this.jobportaluser_id;
      axios
        .get(resumes).then((response) => {

          if(response.data.first_name) {
                this.storeMode = false;
                this.form.fill(response.data);
                this.form.resume_image = this.render_image;
                if(response.data.resume_image) {
                    this.resume_image =  response.data.resume_image.source;
                }
                this.careerApplicationForm.resume_id =response.data.id;
                // this.prefferedAreasForm.resume_id =response.data.id;
            }
          this.$Progress.finish();
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    // end 

    // fetching division data
        let divisionUrl =`${this.backendUrl}division`;
      axios
        .get(divisionUrl).then((response) => {
         this.divisions = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    // end 
    },

    // get user address data 
    getUserAddresses() {
        let addresses =`${this.backendUrl}user-address/`+this.jobportaluser_id;
        axios
        .get(addresses).then((response) => {
            this.addresses = response.data;
        })
        .catch((e) => {
        console.log(e);
        this.$Progress.fail();
        });
    },

    // getting data for job preffred areas dropdown
     getDependentData() {
        axios.get(`${this.backendUrl}job-category`)
        .then((response) => {
          let data =  response.data.data.map((item) => {
            return { value: item.id, label: item.title }
          })
          this.dependentJobCategories = data;
        })
        .catch((e) => {
            this.$Progress.fail();
        });

        axios.get(`${this.backendUrl}district`)
        .then((response) => {
          let data =  response.data.data.map((item) => {
            return { value: item.id, label: item.name }
          })
          this.dependentDistricts = data;
        })
        .catch((e) => {
            this.$Progress.fail();
        });

        axios.get(`${this.backendUrl}organization-type`)
        .then((response) => {

          let data =  response.data.map((item) => {
            return { value: item.id, label: item.title }
          })
          this.dependentCompanyTypes = data;
        })
        .catch((e) => {
            this.$Progress.fail();
        });
    },
    // end

    // fetch jobPrefferedAreas Data 
    getJobPrefferdAreaData() {
        axios.get(`${this.backendUrl}user/job-preffered-areas/`+this.resume_id)
        .then((response) => {
            console.log(response.data);
            console.log('job preeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
            if(response.data.resume_id) {
                console.log('job preeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
                this.jobPrefferdAreaStoreMode = false;
                this.prefferedAreasForm.fill(response.data);
            }
        })
        .catch((e) => {
            this.$Progress.fail();
        });
    },
    // end 
    
    // fetching career and Application data
    getCareerApplicationData() {
        
        let career_applications =`${this.backendUrl}user/career-applications/`+this.resume_id;
        axios
        .get(career_applications).then((response) => {
            if(response.data.resume_id) {
            this.careerApplicationForm.fill(response.data);
            this.careerApplicationStoreMode = false;
            }
        })
        .catch((e) => {
        console.log(e);
        });
    },
     // end 

    // Store Resume PersonalDetails
    resumeStore() {
      
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}resumes`)
        .then((response) => {
          if (this.form.successful) {
           
            this.getData();
                this.storeMode = false;
                ElNotification({
                    title: "Success",
                    message: "Data Stored SuccessFully",
                    type: "success",
                });
                this.$Progress.finish();
          } else {
                this.$Progress.fail();
                ElNotification({
                    title: "Error",
                    message: "Data Not Stored",
                    type: "error",
                });
            }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
    // End Resume PersonalDetails Store

    onImageChangeMainLogo(e){
                let file = e.target.files[0];
                let reader = new FileReader();

                reader.onloadend = (file) => {
                    this.imagePreviewResumeImage = reader.result;
                    this.form.resume_image = reader.result;
                    this.render_image = reader.result;
                }
                reader.readAsDataURL(file);
            },

    // Start Resume PersonalDetails Update
    resumeUpdate() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .put(`${this.backendUrl}resumes/` + this.form.id).then((response) => {
          this.getData();
          if (this.form.successful) {
                this.$Progress.finish();
                    ElNotification({
                        title: "Success",
                        message: "Data Updated Successfully",
                        type: "success",
                    });
            } else {
                    this.$Progress.fail();
                    ElNotification({
                        title: "Error",
                        message: "Data Not Updated",
                        type: "error",
                    });
                }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
    // End resume Update

    // Store Address data
     addressStore() {
        this.$Progress.start();
        this.addressForm.busy = true;
        this.addressForm
        .post(`${this.backendUrl}address`)
        .then((response) => {
          if (this.addressForm.successful) {
            this.addressForm.reset();
             this.addressForm.clear();
            $("#addressModal").modal('hide');
            this.getUserAddresses();
            this.$Progress.finish();
              ElNotification({
                  title: "Success",
                  message: "Data Stored SuccessFully",
                  type: "success",
                });
               
          } else {
                this.$Progress.fail();
                ElNotification({
                    title: "Error",
                    message: "Data Not Stored",
                    type: "error",
                });
            }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
    // End Address Store

// address update 
    addressUpdate() {
      this.$Progress.start();
      this.addressForm.busy = true;
      this.addressForm
        .put(`${this.backendUrl}address/` + this.addressForm.id).then((response) => {
          if (this.addressForm.successful) {
            this.addressForm.reset();
            this.addressForm.clear();
            $("#addressModal").modal('hide');
            this.getUserAddresses();
                this.$Progress.finish();
                ElNotification({
                    title: "Success",
                    message: "Data Updated Successfully",
                    type: "success",
                });
            } else {
                    this.$Progress.fail();
                    ElNotification({
                        title: "Error",
                        message: "Data Not Updated",
                        type: "error",
                    });
                }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },

         destroy(id){
                // this.$swal
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete(`${this.backendUrl}address/`+id, )
                        .then(response => {
                            this.getUserAddresses();
                            this.$swal.fire(
                                'Deleted!',
                                response.data.message,
                                'success'
                            )
                            // this.getUserAddresses();
                        });
                    }
                })
            },

        // for fetching district data 
        changeDivisionEvent($event){
        let fetchDistrictsUrl = `${this.backendUrl}division/districts/`+$event.target.value;
        axios .get(fetchDistrictsUrl).then((response) => {
            this.districts = response.data;
            })
            .catch((e) => {
            console.log(e);
            });
        },

    // for fetching thanas data 
    changeDistrictEvent($event){
      let fetchThanasUrl = `${this.backendUrl}district/thanas/`+$event.target.value;
      axios.get(fetchThanasUrl).then((response) => {
          this.thanas = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // Store careerapplication data
     careerApplicationStore() {
        this.$Progress.start();
        this.careerApplicationForm.busy = true;
        this.careerApplicationForm
        .post(`${this.backendUrl}career-applications`)
        .then((response) => {
          if (this.careerApplicationForm.successful) {
            this.getCareerApplicationData();
            
              ElNotification({
                  title: "Success",
                  message: "Data Stored SuccessFully",
                  type: "success",
                });
                this.$Progress.finish();
          } else {
                this.$Progress.fail();
                ElNotification({
                    title: "Error",
                    message: "Data Not Stored",
                    type: "error",
                });
            }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
    // End Address Store

    // Start Resume Career And Application Update
    careerApplicationUpdate() {
      this.$Progress.start();
      this.careerApplicationForm.busy = true;
      this.careerApplicationForm
        .put(`${this.backendUrl}career-applications/` + this.careerApplicationForm.id).then((response) => {
          if (this.careerApplicationForm.successful) {
            this.getCareerApplicationData();
                this.$Progress.finish();
                    ElNotification({
                        title: "Success",
                        message: "Data Updated Successfully",
                        type: "success",
                    });
            } else {
                    this.$Progress.fail();
                    ElNotification({
                        title: "Error",
                        message: "Data Not Updated",
                        type: "error",
                    });
                }
        })
            .catch((e) => {
            this.$Progress.fail();
            console.log(e);
            });
    },
    // End Resume Career And Application Update

    // Store JobPreffered Areas
    JobPrefferedAreaStore() {
      this.$Progress.start();
      this.prefferedAreasForm.busy = true;
      this.prefferedAreasForm
        .post(`${this.backendUrl}job-preffered-areas`,{
                        params:{
                            resume_idd: localStorage.getItem('resume_id')
                        }
                    })
        .then((response) => {
            this.getJobPrefferdAreaData();
          if (this.prefferedAreasForm.successful) {
           

            console.log(response.data)
            console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb store')




             
             this.$Progress.finish();
                ElNotification({
                    title: "Success",
                    message: "Data Stored SuccessFully",
                    type: "success",
                });
          } else {
                this.$Progress.fail();
                ElNotification({
                    title: "Error",
                    message: "Data Not Stored",
                    type: "error",
                });
            }
        })
        .catch((e) => {
        this.$Progress.fail();
        console.log(e);
        });
    },
    // End JobPreffered Store

      // Update JobPreffered Areas
      prefferdAreaUpdate() {
      this.$Progress.start();
      this.prefferedAreasForm.busy = true;
      this.prefferedAreasForm
        .put(`${this.backendUrl}job-preffered-areas/`+this.prefferedAreasForm.id)
        .then((response) => {
        
          if (this.prefferedAreasForm.successful) {
            this.$Progress.finish();
                ElNotification({
                    title: "Success",
                    message: "Data Stored SuccessFully",
                    type: "success",
                });
          } else {
                this.$Progress.fail();
                ElNotification({
                    title: "Error",
                    message: "Data Not Stored",
                    type: "error",
                });
            }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },
    // End JobPreffered Area Update
  },
};
</script>