<template>
    <div>
      <h1>{{ title }}<br><br></h1>
      <section id = "description">
        <img src="..\assets\meow2.jpg"> 
      </section>
    </div>
    
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'Welcome to the Gallery :>'
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
</style>