<template>
  <nav class="nav-bar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Vue logo">
    </div>
    <div class="nav-wrapper">
      <ul>
        <li><router-link :to="{ name: 'home' }" class="home-link-nav">Home</router-link></li>
        <li><router-link :to="{ name: 'notes' }" class="notes-link-nav">Notes</router-link></li>
        <li><router-link :to="{ name: 'about' }" class="about-link-nav">About</router-link></li>
      </ul>
    </div>
    <div class="auth-wrapper">
    <!--TODO: Auth Route-->
      <p>Login | Register</p>
    </div>
  </nav>
  <router-view/>
</template>

<style>


@font-face {
  font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap');
}

@font-face {
  font-family: 'Good Mood';
  src: url('@/assets/fonts/Good Mood.ttf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --primary-color: #926455;
  --light-color: #fff;
  --dark-color: #0B0A0A;
  --gray-color: #828282;
  --gray-darker-color: #676767;

  --nav-height: 90px;
  --nav-padding: 20px;
  --nav-margin: 30px;

  --font-title: 'Good Mood', sans-serif;
  --font-general: 'Montserrat', sans-serif;
}

body{
  font-family: var(--font-general);
  max-height: 100vh;
  overflow-y: hidden;
}

.nav-bar{
  display: grid;
  grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
  justify-content: space-between;
  align-items: center;
  background-color: var(--light-color);
  padding: 0 var(--nav-padding);
  height: var(--nav-height);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.nav-bar .logo{
  display: flex;
  align-items: center;
  height: var(--nav-height);
  width: 100%;
}

.nav-bar .logo img{
  height: 80%;
  width: auto;
}

.nav-bar .nav-wrapper ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-bar .nav-wrapper ul li{
  list-style: none;
  margin: 0 10px;
}

.nav-bar .nav-wrapper ul li a, .nav-bar .auth-wrapper{
  text-decoration: none;
  /*font-weight: bold;*/
  font-size: 1.2rem;
  color: var(--dark-color);
}


.nav-bar .auth-wrapper{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: var(--nav-height);
  width: 100%;
}


</style>
