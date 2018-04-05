<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>{{ authors }}</h3>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      title: 'Financial Freedom app',
      authors: 'By: Swoop Dogg & White Boy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h3 {
  font-weight: normal;
}
</style>
