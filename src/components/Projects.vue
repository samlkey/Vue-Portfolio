<template>
    <div id="projectScroll" name="scroll">
        <div class="projWrapper">
            <div class="projContent">
                <div class="projLeft">
                    <div class="projLeftContent">
                        <div>
                            <h1 id="scale-in-ver-bottom">View my Projects,</h1>
                            <p id="scale-in-ver-bottom">
                                Click on the button below to view my different projects below.
                            </p>
                        </div>
                        <div>
                            <button v-on:click="projectsRoute()">View</button>
                        </div>
                    </div>
                </div>
                <div class="projRight">
                    <div class="projRightContent">
                        <div>
                            <h1 id="scale-in-ver-bottom">GitHub,</h1>
                            <p id="scale-in-ver-bottom">
                                Take a look at my repositories on GitHub.
                            </p>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/samlkey">
                                <button>View</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "Projects",
        methods : {
            projectsRoute : function(){
                window.location.href = '/projects';
            }
        }
    }
</script>
<style src="../css/Projects.scss" lang="scss"></style>