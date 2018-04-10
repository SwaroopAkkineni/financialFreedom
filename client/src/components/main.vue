<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>{{ authors }}</h3>
    <div class='grid-container'>
      <userInput></userInput>
    </div>
  </div>
</template>

<script>
import userInput from './childComponents/userInput'

export default {
  name: 'main',
  data () {
    return {
      title: 'Financial Freedom app',
      authors: 'By: Swoop Dogg & White Boy'
    }
  },
  components: {
    'userInput': userInput
  }
}
</script>

<style>
  h1, h3 {
    font-weight: normal;
  }
  .grid-container{
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
    padding: 30px;
  }
  .grid-container > div{
    text-align:left;
    padding: 30px 0;
    margin: 15px;
  }
</style>
