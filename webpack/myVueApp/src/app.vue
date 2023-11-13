<template>
  <div class="appbox">
    <div>app123~233fa</div>
    <Home />
    <ul>
      <li>
        <router-link to="/home">home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/page/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
.appbox {
  color: #2c3e50;
  margin-top: 60px;
  font-size: 12px;
}
</style>
