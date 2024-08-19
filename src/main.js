import './assets/bootstrap.css' 

import Adoc from "./components/doc.vue";

export default function install(app) {
  // components.map(Component => {
  //   Vue.component(Component.name, Component);
  // });
  app.component('Adoc', Adoc)
}