<script lang="ts" src="./side-nav-component.ts">
</script>

<template>
    <nav class="side-nav">
        <h1>Accounting Settle-up System</h1>
        <hr class="solid">
        <ul>
            <li @click="navigateTo('landing')">Dashboard</li>
            <li @click="navigateTo('group')">Groups</li>
            <li @click="navigateTo('payment')">Payments</li>
            <li @click="navigateTo('friends')">Friends</li>
        </ul>
        <div class="nav-footer">
            <hr class="solid">
            <div>
                <p>Logged in as: User</p>
                <button class="logout-btn" @click="logout">Logout</button>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" src="./side-nav-component.scss"></style>