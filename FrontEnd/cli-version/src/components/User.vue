<template>
    <Header />
    <h1>Hello {{ name }}, Welcome to User page</h1>
    <input type="newUsername" v-model="newUser" placeholder="Change Username" />
    <button v-on:click="ChangeUsername">Change</button>
    <p></p>
    <input type="newEmail" v-model="newEmail" placeholder="Change Email" />
    <button v-on:click="ChangeMail">Change</button>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: 'User',
    data() {
        return {
            name: '',
            newUser: '',
            newEmail: ''
        }

    },
    components: {
        Header
    },
    methods: {
        async ChangeUsername() {

            let result = await axios.get(`http://localhost:3000/users?name=${this.name}`)
            {
                this.name = this.newUser;
            };
        },
        async ChangeMail() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}`)
            console.warn("Mail: " + result)
        }

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