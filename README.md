# adoc

## 安装
```
npm install vue-adoc 
```

### 使用

```javascript
// main.js
import Adoc from 'vue-adoc'
Vue.use(Adoc)
```
```html
// app
<adoc :navs="[{
      "title": "快速开始",
      "list": [
      {
        "path": "/other/introduction",
        "name": "介绍"
      }]
  }]"
  :topOptions="{
  title:'UI'
  log:'xx.png'
}">
  <router-view />
</adoc>
```

