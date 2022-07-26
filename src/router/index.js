import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView'),
		meta: { title: 'Home - MyApp' }
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/AboutView'),
		meta: { title: 'About - MyApp' }
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: () => import('@/views/ContactsView'),
		meta: { title: 'Contacts - MyApp' }
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

const DEFAULT_TITLE = 'Some title myApp';
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;