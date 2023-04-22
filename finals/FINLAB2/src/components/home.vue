<template>
  <div class = "home">
    <h1><br>{{ msg }}</h1>
    <section id = "description">
      <h1><br><span>Created </span>by:<br></h1>
      <p><span>Nickaella Notra </span> WD-201</p>
		</section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to the Home Page :>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit css to this component only -->

<style scoped>
h1{
  font-size: 2em;
}
#description h1{
  	font-size: 2em;
}
#description p{
  	font-size: 1.5em;
}
div{
  height: 35em;
  background-size: cover;
	background-color: #ffffe6;
	color: #231F20;
	text-align: center;
	font-family: monospace, 'Courier New', Courier;
	padding: 2em 10em 2em 10em;
}
span{
  color: #8D2405;
  font-weight: bold;
}
</style>
