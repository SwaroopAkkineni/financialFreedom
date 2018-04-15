<template>
  <div>
    <p>Please enter your name: -- {{getMessage}}</p>
    <input v-model="message" v-on:change="updateMessage" placeholder="Enter text here:">

    <p>In how many years do you wan to retire in:  {{getYearsToRetirement}}</p>
    <input v-model="yearsToRetirement" v-on:change="updateYearsToRetirement" placeholder="Enter text here:">

    <p>How much is your initial investment: -- {{getInitialInvestment}}</p>
    <input v-model="initialInvestment" v-on:change="updateInitialInvestment" placeholder="Enter text here:">

    <p>How much do you want to put in a year:  -- {{getContinousInvestment}}</p>
    <input v-model="continousInvestment" v-on:change="updateContinousInvestment" placeholder="Enter text here:">
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

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
  computed: {
    ...mapGetters([
      'getMessage',
      'getYearsToRetirement',
      'getInitialInvestment',
      'getContinousInvestment',
    ])
  },
  methods: {
    ...mapActions([
      'setMessage',
      'setYearsToRetirement',
      'setInitialInvestment',
      'setContinousInvestment',
    ]),
    updateMessage () {
      this.setMessage(this.message)
    },
    updateYearsToRetirement () {
      this.setYearsToRetirement(this.yearsToRetirement)
    },
    updateInitialInvestment () {
      this.setInitialInvestment(this.initialInvestment)
    },
    updateContinousInvestment () {
      this.setContinousInvestment(this.continousInvestment)
    },
  }
}
</script>

<style>
</style>
