<template>
    <div class="box">
        <img class="lngIcon" :src="url" />
        <!-- <h1>{{ language }}</h1> -->
    </div>
</template>

<script>
    export default {
        name: "LangBlock",
        props: {
            language: String,
            url: String 
        }
    }
</script>
<style src="../css/LangBlock.scss" lang="scss" /> 