<template>
  <div class="hello">
    <h1>From {{ msg.from }} to {{ msg. to }} : {{ msg.body }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    var d = { msg: {} }
    return d
  },
  created () {
    // demo loading data from server inside of component
    this.$http.get('/static/data/hello.json').then((response) => {
      response.status
      response.statusText
      response.headers.get('Expires')
      return response.json()
    }, (response) => {
      // error callback
    }).then((json) => {
      // update data from server
      this.msg = json
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
