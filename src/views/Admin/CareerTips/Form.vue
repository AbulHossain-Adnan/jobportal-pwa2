<template>
    <div id="form">
        <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
            <div class="row">
                <div class="col-xl-9">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Add New Post</h4>
                            <div class="mb-3">
                                <label for="formrow-firstname-input" class="form-label">Title</label>
                                <input v-model="form.title" type="text" name="title" class="form-control" id="formrow-firstname-input" placeholder="Add Title">
                                <HasError :form="form" field="title" />
                            </div>

                            <div class="mb-3">
                                <label for="formrow-firstname-input" class="form-label">Body</label>
                                <!-- <textarea v-model="form.body" name="body" id="elm1"></textarea> -->
                                <textarea v-model="form.body" name="body" class="form-control" placeholder="Enter description here..." rows="4" cols="50"></textarea>
                                <HasError :form="form" field="body" />
                            </div>

                            <div>
                                <button type="submit" class="btn btn-primary w-md">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3">
                    <!-- <div class="card">
                        <div class="card-header bg-transparent border-bottom text-uppercase">
                            <h4 class="card-title">Publish</h4>
                            <div class="card-tools" style="position: absolute; right: 1rem; top: 0.5rem">
                                <a class="" data-bs-toggle="collapse" href="#collapsePublish" role="button" aria-expanded="false" aria-controls="collapsePublish">
                                    <i class="fas fa-align-justify"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body collapse" id="collapsePublish">
                            <ul class="list-unstyled">
                                <li><input type="checkbox"> checkbox 1</li>
                                <li><input type="checkbox"> checkbox 2</li>
                                <li><input type="checkbox"> checkbox 3</li>
                                <li><input type="checkbox"> checkbox 4</li>
                            </ul>
                        </div>
                    </div> -->

                    <!-- <div class="card">
                        <div class="card-header bg-transparent border-bottom text-uppercase">
                            <h4 class="card-title">Format</h4>
                            <div class="card-tools" style="position: absolute; right: 1rem; top: 0.5rem">
                                <a class="" data-bs-toggle="collapse" href="#collapseFormat" role="button" aria-expanded="false" aria-controls="collapseFormat">
                                    <i class="fas fa-align-justify"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body collapse" id="collapseFormat">
                            <ul class="list-unstyled">
                                <li><input type="checkbox"> checkbox 1</li>
                                <li><input type="checkbox"> checkbox 2</li>
                                <li><input type="checkbox"> checkbox 3</li>
                                <li><input type="checkbox"> checkbox 4</li>
                            </ul>
                        </div>
                    </div> -->

                    <div class="card">
                        <div class="card-header bg-transparent border-bottom text-uppercase">
                            <h4 class="card-title">Categories</h4>
                            <div class="card-tools" style="position: absolute; right: 1rem; top: 0.5rem">
                                <a class="" data-bs-toggle="collapse" href="#collapseCategories" role="button" aria-expanded="false" aria-controls="collapseCategories">
                                    <i class="fas fa-align-justify"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body collapse" id="collapseCategories">
                            <ul class="list-unstyled" v-for="category in categories">
                                <li>
                                    <input v-model="form.categories" type="checkbox" name="categories" :value="category.id"> {{ category.name }}
                                    <HasError :form="form" field="category" />
                                </li>
                            </ul>

                            <!-- <div class="form-line">
                                <label for="category">Select Categories</label>
                                <select name="categories[]" id="category" class="form-control" data-live-search="true" multiple>
                                    <option v-for="category in categories" value="category.id">{{ category.name }}</option>  
                                </select>
                            </div> -->
                        </div>
                    </div>

                    <!-- <div class="card">
                        <div class="card-header bg-transparent border-bottom text-uppercase">
                            <h4 class="card-title">Tags</h4>
                            <div class="card-tools" style="position: absolute; right: 1rem; top: 0.5rem">
                                <a class="" data-bs-toggle="collapse" href="#collapseTags" role="button" aria-expanded="false" aria-controls="collapseTags">
                                    <i class="fas fa-align-justify"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body collapse" id="collapseTags">
                            <ul class="list-unstyled">
                                <li><input type="checkbox"> checkbox 1</li>
                                <li><input type="checkbox"> checkbox 2</li>
                                <li><input type="checkbox"> checkbox 3</li>
                                <li><input type="checkbox"> checkbox 4</li>
                            </ul>
                        </div>
                    </div> -->

                    <div class="card">
                        <div class="card-header bg-transparent border-bottom text-uppercase">
                            <h4 class="card-title">Featured Image</h4>
                            <div class="card-tools" style="position: absolute; right: 1rem; top: 0.5rem">
                                <a class="" data-bs-toggle="collapse" href="#collapseFeaturedImage" role="button" aria-expanded="false" aria-controls="collapseFeaturedImage">
                                    <i class="fas fa-align-justify"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body collapse" id="collapseFeaturedImage">
                            <input type="file" name="image" id="file" class="form-control form-control-file border" @change="onImageChange" />
                            <HasError :form="form" field="image" />
                            <img class="mt-1" :src="imagePreview" style="width: 100px;" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </form>
        <vue-progress-bar></vue-progress-bar>
        <notifications />
    </div>
</template>

<script>
import axios from 'axios';
import Form from 'vform'
import { Button, HasError, AlertError, AlertErrors, AlertSuccess} from 'vform/src/components/bootstrap5'

export default {
    name: 'Form',
    components: { Button, HasError, AlertError, AlertErrors, AlertSuccess },

    data() {
      return {
        backendUrl: this.$store.state.backendUrl,
        editMode: false,
        
        categories: [],
        
        imagePreview: "",
        form: new Form({
            id: "",
            title: "",
            body: "",
            categories: [],
            image: ""
        }),
        
      };
    },

    watch: {
        keyword: function () {
          this.getCategory();
        }
    },

    mounted() {
        console.log("Component mounted.");
        this.getCategory();
    },

    methods: {
        getCategory() {
            let linkUrl =`${this.backendUrl}sub-category`;
            axios.get(linkUrl)
            .then((response) => {
                this.categories = response.data;
                // console.log(this.categories);
            })
            .catch((e) => {
                console.log(e);
            });
        },

        onImageChange(e){
            this.form.image = e.target.files[0];
            console.log(this.form.image);

            let reader = new FileReader();
            reader.addEventListener('load', function () {
                this.imagePreview = reader.result;
            }.bind(this), false);

            if (this.form.image) {
                reader.readAsDataURL(this.form.image);
            }
        },

        store() {
            this.$Progress.start();
            this.form.busy = true;
            this.form.post(`${this.backendUrl}career-tips`)
            .then((response) => {
                console.log(response);
                if (this.form.successful) {
                    this.$Progress.finish();
                    this.$notify({
                        type: "success",
                        title: "Success",
                        text: "Career Tips and tricks Added",
                    });
                    this.$router.push({name: 'app.career_tips'})
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
    }
}
</script>

<style>

</style>