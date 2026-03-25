<script lang="ts" src="./side-nav-component.ts">
</script>

<template>
    <nav class="side-nav">
        <h1>Accounting Settle-up System</h1>
        <hr class="solid">
        <ul>
            <li><a href="/landing">Dashboard</a></li>
            <li><a href="/profile">Groups</a></li>
            <li><a href="/settings">Payments</a></li>
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