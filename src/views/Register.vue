<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        already have account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>Creat your account</h2>
      <!-- 名字前三  -->
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="first name" v-model="firstName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="last name" v-model="lastName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="User Name" v-model="userName" />
          <user class="icon" />
        </div>
        <!-- email -->
        <div class="input">
          <input type="text" placeholder="e-mail" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="password" v-model="password" />
          <password class="icon" />
        </div>
        <div class="error" v-show="error">{{ this.errorMsg }}</div>
      </div>

      <button @click.prevent="register">sing up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import fireBase from "fireBase/app";
import "fireBase/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const fireBaseAuth = await fireBase.auth();
        const creatUser = await fireBaseAuth.creatUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await creatUser;
        const dataBase = db.collection("user").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lasttName,
          userName: this.userName,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      (this.error = true), (this.errorMsg = "please register");
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>