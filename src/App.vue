<template>
  <nav class="nav-bar nav-open">
    <div class="burger open">
      <span></span>
      <span></span>
      <span></span>
    </div>
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

<script>
export default {
  mounted() {
    document.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target.classList.contains('open') || e.target.classList.contains('close')) {
        this.burger_managing(this.classList);
      }
    });
  },
  methods: {
    burger_managing(class_list) {
      console.log(class_list);
      let nav = document.querySelector('.nav-bar');
      let burger = document.querySelector('.burger');
      // let nav


      if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open')
        nav.classList.add('nav-close')
        burger.classList.remove('open')
        burger.classList.add('close')


      } else {
        nav.classList.add('nav-open')
        nav.classList.remove('nav-close')
        burger.classList.remove('close')
        burger.classList.add('open')

      }
    }
  }
}
</script>

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
  --nav-padding: 80px;
  --nav-margin: 30px;

  --font-title: 'Good Mood', sans-serif;
  --font-general: 'Montserrat', sans-serif;
}

body{
  font-family: var(--font-general);
  max-height: 100vh;
  background: white;
  /*overflow-y: hidden;*/
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

.nav-bar .burger{
  display: none;
}

.nav-bar .burger * {
  pointer-events: none;
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

@media screen and (max-width: 768px){
  .nav-open{
    display: flex;

    justify-content: center;
    padding: 0;
    height: auto;
    margin-bottom: 0;
  }

  .nav-open > *{
    display: none;
  }

  .nav-open .burger{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .open span{
    display: block;
    width: 30px;
    height: 3px;
    background-color: var(--dark-color);
    margin: 5px;
  }

  .close{
    display: flex!important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    transform: rotate(45deg);
  }

  .close span{
    width: 30px;
    height: 3px;
    background-color: var(--light-color);
    margin: 5px;
  }

  .close span:nth-child(2){ display: none; }



  .nav-close{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: calc(100%/4) calc(100%/4) calc(100%/4) calc(100%/4);
    justify-content: space-between;
    align-items: center;
    background-color: var(--dark-color);
    padding: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
  }

  .nav-close .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    filter: invert(1);
  }

  .nav-close .logo img{
    height: 50%;
    width: auto;
  }


  .nav-open .logo{
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .nav-bar .auth-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--nav-height);
    width: 100%;
  }

  .nav-open .nav-wrapper ul li a, .nav-open .auth-wrapper{
    color: var(--dark-color);
  }

  .nav-close .nav-wrapper ul li a, .nav-close .auth-wrapper{
    color: var(--light-color);
  }
}

@media screen and (max-width: 480px){
  .nav-open .logo{
    display: none;
  }
}



</style>

