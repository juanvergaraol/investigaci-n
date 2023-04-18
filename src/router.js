import Vue from 'vue';
import VueRouter from 'vue-router';
import inicio from "./components/inicio";
import menu from "./components/menu";
import contenido from "./components/contenido";
import actividades from "./components/actividades";
import act1 from "./components/act1";
import act2 from "./components/act2";
import act3 from "./components/act3";
import evaluacion from "./components/evaluacion";
import creditos from "./components/creditos";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio,
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu,

    children: [
      {
        path: '/contenido',
        name: 'contenido',
        component: contenido,
      },
      {
        path: '/actividades/',
        name: 'actividades',
        component: actividades,
        children: [{
          path: '/act1',
          name: 'act1',
          component: act1
        },
        {
          path: '/act2',
          name: 'act2',
          component: act2,
        },
        {
          path: '/act3',
          name: 'act3',
          component: act3,
        },
        ]
      },
      {
        path: '/evaluacion',
        name: 'evaluacion',
        component: evaluacion,

      },

      {
        path: '/creditos',
        name: 'creditos',
        component: creditos,

      },]
  },];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;