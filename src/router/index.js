import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Fiskebutikken from '../pages/Fiskebutikken.vue'
import Restauranten from '../pages/Restauranten.vue'
import Bistroen from '../pages/Bistroen.vue'
import Baren from '../pages/Baren.vue'
import Åbningstider from '../pages/Åbningstider.vue'
import OmOs from '../pages/OmOs.vue'
import Arrangementer from '../pages/Arrangementer.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/fiskebutikken', component: Fiskebutikken },
  { path: '/restauranten', component: Restauranten },
  { path: '/bistroen', component: Bistroen },
  { path: '/baren', component: Baren },
  { path: '/åbningstider', component: Åbningstider },
  { path: '/om-os', component: OmOs },
  { path: '/arrangementer', component: Arrangementer },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
