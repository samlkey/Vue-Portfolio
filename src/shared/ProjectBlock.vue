<template>
    <div class="project-box">

        <div class="img-container">
            <img class="lngIcon" :src="imageUrl" />
        </div>  

        <button class="project-name" @click="UrlNavigate()">{{ projectName }}</button>
    </div>
</template>

<script>
    export default {
        name: "ProjectBlock",
        props: {
            projectName: String,
            imageUrl: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true, 
            }
        },
        methods:{
            UrlNavigate : function(){
                window.location.href = this.url; 
            }
        }
    }
</script>
<style src="../css/ProjectBlock.scss" lang="scss" /> 