import { createWebHistory, createRouter } from "vue-router";
const Home = () => import('../containers/home.container.vue');
const Login = () => import('../containers/login.container.vue');
const Signup = () => import('../containers/signup.container.vue');
const ForgotPassword = () => import('../containers/forgot-password.container.vue');
const Settings = () => import('../containers/settings.container.vue');
const Profile = () => import('../containers/profile.container.vue');
const Collections = () => import('../containers/collections.container.vue');
const Notebook = () => import('../containers/notebook.container.vue');
const Note = () => import('../containers/note.container.vue');
const AddNote = () => import('../containers/add-note.container.vue');

const routes = [
  {
    path: '/',
    alias: ['/home'],
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgot-password',
    name: 'Forgot password',
    component: ForgotPassword
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/settings/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/collections',
    name: 'Collections',
    component: Collections
  },
  {
    path: '/collections/:id',
    name: 'Notebook',
    component: Notebook
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: Note
  },
  {
    path: '/note/add-note',
    name: 'Add Note',
    component: AddNote
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;