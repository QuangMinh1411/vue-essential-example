<template>
    <div>
      <h1>User Info</h1> 
      <div v-if="showValidation">
        <div v-for="error in validationErrors" :key="error">
            {{error}}
      </div>
      </div>
      
      <div>
        <input type="text" placeholder="Enter your name" v-model="name">
        <input type="number" placeholder="Age" v-model="age">
        <input type="text" placeholder="Enter your address" v-model="address">
        <button @click="displayData">Save</button>
      </div>
    </div>
</template>
<script>
export default {
    name:'UserInfoPage',
    props:['userInfo'],
    emits:['userInfoSaved'],
    data() {
        return {
            name: this.userInfo.name,
            age:this.userInfo.age,
            address:this.userInfo.address,
            showValidation:false
        }
    },
    methods: {
        displayData(){
            this.showValidation = true;
            if(this.validationErrors.length==0){
                this.$emit('userInfoSaved',this.name,this.age,this.address);
            }
        }
    },
    computed:    {
        validationErrors() {
            let errors = [];
            if(this.name.length<2){
                errors.push("Please enter a longer name");
            }
            if(this.age<=16){
                errors.push("Age must be 16 or greater");
            }
            if(this.address.length<=5){
                errors.push("Please enter an address longer than 4 characters");
            }
            return errors;
        }
    }
}
</script>
<style>
    
</style>