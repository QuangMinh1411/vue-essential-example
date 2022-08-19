<template>
    <div>
        <ul>
            <li>
                <router-link to="/">Product</router-link>
            </li>
            <li>
                <router-link to="/cart">Shopping Cart {{numberOfItems}} </router-link>
            </li>
            <li>
                <router-link to="/user-info">User Info</router-link>
            </li>
            <li>
                <router-link to="/employee">Employee of Month</router-link>
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    name:'NavBar',
    props:['numberOfItems']
}
</script>
<style scoped>
    
</style>