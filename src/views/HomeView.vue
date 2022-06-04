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
    grid-template-columns: 35% 65%;
  }
  .home .text-description{
    display: flex;
    flex-direction: column;
    padding-top: 15%;
    padding-left: 20%;
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
    width: 80%;
  }



  .home .graphics{
    color: var(--primary-color);
    border-radius: var(--primary-color);
    height: max-content;
  }
  .home .graphics .img-hero{
    display: grid;
    justify-content: right;
    /*align-items: ;*/
    margin-top: 20px;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .home .graphics .img-hero .reg-rect-img{
    display: flex;
    position: relative;
    justify-content: flex-end;
  }

  .home .graphics .img-hero img{
    height: auto;
    width: 40vw;
  }


  .home .graphics .img-hero .big-rectangle{
    content: '';
    position: absolute;
    z-index: -1;
    display: flex;
    top: 8%;
    left: -10%;
    width: 100%;
    height: 100%;
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
    transform: translate(70%, -50%);
    background-color: transparent;
    border: 8px solid var(--primary-color);
  }


  @media screen and (max-width: 1000px){
    .home{
      grid-template-columns: 100%;
      margin: 0 20%;
    }
    .home .text-description{
      padding-left: 0;
    }
    .home .text-description h1{
      font-size: 4.5rem;
    }
    .home .text-description p{
      font-size: 1rem;
    }
    .home .graphics .img-hero img{
      width: 100%;
    }
  }

  @media screen and (orientation: portrait){
    .home{
      grid-template-columns: 100%;
      margin: 0 20%;
    }
    .home .text-description{
      padding-left: 0;
    }
    .home .text-description h1{
      font-size: 4.5rem;
    }
    .home .text-description p{
      font-size: 1rem;
    }
    .home .graphics .img-hero img{
      width: 100%;
    }
  }



</style>
