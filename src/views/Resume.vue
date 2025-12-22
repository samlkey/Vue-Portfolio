<template>
    <div class="resume-content">
        <div class="resume-backdrop">
            <div class="resume-main-content">
                <div class="resume-side">
                    <div class="resume-contacts">
                        <a><h1>samkey.site</h1></a>
                        <h1>North Lincolnshire, UK</h1>
                        <a><h1>sam@email.com</h1></a>
                    </div>

                    <div class="resume-skills">
                        <div class="skills-group">
                            <div>
                                <h1>Programming Languages</h1>
                                <ul>
                                    <li>C#</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>C++</li>
                                    <li>HTML</li>
                                    <li>Java</li>
                                    <li>TypeScript</li>
                                    <li>React</li>
                                    <li>Vue.js</li>
                                </ul>
                            </div>
                            <div>
                                <h1>Databases & Storage</h1>
                                <ul>
                                    <li>SQL Server</li>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                                    <li>Oracle</li>
                                    <li>SQLite</li>
                                </ul>
                            </div>
                        </div>

                        <div class="skills-group">
                            <div>
                                <h1>Software & Tools</h1>
                                <ul>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>BitBucket</li>
                                    <li>Docker</li>
                                    <li>Jenkins</li>
                                    <li>CI/CD Pipelines</li>
                                </ul>
                            </div>
                            <div>
                                <h1>
                                    Networking
                                </h1>
                                <ul>
                                    <li>Linux</li>
                                    <li>Windows Server</li>
                                    <li>Proxmox</li>
                                    <li>Node.js</li>
                                    <li>AWS</li>
                                    <li>Azure DevOps</li>
                                </ul>
                            </div>
                        </div>

                        <div class="skill-single">
                            <h1>Cyber Security & DevOps</h1>
                            <ul>
                                <li>Penetration Testing</li>
                                <li>Ethical Hacking</li>
                                <li>Metasploit</li>
                                <li>WireShark</li>
                                <li>Zero Trust Architecture</li>
                                <li>OWASP Best Practices</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="resume-main">
                    <div class="resume-opening">
                        <a target="_blank" href="https://www.linkedin.com/in/samkey726/">
                            <h1>
                            Sam
                            <br>
                            Key
                            </h1>
                        </a>
                        <h2>Software Developer.</h2>

                        <p>
                            Passionate Software Engineer with expertise in full-stack developmet, cyber security,
                            and server management. Experienced in several modern frameworks.
                        </p>
                    </div>

                    <div class="resume-qualifications">
                        <h1>Qualifications</h1>
                        <div class="qual-block">
                            <div class="qual-block-title">
                                <h2>Sheffield Hallam University</h2>
                                <h2 class="qual-block-flavour">Sept 2021 - Present</h2>    
                            </div>

                            <div class="qual-block-result">
                                <p>MSc Cyber Security</p>
                                <p>2.1</p>
                            </div>
                        </div>
                        <div class="qual-block">
                            <div class="qual-block-title">
                                <h2>Sheffield Hallam University</h2>
                                <h2 class="qual-block-flavour">Sept 2018 – June 2021</h2>    
                            </div>

                            <div class="qual-block-result">
                                <p>BSc Honour Computer Science</p>
                                <p>2.2</p>
                            </div>
                        </div>
                        <div class="qual-block">
                            <div class="qual-block-title">
                                <h2>John Leggott College</h2>
                                <h2 class="qual-block-flavour">Sept 2016 – June 2018</h2>    
                            </div>
                            <div class="qual-block-result">
                                <p>IT Diploma</p>
                                <p>D*</p>
                            </div>
                            <div class="qual-block-result">
                                <p>Extended IT Diploma</p>
                                <p>D*D*D*</p>
                            </div>
                            <div class="qual-block-result">
                                <p>A-Level Use of Mathematics</p>
                                <p>C</p>
                            </div>
                        </div>
                    </div>

                    <div class="resume-qualifications">
                        <h1>Experience</h1>
                        <div class="qual-block">
                            <div class="qual-block-title">
                                <h2>Software Engineer</h2>
                                <h2 class="qual-block-flavour">July 2023 – Present</h2>    
                            </div>

                            <div class="exp-block-result">
                                <p>
                                    Developed and led multiple business-critical systems, increasing operational efficiency and reducing manual workload.
                                </p>
                                <ul>
                                    <li>
                                        Worked with C#, ASP.NET, VB6, SQL Server, JavaScript, .NET, and Blazor to develop scalable solutions.
                                    </li>    
                                    <li>
                                        Implemented secure authentication & authorization mechanisms (OAuth2, JWT) to enhance system security.
                                    </li>
                                    <li>
                                        Optimized database queries, reducing query execution time and improving application performance.
                                    </li>
                                    <li>
                                        Configured CI/CD pipelines for automated deployments using Jenkins & GitHub Actions.
                                        Demonstrated strong leadership, leading to a rapid promotion to the Third Tier of Software Developers within the business.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="resume-qualifications bottom">
                        <h1>Projects</h1>
                        <p class="proj-flavour">
                            Links to some of my projects can be found 
                            <a href="/projects">
                                samkey.site/projects 
                            </a>
                            want to know more? Let's chat! 
                        </p>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<style src="../css/Resume.css" />

<script>
    export default {
        name: "Resume",
        methods : {
            openCV : function(){
                window.open('/files/CV.pdf')
            }
        }
    }
</script>