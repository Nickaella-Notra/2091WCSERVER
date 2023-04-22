<template>
    <div>
      <h1>{{ title }}</h1>
      <h1>What is <span>Vue.js</span><br><br></h1>
      <p><span>Vue.js </span>is a Javascript framework that is used form building interfaces<br>
        It is constructed above the standard <span>CSS</span>, <span>HTML</span> and <span>Javascript</span> <br>
        and helps with the development of user interfaces simple or complex with the<br>
        use of declarative and component-based programming </p>
    </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Welcome to the Blog Page :>'
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