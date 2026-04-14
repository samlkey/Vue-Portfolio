<template>
    <div id="languageScroll" name="scroll">
        <div class="mainlang-wrapper">
            <div class="lang-title">
                <h1>Experience</h1>
            </div>

            <p class="langflavour">
                full stack developer with a broad and versatile skill set, experienced in working across both front-end and back-end technologies. I have a strong command of multiple programming languages, allowing me to adapt to diverse projects and technology stacks.
            </p>            <div class="langwrap">
                <div class="carousel-container">
                    <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div class="carousel-slide" v-for="(slide, index) in carouselSlides" :key="index">
                            <div class="lang-right">
                                <div class="lang-block">
                                    <LangBlock v-for="(item, itemIndex) in slide.top" :key="itemIndex" :title="item.title" :language="item.language" :url="item.url"/>
                                </div>
                            </div>
                            <div class="lang-right">
                                <div class="lang-block">
                                    <LangBlock v-for="(item, itemIndex) in slide.bottom" :key="itemIndex" :title="item.title" :language="item.language" :url="item.url"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" @click="previousSlide" aria-label="Previous slide">❮</button>
                    <div class="carousel-dots">
                        <span 
                            v-for="(slide, index) in carouselSlides" 
                            :key="index"
                            :class="['dot', { active: index === currentSlide }]"
                            @click="goToSlide(index)"
                            :aria-label="`Go to slide ${index + 1}`"
                        ></span>
                    </div>
                    <button class="carousel-btn" @click="nextSlide" aria-label="Next slide">❯</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LangBlock from '../shared/LangBlock.vue';

export default{
    name: "Languages",
    components:{
        LangBlock
    },    data() {
        return {
            currentSlide: 0,
            autoplayInterval: null,
            carouselSlides: [
                {
                    top: [
                        { title: "JavaScript", language: "JavaScript", url: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
                        { title: "C#", language: "C#", url: "https://img.icons8.com/color/48/c-sharp-logo.png" },
                        { title: "Python", language: "Python", url: "https://img.icons8.com/color/48/python--v1.png" }
                    ],
                    bottom: [
                        { title: "C++", language: "C++", url: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
                        { title: "HTML", language: "HTML", url: "https://img.icons8.com/color/48/html-5--v1.png" },
                        { title: "Java", language: "Java", url: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" }
                    ]
                },
                {
                    top: [
                        { title: "CSS3", language: "CSS3", url: "https://img.icons8.com/color/48/css3.png" },
                        { title: "TypeScript", language: "TypeScript", url: "https://img.icons8.com/color/48/typescript.png" },
                        { title: ".NET", language: ".NET", url: "https://img.icons8.com/color/48/net-framework.png" }
                    ],
                    bottom: [
                        { title: "T-SQL", language: "T-SQL", url: "https://img.icons8.com/color/48/microsoft-sql-server.png" },
                        { title: "MongoDB", language: "MongoDB", url: "https://img.icons8.com/color/48/mongodb.png" },
                        { title: "PostgreSQL", language: "PostgreSQL", url: "https://img.icons8.com/plasticine/100/postgreesql.png" }
                    ]
                },
                {
                    top: [
                        { title: "Visual Studio", language: "Visual Studio", url: "https://img.icons8.com/color/48/visual-studio--v2.png" },
                        { title: "Git", language: "Git", url: "https://img.icons8.com/color/48/git.png" },
                        { title: "Flask", language: "Flask", url: "https://img.icons8.com/nolan/64/flask.png" }
                    ],
                    bottom: [
                        { title: "React", language: "React", url: "https://img.icons8.com/office/40/react.png" },
                        { title: "Bootstrap", language: "Bootstrap", url: "https://img.icons8.com/color/48/bootstrap--v2.png" },
                        { title: "Vue", language: "Vue", url: "https://img.icons8.com/color/48/vue-js.png" }
                    ]
                }
            ]
        }
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
            this.resetAutoplay();
        },
        previousSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.carouselSlides.length) % this.carouselSlides.length;
            this.resetAutoplay();
        },
        goToSlide(index) {
            this.currentSlide = index;
            this.resetAutoplay();
        },
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, 4000); // Change slide every 4 seconds
        },
        resetAutoplay() {
            clearInterval(this.autoplayInterval);
            this.startAutoplay();
        }
    },
    mounted() {
        this.startAutoplay();
    },
    beforeUnmount() {
        clearInterval(this.autoplayInterval);
    }
}
</script>
<style src="../css/Languages.scss" lang="scss" />