<template>
    <div class="projects-content">
        <div class="project-wrapper">
            <div class="projects-title">
                <h1>/Projects</h1>
                <p>Feel free to take a look at some of the projects. Some of these are still work in progress.</p>
            </div>

            <div class="proj-left">
                <div class="proj-leftcontent">
                    <a target="_blank" href="https://samlkey.github.io/Wordle-Clone/"> 
                        <div class="img-holder">
                            <img src="@/assets/WordleCap.png">
                        </div>
                    </a>

                    <div class="proj-name">
                        <h1>Wordle Clone App</h1>
                        <p>
                            A copy of the popular game "Wordle" created using React.
                        </p>

                        <div class="proj-link">
                            <a target="_blank" href="https://samlkey.github.io/Wordle-Clone/"> 
                                <div>
                                    <button>View App</button>
                                </div>
                            </a>
                            <a target="_blank" href="https://github.com/samlkey/Wordle-Clone"> 
                                <div>
                                    <button>Learn More</button>
                                </div>
                            </a>
                        </div>
                    </div> 
                </div> 
            </div>

            <div class="proj-left">
                <div class="proj-leftcontent">
                    <a target="_blank" href="https://github.com/samlkey/pyClean"> 
                        <div class="img-holder">
                            <img src="@/assets/pyClean.png">
                        </div>
                    </a>
                
                    <div class="proj-name">
                        <h1>PyClean</h1>
                        <p>
                            A python utility program used to clean unwanted files
                            using TKinter.
                        </p>
                    
                        <div class="proj-link">
                            <a target="_blank" href="https://github.com/samlkey/pyClean"> 
                                <div>
                                    <button>Learn More</button>
                                </div>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>

            <div class="proj-left">
                <div class="proj-leftcontent">
                    <a target="_blank" href="https://samlkey.github.io/MobHighLow/"> 
                        <div class="img-holder">
                            <img src="@/assets/gameScreenshot.png">
                        </div>
                    </a>
                
                    <div class="proj-name">
                        <h1>MobHighLow</h1>
                        <p>
                            A React based guessing game for Old School Runescape, uses an express.js backend and the OSRS wiki for gathering information.
                        </p>
                    
                        <div class="proj-link">
                            <a target="_blank" href="https://samlkey.github.io/MobHighLow/"> 
                                <div>
                                    <button>View App</button>
                                </div>
                            </a>
                            <a target="_blank" href="https://github.com/samlkey/MobHighLow"> 
                                <div>
                                    <button>Learn More</button>
                                </div>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    
    <Footer @pageChange="handlePageChange"></Footer>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
    name: "Projects",
    components: {
        Footer
    }
}
</script>

<style src="../css/ProjectsView.css" />
