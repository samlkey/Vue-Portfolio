<template>
  <div class="main" id="top" :class="mode" >
    <Header :mode="mode" @toggle="toggle"></Header>
    <div class="content" :class="{ 'no-overflow': $route.meta.hideOverflow }">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script> 
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'
  import Header from './components/Header.vue'
  import { BANNER_CONTENT } from './static/constants'
  document.title = "Sam Key | Full Stack Developer"

  export default {
    name: 'App',
    data() {
      return {
        mode: localStorage.getItem('theme')
      }
    },
    components: {
      Header
    },
    methods: {
      showConsoleBanner : async function(){
        let ascii = await import('raw-loader!./static/cat.txt').then(
          m => m.default
        )
        console.log(ascii + BANNER_CONTENT);
      },
      toggle () {
        if (this.mode === "dark"){
          this.mode = "light"
          localStorage.setItem('theme', 'light')
        }
        else{
          this.mode = "dark"
          localStorage.setItem('theme', 'dark')
        }
      }
    },
    mounted(){ 
      this.showConsoleBanner(); 
      window.scrollTo(0, 0);
    },
    setup(){
      const router = useRouter()

      onMounted(() => {
        router.afterEach((to) => {
          document.body.style.overflow = to.meta.hideOverflow ? 'hidden' : 'auto'

          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', // Optional: smooth scroll
          });
        })
      })
    },
    created() {
      if (!localStorage.getItem('theme')){
        localStorage.setItem('theme', 'dark');

        // Optional: only reload if you actually need it (e.g., if theme affects initial render)
        if (!sessionStorage.getItem('theme')) {
          sessionStorage.setItem('theme-initialized', 'true');
          this.toggle();
        }
      }
    }
  }
</script>
<style src="./css/App.scss" lang="scss" />
