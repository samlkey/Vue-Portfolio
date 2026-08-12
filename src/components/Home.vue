<template>
  <div class="home" id="homeScroll" name="scroll">
    <WaveBackground />
    <div class="hero">
      <h1 class="hero-name">Sam Key</h1>

      <p class="hero-role">
        I'm a
        <span class="hero-role-typed"
          >{{ displayedRole }}<span class="hero-cursor">|</span></span
        >
      </p>

      <p class="hero-desc">
        Passionate about full-stack development, cyber security, and server
        management. I build business-critical systems and solve complex
        technical challenges.
      </p>

      <div class="hero-ctas">
        <button class="cta-primary" @click="openResume">
          View My Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button class="cta-secondary" @click="scrollToContact">
          Get In Touch
        </button>
      </div>

      <div class="hero-socials">
        <a
          href="https://github.com/samlkey"
          target="_blank"
          rel="noopener"
          aria-label="GitHub profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/samkey726/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        <a href="mailto:samkey726@gmail.com" aria-label="Send email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import WaveBackground from "./WaveBackground.vue";

export default {
  name: "Home",
  components: { WaveBackground },
  data() {
    return {
      roles: [
        "Software Developer",
        "Full-Stack Engineer",
        "Security Enthusiast",
        "Problem Solver",
      ],
      roleIndex: 0,
      displayedRole: "",
      isTyping: true,
    };
  },
  mounted() {
    this.typewriterTick();
  },
  unmounted() {
    clearTimeout(this._typeTimer);
  },
  methods: {
    typewriterTick() {
      const current = this.roles[this.roleIndex];

      if (this.isTyping) {
        if (this.displayedRole.length < current.length) {
          this.displayedRole += current[this.displayedRole.length];
          this._typeTimer = setTimeout(this.typewriterTick, 75);
        } else {
          this._typeTimer = setTimeout(() => {
            this.isTyping = false;
            this.typewriterTick();
          }, 2200);
        }
      } else {
        if (this.displayedRole.length > 0) {
          this.displayedRole = this.displayedRole.slice(0, -1);
          this._typeTimer = setTimeout(this.typewriterTick, 40);
        } else {
          this.roleIndex = (this.roleIndex + 1) % this.roles.length;
          this.isTyping = true;
          this._typeTimer = setTimeout(this.typewriterTick, 350);
        }
      }
    },
    openResume() {
      window.location.href = "/resume";
    },
    scrollToContact() {
      window.dispatchEvent(
        new CustomEvent("portfolio-navigate", { detail: { index: 4 } }),
      );
    },
  },
};
</script>

<style src="../css/Home.scss" lang="scss" />
