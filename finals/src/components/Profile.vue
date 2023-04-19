<template>
  <div id="app">
    <h2>{{ msg1 }}</h2>
    <h3>Objective: </h3>
    <p><strong> second year student with experience of handling website development 
    seeking to use her skills in the role of Junior Webstie Developer. 
    A team player with an eye for a deal and can manage time and solve problems with
    utmost quality through strong creative and analytical skills.</strong></p>
    <h3>Course and Specialization: </h3>
    <p><strong> Bachelor of Science in Information Technology with specialization in Website Development</strong></p>    
    <h3>Address:</h3>
    <p><strong> Concepcion, Tarlac</strong></p> 
    <h3>Phone Number:</h3>
    <p><strong> 09329987483</strong></p> 
    <h3>Google Email:</h3>
    <p><strong> nickaellanotra@gmail.com</strong></p> 
    <h3>Student Email:</h3>
    <p><strong> nanotra@student.hau.edu.ph</strong></p> 
  </div>
  
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      msg1: 'Profile'
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
