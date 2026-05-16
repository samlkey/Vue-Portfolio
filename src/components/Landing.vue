<template>
  <div>
    <div class="main" id="top">
      <div class="content">
        <div class="sections-wrapper" ref="sectionsWrapper">
          <Home></Home>
          <AboutMe></AboutMe>
          <Languages></Languages>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </div>

    <!-- Navigation dots -->
    <nav class="nav-dots" aria-label="Page navigation">
      <button
        v-for="(label, i) in sectionLabels"
        :key="i"
        class="nav-dot"
        :class="{ active: currentPage === i }"
        :aria-label="`Go to ${label}`"
        :title="label"
        @click="navigateTo(i)"
      ></button>
    </nav>

    <!-- Scroll hint (only on first page) -->
    <div class="scroll-hint" :class="{ hidden: currentPage !== 0 }" aria-hidden="true">
      <span>Scroll</span>
      <div class="scroll-hint-arrow"></div>
    </div>

    <ScrollBar ref="scrollBar" @navigate="handleNavigate"></ScrollBar>
  </div>
</template>

<script>
  import Footer from './Footer.vue';
  import Home from './Home.vue'
  import Contact from './Contact.vue';
  import AboutMe from './AboutMe.vue';
  import ScrollBar from './ScrollBar.vue';
  import Languages from './Languages.vue';
  import Projects from './Projects.vue'
  import { BANNER_CONTENT } from '../static/constants'

  document.title = "Sam Key's Resume"

  export default {
    name: 'App',
    components: {
      Footer,
      Home,
      Contact,
      AboutMe,
      ScrollBar,
      Languages,
      Projects
    },
    data() {
      return {
        currentPage: 0,
        sectionLabels: ['Home', 'About', 'Skills', 'Projects', 'Contact', 'Footer']
      }
    },
    methods: {
      showConsoleBanner: async function() {
        let ascii = await import('raw-loader!../static/cat.txt').then(m => m.default)
        console.log(ascii + BANNER_CONTENT);
      },
      handleNavigate(index) {
        const wrapper = this.$refs.sectionsWrapper;
        if (wrapper) {
          wrapper.style.transform = `translateY(-${index * 100}vh)`;
          this.currentPage = index;
        }
      },
      navigateTo(index) {
        this.$refs.scrollBar?.goToPage(index);
      }
    },
    mounted() {
      window.scrollTo(0, 0);
      this._navHandler = (e) => this.navigateTo(e.detail.index);
      window.addEventListener('portfolio-navigate', this._navHandler);
    },
    unmounted() {
      window.removeEventListener('portfolio-navigate', this._navHandler);
    }
  }
</script>
<style src="../css/App.scss" lang="scss" />
