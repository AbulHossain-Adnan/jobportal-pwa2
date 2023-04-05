<template>
    <div id="form">
        <div class="row">
            <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Form Grid Layout</h4>
                            <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                                <div v-if="form.progress" class="text-center">Progress: {{ form.progress.percentage }}%</div>
                                <AlertError :form="form" message="There were some problems with your input." />

                                <div class="mb-3">
                                    <label for="title" class="form-label">Title</label>
                                    <input v-model="form.title" type="text" name="title" class="form-control" placeholder="Enter Your Title">
                                    <HasError :form="form" field="title" />
                                </div>

                                <div class="mb-3">
                                    <label for="prelude" class="form-label">Prelude</label>
                                    <textarea v-model="form.prelude" class="form-control" name="prelude"></textarea>
                                    <HasError :form="form" field="prelude" />
                                </div>

                                <div class="mb-3">
                                    <label for="objectives" class="form-label">Objectives</label>
                                    <textarea v-model="form.objectives" class="form-control" name="objectives"></textarea>
                                    <HasError :form="form" field="objectives" />
                                </div>

                                <div class="mb-3">
                                    <label for="mission" class="form-label">Mission</label>
                                    <textarea v-model="form.mission" class="form-control" name="mission"></textarea>
                                    <HasError :form="form" field="mission" />
                                </div>

                                <div class="mb-3">
                                    <label for="conclusion" class="form-label">conclusion</label>
                                    <textarea v-model="form.conclusion" class="form-control" name="conclusion"></textarea>
                                    <HasError :form="form" field="conclusion" />
                                </div>

                                <div class="col-lg-4">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <select v-model="form.status" class="form-select">
                                            <option selected>Choose One</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                        <HasError :form="form" field="status" />
                                    </div>
                                </div>

                                <div>
                                    <button :disabled="form.busy" type="submit" class="btn btn-primary"> {{ editMode ? 'Update' : 'Create' }}</button>
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
import axios from 'axios';
    import Form from 'vform';
    import { Button, HasError, AlertError, AlertErrors, AlertSuccess} from 'vform/src/components/bootstrap5'

    export default {
        name: 'Form',
        components: { Button, HasError, AlertError, AlertErrors, AlertSuccess },

        data() {
            return {
                backendUrl: this.$store.state.backendUrl,
                editMode: false,
                aboutCccs: [],

                form: new Form({
                    id: "",
                    title: "",
                    prelude: "",
                    objectives: "",
                    mission: "",
                    conclusion: "",
                    status: "",
                }),
            };
    },

    mounted() {
            console.log(this.$route.params.id);
        },


        created() {
            this.axios
                .get(`this.$store.state.backendUrl/api/about-ccc/edit/${this.$route.params.id}`)
                .then((res) => {
                    this.product = res.data;
                });
        },

        methods: {
            store() {
                this.$Progress.start()
                this.form.busy = true
                this.form.post(`${this.backendUrl}about-ccc`)
                    .then(response => {
                        if(this.form.successful){
                            this.$Progress.finish()
                            this.$notify({ type: "success", title: "Success", text: "About CCC Added" });
                            this.$router.push({ path: '/about-ccc' })
                        }else{
                            this.$Progress.fail()
                            this.$notify({type: "error", title: "Error", text: 'Something went wrong try again later'})
                        }
                    })
                    .catch(e => {
                        this.$Progress.fail()
                        console.log(e)
                    })
            },
        }
    }
</script>

<style>

</style>