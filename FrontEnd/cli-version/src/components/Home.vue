<template>
    <Header />
    <h1>Hello {{ name }}, Welcome to home page</h1>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name: 'Home',
    data() {
        return {
            name: '',
            
        }
    },
    components: {
        Header
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

    }
}
</script>