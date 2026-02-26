<template>
  <div class="main">
    <div class="content">
      <div class="sections-wrapper" ref="sectionsWrapper">
        <div id="top" name="scroll">
          <div class="projects-content">
            <Carousel :slides="slides" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
  <ScrollBar @navigate="handleNavigate"></ScrollBar>
</template>

<script>
import Footer from '../components/Footer.vue';
import Carousel from '../shared/Carousel.vue';
import ScrollBar from '../components/ScrollBar.vue';

export default {
  name: 'Projects',
  components: { Footer, Carousel, ScrollBar },
  data() {
    return {
      slides: [
        {
          title: 'Wordle Clone App',
          description: 'A copy of the popular game "Wordle" created using React.',
          imageSrc: require('@/assets/WordleCap.png'),
          imageHref: 'https://samlkey.github.io/Wordle-Clone/',
          links: [
            { label: 'View App', href: 'https://samlkey.github.io/Wordle-Clone/' },
            { label: 'Learn More', href: 'https://github.com/samlkey/Wordle-Clone' }
          ]
        },
        {
          title: 'PyClean',
          description: 'A python utility program used to clean unwanted files using TKinter.',
          imageSrc: require('@/assets/pyClean.png'),
          imageHref: 'https://github.com/samlkey/pyClean',
          links: [
            { label: 'Learn More', href: 'https://github.com/samlkey/pyClean' }
          ]
        },
        {
          title: 'MobHighLow',
          description: 'A React-based guessing game for Old School Runescape, using an Express.js backend and the OSRS wiki.',
          imageSrc: require('@/assets/gameScreenshot.png'),
          imageHref: 'https://samlkey.github.io/MobHighLow/',
          links: [
            { label: 'View App', href: 'https://samlkey.github.io/MobHighLow/' },
            { label: 'Learn More', href: 'https://github.com/samlkey/MobHighLow' }
          ]
        }
      ]
    };
  },
  methods: {
    handleNavigate(index) {
      const wrapper = this.$refs.sectionsWrapper;
      if (wrapper) {
        wrapper.style.transform = `translateY(-${index * 100}vh)`;
      }
    }
  }
};
</script>

<style src="../css/ProjectsView.css" />
