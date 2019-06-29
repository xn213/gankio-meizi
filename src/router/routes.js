const Home = () => import('pages/home')
const Day = () => import('pages/day')
const Ios = () => import('pages/ios')
const Web = () => import('pages/web')
const Android = () => import('pages/android')
const NotFound = () => import('pages/not-found')

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/day',
    name:'day',
    component: Day
  },
  {
    path: '/ios',
    name: 'ios',
    component: Ios
  },
  {
    path: '/android',
    name: 'android',
    component: Android
  },
  {
    path: '/web',
    name: 'web',
    component: Web
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

export default routes