<template>
  <div id="main">
    <Row>
      <i-col span="24">
        <Menu mode="horizontal" theme="light" active-index="1"  eid="cm_menu">
          <Menu-item index="1">
            <Icon type="ios-paper"></Icon>
            内容管理
          </Menu-item>
          <Menu-item index="2">
            <Icon type="ios-people"></Icon>
            用户管理
          </Menu-item>
          <Submenu index="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
            </template>
            <Menu-group title="使用">
              <Menu-item index="3-1">新增和启动</Menu-item>
              <Menu-item index="3-2">活跃分析</Menu-item>
              <Menu-item index="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
              <Menu-item index="3-4">用户留存</Menu-item>
              <Menu-item index="3-5">流失用户</Menu-item>
            </Menu-group>
          </Submenu>
          <Menu-item index="4">
            <Icon type="settings"></Icon>
            综合设置
          </Menu-item>
        </Menu>
      </i-col>
    </Row>


    <Row>
      <i-col span="8"></i-col>
      <i-col span="8"><img src="./assets/logo.png" style="width:200px;"></i-col>
      <i-col span="8"></i-col>
    </Row>
    <br>
    <Row>
      <i-col span="24">
        <i-button>Default</i-button>
        <i-button type="primary">Primary</i-button>
        <i-button type="ghost">Ghost</i-button>
        <i-button type="dashed">Dashed</i-button>
        <i-button type="text" @click="open(true)">Text</i-button>
        <Icon type="plus-circled" size="24"></Icon>
      </i-col>
    </Row>
    <br>
    <Row>
      <i-col span="24">
        <!--
        <i-select :model.sync="model1" style="width:200px">
          <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        -->
      </i-col>
    </Row>
    <Row>
      <i-col span="24"></i-col>
    </Row>
    <Row>
      <i-col span="24"></i-col>
    </Row>
    <Row>
      <i-col span="24"></i-col>
    </Row>
    <Row>
      <i-col span="24"></i-col>
    </Row>
    <Row>
      <i-col span="24"></i-col>
    </Row>



    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      theme1: 'light',
      cityList: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ],
      model1: ''
    }
  },
  methods: {
      open:function(nodesc){
        alert(nodesc);
      }
  }
}
</script>


