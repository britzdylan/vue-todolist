<template>
  <div class=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <ForgotPassword
      v-if="showForgotPassword"
      @forgotPasswordToggle="forgotPasswordToggle"
    />
    <div class=" space-y-8" v-else>
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="@/assets/logo.png"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <Loginform
        @loginDetails="loginDetails"
        @submit="login"
        :loginForm="loginForm"
      />
      <div class="text-sm text-center">
        <router-link
          class="font-medium text-green-600 hover:text-green-500"
          to="/sign-up"
          >Sign Up</router-link
        >
      </div>

      <div class="text-sm text-center">
        <a
          @click="forgotPasswordToggle"
          class="font-medium text-green-600 hover:text-green-500"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Loginform from "@/components/Loginform.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";

export default {
  name: "Login",
  components: {
    Loginform,
    ForgotPassword
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      showForgotPassword: false
    };
  },
  methods: {
    loginDetails(value, key) {
      this.loginForm[key] = value;
    },
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    },
    forgotPasswordToggle() {
      this.showForgotPassword = !this.showForgotPassword;
    }
  },
  computed: {}
};
</script>
