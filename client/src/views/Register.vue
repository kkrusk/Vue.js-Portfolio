<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email">
    <br>
    <input type="password" name="password" placeholder="password" v-model="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService.js";

export default {
  data() {
    message: "Register";
    return {
      email: "",
      password: ""
    };
  },
  // watch: {
  //   email(value) {
  //     console.log("Email has changed", value);
  //   }
  // },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.email = "hello world";
  //   }, 1000);
  // }
};
</script>

<style>
</style>
