// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Main.vue'
import router from './router'
import './styles/index.less'

import 'core-js/fn/array/find-index';
import Button from './components/button';
import { Row, Col } from './components/layout';
import locale from './locale';
import LoadingBar from './components/loading-bar';
import Message from './components/message';
import Modal from './components/modal';
import Notice from './components/notice';
import Icon from './components/icon';
/**
 import 'core-js/fn/array/find-index';
 import Affix from './components/affix';
 import Alert from './components/alert';
 import BackTop from './components/back-top';
 import Badge from './components/badge';
 import Breadcrumb from './components/breadcrumb';
 import Button from './components/button';
 import Card from './components/card';
 import Carousel from './components/carousel';
 import Cascader from './components/cascader';
 import Checkbox from './components/checkbox';
 import Circle from './components/circle';
 import Collapse from './components/collapse';
 import DatePicker from './components/date-picker';
 import Dropdown from './components/dropdown';
 import Form from './components/form';

 import Input from './components/input';
 import InputNumber from './components/input-number';
 import LoadingBar from './components/loading-bar';
 import Menu from './components/menu';
 import Message from './components/message';
 import Modal from './components/modal';
 import Notice from './components/notice';
 import Page from './components/page';
 import Poptip from './components/poptip';
 import Progress from './components/progress';
 import Radio from './components/radio';
 import Rate from './components/rate';
 import Slider from './components/slider';
 import Spin from './components/spin';
 import Steps from './components/steps';
 import Switch from './components/switch';
 import Table from './components/table';
 import Tabs from './components/tabs';
 import Tag from './components/tag';
 import Timeline from './components/timeline';
 import TimePicker from './components/time-picker';
 import Tooltip from './components/tooltip';
 import Transfer from './components/transfer';
 import Tree from './components/tree';
 import Upload from './components/upload';
 import { Row, Col } from './components/layout';
 import { Select, Option, OptionGroup } from './components/select';
 import locale from './locale';
 **/


const iview = {
  iButton: Button,
  ButtonGroup: Button.Group,
  iCol: Col,
  Icon,
  Row
};

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  Object.keys(iview).forEach((key) => {
    Vue.component(key, iview[key]);
});

Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;
};

// auto install
window.Vue=Vue;
if (typeof window !== 'undefined' && window.Vue) {

  install(window.Vue);
}


new Vue({
  el: '#main',
  router,
  template: '<Index/>',
  components: { Index}
})








