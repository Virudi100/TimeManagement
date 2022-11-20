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

        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <input type="checkbox" v-model="todo.done">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </li>
        </ul>

        <canvas id="myChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
import Chart from 'chart.js/auto';
import { isTSMethodSignature } from '@babel/types';

let id = 0
export default {
    name: 'Workingtime',
    data() {
        return {
            newTodo: '',
            name: '',
            worktimes: [],
            todos: [{ id: id++, text: 'Clock Trigger', done: false }],
        }
    },
    components: {
        Header
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
                data: [62, 59, 80, 81, 56, 55, 40],
                fill: true,
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

<style>
.done {
  text-decoration: line-through;}
</style>