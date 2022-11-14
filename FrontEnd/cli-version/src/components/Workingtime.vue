<template>
    <Header />
    <div class="hello">
        <h1>Hello {{ name }}, Welcome to working time page</h1>
        <table border="1">
            <tr>
                <td>User</td>
                <td>Start Time</td>
                <td>End Time</td>
                <td>ID</td>
            </tr>
            <tr v-for="item in worktimes" :key="item.data">
                <td>{{ item.user }}</td>
                <td>{{ item.start + "h" }}</td>
                <td>{{ item.end + "h" }}</td>
                <td>{{ item.id }}</td>
            </tr>
        </table>
        <button class="ui button big toggle" :class="{ active: isActive }" @click="toggle">{{ isActive ? 'ON' : 'OFF'}}</button>
        <canvas id="myChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
import Chart from 'chart.js/auto';
import { isTSMethodSignature } from '@babel/types';
export default {
    name: 'Workingtime',
    data() {
        return {
            name: '',
            worktimes: []
        }
    },
    components: {
        Header
    },

    toggle() {
        this.isActive = !this.enable;
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;

        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        let result = await axios.get("http://localhost:3000/Workingtimes");
        console.warn(result)
        this.worktimes = result.data;

        const ctx = document.getElementById('myChart').getContext('2d');

        const labels = ['Clock1', 'Clock2', 'Clock3', 'Clock4', 'Clock5', 'Clock6', 'Clock7'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'Start Time',
                data: [, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };

        const myChart = new Chart(ctx, {
            type: 'line',
            data: data,

        });

        myChart;

    }
}
</script>