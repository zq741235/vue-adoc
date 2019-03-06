import './assets/bootstrap.css'
// import 'highlight.js/styles/github.css'
// import 'github-markdown-css'
import Adoc from "./components/doc";

export default function install(Vue) {
  // components.map(Component => {
  //   Vue.component(Component.name, Component);
  // });
  Vue.component('adoc', Adoc)
}