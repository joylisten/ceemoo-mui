<template>
  <div id="main">
    <img src="./assets/logo.png" style="width:200px;">
    <br/>
    <Row>
      <i-col span="12">col-12</i-col>
      <i-col span="12">col-12</i-col>
    </Row>
    <br>
    <Row>
      <i-col span="8">col-8</i-col>
      <i-col span="8">col-8</i-col>
      <i-col span="8">col-8</i-col>
    </Row>
    <br>
    <Row>
      <i-col span="6">col-6</i-col>
      <i-col span="6">col-6</i-col>
      <i-col span="6">col-6</i-col>
      <i-col span="6">col-6</i-col>
    </Row>
    <i-button>Default</i-button>
    <i-button type="primary">Primary</i-button>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="dashed">Dashed</i-button>
    <i-button type="text">Text</i-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'main'
}
</script>


