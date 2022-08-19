<template>
    <div>
        <h1 v-flash="1000">Employee of the month</h1>
        <div v-if="personData">
            <h3>{{personData.name.first}} {{personData.name.last}}</h3>
        </div>
        
    </div>
</template>
<script>

import randomPersonMixin from '../mixins/randomPersonMixin'
export default {
    name:'EmployeePage',
    mixins: [randomPersonMixin]
}
</script>
<style>
    
</style>