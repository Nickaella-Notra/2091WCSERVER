
<template>
  <div id="app">
    <h1 id="lol">{{ msg }}</h1>
    <h1>Nickaella A. Notra</h1>
    <profile></profile>
    <educ></educ>
    <skill></skill>
  </div>
</template>

<script>
import profile from './components/Profile.vue'
import education from './components/Educ.vue'
import skill from './components/Skills.vue'
export default {
  components: {profile, education, skill},
  name: 'app',
  data () {
    return {
      msg: 'Resume'
    }
  }
}

</script>

<style>
#app {
  font-family: Helvetica  ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

h2, #lol{
  color: #FFFFFF;
  background-color: #7DA1BB;
  font-weight: normal;
  width: 50%;
  margin: 1% 25%;
  padding: 0.5em;
}

h3{
  text-align: left;
  color: #545454;
  padding-top: 1em;
  background-color: #F8F4EE;
  width: 50%;
  margin: 0 25%;
  padding: 1em 5em 1em 1em;
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
  color: #B56565;
  text-decoration: none;
  height: 2em;
}
a:link{
  color: #B56565;
}
a:visited {
  color: #B56565;
}
a:hover::after{
	content: '';
	width: 100%;
  opacity: 0.8;
	height: 3px;
	background: #B56565;
	display: block;
	margin: auto;}


p {
  color: #545454;
  background-color: #EABCBC;
  width: 50%;
  margin: 0 25%;
  padding: 1em 5em;
}
</style>