<template>
    <div>
        <h1><br>{{ title }}</h1>
        <section id = "description">
        <p><br>This is the<span> second final laboratory project<br></span>created by Nickaella Notra in WD-201<br>
          This is created using<span> Vue.js </span>with routing and navigation.<br><br><br><br><br><br></p>
      </section>
    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'Welcome to the About Page :>'
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