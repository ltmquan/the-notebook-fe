import { createWebHistory, createRouter } from "vue-router";
const Home = () => import('../containers/home/home.container.vue');
const Login = () => import('../containers/login/login.container.vue');
const Signup = () => import('../containers/signup/signup.container.vue');
const ForgotPassword = () => import('../containers/login/forgot-password.container.vue');
const Settings = () => import('../containers/settings/settings.container.vue');
const Profile = () => import('../containers/settings/profile.container.vue');
const Collections = () => import('../containers/notebook/collections.container.vue');
const Notebook = () => import('../containers/notebook/notebook.container.vue');
const Note = () => import('../containers/note/note.container.vue');
const Flashcard = () => import('../containers/flashcard/flashcard.container.vue');

const routes = [
  {
    path: '/',
    alias: ['/home'],
    name: 'HOME',
    component: Home
  },
  {
    path: '/login',
    name: 'LOGIN',
    component: Login
  },
  {
    path: '/signup',
    name: 'SIGNUP',
    component: Signup
  },
  {
    path: '/forgot-password',
    name: 'FORGOT_PASSWORD',
    component: ForgotPassword
  },
  {
    path: '/settings',
    name: 'SETTINGS',
    component: Settings
  },
  {
    path: '/settings/profile',
    name: 'PROFILE',
    component: Profile
  },
  {
    path: '/collections',
    name: 'COLLECTIONS',
    component: Collections
  },
  {
    path: '/notebook/:id',
    name: 'NOTEBOOK',
    component: Notebook
  },
  {
    path: '/notebook/:notebookId/note/:id',
    name: 'NOTE',
    component: Note
  },
  {
    path: '/flashcard',
    name: 'FLASHCARD',
    component: Flashcard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;