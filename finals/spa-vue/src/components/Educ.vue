
<template>
  <div id="app">
    <h1>Nickaella A. Notra</h1>
    <h2>{{ msg2 }}</h2>
    <h3>Elementary:  </h3>
    <p><strong>Concepcion North Central Elementary School (2008-2012)<br><br>
	Livings Stones Christian Academy (2012-2015)</strong></p>
    <h3>Junior High School: </h3>
    <p><strong> Benigno Simeon Aquino National High School (2015-2019)</strong></p>    
    <h3>Senior High School:</h3>
    <p><strong>Benigno Simeon Aquino National High School (2019-2021)</strong></p> 
    <h3>College:</h3>
    <p><strong> Holy Angel University (2021-2023)</strong></p> 
  </div>
  
</template>

<script>
export default {
    name: 'education',
    data () {
        return {
            msg2: 'Education',
        };
}};
</script>

<style>
#app {
  font-family: Helvetica  ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

h2 {
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