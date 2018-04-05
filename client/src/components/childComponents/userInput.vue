<template>
  <div>
    <p>Please enter your name:{{message}}</p>
    <input v-model="message">
    <p>In how many years do you wan to retire in: {{yearsToRetirement}}</p>
    <input v-model="yearsToRetirement">
    <p>How much is your initial investment:{{initialInvestment}}</p>
    <input v-model="initialInvestment">
    <p>How much do you want to put in a year:{{continousInvestment}}</p>
    <input v-model="continousInvestment">
  </div>
</template>

<script>
export default {
  name: 'userInput',
  data () {
    return {
      message: '',
      yearsToRetirement: '',
      initialInvestment: '',
      continousInvestment: ''
    }
  }
}
</script>

<style>
</style>
