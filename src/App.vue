<template>
  <img  class= "logo" alt="Vue logo" src="./assets/logo.png">
  <router-view />
 
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo{
  width: 100px;
  height: 100px;
}

.register input, .login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1 px solid skyblue;

}

.register button, .login button {
    width: 320px;
    height: 40px;
    border: 1 px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
</style>
