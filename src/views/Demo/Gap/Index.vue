<template>
  <div class='gap' id='gap'>
    F12观察network请求
    <div v-stat="{'act':'show',params:{origin:16}}">
      页面展示
    </div>
    <div v-stat="{'act':'click',params:{origin:17}}">
      点击我开始埋点
    </div>
    <div v-stat="[{'act':'show',params:{origin:18}},{'act':'click',params:{origin:19}}]">
      页面展示或点击都会发生埋点
    </div>
    <div v-stat="{'act':'mouseover',params:{origin:20}}">
      鼠标悬浮会发生埋点(自定义触发行为)
    </div>
  </div>
</template>
