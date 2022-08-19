<template>
    <div>
        <h1>Shopping Cart </h1>
        <div v-for="product in shoppingCart" :key="product.id">
            <router-link :to="`/products/${product.id}`">
                <h3>{{product.name}}</h3>
            </router-link>
            <p>{{product.price}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'ShoppingCartPage',
    props:['shoppingCart','products'],

}
</script>
<style scoped>
    
</style>