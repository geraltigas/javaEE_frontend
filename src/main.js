import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {
  Pagination,
  Table,
    TableColumn,
  Button,
  Card,
  Tabs,
    TabPane,
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
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Card)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
