<template>
    <div>
        <div class="card mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="tab-content  text-muted">
                        <div class="tab-pane active" id="personal1" role="tabpanel">
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
                                                    <form @submit.prevent="storeMode == false ? eduUpdate() : eduStore()">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="card">
                                                                    <div class="card-header bg-success text-center text-white ">JSC OR EQUIVALENT LEVEL</div>
                                                                    <div class="card-body">
                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">EXAMINATION</label>
                                                                            <div class="col-sm-8">
                                                                                <select class="form-control text-uppercase form-control" name="jsc_examination" v-model="eduForm.jsc_examination" style="width: 100%">
                                                                                    <option value="" selected>SELECT EXAM</option>
                                                                                    <option value="J.S.C">J.S.C</option>
                                                                                    <option value="J.D.C">J.D.C</option>
                                                                                    <option value="J.S.C Vocational">J.S.C VOCATIONAL</option>
                                                                                    <option value="J.S.C Equivalent">J.S.C EQUIVALENT</option>
                                                                                    <option value="Class 8 Passed">CLASS 8 PASSED</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="jsc_examination" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">BOARD</label>
                                                                            <div class="col-sm-8">
                                                                                <select class="form-control text-uppercase form-control" name="jsc_board" v-model="eduForm.jsc_board" style="width: 100%">
                                                                                    <option value="" selected>SELECT BOARD</option>
                                                                                    <option value="Dhaka">DHAKA</option>
                                                                                    <option value="Cumilla">CUMILLA</option>
                                                                                    <option value="Rajshahi">RAJSHAHI</option>
                                                                                    <option value="Jashore">JASHORE</option>
                                                                                    <option value="Chittagong">CHITTAGONG</option>
                                                                                    <option value="Barishal">BARISHAL</option>
                                                                                    <option value="Sylhet">SYLHET</option>
                                                                                    <option value="Dinajpur">DINAJPUR</option>
                                                                                    <option value="Madrasah">MADRASAH</option>
                                                                                    <option value="Mymensingh">MYMENSINGH</option>
                                                                                    <option value="Cambridge International - IGCE">Cambridge International - IGCE</option>
                                                                                    <option value="Edexcel International">Edexcel International</option>
                                                                                    <option value="Bangladesh Technical Education Board (BTEB)">Bangladesh Technical Education Board (BTEB)</option>
                                                                                    <option value="Others">Others</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="jsc_board" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">Board Roll</label>
                                                                            <div class="col-sm-8">
                                                                                <input class="form-control form-control" type="text" name="jsc_roll" v-model="eduForm.jsc_roll">
                                                                                <HasError :form="eduForm" field="jsc_roll" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">RESULT</label>
                                                                            <div class="col-sm-4">
                                                                                <select class="form-control text-uppercase form-control" @change="getResult" name="jsc_result" v-model="eduForm.jsc_result" style="width: 100%">
                                                                                    <option value="" selected>SELECT RESULT</option>
                                                                                    <option value="Pass">Pass</option>
                                                                                    <option value="4">GPA(OUT OF 4)</option>
                                                                                    <option value="5">GPA(OUT OF 5)</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="jsc_result" />
                                                                            </div>
                                                                            <div class="col-sm-4">
                                                                                <div class="input-group">
                                                                                    <input type="number" step=0.01 class="form-control" name="jsc_gpa" v-model="eduForm.jsc_gpa" aria-describedby="basic-addon2" :readonly="jsc_gpa_mode == false ? true : false">
                                                                                    <span class="input-group-text">GPA</span>
                                                                                    <HasError :form="eduForm" field="jsc_gpa" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">PASSING YEAR</label>
                                                                            <div class="col-sm-8">
                                                                                <Multiselect v-model="eduForm.jsc_passing_year" name="jsc_passing_year"
                                                                                             :searchable="true" :options="yearRange" placeholder="SELECT YEAR"/>

                                                                                <HasError :form="eduForm" field="jsc_passing_year" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">SCHOOL/COLLEGE</label>
                                                                            <div class="col-sm-8">
                                                                                <input class="form-control form-control" type="text" name="jsc_institute" v-model="eduForm.jsc_institute">
                                                                                <HasError :form="eduForm" field="jsc_institute" />
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="card">
                                                                    <div class="card-header bg-success text-center text-white ">SSC OR EQUIVALENT LEVEL</div>
                                                                    <div class="card-body">
                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">EXAMINATION</label>
                                                                            <div class="col-sm-8">
                                                                                <select class="form-control text-uppercase form-control" name="ssc_examination" v-model="eduForm.ssc_examination" style="width: 100%">
                                                                                    <option value="" selected>SELECT EXAM</option>
                                                                                    <option value="S.S.C">S.S.C</option>
                                                                                    <option value="Dakhil">Dakhil</option>
                                                                                    <option value="S.S.C Vocational">S.S.C Vocational</option>
                                                                                    <option value="O Level/Cambridge">O Level/Cambridge</option>
                                                                                    <option value="S.S.C Equivalent">S.S.C Equivalent</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="ssc_examination" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">BOARD</label>
                                                                            <div class="col-sm-8">
                                                                                <select class="form-control text-uppercase form-control" name="ssc_board" v-model="eduForm.ssc_board" style="width: 100%">
                                                                                    <option value="" selected>SELECT BOARD</option>
                                                                                    <option value="Dhaka">DHAKA</option>
                                                                                    <option value="Cumilla">CUMILLA</option>
                                                                                    <option value="Rajshahi">RAJSHAHI</option>
                                                                                    <option value="Jashore">JASHORE</option>
                                                                                    <option value="Chittagong">CHITTAGONG</option>
                                                                                    <option value="Barishal">BARISHAL</option>
                                                                                    <option value="Sylhet">SYLHET</option>
                                                                                    <option value="Dinajpur">DINAJPUR</option>
                                                                                    <option value="Madrasah">MADRASAH</option>
                                                                                    <option value="Mymensingh">MYMENSINGH</option>
                                                                                    <option value="Cambridge International - IGCE">Cambridge International - IGCE</option>
                                                                                    <option value="Edexcel International">Edexcel International</option>
                                                                                    <option value="Bangladesh Technical Education Board (BTEB)">Bangladesh Technical Education Board (BTEB)</option>
                                                                                    <option value="Others">Others</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="ssc_board" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">Board Roll</label>
                                                                            <div class="col-sm-8">
                                                                                <input class="form-control form-control" type="text" name="ssc_roll" v-model="eduForm.ssc_roll">
                                                                                <HasError :form="eduForm" field="ssc_roll" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">RESULT</label>
                                                                            <div class="col-sm-4">
                                                                                <select class="form-control text-uppercase form-control" @change="getResult" name="ssc_result" v-model="eduForm.ssc_result" style="width: 100%">
                                                                                    <option value="" selected>SELECT RESULT</option>
                                                                                    <option value="1ST DIVISION">1ST DIVISION</option>
                                                                                    <option value="2ND DIVISION">2ND DIVISION</option>
                                                                                    <option value="3RD DIVISION">3RD DIVISION</option>
                                                                                    <option value="4">GPA(OUT OF 4)</option>
                                                                                    <option value="5">GPA(OUT OF 5)</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="ssc_result" />
                                                                            </div>
                                                                            <div class="col-sm-4">
                                                                                <div class="input-group">
                                                                                    <input type="number" step=0.01 class="form-control" name="ssc_gpa" v-model="eduForm.ssc_gpa" aria-describedby="basic-addon2" :readonly="ssc_gpa_mode == false ? true : false">
                                                                                    <span class="input-group-text">GPA</span>
                                                                                    <HasError :form="eduForm" field="ssc_gpa" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">GROUP/SUBJECT</label>
                                                                            <div class="col-sm-8">
                                                                                <Multiselect v-model="eduForm.ssc_subject" name="ssc_subject"
                                                                                             :searchable="true" :options="ssc_subjects" placeholder="SELECT GROUP/SUBJECT"/>

                                                                                <HasError :form="eduForm" field="ssc_subject" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">PASSING YEAR</label>
                                                                            <div class="col-sm-8">
                                                                                <Multiselect v-model="eduForm.ssc_passing_year" name="ssc_passing_year"
                                                                                             :searchable="true" :options="yearRange" placeholder="SELECT YEAR"/>

                                                                                <HasError :form="eduForm" field="ssc_passing_year" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">SCHOOL/COLLEGE</label>
                                                                            <div class="col-sm-8">
                                                                                <input class="form-control form-control" type="text" name="ssc_institute" v-model="eduForm.ssc_institute">
                                                                                <HasError :form="eduForm" field="ssc_institute" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="card">
                                                                    <div class="card-header bg-success text-center text-white ">HSC OR EQUIVALENT LEVEL</div>
                                                                    <div class="card-body">
                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">EXAMINATION</label>
                                                                            <div class="col-sm-8">
                                                                                <select class="form-control text-uppercase form-control" name="hsc_examination" v-model="eduForm.hsc_examination" style="width: 100%">
                                                                                    <option value="" selected>SELECT EXAM</option>
                                                                                    <option value="H.S.C">H.S.C</option>
                                                                                    <option value="Alim">Alim</option>
                                                                                    <option value="Business Management">Business Management</option>
                                                                                    <option value="Diploma Engineering">Diploma Engineering</option>
                                                                                    <option value="A Level/Sr. Cambridge">A Level/Sr. Cambridge</option>
                                                                                    <option value="H.S.C Equivalent">H.S.C Equivalent</option>
                                                                                    <option value="Diploma in Pharmacy">Diploma in Pharmacy</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="hsc_examination" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">BOARD</label>
                                                                            <div class="col-sm-8">
                                                                                <select class="form-control text-uppercase form-control" name="hsc_board" v-model="eduForm.hsc_board" style="width: 100%">
                                                                                    <option value="" selected>SELECT BOARD</option>
                                                                                    <option value="Dhaka">DHAKA</option>
                                                                                    <option value="Cumilla">CUMILLA</option>
                                                                                    <option value="Rajshahi">RAJSHAHI</option>
                                                                                    <option value="Jashore">JASHORE</option>
                                                                                    <option value="Chittagong">CHITTAGONG</option>
                                                                                    <option value="Barishal">BARISHAL</option>
                                                                                    <option value="Sylhet">SYLHET</option>
                                                                                    <option value="Dinajpur">DINAJPUR</option>
                                                                                    <option value="Madrasah">MADRASAH</option>
                                                                                    <option value="Mymensingh">MYMENSINGH</option>
                                                                                    <option value="Cambridge International - IGCE">Cambridge International - IGCE</option>
                                                                                    <option value="Edexcel International">Edexcel International</option>
                                                                                    <option value="Bangladesh Technical Education Board (BTEB)">Bangladesh Technical Education Board (BTEB)</option>
                                                                                    <option value="Others">Others</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="hsc_board" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">Board Roll</label>
                                                                            <div class="col-sm-8">
                                                                                <input class="form-control form-control" type="text" name="hsc_roll" v-model="eduForm.hsc_roll">
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">RESULT</label>
                                                                            <div class="col-sm-4">
                                                                                <select class="form-control text-uppercase form-control" @change="getResult" name="hsc_result" v-model="eduForm.hsc_result" style="width: 100%">
                                                                                    <option value="" selected>SELECT RESULT</option>
                                                                                    <option value="1ST DIVISION">1ST DIVISION</option>
                                                                                    <option value="2ND DIVISION">2ND DIVISION</option>
                                                                                    <option value="3RD DIVISION">3RD DIVISION</option>
                                                                                    <option value="4">GPA(OUT OF 4)</option>
                                                                                    <option value="5">GPA(OUT OF 5)</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="hsc_roll" />
                                                                            </div>
                                                                            <div class="col-sm-4">
                                                                                <div class="input-group">
                                                                                    <input type="number" step=0.01 class="form-control" name="hsc_gpa" v-model="eduForm.hsc_gpa" aria-label="Recipient's username" aria-describedby="basic-addon2" :readonly="hsc_gpa_mode == false ? true : false">
                                                                                    <span class="input-group-text">GPA</span>
                                                                                    <HasError :form="eduForm" field="hsc_gpa" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">GROUP/SUBJECT</label>
                                                                            <div class="col-sm-8">
                                                                                <Multiselect v-model="eduForm.hsc_subject" name="hsc_subject"
                                                                                             :searchable="true" :options="hsc_subjects" placeholder="SELECT GROUP/SUBJECT"/>
                                                                                <HasError :form="eduForm" field="hsc_subject" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">PASSING YEAR</label>
                                                                            <div class="col-sm-8">
                                                                                <Multiselect v-model="eduForm.hsc_passing_year" name="hsc_passing_year"
                                                                                             :searchable="true" :options="yearRange" placeholder="SELECT YEAR"/>
                                                                                <HasError :form="eduForm" field="hsc_passing_year" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">SCHOOL/COLLEGE</label>
                                                                            <div class="col-sm-8">
                                                                                <input class="form-control form-control" type="text" name="hsc_institute" v-model="eduForm.hsc_institute">
                                                                                <HasError :form="eduForm" field="hsc_institute" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="card">
                                                                    <div class="card-header bg-success text-center text-white ">GRADUATION OR EQUIVALENT LEVEL</div>
                                                                    <div class="card-body">
                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">EXAMINATION</label>
                                                                            <div class="col-sm-8">
                                                                                <select class="form-control text-uppercase form-control" name="graduation_examination" v-model="eduForm.graduation_examination" style="width: 100%">
                                                                                    <option value="" selected>SELECT EXAM</option>
                                                                                    <option value="B.A">B.A</option>
                                                                                    <option value="B.S.S">B.S.S</option>
                                                                                    <option value="B.Sc(Engineering/Architecture)">B.Sc(Engineering/Architecture)</option>
                                                                                    <option value="B.Sc(Agricultural Science)">B.Sc(Agricultural Science)</option>
                                                                                    <option value="M.B.B.S./B.D.S">M.B.B.S./B.D.S</option>
                                                                                    <option value="B.COM">B.COM</option>
                                                                                    <option value="B.B.A">B.B.A</option>
                                                                                    <option value="L.L.B">L.L.B</option>
                                                                                    <option value="Honors">Honors</option>
                                                                                    <option value="Pass Course">Pass Course</option>
                                                                                    <option value="Fazil">Fazil</option>
                                                                                    <option value="Graduation/Honors Equivalent">Graduation/Honors Equivalent</option>
                                                                                    <option value="Others">Others</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="graduation_examination" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">COURSE DURATION</label>
                                                                            <div class="col-sm-8">
                                                                                <select class="form-control text-uppercase form-control" name="graduation_course_duration" v-model="eduForm.graduation_course_duration" style="width: 100%">
                                                                                    <option value="" selected>SELECT COURSE DURATION</option>
                                                                                    <option value="01 Year">01 Year</option>
                                                                                    <option value="02 Years">02 Years</option>
                                                                                    <option value="03 Years">03 Years</option>
                                                                                    <option value="04 Years">04 Years</option>
                                                                                    <option value="05 Years">05 Years</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="graduation_course_duration" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">RESULT</label>
                                                                            <div class="col-sm-4">
                                                                                <select class="form-control text-uppercase form-control" @change="getResult" name="graduation_result" v-model="eduForm.graduation_result" style="width: 100%">
                                                                                    <option value="" selected>SELECT RESULT</option>
                                                                                    <option value="1ST DIVISION">1ST DIVISION</option>
                                                                                    <option value="2ND DIVISION">2ND DIVISION</option>
                                                                                    <option value="3RD DIVISION">3RD DIVISION</option>
                                                                                    <option value="4">GPA(OUT OF 4)</option>
                                                                                    <option value="5">GPA(OUT OF 5)</option>
                                                                                </select>
                                                                                <HasError :form="eduForm" field="graduation_result" />
                                                                            </div>
                                                                            <div class="col-sm-4">
                                                                                <div class="input-group">
                                                                                    <input type="number" step=0.01 class="form-control" name="graduation_gpa" v-model="eduForm.graduation_gpa" aria-label="Recipient's username" aria-describedby="basic-addon2" :readonly="graduation_gpa_mode == false ? true : false">
                                                                                    <span class="input-group-text">GPA</span>
                                                                                    <HasError :form="eduForm" field="graduation_gpa" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">SUBJECT/DEGREE</label>
                                                                            <div class="col-sm-8">
                                                                                <Multiselect name="graduation_subject" v-model="eduForm.graduation_subject"
                                                                                             :searchable="true" :options="graduation_subjects" placeholder="SELECT SUBJECT/DEGREE"/>

                                                                                <HasError :form="eduForm" field="graduation_subject" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">PASSING YEAR</label>
                                                                            <div class="col-sm-8">
                                                                                <Multiselect v-model="eduForm.graduation_passing_year" name="graduation_passing_year"
                                                                                             :searchable="true" :options="yearRange" placeholder="SELECT YEAR"/>
                                                                                <HasError :form="eduForm" field="graduation_passing_year" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="mb-2 row">
                                                                            <label class="col-sm-4 col-form-label">COLLEGE/UNIVERSITY</label>
                                                                            <div class="col-sm-8">
                                                                                <Multiselect name="graduation_institute" v-model="eduForm.graduation_institute"
                                                                                             :searchable="true" :options="graduation_institutes" placeholder="SELECT COLLEGE/UNIVERSITY"/>
                                                                                <HasError :form="eduForm" field="graduation_institute" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="card">
                                                                    <div class="card-header bg-success text-center text-white ">Masters or Equivalent Level</div>
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col-md-6 mb-2 row">
                                                                                <label class="col-sm-4 col-form-label">EXAMINATION</label>
                                                                                <div class="col-sm-8">
                                                                                    <select class="form-control text-uppercase form-control" name="masters_examination" v-model="eduForm.masters_examination" style="width: 100%">
                                                                                        <option value="" selected>SELECT EXAM</option>
                                                                                        <option value="M.A">M.A</option>
                                                                                        <option value="M.S.S">M.S.S</option>
                                                                                        <option value="M.Sc">M.Sc</option>
                                                                                        <option value="M.Com">M.Com</option>
                                                                                        <option value="M.B.A">M.B.A</option>
                                                                                        <option value="L.L.M">L.L.M</option>
                                                                                        <option value="M.Phil">M.Phil</option>
                                                                                        <option value="Kamil">Kamil</option>
                                                                                        <option value="Others">Others</option>
                                                                                        <option value="Masters Equivalent">Masters Equivalent</option>
                                                                                    </select>
                                                                                    <HasError :form="eduForm" field="masters_examination" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-6 mb-2 row">
                                                                                <label class="col-sm-4 col-form-label">COURSE DURATION</label>
                                                                                <div class="col-sm-8">
                                                                                    <select class="form-control text-uppercase form-control" name="masters_course_duration" v-model="eduForm.masters_course_duration" style="width: 100%">
                                                                                        <option value="" selected>SELECT COURSE DURATION</option>
                                                                                        <option value="01 Year">01 Year</option>
                                                                                        <option value="02 Years">02 Years</option>
                                                                                        <option value="03 Years">03 Years</option>
                                                                                        <option value="04 Years">04 Years</option>
                                                                                        <option value="05 Years">05 Years</option>
                                                                                    </select>
                                                                                    <HasError :form="eduForm" field="masters_course_duration" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-6 mb-2 row">
                                                                                <label class="col-sm-4 col-form-label">RESULT</label>
                                                                                <div class="col-sm-4">
                                                                                    <select class="form-control text-uppercase form-control" @change="getResult" name="masters_result" v-model="eduForm.masters_result" style="width: 100%">
                                                                                        <option value="" selected>SELECT RESULT</option>
                                                                                        <option value="1ST DIVISION">1ST DIVISION</option>
                                                                                        <option value="2ND DIVISION">2ND DIVISION</option>
                                                                                        <option value="3RD DIVISION">3RD DIVISION</option>
                                                                                        <option value="4">GPA(OUT OF 4)</option>
                                                                                        <option value="5">GPA(OUT OF 5)</option>
                                                                                    </select>
                                                                                    <HasError :form="eduForm" field="masters_result" />
                                                                                </div>
                                                                                <div class="col-sm-4">
                                                                                    <div class="input-group">
                                                                                        <input type="number" step=0.01 class="form-control" name="masters_gpa" v-model="eduForm.masters_gpa" aria-label="Recipient's username" aria-describedby="basic-addon2" :readonly="masters_gpa_mode == false ? true : false">
                                                                                        <span class="input-group-text">GPA</span>
                                                                                        <HasError :form="eduForm" field="masters_gpa" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-6 mb-2 row">
                                                                                <label class="col-sm-4 col-form-label">SUBJECT/DEGREE</label>
                                                                                <div class="col-sm-8">
                                                                                    <Multiselect v-model="eduForm.masters_subject" name="masters_subject"
                                                                                                 :searchable="true" :options="masters_subjects" placeholder="SELECT SUBJECT/DEGREE"/>
                                                                                    <HasError :form="eduForm" field="masters_subject" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-6 mb-2 row">
                                                                                <label class="col-sm-4 col-form-label">PASSING YEAR</label>
                                                                                <div class="col-sm-8">
                                                                                    <Multiselect v-model="eduForm.masters_passing_year" name="masters_passing_year"
                                                                                                 :searchable="true" :options="yearRange" placeholder="SELECT YEAR"/>
                                                                                    <HasError :form="eduForm" field="masters_passing_year" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-6 mb-2 row">
                                                                                <label class="col-sm-4 col-form-label">COLLEGE/UNIVERSITY</label>
                                                                                <div class="col-sm-8">
                                                                                    <Multiselect v-model="eduForm.masters_institute" name="masters_institute"
                                                                                                 :searchable="true" :options="masters_institutes" placeholder="Select Institution"/>
                                                                                    <HasError :form="eduForm" field="masters_institute" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <button v-if="storeMode == true" type="submit" class="btn btn-success btn-lg w-md">Save</button>
                                                            <button v-if="storeMode == false" type="submit" class="btn btn-success btn-lg w-md">update</button>
                                                            <button type="button" class="btn btn-secondary btn-lg w-md ml-3" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">close</button>
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

                                                    <button type="button" class="btn btn-success float-right" @click="createNewTrainingSummary">Add new</button><br><br>
                                                    <div class="row">
                                                        <div class="table-rep-plugin">
                                                        <div class="table-responsive mb-0" data-pattern="priority-columns">
                                                            <table id="tech-companies-1" class="table table-bordered align-middle nowrap ">
                                                        <thead>
                                                            <tr class="table-secondary">
                                                            <th scope="col"> Training Title</th>
                                                            <th scope="col"> Topics Covered</th>
                                                            <th scope="col"> Training Year</th>
                                                            <th scope="col"> Institute</th>
                                                            <th scope="col"> Duration</th>
                                                            <th scope="col"> location</th>
                                                            <th class="text-center">Actions</th>
                                                            </tr>
                                                        </thead>
                                            
                                                        <tbody>
                                                                <tr v-for="item in training_summaries">
                                                                <th >{{ item.training.title}}</th>
                                                                <th >{{ item.topics_covered}}</th>
                                                                <th >{{ item.training_year}}</th>
                                                                <th >{{ item.institute}}</th>
                                                                <th >{{ item.duration}}</th>
                                                                <th >{{ item.location}}</th>

                                                                <td class="">
                                                                    <ul class="list-unstyled hstack gap-1 mb-0">                                       
                                                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                                    <button class="btn btn-soft-info"  @click="editTrainingSummary(item)"><i class="mdi mdi-pencil-outline"></i></button>
                                                                    </li>
                                                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="delete">
                                                                    <button class="btn btn btn-soft-danger"  @click="destroy(item.id)"><i class="mdi mdi-delete-outline"></i></button>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                            </tr>
                                                            <tr v-show="!training_summaries.length">
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
                                                Professional Certification
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="text-muted">
                                                    <button type="button" class="btn btn-success float-right" @click="createProfessionalCertification">Add new</button><br><br>
                                                    <div class="row">
                                                        <div class="table-rep-plugin">
                                                        <div class="table-responsive mb-0" data-pattern="priority-columns">
                                                            <table id="tech-companies-1" class="table table-bordered align-middle nowrap ">
                                                        <thead>
                                                            <tr class="table-secondary">
                                                            <th scope="col">Certification</th>
                                                            <th scope="col">Organization</th>
                                                            <th scope="col"> Start Date</th>
                                                            <th scope="col"> End Date</th>
                                                            <th scope="col"> location</th>
                                                            <th scope="col"> Status</th>
                                                            <th class="text-center">Actions</th>
                                                            </tr>
                                                        </thead>
                                            
                                                        <tbody>
                                                                <tr v-for="item in certifications">
                                                                <th >{{ item.title}}</th>
                                                                <th >{{ item.organization}}</th>
                                                                <th >{{ item.start_date}}</th>
                                                                <th >{{ item.end_date}}</th>
                                                                <th >{{ item.location}}</th>
                                                                <th >{{ item.status}}</th>
                                                                <td class="">
                                                                    <ul class="list-unstyled hstack gap-1 mb-0">                                       
                                                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                                    <button class="btn btn-soft-info"  @click="editCertification(item)"><i class="mdi mdi-pencil-outline"></i></button>
                                                                    </li>
                                                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="delete">
                                                                    <button class="btn btn btn-soft-danger"  @click="certificationDestroy(item.id)"><i class="mdi mdi-delete-outline"></i></button>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                            </tr>
                                                            <tr v-show="!certifications.length">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->

            <vue-progress-bar></vue-progress-bar>
            <notifications />

            <!-- trainingSummaryModal  -->
            <div class="modal fade" id="trainingSummaryModal" tabindex="-1" aria-labelledby="trainingSummaryModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="trainingSummaryModalLabel"> Training Summary </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                    <form
                        @submit.prevent="editMode ? trainingSummaryUpdate() : trainingSummaryStore()"
                        @keydown="form.onKeydown($event)"
                        >
                            <div class="row">
                                <div class="col-lg-10">
                                    <label for="formrow-firstname-input" class="form-label">Training Title  *</label>
                                    <!-- <input type="text" class="form-control" id="formrow-firstname-input"  v-model="trainingSummaryForm.title"
                                    name="title"
                                    placeholder="e.g. training title"> -->
                                    <Multiselect name="graduation_institute" v-model="trainingSummaryForm.training_id"
                                    :searchable="true" :options="trainings" placeholder="SELECT COLLEGE/UNIVERSITY"/>                             
                                    <HasError :form="trainingSummaryForm" field="title" />
                                </div>
                                <div class="col-lg-2 mt-4">
                                    <!-- <label for="formrow-firstname-input" class="form-label">addnew  *</label> -->
                                <button style="margin-top: 8px;" type="button" class="btn btn-success" @click="trainingCreateModalShow()">
                                <i class="fa fa-plus-circle"></i>
                                </button>
                            </div>
                        </div>


                            <div class="row">
                                <div class="col-lg-12">
                                    <label for="exampleFormControlTextarea1" class="form-label">Topics Covered</label>
                                    <textarea v-model="trainingSummaryForm.topics_covered" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <HasError :form="trainingSummaryForm" field="topics_covered" />
                                </div>
                                <div class="col-lg-12">
                                    <label for="formrow-firstname-input" class="form-label"> Training Year *</label>
                                    <input type="integer"  v-model="trainingSummaryForm.training_year" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 2022">
                                    <HasError :form="trainingSummaryForm" field="training_year" />
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-lg-6">
                                    <label for="formrow-firstname-input" class="form-label">Institute *</label>
                                    <input type="text" class="form-control" id="formrow-firstname-input"  v-model="trainingSummaryForm.institute  "
                                    name="institute"
                                    placeholder="e.g. institute">
                                    <HasError :form="trainingSummaryForm" field="institute" />
                                </div>

                                <div class="col-lg-6">
                                    <label for="formrow-firstname-input" class="form-label"> Duration (in days) *</label>
                                    <input type="text"  v-model="trainingSummaryForm.duration" class="form-control" id="formrow-firstname-input"  placeholder="e.g. 30">
                                    <HasError :form="trainingSummaryForm" field="duration" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <label for="formrow-firstname-input" class="form-label">Location *</label>
                                    <input type="text" class="form-control" id="formrow-firstname-input"  v-model="trainingSummaryForm.location  "
                                    name="location"
                                    placeholder="e.g. location">
                                    <HasError :form="trainingSummaryForm" field="location" />
                                </div>
                            </div>
                            <div class="mb-3">
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
        <!--  trainingCreateModal -->
        <div class="modal fade" id="trainingCreateModal" tabindex="-1" aria-labelledby="trainingCreateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="trainingCreateModalLabel">New message</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="editMode ? update() : newTrainingStore()" @keydown="trainingAddForm.onKeydown($event)">
                            <div v-if="trainingAddForm.progress" class="text-center">Progress: {{ trainingAddForm.progress.percentage }}%</div>

                            <AlertError :form="trainingAddForm" message="There were some problems with your input." />

                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input v-model="trainingAddForm.title" type="text" name="title" class="form-control" placeholder="Title" :readonly="showMode==true ? true : false">
                                    <HasError :form="trainingAddForm" field="title" />
                                </div>

                                <div class="form-group">
                                    <label>Duration(Days)</label>
                                    <input v-model="trainingAddForm.duration_in_days" type="text" name="duration_in_days" class="form-control" placeholder="Duration in days" :readonly="showMode==true ? true : false">
                                    <HasError :form="trainingAddForm" field="duration_in_days" />
                                </div>

                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea v-model="form.trainingAddForm" rows="3" cols="50" name="description" :readonly="showMode==true ? true : false" class="form-control" placeholder="Enter description here..."></textarea>
                                    <HasError :form="trainingAddForm" field="description" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button  type="submit" class="btn btn-primary"> {{ editMode ? 'Update' : 'Create' }}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
        <!-- professional certificaion  -->
        <div class="modal fade" id="professionalCertificationModal" tabindex="-1" aria-labelledby="professionalCertificationModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="professionalCertificationModalLabel"> Professional Certification </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
        <form
            @submit.prevent="editMode ? certificationUpdate() : certificationStore()"
            @keydown="professionalCertificaionForm.onKeydown($event)"
            >
                <div class="row">
                    <div class="col-lg-12">
                        <label for="exampleFormControlTextarea1" class="form-label">Certification *</label>
                        <input type="text"  v-model="professionalCertificaionForm.title" class="form-control" id="formrow-firstname-input"  placeholder="Enter certification">
                        <HasError :form="professionalCertificaionForm" field="title" />
                    </div>
                    <div class="col-lg-2">
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <label for="exampleFormControlTextarea1" class="form-label">Organization</label>
                        <input type="text"  v-model="professionalCertificaionForm.organization" class="form-control" id="formrow-firstname-input"  placeholder="Enter organization">
                        <HasError :form="professionalCertificaionForm" field="organization" />
                    </div>
                    <div class="col-lg-6">
                        <label for="formrow-firstname-input" class="form-label"> Start Date*</label>
                        <input type="date"  v-model="professionalCertificaionForm.start_date" class="form-control" id="formrow-firstname-input">
                        <HasError :form="professionalCertificaionForm" field="start_date" />
                    </div>
                    <div class="col-lg-6">
                        <label for="formrow-firstname-input" class="form-label"> End Date*</label>
                        <input type="date"  v-model="professionalCertificaionForm.end_date" class="form-control" id="formrow-firstname-input">
                        <HasError :form="professionalCertificaionForm" field="end_date" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <label for="formrow-firstname-input" class="form-label">Location *</label>
                        <input type="text" class="form-control" id="formrow-firstname-input"  v-model="professionalCertificaionForm.location  "
                        name="location"
                        placeholder="e.g. location">
                        <HasError :form="professionalCertificaionForm" field="location" />
                    </div>
                </div>
                <div class="mb-3">
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
</div>
</template>

<script>
    import PaginationComponent from "../../../components/PaginationComponent.vue";
    import { ElNotification } from "element-plus";
    import Multiselect from "@vueform/multiselect";
    import "@vueform/multiselect/themes/default.css";

    import axios from "axios";
    import Form from "vform";

    import {Button, HasError, AlertError, AlertErrors, AlertSuccess} from "vform/src/components/bootstrap5";

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
        },

        data() {
            return {
                backendUrl: this.$store.state.backendUrl,
                //   backendUrl: "http://127.0.0.1:8000/",
                jsc_gpa_mode: false,
                ssc_gpa_mode: false,
                hsc_gpa_mode: false,
                graduation_gpa_mode: false,
                masters_gpa_mode: false,
                personaldetails: [],
                divisions:[],
                districts:[],
                thanas:[],
                addresses:[],
                dependentJobCategories:[],
                dependentDistricts:[],
                dependentCompanyTypes:[],
                storeMode:true,
                training_summaries:[],

                ssc_subjects: [],
                hsc_subjects: [],
                graduation_subjects: [],
                masters_subjects: [],

                graduation_institutes: [],
                masters_institutes: [],
                trainings: [],
                certifications: [],


                currentYear: new Date().getFullYear(),
                yearRange: [],

                eduForm: new Form({
                    id: "",
                    jsc_examination: "",
                    jsc_board: "",
                    jsc_roll: "",
                    jsc_result: "",
                    jsc_gpa: "",
                    jsc_passing_year: "",
                    jsc_institute: "",

                    ssc_examination: "",
                    ssc_board: "",
                    ssc_roll: "",
                    ssc_result: "",
                    ssc_gpa: "",
                    ssc_subject: "",
                    ssc_passing_year: "",
                    ssc_institute: "",

                    hsc_examination: "",
                    hsc_board: "",
                    hsc_roll: "",
                    hsc_result: "",
                    hsc_gpa: "",
                    hsc_subject: "",
                    hsc_passing_year: "",
                    hsc_institute: "",

                    graduation_examination: "",
                    graduation_course_duration: "",
                    graduation_result: "",
                    graduation_gpa: "",
                    graduation_subject: "",
                    graduation_passing_year: "",
                    graduation_institute: "",

                    masters_examination: "",
                    masters_course_duration: "",
                    masters_result: "",
                    masters_gpa: "",
                    masters_subject: "",
                    masters_passing_year: "",
                    masters_institute: "",
                }),

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
                    blood_group: "",
                    career_summary: "",
                    special_qualfication: "",
                    keyword: "",

                }),

                //   Training Summary Form added ****************
                trainingSummaryForm: new Form({
                    id: "",
                    resume_id: localStorage.getItem('resume_id'),
                    training_id: "",
                    topics_covered:"",
                    training_year:"",
                    institute:"",
                    duration:"",
                    location:"",
                }),
                //   end ****************************************

                // add training from 
                    trainingAddForm: new Form({
                        id:"",
                        title:"",
                        duration_in_days:"",
                        field:"",
                        description:"",
                        status:"Active",
                    }),
                // end

                
                  //  Training Summary Form added ****************
                  professionalCertificaionForm: new Form({
                    id: "",
                    resume_id: localStorage.getItem('resume_id'),
                    title: "",
                    topics_covered:"",
                    organization:"",
                    start_date:"",
                    end_date:"",
                    location:"",
                }),
                //   end ****************************************

            };
        },
        created() {
            // Generate an array of years from 1960 to the current year
            for (let year = this.currentYear; year >= 1960; year--) {
                this.yearRange.push(year);
            }
        },

        watch: {
            keyword: function () {
                this.getData();
                this.getDependentData();
                this.getTrainingSummaryData();
                this.trainingData();
                this.certificationData();

            },
        },

        mounted() {
            this.getData();
            this.getDependentData();
            this.getTrainingSummaryData();
            this.trainingData();
            this.certificationData();

        },

        methods: {
            getData() {
                // get ssc subjects
                axios.get(`${this.backendUrl}subject/ssc`).then((response) => {
                    let data =  response.data.map((item) => {
                        return { value: item.id, label: item.name }
                    })
                    this.ssc_subjects = data;
                }).catch((e) => { this.$Progress.fail();});

                // get hsc subjects
                axios.get(`${this.backendUrl}subject/hsc`).then((response) => {
                    let data =  response.data.map((item) => {
                        return { value: item.id, label: item.name }
                    })
                    this.hsc_subjects = data;
                }).catch((e) => { this.$Progress.fail();});

                // get graduation subjects
                axios.get(`${this.backendUrl}subject/graduation`).then((response) => {
                    let data =  response.data.map((item) => {
                        return { value: item.id, label: item.name }
                    })
                    this.graduation_subjects = data;
                }).catch((e) => { this.$Progress.fail();});

                // get masters subjects
                axios.get(`${this.backendUrl}subject/masters`).then((response) => {
                    let data =  response.data.map((item) => {
                        return { value: item.id, label: item.name }
                    })
                    this.masters_subjects = data;
                }).catch((e) => { this.$Progress.fail();});

                // get graduation institutes
                axios.get(`${this.backendUrl}institute/graduation`).then((response) => {
                    let data =  response.data.map((item) => {
                        return { value: item.id, label: item.name }
                    })
                    this.graduation_institutes = data;
                }).catch((e) => { this.$Progress.fail();});

                // get masters institutes
                axios.get(`${this.backendUrl}institute/masters`).then((response) => {
                    let data =  response.data.map((item) => {
                        return { value: item.id, label: item.name }
                    })
                    this.masters_institutes = data;
                }).catch((e) => { this.$Progress.fail();});

                // fetching resumes education data
                this.$Progress.start();
                axios.get(`${this.backendUrl}education/`+1).then((response) => {
                   let formData = this.eduForm;
                    $(response.data).each(function(index, element) {
                        if (element.type == 'jsc') {
                            formData.jsc_examination = element.degree;
                            formData.jsc_board = element.board;
                            formData.jsc_roll = element.roll;
                            if (isNaN(element.grade) == true) {
                                formData.jsc_result = element.grade;
                            } else {
                                formData.jsc_gpa = element.grade;
                            }
                            formData.jsc_passing_year = element.passing_year;
                            formData.jsc_institute = element.school;
                        }
                        if(element.type == 'ssc'){
                            formData.ssc_examination = element.degree;
                            formData.ssc_board = element.board;
                            formData.ssc_roll = element.roll;
                            if (isNaN(element.grade) == true) {
                                formData.ssc_result = element.grade;
                            } else {
                                formData.ssc_gpa = element.grade;
                            }
                            formData.ssc_subject = element.field_of_study;
                            formData.ssc_passing_year = element.passing_year;
                            formData.ssc_institute = element.school;
                        }

                        if(element.type == 'hsc'){
                            formData.hsc_examination = element.degree;
                            formData.hsc_board = element.board;
                            formData.hsc_roll = element.roll;
                            if (isNaN(element.grade) == true) {
                                formData.hsc_result = element.grade;
                            } else {
                                formData.hsc_gpa = element.grade;
                            }
                            formData.hsc_subject = element.field_of_study;
                            formData.hsc_passing_year = element.passing_year;
                            formData.hsc_institute = element.school;
                        }
                        if(element.type == 'graduation') {
                            formData.graduation_examination = element.degree;
                            formData.graduation_course_duration = element.duration;
                            if (isNaN(element.grade) == true) {
                                formData.graduation_result = element.grade;
                            } else {
                                formData.graduation_gpa = element.grade;
                            }
                            formData.graduation_subject = element.field_of_study;
                            formData.graduation_passing_year = element.passing_year;
                            formData.graduation_institute = element.school;
                        }
                        if (element.type == 'masters'){
                            formData.masters_examination = element.degree;
                            formData.masters_course_duration = element.duration;
                            if (isNaN(element.grade) == true) {
                                formData.masters_result = element.grade;
                            } else {
                                formData.masters_gpa = element.grade;
                            }
                            formData.masters_subject = element.field_of_study;
                            formData.masters_passing_year = element.passing_year;
                            formData.masters_institute = element.school;
                        }

                    })
                    this.$Progress.finish();
                })
                    .catch((e) => {
                        console.log(e);
                        this.$Progress.fail();
                    });
                // end

            },
            // end
      

            getResult(e){
                if (e.target.name == 'jsc_result' && (e.target.value == 4 || e.target.value == 5)){
                    this.jsc_gpa_mode = true
                }else if (e.target.name == 'jsc_result' && (e.target.value != 4 || e.target.value != 5)){
                    this.jsc_gpa_mode = false
                }

                if (e.target.name == 'ssc_result' && (e.target.value == 4 || e.target.value == 5)){
                    this.ssc_gpa_mode = true
                }else if (e.target.name == 'ssc_result' && (e.target.value != 4 || e.target.value != 5)){
                    this.ssc_gpa_mode = false
                }

                if (e.target.name == 'hsc_result' && (e.target.value == 4 || e.target.value == 5)){
                    this.hsc_gpa_mode = true
                }else if (e.target.name == 'hsc_result' && (e.target.value != 4 || e.target.value != 5)){
                    this.hsc_gpa_mode = false
                }

                if(e.target.name == 'graduation_result' && (e.target.value == 4 || e.target.value == 5)){
                    this.graduation_gpa_mode = true
                }else if(e.target.name == 'graduation_result' && (e.target.value != 4 || e.target.value != 5)){
                    this.graduation_gpa_mode = false
                }

                if(e.target.name == 'masters_result' && (e.target.value == 4 || e.target.value == 5)){
                    this.masters_gpa_mode = true
                }else if(e.target.name == 'masters_result' && (e.target.value != 4 || e.target.value != 5)){
                    this.masters_gpa_mode = false
                }
            },

            //education store
            eduStore() {
                this.$Progress.start();
                this.eduForm.busy = true;
                this.eduForm
                    .post(`${this.backendUrl}education`,{
                        params:{job: 'job'}
                    })
                    .then((response) => {
                        if (this.eduForm.successful) {
                            this.$Progress.finish();
                            this.getData();
                            this.storeMode = false;
                            this.$notify({
                                type: "success",
                                title: "Success",
                                text: "Education Added Successfully",
                            });
                        } else {
                            this.$Progress.fail();
                            this.$notify({
                                type: "error",
                                title: "Error",
                                text: "Something went wrong try again later",
                            });
                        }
                    })
                    .catch((e) => {
                        this.$Progress.fail();
                        console.log(e);
                    });
            },

            //education Update
            eduUpdate() {
                this.$Progress.start();
                this.eduForm.busy = true;
                this.eduForm
                    .post(`${this.backendUrl}update-from-job/`+1,{
                        params:{job: 'job'}
                    })
                    .then((response) => {
                        if (this.eduForm.successful) {
                            this.$Progress.finish();
                            this.getData();
                            this.storeMode = false;
                            this.$notify({
                                type: "success",
                                title: "Success",
                                text: "Education Updated Successfully",
                            });
                        } else {
                            this.$Progress.fail();
                            this.$notify({
                                type: "error",
                                title: "Error",
                                text: "Something went wrong try again later",
                            });
                        }
                    })
                    .catch((e) => {
                        this.$Progress.fail();
                        console.log(e);
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

                axios.get(`${this.backendUrl}job-category`)
                    .then((response) => {
                        let data =  response.data.data.map((item) => {
                            return { value: item.id, label: item.title }
                        })
                    })
                    .catch((e) => {
                        this.$Progress.fail();
                    });

            },
            // end


            // fetching TrainingSummaryData data
            getTrainingSummaryData() {
                    let resume_id = localStorage.getItem('resume_id');
                        let training_summarie =`${this.backendUrl}user/training-summaries/`+resume_id;
                    axios
                        .get(training_summarie).then((response) => {
                            this.training_summaries = response.data;
                        })
                        .catch((e) => {
                            console.log(e);
                            this.$Progress.fail();
                        });
                },
                // end 

                 // fetching TrainingSummaryData data
                 certificationData() {
                    let resume_id = localStorage.getItem('resume_id');
                        let certificaion =`${this.backendUrl}user-certification/`+resume_id;
                    axios
                        .get(certificaion).then((response) => {
                            console.log(response.data);
                            console.log('certification data');
                            this.certifications = response.data;
                        })
                        .catch((e) => {
                            console.log(e);
                            this.$Progress.fail();
                        });
                },
                // end 

            // Training Summary create and Edit modal 
            createNewTrainingSummary() {
                this.editMode = false;
                this.trainingSummaryForm.reset();
                this.trainingSummaryForm.clear();
                $("#trainingSummaryModal").modal("show");
            },
            
            editTrainingSummary(item) {
                this.editMode = true;
                this.trainingSummaryForm.reset();
                this.trainingSummaryForm.clear();
                this.trainingSummaryForm.fill(item);
                $("#trainingSummaryModal").modal("show");
            },
            // end ********************************

            // certificationForm reset 
            resetProfessionalCertificationForm() {
                this.professionalCertificaionForm.reset();
                this.professionalCertificaionForm.clear();
            },



             // Training Summary create and Edit modal 
             createProfessionalCertification() {

                this.editMode = false;
                this.resetProfessionalCertificationForm();
                $("#professionalCertificationModal").modal("show");
            },
            
            editCertification(item) {
                this.editMode = true;
                this.resetProfessionalCertificationForm();
                this.professionalCertificaionForm.fill(item);
                $("#professionalCertificationModal").modal("show");
            },
            // end ********************************
            
        // fetching Training data 
            trainingData() {
                axios.get(`${this.backendUrl}training`)
                .then((response) => {
                let data =  response.data.data.map((item) => {
                    return { value: item.id, label: item.title }
                })
                this.trainings = data;
                })
                .catch((e) => {
                    this.$Progress.fail();
                });
            },
         // end 

        // Store Resume PersonalDetails 
        trainingSummaryStore() {
        this.$Progress.start();
        this.trainingSummaryForm.busy = true;
        this.trainingSummaryForm
            .post(`${this.backendUrl}training-summaries`)
            .then((response) => {
        
            if (this.trainingSummaryForm.successful) {
                    this.trainingSummaryForm.reset();
                    this.trainingSummaryForm.clear();
                    $("#trainingSummaryModal").modal('hide');
                    this.getTrainingSummaryData();
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
        // End Resume PersonalDetails Store

        // open new training add modal 
            trainingCreateModalShow(){
                $('#trainingCreateModal').modal('show');
            },
       // end 

        // new Training Store 
            newTrainingStore() {
                this.$Progress.start()
                this.trainingAddForm.busy = true
                this.trainingAddForm.post(`${this.backendUrl}training`)
                .then(response => {
                    this.trainingData();
                    $('#trainingCreateModal').modal('hide')
                    if(this.trainingAddForm.successful) {
                        this.$Progress.finish()
                        ElNotification({
                        title: "Success",
                        message: "Data Stored SuccessFully",
                        type: "success",
                    });
                    this.trainingAddForm.reset();
                    this.trainingAddForm.clear();
                    } else{
                        this.$Progress.fail()
                        ElNotification({
                        title: "Error",
                        message: "Data Not Stored",
                        type: "error",
                    });
                    }
                })
                .catch(e => {
                    this.$Progress.fail()
                    console.log(e)
                })
            },
        // end 

        // trainingSummaryUpdate data
        trainingSummaryUpdate() {
        this.$Progress.start();
        this.trainingSummaryForm.busy = true;
        this.trainingSummaryForm
            .put(`${this.backendUrl}training-summaries/` + 
            this.trainingSummaryForm.id).then((response) => {
            this.getTrainingSummaryData();
            if (this.trainingSummaryForm.successful) {
                    this.$Progress.finish();
                    $("#trainingSummaryModal").modal('hide');
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
        // End trainingSummaryUpdate

        
         // certification Store 
         certificationStore() {
                this.$Progress.start()
                this.professionalCertificaionForm.busy = true
                this.professionalCertificaionForm.post(`${this.backendUrl}professional-certification`)
                .then(response => {
                    
                    if(this.professionalCertificaionForm.successful) {
                        this.$Progress.finish()
                        ElNotification({
                        title: "Success",
                        message: "Data Stored SuccessFully",
                        type: "success",
                    });
                    this.certificationData();
                    this.resetProfessionalCertificationForm();
                    $('#professionalCertificationModal').modal('hide')
                    } else{
                        this.$Progress.fail()
                        ElNotification({
                        title: "Error",
                        message: "Data Not Stored",
                        type: "error",
                    });
                    }
                })
                .catch(e => {
                    this.$Progress.fail()
                    console.log(e)
                })
            },
        // end 

        
        // trainingSummaryUpdate data
         certificationUpdate() {
        this.$Progress.start();
        this.professionalCertificaionForm.busy = true;
        this.professionalCertificaionForm
            .put(`${this.backendUrl}professional-certification/` + 
            this.professionalCertificaionForm.id).then((response) => {
            
            if (this.professionalCertificaionForm.successful) {
                    this.$Progress.finish();
                    this.certificationData();
                    $("#professionalCertificationModal").modal('hide');
                        ElNotification({
                            title: "Success",
                            message: "Data Updated Successfully",
                            type: "success",
                        });
                        this.resetProfessionalCertificationForm();
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
        // End trainingSummaryUpdate


        // Training Summary Delete
        destroy(id) {
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
                        axios.delete(`${this.backendUrl}training-summaries/`+id, )
                        .then(response => {
                            this.getTrainingSummaryData();
                            this.$swal.fire(
                                'Deleted!',
                                response.data.message,
                                'success'
                            )
                        });
                    }
                })
            },
        
        // end

        // Training Summary Delete
          certificationDestroy(id) {
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
                        axios.delete(`${this.backendUrl}professional-certification/`+id, )
                        .then(response => {
                            this.certificationData();
                            this.$swal.fire(
                                'Deleted!',
                                response.data.message,
                                'success'
                            )
                        });
                    }
                })
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
        // End Resume PersonalDetails Store
        },
        };
</script>