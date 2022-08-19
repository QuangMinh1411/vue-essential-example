<template>
  <NavBar :numberOfItems="numberOfItems" />
  <router-view :shoppingCart="shoppingCart"
  :products="products"
  :userInfo="userInfo"
  @addToCart="addCart"
  @userInfoSaved="updateUserInfo">
  </router-view>
</template>

<script>

import products from './pages/products';
import NavBar from './components/NavBar';
export default {
  name: 'App',
  components: {
    NavBar,
  
},
  data() {
    return {
      shoppingCartIds: [],
      products,
      userInfo:{
        name:'',
        age:0,
        address:''
      }
    }
  },
  computed: {
    shoppingCart(){
      return this.shoppingCartIds.map(id=>{
        return this.products.find(p=>p.id===id);
      });
    },
    numberOfItems(){
      return this.shoppingCartIds.length;
    }
  },
  methods: {
    addCart(id) {
      this.shoppingCartIds.push(id);
      console.log(this.shoppingCartIds);
    },
    updateUserInfo(name,age,address){
      this.userInfo = {name,age,address}
    }
  }
}
</script>

<style>

</style>
