<template>
  <div>
    <p>Please enter your name: {{message}}</p>
    <input v-model="message" placeholder="Enter text here:">
    <p>In how many years do you wan to retire in: {{yearsToRetirement}}</p>
    <input v-model="yearsToRetirement" placeholder="Enter text here:">
    <p>How much is your initial investment: {{initialInvestment}}</p>
    <input v-model="initialInvestment" placeholder="Enter text here:">
    <p>How much do you want to put in a year: {{continousInvestment}}</p>
    <input v-model="continousInvestment" placeholder="Enter text here:">
  </div>
</template>

<script>
export default {
  name: 'userInput',
  data() {
    return {
      message: '',
      yearsToRetirement: '',
      initialInvestment: '',
      continousInvestment: '',
    }
  },
}
</script>

<style>
</style>
