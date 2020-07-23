import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/page/index'
import EditProduct from '@/page/product/editProduct'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '',
			redirect: '/index'
		},
		{
			path: '/index',
			name: 'Index',
			component: Index
		},
		{
			path: '/editProduct',
			name: 'EditProduct',
			component: EditProduct
		}
	]
})

export default router