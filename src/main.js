import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {
  Carousel,
  CarouselItem,
  Col,
  Container,
  Footer,
  Header,
  Link,
  Main,
  Menu,
  MenuItem,
  Row,
  Tag,
  Input,
    Radio,
    RadioGroup,
  Pagination,
    Card
} from 'element-ui'

Vue.config.productionTip = false
Vue.use(Container)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(Link)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tag)
Vue.use(Menu)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Pagination)
Vue.use(Card)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
