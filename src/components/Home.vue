<template>
    <div class="home">
        <div class="home-backdrop">
            <div class="home-backdrop-content">
                <h1 class="home-backdrop-content-intro">Hello, my name is</h1>
                <div class="home-backdrop-content-intro-name">
                    <h1>Sam Key</h1>
                    <h2>Software Developer</h2>
                </div>
                <div class="btnwrapper">
                    <button v-on:click="openCV()" download>View my Resume</button>
                </div>
            </div>
            <div class="img-handle">
                <img class="home-backdrop-emoji" src="../assets/emoji.png" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods : {
            openCV : function(){
                window.location.href = "/resume"
            },
            scrollHandler : function(target){
                document.getElementById(target).scrollIntoView()
            }
        }
    }
</script>
<style src="../css/Home.css" />
