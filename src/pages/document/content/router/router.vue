<template>
  <div class="docRouter">
    <div class="docRouter-link">
      <router-link v-bind:to="'/document/router'">关于</router-link>
      <router-link v-bind:to="'/document/router/welcome'">欢迎</router-link>
      <router-link v-bind:to="'/document/router/param'">传参</router-link>
      <router-link v-bind:to="'/document/router/protect'">路由守护</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .docRouter {
    display: flex;
    flex-direction: column;
  }
  .docRouter-link {
    display: flex;
    justify-content: center;
  }
  .docRouter-link a {
    margin-right: 20px;
  }
</style>

