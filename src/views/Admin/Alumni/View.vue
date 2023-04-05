<template>
    <div id="form">
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Alumni Show</h4>

                        <table class="table table-bordered ">
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{{ alumni.name }}</td>
                                    <td scope="row">ewu_id_no</td>
                                    <td>{{ alumni.ewu_id_no }}</td>
                                </tr>

                                <tr>
                                    <th scope="row">E-mail Address</th>
                                    <td>{{ alumni.email }}</td>
                                    <td scope="row">Contact Number</td>
                                    <td>{{ alumni.contact_number }}</td>
                                </tr>

                                <tr>
                                    <th scope="row">NID</th>
                                    <td>{{ alumni.nid }}</td>
                                    <td scope="row">Date of Birth</td>
                                    <td>{{ alumni.dob }}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>{{ alumni.gender }}</td>
                                    <td scope="row">Blood Group</td>
                                    <td>{{ alumni.blood_group }}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'View',
    components: { },

    data() {
      return {
        backendUrl: this.$store.state.backendUrl,
        alumni: ''
      };
    },

    mounted() {
        console.log('Page Mounted!');
    },

    created() {
        axios.get(`${this.backendUrl}alumni/${this.$route.query.id}`)
        .then((response) => {
            this.alumni = response.data
            console.log(this.alumni);
        });
    },

    methods: {
       
    }
}
</script>










