import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: "link-active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // 測試
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test/TestView.vue'),
      children: [
        // {
        //   path: 'bs-form',
        //   name: 'testBsForm',
        //   component: () => import('../views/test/TestBsForm.vue'),
        // },
      ],
    }, // 測試 - end
  ], // routes - end
}); // router - end

export default router;
