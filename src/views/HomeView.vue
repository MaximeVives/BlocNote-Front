<template>
  <div class="home">
    <div class="text-description">
      <h1>TIME TO WRITE YOUR CREATIVITY</h1>
      <p class="describe">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda aut dignissimos ea ex, facilis fugiat id illum impedit maxime minima, nam nisi numquam odio recusandae reiciendis rem repudiandae tempora.
      </p>
    </div>
    <div class="graphics">
      <div class="img-hero">
        <div class="reg-rect-img">
          <img src="@/assets/hero_img.png" alt="Main image home">
          <span class="big-rectangle"></span>
          <span class="little-rectangle"></span>
        </div>
      </div>
    </div>
  </div>
  <HomeComponent />
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    HomeComponent
  }
}
</script>

<style scoped>
  .home{
    height: calc(100vh - var(--nav-height) - var(--nav-margin));
    display: grid;
    grid-template-columns: 30% 70%;
  }
  .home .text-description{
    display: flex;
    flex-direction: column;
    padding-top: 30%;
    padding-left: 5%;
  }
  .home .text-description h1{
    font-family: var(--font-title);
    font-size: 6.2rem;
    letter-spacing: 0.3rem;
    margin-bottom: 20px;
    color: var(--dark-color);
  }
  .home .text-description p{
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: var(--gray-darker-color);
    text-align: justify;
    width: 90%;
  }



  .home .graphics{
    color: var(--primary-color);
    border-radius: var(--primary-color);
  }
  .home .graphics .img-hero{
    display: flex;
    justify-content: right;
    /*align-items: ;*/
    margin-top: 20px;
    height: 100%;
    width: 100%;
  }

  .home .graphics .img-hero .reg-rect-img{
    position: relative;
  }

  .home .graphics .img-hero img{
    height: 85%;
    width: auto;
  }


  .home .graphics .img-hero .big-rectangle{
    content: '';
    position: absolute;
    z-index: -1;
    display: flex;
    top: 8%;
    left: -10%;
    width: 100%;
    height: 85%;
    background-color: transparent;
    border: 8px solid var(--primary-color);
  }

  .home .graphics .img-hero .little-rectangle{
    content: '';
    position: absolute;
    z-index: -1;
    display: flex;
    top: 50%;
    left: -100%;
    width: 100%;
    height: 60%;
    transform: translate(50%, -50%);
    background-color: transparent;
    border: 8px solid var(--primary-color);
  }


</style>
