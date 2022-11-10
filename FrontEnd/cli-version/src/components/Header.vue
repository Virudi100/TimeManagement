<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/working-time">Working times</router-link>
        <router-link to="/clock">Clocks</router-link>
        <router-link to="/user">User</router-link>
        <a v-on:click="logout" href="#">Logout</a>
        <ProfileAvatar username="User"></ProfileAvatar>
        <div>{{name}}</div>
    </div> 
</template>

<script>
import ProfileAvatar from 'vue-profile-avatar'
export default {
    name: 'Header',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "Login" })
        }
    },
    data() {
        return {
            name: ''
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
    },
    components:{
        ProfileAvatar
    }
}
</script>

<style>
.nav {
    background-color: #465362;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2f2;
    padding: 14px 5%;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    border: auto;
}

.nav a:hover {
    background: #ddd;
    color: #333;
}
</style>