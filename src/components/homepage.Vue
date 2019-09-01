<template>
  <div id="homepage">
    <div>
      <h1 class="titleforwelcome">Welcome You</h1>
      <p class="mesforwelcome">欢迎您来到复杂网络与安全研究实验室</p>
      <p class="cliforwelcome">点击了解更多 ></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homepage',
}
</script>

<style>
  .titleforwelcome{
    font-size: 50px;
    font-weight: 100;
    line-height: 5px;
  }
  .mesforwelcome{
    font-size: 20px;
  }
  .cliforwelcome{
    color: #0760a8;
    font-weight: 500;
  }
  .cliforwelcome:hover{
    cursor: pointer;
    color: #404142;
    font-weight: 500;
  }
</style>
