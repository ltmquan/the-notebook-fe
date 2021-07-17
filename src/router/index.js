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
const AddNote = () => import('../containers/note/add-note.container.vue');
const Flashcard = () => import('../containers/flashcard/flashcard.container.vue');

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
  },
  {
    path: '/flashcard',
    name: "Flashcard",
    component: Flashcard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;