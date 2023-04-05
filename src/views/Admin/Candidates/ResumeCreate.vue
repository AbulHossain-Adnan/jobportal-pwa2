<template lang="">
    <div>
        <div class="card mb-3">
            <div class="card-header text-white bg-secondary">Header</div>
            <div class="card-body">
            <div class="row">
                    <h4 class="card-title">Home /  Edit Resume</h4><br>
                        <div class="shadow-none p-3  bg-light rounded">

                             <!-- Nav tabs -->
                        <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                            <li class="nav-item ">
                                <a class="nav-link active " data-bs-toggle="tab" href="#personal1" role="tab">
                                    <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                                    <span class="d-none d-sm-block"><b>Personal</b></span> 
                                </a>
                            </li>
                            <li class="nav-item">


                                <a class="nav-link" data-bs-toggle="tab" href="#education1" role="tab">
                                    <span class="d-block d-sm-none"><i class="far fa-user"></i></span>
                                    <span class="d-none d-sm-block">Education/Training</span> 
                                </a>



                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#messages1" role="tab">
                                    <span class="d-block d-sm-none"><i class="far fa-envelope"></i></span>
                                    <span class="d-none d-sm-block"><b>Employment</b></span>   
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#settings1" role="tab">
                                    <span class="d-block d-sm-none"><i class="fas fa-cog"></i></span>
                                    <span class="d-none d-sm-block"><b>Other Information</b></span>    
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#photograph1" role="tab">
                                    <span class="d-block d-sm-none"><i class="fas fa-cog"></i></span>
                                    <span class="d-none d-sm-block"><b>Photograph</b></span>    
                                </a>
                            </li>
                        </ul>
                    </div>
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
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">First Name *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.first_name"
                                                                name="first_name"
                                                                placeholder="e.g. Md Adnan">
                                                                <HasError :form="form" field="first_name" />
                                                            </div>

                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label"> Last Name *</label>
                                                                <input type="text"  v-model="form.last_name" class="form-control" id="formrow-firstname-input"  placeholder="e.g. Hossain">
                                                                    <HasError :form="form" field="last_name" />
                                                            </div>
                                                        </div>

                                                        <div class="row">
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
                                                        </div>

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
                                                                <label for="formrow-firstname-input" class="form-label">Passport Number *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.passport_number"
                                                                name="passport_number"
                                                                placeholder="e.g. 255696855">
                                                                <HasError :form="form" field="passport_number" />
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">Passport Issue Date *</label>
                                                                <input type="date" class="form-control" id="formrow-firstname-input" v-model="form.passport_issue_date" placeholder="Enter Your passport_issue_date">
                                                                <HasError :form="form" field="passport_issue_date" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label"> Primary Mobile (Provide at least one Phone Number) *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.primary_number"
                                                                name="primary_number"
                                                                placeholder="e.g. 01998100733">
                                                                <HasError :form="form" field="primary_number" />
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <label for="formrow-firstname-input" class="form-label">Emargency Number *</label>
                                                                <input type="text" class="form-control" id="formrow-firstname-input" v-model="form.emargency_number" placeholder="Enter Your emargency_number">
                                                                <HasError :form="form" field="emargency_number" />
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
                                         <form @submit.prevent="addressStore()" @keydown="form.onKeydown($event)">
                                               
                                                <div class="row" v-for="(row, index) in addressForm.addressDetails">
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                    <div class="col-lg-3">
                                                        <div class="mb-3">
                                                            <label for="formrow-firstname-input" class="form-label">Division*</label>
                                                            <select :name="'address['+index+'][division_id]'" id="formrow-inputState" @change="changeDivisionEvent($event)" class="form-select" v-model="row.division_id">
                                                            <option value="" selected>Choose...</option>
                                                                <option v-for="item in divisions"   :value="item.id">{{item.name}}</option>
                                                            </select>
                                                            <HasError :form="addressForm" field="division_id" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="mb-3">
                                                        <label for="formrow-firstname-input" class="form-label"> District *</label>
                                                        <select :name="'address['+index+'][district_id]'" id="formrow-inputState"  @change="changeDistrictEvent($event)"  class="form-select" v-model="row.district_id">
                                                        <option value="" selected>Choose...</option>
                                                            <option v-for="item in districts" :value="item.id" :key="item.id">{{item.name}}</option>
                                                        </select>
                                                        <HasError :form="addressForm" field="district_id" />
                                                    </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="mb-3">
                                                        <label for="formrow-firstname-input" class="form-label">Thana *</label>
                                                        <select :name="'address['+index+'][thana_id]'" id="formrow-inputState" class="form-select" v-model="row.thana_id">
                                                        <option value="" selected>Choose...</option>
                                                            <option  v-for="item in thanas" :value="item.id" :key="item.id">{{item.name}}</option>
                                                        </select>
                                                        <HasError :form="addressForm" field="thana_id" />
                                                    </div>
                                                </div>
                                                    <div class="col-lg-5">
                                                        <label for="formrow-firstname-input" class="form-label">  Area *</label>
                                                        <input :name="'address['+index+'][area]'" type="text" v-model="row.area"   class="form-control" id="formrow-firstname-input"  placeholder="Type Your House/Road">
                                                        <HasError :form="addressForm" field="area" />
                                                    </div>
                                                    <div class="col-lg-5">
                                                        <label for="formrow-firstname-input" class="form-label">Address  Type *</label>
                                                        <select :name="'address['+index+'][type]'" id="formrow-inputState" class="form-select" v-model="row.type">
                                                        <option value="" selected>Choose...</option>
                                                            <option value="present">present</option>
                                                            <option value="permanent">permanent</option>
                                                        </select>
                                                        <HasError :form="addressForm" field="type" />
                                                    </div>
                                                    <div class="col-lg-2" v-if="index!=0">
                                                    <button type="button" class="btn btn-outline-danger"  @click.prevent="removeAddress(index)">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-success float-right"  @click.prevent="addMoreAddresses">+Add</button>
                                    <div>
                                        <button v-if="addressStoreMode== true" type="submit" class="btn btn-info btn-lg w-md">Save</button>
                                        <button v-if="addressStoreMode == false" type="submit" @click="addressUpdate(localStorage.getItem('auth_id'))" class="btn btn-info btn-lg w-md">Update</button>

                                        <!-- <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button> -->
                                    </div>
                                </form>  
                                
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
                                <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <label for="formrow-firstname-input" class="form-label">Objective *</label>
                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.job_code"
                                            name="job_code"
                                            placeholder="e.g. job code">
                                            <HasError :form="form" field="job_code" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label">Present Salary *</label>
                                            <input type="integer" class="form-control" id="formrow-firstname-input"  v-model="form.present_salary"
                                            name="present_salary"
                                            placeholder="e.g. 20000">
                                            <HasError :form="form" field="present_salary" />
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label"> Expected Salary*</label>
                                            <input type="integer"  v-model="form.expected_salary" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 40000">
                                            <HasError :form="form" field="expected_salary" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="job_level" id="inlineRadio1" value="entry_level">
                                                <label class="form-check-label" for="inlineRadio1">Entry Level</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="job_level" id="inlineRadio2" value="mid_level ">
                                                <label class="form-check-label" for="inlineRadio2">Mid Level</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="job_level" id="inlineRadio3" value="top_level ">
                                                <label class="form-check-label" for="inlineRadio3"> Top Level</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="job_nature" id="inlineRadio3" value="full_time">
                                                <label class="form-check-label" for="inlineRadio1">Full Time</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="job_nature" id="inlineRadio4" value="part_time">
                                                <label class="form-check-label" for="inlineRadio2">Part Time</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="job_nature" id="inlineRadio5" value="contractual">
                                                <label class="form-check-label" for="inlineRadio3">Contractual</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="job_nature" id="inlineRadio6" value="internship">
                                                <label class="form-check-label" for="inlineRadio3">Internship</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                            <div class="mb-3">
                                                <input class="form-check-input" type="radio" name="job_nature" id="inlineRadio7" value="freelance">
                                                <label class="form-check-label" for="inlineRadio3">Freelance</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div class="mb-3">
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                        <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
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
                                @submit.prevent="editMode ? update() : store()"
                                @keydown="form.onKeydown($event)"
                                >
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                        </div>
                                    </div>
                                    </div>
                                <div class="row">
                                    <h2>Job Location</h2>
                                    <div class="col-lg-6">
                                        <label for="formrow-inputState" class="form-label">District(multiselect)</label>
                                        <select id="formrow-inputState" class="form-select" v-model="form.employment_status">
                                        <option value="" selected>Choose...</option>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Contractual">Contractual</option>
                                            <option value="Internship">Internship</option>
                                            <option value="Freelance">Freelance</option>
                                        </select>
                                        <HasError :form="form" field="employment_status" />
                                    </div>

                                    <div class="col-lg-6">
                                        <label for="formrow-inputState" class="form-label">Organization Type(multiselect)</label>
                                        <select id="formrow-inputState" class="form-select" v-model="form.job_level">
                                        <option value="" selected>Choose...</option>
                                            <option value="Entry">Entry</option>
                                            <option value="Mid">Mid</option>
                                            <option value="Top">Top</option>
                                        </select>
                                        <HasError :form="form" field="job_level" />
                                    </div>
                                </div>

                                <div class="mb-3">
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                    <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="headingFive">
                Other Relavent Information
                </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="text-muted">
                    <form
                        @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Career Summary</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>                                                                            
                            </div>
                                <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Special Qualfication</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>                                                                            
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <label for="formrow-inputState" class="form-label">keyword *</label>
                                    <input type="email" class="form-control" id="formrow-email-input"  v-model="form.resume_receiver_email">
                                    <HasError :form="form" field="employment_status" />
                                </div>
                            </div>

                        <div class="mb-3">
                            </div>
                            <div>
                                <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
    <div class="tab-pane" id="education1" role="tabpanel">
        <div class="row">      
            <div class="mt-4">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Academic and Summary
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="text-muted">
                                    <form
                                    @submit.prevent="editMode ? update() : store()"
                                    @keydown="form.onKeydown($event)"
                                    >
                                        <div class="row">
                                            <div class="col-lg-6">
                                                
                                                <label for="formrow-firstname-input" class="form-label">Level of Education  *</label>
                                                <select id="formrow-inputState" class="form-select" v-model="form.education_level">
                                                    <option value="" selected>Choose...</option>
                                                        <option value="Full Time">Full Time</option>
                                                        <option value="Part Time">Part Time</option>
                                                        <option value="Contractual">Contractual</option>
                                                        <option value="Internship">Internship</option>
                                                        <option value="Freelance">Freelance</option>
                                                    </select>
                                                <HasError :form="form" field="education_level" />
                                            </div>

                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label"> Exam/Degree Title *</label>
                                                <select id="formrow-inputState" class="form-select" v-model="form.education_level">
                                                    <option value="" selected>Choose...</option>
                                                        <option value="Full Time">Full Time</option>
                                                        <option value="Part Time">Part Time</option>
                                                        <option value="Contractual">Contractual</option>
                                                        <option value="Internship">Internship</option>
                                                        <option value="Freelance">Freelance</option>
                                                    </select>
                                                <HasError :form="form" field="education_level" />
                                            </div>

                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label"> Exam/Degree Title *</label>
                                                <input type="integer"  v-model="form.degree_title" class="form-control" id="formrow-firstname-input"  placeholder="e.g. degree title">
                                                    <HasError :form="form" field="degree_title" />
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6">
                                                <label for="" class="form-label">Concentration/ Major/Group </label>                                                                          
                                                    <input type="text" class="form-control"  v-model="form.major_minor">
                                                    <HasError :form="form" field="major_minor" />
                                            </div>

                                            <div class="col-lg-6">
                                                    <label for="formrow-inputState" class="form-label">Job Level</label>
                                                    <select id="formrow-inputState" class="form-select" v-model="form.job_level">
                                                    <option value="" selected>Choose...</option>
                                                        <option value="Entry">Entry</option>
                                                        <option value="Mid">Mid</option>
                                                        <option value="Top">Top</option>
                                                    </select>
                                                    <HasError :form="form" field="job_level" />
                                                <!-- </div> -->
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-12">
                                                <label for="" class="form-label">Institute Name  </label>                                                                          
                                                <input type="text" class="form-control"  v-model="form.major_minor"> 
                                                <HasError :form="form" field="major_minor" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label">Result *</label>
                                                <input type="text" class="form-control" id="formrow-firstname-input"   v-model="form.job_responsibilities"  placeholder="e.g. Responsibilities">
                                                <!-- </div> -->
                                            </div>

                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label"> CGPH *</label>
                                                <input type="integer" class="form-control" id="formrow-firstname-input"  v-model="form.festival_bonuses"   placeholder="e.g. 10000">
                                                <HasError :form="form" field="festival_bonuses" />
                                                <!-- </div> -->
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label">Scale *</label>
                                                <input type="text" class="form-control" id="formrow-firstname-input"   v-model="form.job_responsibilities"  placeholder="e.g. Responsibilities">
                                                <!-- </div> -->
                                            </div>

                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label"> Duration (Years  *</label>
                                                <input type="integer" class="form-control" id="formrow-firstname-input"  v-model="form.festival_bonuses"   placeholder="e.g. 10000">
                                                <HasError :form="form" field="festival_bonuses" />
                                                <!-- </div> -->
                                            </div>

                                            
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label">passing year *</label>
                                                <input type="text" class="form-control" id="formrow-firstname-input"   v-model="form.job_responsibilities"  placeholder="e.g. Responsibilities">
                                                <!-- </div> -->
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="formrow-firstname-input" class="form-label">Achievement  *</label>
                                                <input type="text" class="form-control" id="formrow-firstname-input"   v-model="form.job_responsibilities"  placeholder="e.g. Responsibilities">
                                                <!-- </div> -->
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                        </div>
                                        <div>
                                            <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                            <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
                                        </div>
                                    </form>  
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Training Summary
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="text-muted">

                                <form
                                @submit.prevent="editMode ? update() : store()"
                                @keydown="form.onKeydown($event)"
                                >
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label">Training Title  *</label>
                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.training_title "
                                            name="training_title"
                                            placeholder="e.g. training title">
                                            <HasError :form="form" field="training_title" />
                                        </div>

                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label"> Country *</label>
                                            <input type="text"  v-model="form.country" class="form-control" id="formrow-firstname-input"  placeholder="e.g. country">
                                            <HasError :form="form" field="country" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label">Topics Covered  *</label>
                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.topic_covered "
                                            name="topic_covered"
                                            placeholder="e.g. topic covered">
                                            <HasError :form="form" field="topic_covered" />
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label"> Training Year *</label>
                                            <input type="text"  v-model="form.country" class="form-control" id="formrow-firstname-input"  placeholder="e.g. training">
                                            <HasError :form="form" field="training_year" />
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label">Institute   *</label>
                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.institute  "
                                            name="institute"
                                            placeholder="e.g. institute">
                                            <HasError :form="form" field="institute" />
                                        </div>

                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label"> Duration   *</label>
                                            <input type="text"  v-model="form.country" class="form-control" id="formrow-firstname-input"  placeholder="e.g. duration">
                                            <HasError :form="form" field="duration" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <label for="formrow-firstname-input" class="form-label">Location   *</label>
                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.location  "
                                            name="location"
                                            placeholder="e.g. location">
                                            <HasError :form="form" field="location" />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                        <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
                                    </div>
                                </form>  
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Professional Certification
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="text-muted">
                                <form
                                @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label">Certification *</label>
                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.certification"
                                            name="certification "
                                            placeholder="e.g. certification">
                                            <HasError :form="form" field="certification" />
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label"> Institute *</label>
                                            <input type="text"  v-model="form.institute" class="form-control" id="formrow-firstname-input"  placeholder="e.g. Institute ">
                                                <HasError :form="form" field="institute" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label">Location *</label>
                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.location"
                                            name="location "
                                            placeholder="e.g. location">
                                            <HasError :form="form" field="location" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label">start_date *</label>
                                            <input type="date" class="form-control" id="formrow-firstname-input"  v-model="form.location"
                                            name="start_date "
                                            placeholder="e.g. start_date">
                                            <HasError :form="form" field="start_date" />
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="formrow-firstname-input" class="form-label"> end_date  *</label>
                                            <input type="date"  v-model="form.end_date" class="form-control" id="formrow-firstname-input"  placeholder="e.g. end_date ">
                                            <HasError :form="form" field="end_date" />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                        <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
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
                    <div class="tab-pane" id="messages1" role="tabpanel">
                        <div class="col-xl-12">
                                <div class="mt-4">
                                    <div class="accordion" id="accordionExample">
                                         <div class="accordion-item">
                                             <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Employment History
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <div class="text-muted">
                                                            <form
                                                            @submit.prevent="editMode ? update() : store()"  @keydown="form.onKeydown($event)">
                                                                <div class="row">
                                                                    <div class="col-lg-6">
                                                                        <label for="formrow-firstname-input" class="form-label">Company Name *</label>
                                                                        <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.company_name"
                                                                        name="company_name"
                                                                        placeholder="e.g. company_name">
                                                                        <HasError :form="form" field="company_name" />
                                                                    </div>
                                                                    <div class="col-lg-6">
                                                                        <label for="formrow-firstname-input" class="form-label"> Company Business *</label>
                                                                        <input type="text"  v-model="form.company_business" class="form-control" id="formrow-firstname-input"  placeholder="e.g. company_business">
                                                                        <HasError :form="form" field="company_business" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-6">
                                                                        <label for="formrow-firstname-input" class="form-label">Designation *</label>
                                                                        <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.designation"
                                                                        name="designation"
                                                                        placeholder="e.g. designation">
                                                                        <HasError :form="form" field="designation" />
                                                                    </div>
                                                                    <div class="col-lg-6">
                                                                        <label for="formrow-firstname-input" class="form-label"> Department  *</label>
                                                                        <input type="text"  v-model="form.department" class="form-control" id="formrow-firstname-input"  placeholder="e.g. company_business">
                                                                        <HasError :form="form" field="department" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-6">
                                                                        <label for="formrow-firstname-input" class="form-label">Employment Period *</label>
                                                                        <input type="date" class="form-control" id="formrow-firstname-input"  v-model="form.employment_period"
                                                                        name="employment_period"
                                                                        placeholder="e.g. employment_period">
                                                                        <HasError :form="form" field="employment_period" />
                                                                    </div>

                                                                    <div class="col-lg-6">
                                                                        <label for="formrow-firstname-input" class="form-label"> Todate  *</label>
                                                                        <input type="date"   class="form-control" id="formrow-firstname-input"  placeholder="e.g. company_business" >
                                                                    </div>
                                                                </div>

                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                                                        <label class="form-check-label" for="flexCheckChecked">
                                                                            Currently Working
                                                                        </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <div class="mb-4">
                                                                            <label for="exampleFormControlTextarea1" class="form-label">Responsibilities</label>
                                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-5">
                                                                        <label for="formrow-firstname-input" class="form-label">Area of Expertice (max 3) *</label>
                                                                        <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.expertice_area"
                                                                        name="expertice_area"
                                                                        placeholder="e.g. expertice_area">
                                                                        <HasError :form="form" field="expertice_area" />
                                                                    </div>
                                                                    <div class="col-lg-4">
                                                                        <label for="formrow-firstname-input" class="form-label"> Duration  *</label>
                                                                        <input type="integer"  v-model="form.duration" class="form-control" id="formrow-firstname-input"  placeholder="e.g. duration">
                                                                        <HasError :form="form" field="duration" />
                                                                    </div>
                                                                    <div class="col-lg-1">
                                                                        <div class="mb-3">
                                                                            <button type="button" class="btn btn-danger btn-sm form-control mt-4" disabled>remove</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="mb-5">
                                                                    <button type="button" class="btn btn-outline-success"> +Add new</button>
                                                                        </div>
                                                                    </div>
                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <label for="formrow-firstname-input" class="form-label">Job Location *</label>
                                                                        <input type="text" class="form-control" id="formrow-firstname-input"   v-model="form.job_location"  placeholder="e.g. location">
                                                                    </div>
                                                                </div>

                                                                <div class="mb-3">
                                                                    
                                                                </div>
                                                                <div>
                                                                    <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                                    <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>

                                                                </div>
                                                            </form>  
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end accordion -->
                                    </div>
                                </div>
                                </div>
                                <div class="tab-pane" id="settings1" role="tabpanel">
                                    <div class="col-xl-12">
                                                <div class="mt-4">
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="headingOne">
                                                                <button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                               Specialization
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                <div class="accordion-body">
                                                                    <div class="text-muted">
                                                                        <form
                                                                        @submit.prevent="editMode ? update() : store()"
                                                                        @keydown="form.onKeydown($event)"
                                                                        >

                                                                            <div class="row">
                                                                                <h2>Skill - 1</h2>
                                                                                <div class="col-lg-12">
                                                                                    <!-- <div class="mb-1"> -->
                                                                                    <label for="formrow-firstname-input" class="form-label">Skill *</label>
                                                                                    <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.skill"
                                                                                    name="skill"
                                                                                    placeholder="e.g. skill">
                                                                                    <HasError :form="form" field="skill" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                              
                                                                                <div class="col-lg-12">
                                                                                    <div class="mb-3">
                                                                                        <label for="formrow-firstname-input" class="form-label">How did you learn the skill? *</label><br>
                                                                                        <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="self">
                                                                                            <label class="form-check-label" for="inlineCheckbox1">Self</label>
                                                                                        </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="job">
                                                                                            <label class="form-check-label" for="inlineCheckbox2">Job</label>
                                                                                        </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="educational">
                                                                                            <label class="form-check-label" for="inlineCheckbox3">Educational</label>
                                                                                        </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="professional_training">
                                                                                            <label class="form-check-label" for="inlineCheckbox3">Professional Training</label>
                                                                                        </div>

                                                                                        <div class="form-check form-check-inline">
                                                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="ntvqf">
                                                                                            <label class="form-check-label" for="inlineCheckbox3">NTVQF </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                                                <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
                                                                            </div>
                                                                        </form>  
                                                                        <div class="mt-3">
                                                                        <button type="button" class="btn btn-outline-success">+Add  skill</button>
                                                                        </div>
                                                                        <div class="mt-3">

                                                                        <button type="button" class="btn btn-outline-success">+Add  Description</button>
                                                                        </div>
                                                                        <div class="mt-3">

                                                                        <button type="button" class="btn btn-outline-success">+Add  Extracurricular Activities</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Language Proficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div class="text-muted">
                                                                <form
                                                                @submit.prevent="editMode ? update() : store()"
                                                                @keydown="form.onKeydown($event)"
                                                                >
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label">Language *</label>
                                                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.language"
                                                                            name="language"
                                                                            placeholder="e.g. language">
                                                                            <HasError :form="form" field="language" />
                                                                        </div>

                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label"> Reading</label>
                                                                            <select id="formrow-inputState" class="form-select" v-model="form.reading">
                                                                                <option value="" selected>Choose...</option>
                                                                                <option value="Full Time">High</option>
                                                                                <option value="Part Time">Medium</option>
                                                                                <option value="Contractual">Low</option>
                                                                            </select>
                                                                            <HasError :form="form" field="reading" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label">Writing *</label>
                                                                            <select id="formrow-inputState" class="form-select" v-model="form.reading">
                                                                                <option value="" selected>Choose...</option>
                                                                                <option value="Full Time">High</option>
                                                                                <option value="Part Time">Medium</option>
                                                                                <option value="Contractual">Low</option>
                                                                            </select>
                                                                            <HasError :form="form" field="writing" />
                                                                        </div>

                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label"> Speaking</label>
                                                                            <select id="formrow-inputState" class="form-select" v-model="form.reading">
                                                                                <option value="" selected>Choose...</option>
                                                                                <option value="Full Time">High</option>
                                                                                <option value="Part Time">Medium</option>
                                                                                <option value="Contractual">Low</option>
                                                                            </select>
                                                                            <HasError :form="form" field="speaking" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="mb-3">
                                                                    </div>
                                                                    <div>
                                                                        <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                                        <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
                                                                    </div>
                                                                </form> 
                                                                <div class="mt-3"> 
                                                                <button type="button" class="btn btn-outline-success">+Add Language</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Referrences
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div class="text-muted">
                                                                
                                                                <form
                                                                @submit.prevent="editMode ? update() : store()"
                                                                @keydown="form.onKeydown($event)"
                                                                >
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label">Name *</label>
                                                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.job_code"
                                                                            name="name"
                                                                            placeholder="e.g. name">
                                                                            <HasError :form="form" field="name" />
                                                                        </div>

                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label"> Designation</label>
                                                                            <input type="text"  v-model="form.no_of_vacancies" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 2, 3, 4, 5">
                                                                            <HasError :form="form" field="designation" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label">Organization *</label>
                                                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.job_code"
                                                                            name="name"
                                                                            placeholder="e.g. name">
                                                                            <HasError :form="form" field="name" />
                                                                        </div>

                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label"> Email *</label>
                                                                            <input type="text"  v-model="form.no_of_vacancies" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 2, 3, 4, 5">
                                                                            <HasError :form="form" field="designation" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label">Relation *</label>
                                                                            <input type="text" class="form-control" id="formrow-firstname-input"  v-model="form.job_code"
                                                                            name="name"
                                                                            placeholder="e.g. name">
                                                                            <HasError :form="form" field="name" />
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <label for="formrow-firstname-input" class="form-label"> Mobile *</label>
                                                                            <input type="text"  v-model="form.no_of_vacancies" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 2, 3, 4, 5">
                                                                                <HasError :form="form" field="designation" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <label for="formrow-inputState" class="form-label">Address </label>
                                                                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                        <HasError :form="form" field="employment_status" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="mb-3">
                                                                    </div>
                                                                    <div>
                                                                        <button type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                                        <button type="submit" class="btn btn-secondary btn-lg w-md ml-3">close</button>
                                                                    </div>
                                                                </form>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end accordion -->
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="photograph1" role="tabpanel">
                                    <div class="col-xl-12">
                                        <div class="mt-4">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        File Upload
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div class="text-muted">
                                                                <form action="#" class="dropzone">
                                                            <div class="fallback">
                                                                <input name="file" type="file">
                                                            </div>
                                                            <div class="dz-message needsclick">
                                                                <div class="mb-3">
                                                                    <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                                                                </div>
                                                                
                                                                <h4>Drop files here or click to upload.</h4>
                                                            </div>
                                                        </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>
                                            <!-- end accordion -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!-- </div>
                    </div>
                </div> -->
            <!-- </div> -->
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

      personaldetails: [],
      divisions:[],
      districts:[],
      thanas:[],
      addresses:[],
      storeMode:true,
      addressStoreMode:true,

      jobposts: [],

      form: new Form({
        id: "",
        job_portal_users: "",
        first_name: "",
        last_name: "",
        father_name: "",
        mother_name: "",
        birthdate: "",
        gender: "",
        religion: "",
        marital_status: "",
        nationality: "",
        passport_number: "",
        passport_issue_date: "",
        primary_number: "",
        emargency_number: "",
        email: "",
        blood_group: ""
      }),
      addressForm: new Form({
        addressDetails:
        [{
        id: "",
        job_portal_user_id: localStorage.getItem('auth_id'),
        division_id: "",
        district_id: "",
        thana_id: "",
        area: "",
        type: "",

    }]
      }),
    };
  },

  watch: {
    keyword: function () {
      this.getData();
    },
  },

  mounted() {
    console.log("Component mounted.");
    this.getData();
  },

  methods: {
    getData() {

    // fetching personal details from resumes table
      this.$Progress.start();
      let resumes =`${this.backendUrl}resumes`;
      axios
        .get(resumes).then((response) => {
          if(response.data.first_name) {
                this.form.fill(response.data);
                this.storeMode = false;
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

           // fetching address data
           let auth_id = localStorage.getItem('auth_id');
           let addresses =`${this.backendUrl}user-address/`+auth_id;
      axios
        .get(addresses).then((response) => {
            if(response.data.length > 0) {
                this.addressForm.addressDetails = response.data;
            }
            if(response.data.length > 1) {
                this.addressStoreMode = false;
            }
         console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
          this.$Progress.fail();
        });
    },

   

    // Store PersonalDetails
    resumeStore() {
      this.$Progress.start();
      this.form.busy = true;
      this.form
        .post(`${this.backendUrl}resumes`)
        .then((response) => {
          if (this.form.successful) {
                this.storeMode = false;
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
    // End PersonalDetails Store\


       // Start resume Update
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
            console.log(response.data);
            console.log('address respn');

          if (this.addressForm.successful) {
          
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


    // update addresses 

    addMoreAddresses() {
        this.addressForm.addressDetails.push({
            id: "",
            job_portal_user_id: localStorage.getItem('auth_id'),
            division_id: "",
            district_id: "",
            thana_id: "",
            area: "",
            type: "",
        });
    },

    // remove multiple row addresses 
    removeAddress(index) {
        this.addressForm.addressDetails.splice(index,1);
    },
    // end

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
  },
};
</script>