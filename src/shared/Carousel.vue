<template>
  <div class="carousel" @keydown.left.prevent="prev" @keydown.right.prevent="next" tabindex="0" ref="root">
    <div class="carousel-header">
      <slot name="title">
        <h1>/Projects</h1>
        <p>Feel free to take a look at some projects below.</p>
      </slot>
    </div>

    <div class="carousel-viewport" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp" @pointercancel="onPointerUp" @pointerleave="onPointerUp">
      <button class="nav prev" aria-label="Previous" @click="prev">‹</button>

      <div class="slides" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
        <div v-for="(slide, i) in slides" :key="i" class="slide">
          <a v-if="slide.imageHref" :href="slide.imageHref" target="_blank" rel="noopener noreferrer" class="img-holder">
            <img :src="slide.imageSrc" :alt="slide.title" />
          </a>
          <div v-else class="img-holder">
            <img :src="slide.imageSrc" :alt="slide.title" />
          </div>

          <div class="proj-name">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <div class="proj-link">
              <template v-for="(link, li) in slide.links" :key="li">
                <a :href="link.href" target="_blank" rel="noopener noreferrer">
                  <div>
                    <button>{{ link.label }}</button>
                  </div>
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>

      <button class="nav next" aria-label="Next" @click="next">›</button>
    </div>

    <div v-if="showDots" class="dots" role="tablist" aria-label="Carousel pagination">
      <button
        type="button"
        v-for="(s, i) in slides"
        :key="i"
        :class="['dot', { active: i === currentIndex }]"
        :aria-current="i === currentIndex ? 'true' : 'false'"
        :aria-label="`Go to slide ${i+1}`"
        @click="goTo(i)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    slides: {
      type: Array,
      required: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    showDots: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      dragging: false,
      startX: 0,
      deltaX: 0
    };
  },
  mounted() {
    // Focus root so keyboard arrows work
    this.$refs.root && this.$refs.root.focus();
  },
  methods: {
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      } else if (this.loop) {
        this.currentIndex = this.slides.length - 1;
      }
    },
    next() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex += 1;
      } else if (this.loop) {
        this.currentIndex = 0;
      }
    },
    goTo(i) {
      if (i >= 0 && i < this.slides.length) this.currentIndex = i;
    },
    onPointerDown(e) {
      this.dragging = true;
      this.startX = e.clientX;
      this.deltaX = 0;
    },
    onPointerMove(e) {
      if (!this.dragging) return;
      this.deltaX = e.clientX - this.startX;
    },
    onPointerUp() {
      if (!this.dragging) return;
      const threshold = 40; // px swipe threshold
      if (this.deltaX > threshold) this.prev();
      else if (this.deltaX < -threshold) this.next();
      this.dragging = false;
      this.startX = 0;
      this.deltaX = 0;
    }
  }
};
</script>

<style src="../css/Carousel.scss" lang="scss" />
