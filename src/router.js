import { createWebHistory,createRouter} from "vue-router";
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import UserInforPage from './pages/UserInfoPage';
import EmployeePage from './pages/EmployeePage';
const routes = [
    {
        path:'/',
        component: ProductListPage
    },
    {
        path:'/products/:id',
        component: ProductDetailPage
    },
    {
        path:'/cart',
        component: ShoppingCartPage
    },
    {
        path:'/user-info',
        component: UserInforPage
    },
    {
        path:'/employee',
        component:EmployeePage
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;