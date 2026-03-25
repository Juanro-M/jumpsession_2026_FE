<script setup lang="ts">
import { useAuthLogic } from './AuthView.ts'

const {
    isRightPanelActive,
    loginUsername,
    loginPassword,
    loginMessage,
    loginIsError,
    showLoginPassword,
    regUsername,
    regEmail,
    regPassword,
    regMessage,
    regIsError,
    showRegPassword,
    togglePanel,
    handleRegister,
    handleLogin
} = useAuthLogic()
</script>

<template>
  <div class="auth-wrapper">
    <div class="header-banner">
      <h1>ACCOUNTING SETTLE-UP SYSTEM</h1>
    </div>

    <div :class="['container', { 'right-panel-active': isRightPanelActive }]" id="container">
      <!-- Sign Up Form (Register) -->
      <div class="form-container sign-up-container">
        <form @submit.prevent="handleRegister" class="dark-form">
          <h1>Join the System</h1>
          <p class="subtitle">Create an account to manage your settle-ups.</p>
          <input v-model="regUsername" type="text" placeholder="Username" required />
          <input v-model="regEmail" type="email" placeholder="Email" required />
          <div class="input-group">
            <input v-model="regPassword" :type="showRegPassword ? 'text' : 'password'" placeholder="Password" required />
            <button type="button" class="toggle-password" @click="showRegPassword = !showRegPassword">
                <svg v-if="showRegPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
          
          <div v-if="regMessage" :class="['message', { error: regIsError }]">
            {{ regMessage }}
          </div>
          
          <button type="submit" class="primary-btn orange">Register</button>
        </form>
      </div>

      <!-- Sign In Form (Login) -->
      <div class="form-container sign-in-container">
        <form @submit.prevent="handleLogin" class="orange-form">
          <h1>Welcome</h1>
          <p class="subtitle">Access your accounting settle-up dashboard.</p>
          <input v-model="loginUsername" type="text" placeholder="Username" required />
          <div class="input-group">
            <input v-model="loginPassword" :type="showLoginPassword ? 'text' : 'password'" placeholder="Password" required />
            <button type="button" class="toggle-password" @click="showLoginPassword = !showLoginPassword">
                <svg v-if="showLoginPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
          
          <div v-if="loginMessage" :class="['message', { error: loginIsError }]">
            {{ loginMessage }}
          </div>
          
          <button type="submit" class="primary-btn dark">Login</button>
        </form>
      </div>

      <!-- Overlay -->
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Switch to Login</h1>
            <p>Already have an account? Use your credentials to sign in.</p>
            <button class="ghost-btn" @click="togglePanel">Login</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Need an Account?</h1>
            <p>Get started with our system to simplify your accounting.</p>
            <button class="ghost-btn" @click="togglePanel">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./AuthView.scss"></style>
