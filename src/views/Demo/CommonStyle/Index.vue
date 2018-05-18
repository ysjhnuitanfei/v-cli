<template>
  <div class='commonStyle' id='commonStyle'>
    <div class="ellipsis" style="width:7.5rem">class:ellipsis;单行文本，超出省略号，示例如下。</div>
    <div class="ellipsis-line" style="width:7.5rem">class:ellipsis-line;多行文本超出省略号，默认两行，可以根据自己的需求样式覆盖。示例如下。</div>
    <div class="unselect">class:unselect;禁止用户选中。</div>
    <ul class="clearfix">
      <li>class:clearfix1</li>
      <li>清除浮动</li>
      <li></li>
      <li></li>
    </ul>
    <div style="width:5rem">
      class:full;以父类的宽高充满
      <img src="~@/assets/error.png" class="full">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'commonStyle'
  }
</script>
<style lang="less">
.commonStyle {
  ul li {
    float: left;
    width: 3.5rem;
    height: 2rem;
    background: lightgreen;
    list-style-type: none;
    margin: 2px 5px 4px;
    word-wrap: break-word;
  }
}
</style>
