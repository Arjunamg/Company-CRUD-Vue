<template>

    <div class="container">
    <form @submit.prevent="addCompany">
    <div class="field">
        <label class="label">Company Name :</label>
        <div class="control">
            <input class="input" type="text" placeholder="Company Name" v-model="company.name">
        </div>
    </div>

    <div class="field">
    <label class="label">Company Address</label>
    <div class="control">
        <input class="input" type="text" placeholder="Company Address" v-model="company.address">
        <!-- <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
        </span> -->
    </div>
    </div>

    <div class="field">
    <label class="label">Company City</label>
    <div class="control ">
        <input class="input" type="text" placeholder="Company City" v-model="company.city">
        <!-- <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
        </span> -->
    </div>
    </div>

    <!-- <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
        <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
        </span>
    </div>
    <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
    <label class="label">Subject</label>
    <div class="control">
        <div class="select">
        <select>
            <option>Select dropdown</option>
            <option>With options</option>
        </select>
        </div>
    </div>
    </div>

    <div class="field">
    <label class="label">Message</label>
    <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
    </div>
    </div>

    <div class="field">
    <div class="control">
        <label class="checkbox">
        <input type="checkbox">
        I agree to the <a href="#">terms and conditions</a>
        </label>
    </div>
    </div>

    <div class="field">
    <div class="control">
        <label class="radio">
        <input type="radio" name="question">
        Yes
        </label>
        <label class="radio">
        <input type="radio" name="question">
        No
        </label>
    </div>
    </div> -->

    <div class="field is-grouped">
    <div class="control">
        <button class="button is-link" >Submit</button>
    </div>
    <div class="control">
        <button class="button is-danger" @click="goBack()">Cancel</button>
    </div>
    </div>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            company:{
                name:'',
                address:'',
                city:''
            }
        }
    },
    methods:{
        goBack(){
             this.$router.push({name:'companylist'})
        },
        addCompany(){
            this.$store.dispatch('ADD_COMPANY',this.company);
             this.$router.push({name:'companylist'})
        }
    }
}
</script>

<style>

</style>
