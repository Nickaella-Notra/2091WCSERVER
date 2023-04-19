
<template>
  <div id="app">
    <h2>{{ msg3 }}</h2>
    <h3>Objective: </h3>
    <p><strong>	Web Design<br>
	Wireframe Creation<br>
	Problem-Solving<br>
	Strong Communication <br>
	Front End Coding<br>
	UI/UX Design<br></strong></p>
    <h3>Languages Studied: </h3>
    <p><strong>	Java<br>
	C++<br>
	Python<br>
	SQL<br>
	HTML and CSS<br>
	JavaScript<br>
    </strong></p> 
  </div>
  
</template>

<script>
export default {
    name: 'skills',
    data () {
        return {
            msg3: 'Skills',
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
