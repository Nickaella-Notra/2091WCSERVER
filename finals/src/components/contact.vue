<template>
    <div>
      <h1>{{ title }}<br><br></h1>
      <h1><span>Email </span>me at:<br></h1>
      <p>nickaellanotra10@gmail.com</p> 
      <h1><br><span>GitHub </span>link:<br></h1>
      <a href="https://github.com/Nickaella-Notra">https://github.com/Nickaella-Notra</a>
    </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Welcome to the Contact Page :>'
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 2em;
}
#description{
  	font-size: 1em;
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
a{
  text-decoration: none;
  color: #231F20;
}

</style>