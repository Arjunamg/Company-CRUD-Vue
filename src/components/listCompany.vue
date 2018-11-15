<template>
  <div class="container">
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Address</th>
          <th>City</th>
          <th >Edit</th>
          <th >Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companies" :key="company.name" >
          <td>{{ company.name }}</td>
          <td>{{ company.address }}</td>
          <td>{{ company.city }}</td>
          <td>
            <router-link class="button is-info" :to="`/edit/${company._id}`">Edit</router-link>
          </td>
          <!-- <td>
            <router-link class="button is-danger" :to="`/delete/${company._id}`">Delete</router-link>
          </td> -->
          <td>
              <button class="button is-danger" type="button" @click="deleteCompany(company._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal" v-bind:class="{'is-active':isActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <!-- <header class="modal-card-head">
          <p class="modal-card-title">Are You sure,You Want to Delete ?</p>
          <button class="delete" aria-label="close"></button>
        </header> -->
        <section class="modal-card-body">
         Are You sure,You Want to Delete ?
         
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="deleteCom()">Confirm</button>
          <button class="button" @click="closeModal()">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapState } from "vuex";
import Router from 'vue-router'
export default {
  name: "listCompany",
  data() {
    return {
      isActive:false,
      compnyId:null
    };
  },
  methods: {
    deleteCompany(id) {
      this.isActive=true;
      this.compnyId = id;

    },
    deleteCom(){
      console.log(this.compnyId);
     this.$store.dispatch("DELETE_COMPANY",this.compnyId);
      this.closeModal();
      this.$store.dispatch("GET_COMPANY");
      //this.$store.getters.COMPANIES;
      //this.$router.push({name:'AddCompany'})
    },
    closeModal(){
      this.isActive=false;
    }
  },
  // updated() {
  //   this.$store.getters.COMPANIES;
  // },
  created() {
     return this.$store.dispatch("GET_COMPANY");
  },
  computed: {
    companies() {
      return this.$store.getters.COMPANIES;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-card-body{
  font-size: 30px;
  font-style: bold;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
