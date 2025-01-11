import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import CourseQuestionnaire from '../views/CourseQuestionnaire.vue'
import LearningPlan from '../views/LearningPlan/index.vue'
import MyCourses from '../views/MyCourses.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/my-courses',
    name: 'MyCourses',
    component: MyCourses
  },
  {
    path: '/questionnaire',
    name: 'CourseQuestionnaire',
    component: CourseQuestionnaire
  },
  {
    path: '/learning-plan',
    name: 'LearningPlan',
    component: LearningPlan
  }
]

const router = createRouter({
  history: createWebHashHistory('/personalized-learning/'),
  routes
})

export default router 