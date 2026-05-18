<template>
    <div id="projectScroll" name="scroll">
        <div class="proj-wrapper">
            <div class="proj-grid" ref="grid">

                <!-- Projects card -->
                <div class="proj-card proj-card--primary" :class="{ 'is-visible': revealed }">
                    <div class="proj-card-inner">
                        <div class="proj-card-top">
                            <span class="proj-eyebrow">Portfolio</span>
                            <div class="proj-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                                    <path d="M8 21h8M12 17v4"/>
                                </svg>
                            </div>
                        </div>

                        <h2 class="proj-heading">My Projects</h2>
                        <p class="proj-desc">
                            Full-stack builds, security tools, and personal projects spanning web development, cloud infrastructure, and cyber security.
                        </p>

                        <div class="proj-tags">
                            <span class="proj-tag">React</span>
                            <span class="proj-tag">C#</span>
                            <span class="proj-tag">.NET</span>
                            <span class="proj-tag">Vue</span>
                            <span class="proj-tag">Docker</span>
                        </div>

                        <button class="proj-btn proj-btn--primary" @click="projectsRoute" aria-label="View my projects">
                            View Projects
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Decorative grid -->
                    <div class="proj-card-deco" aria-hidden="true">
                        <div v-for="n in 20" :key="n" class="proj-deco-dot"></div>
                    </div>
                </div>

                <!-- Divider -->
                <div class="proj-divider" aria-hidden="true"></div>

                <!-- GitHub card -->
                <div class="proj-card proj-card--secondary" :class="{ 'is-visible': revealed }" style="transition-delay: 0.15s">
                    <div class="proj-card-inner">
                        <div class="proj-card-top">
                            <span class="proj-eyebrow">Open Source</span>
                            <div class="proj-icon proj-icon--github">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </div>
                        </div>

                        <h2 class="proj-heading">GitHub</h2>
                        <p class="proj-desc">
                            Browse my repositories and open-source contributions.
                        </p>

                        <div class="proj-stats">
                            <div class="proj-stat">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/>
                                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/>
                                </svg>
                                <span>Public repos available</span>
                            </div>
                            <div class="proj-stat">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.247-.798z" clip-rule="evenodd"/>
                                </svg>
                                <span>Active contributions</span>
                            </div>
                        </div>

                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/samlkey" class="proj-btn-link" aria-label="View Sam Key's GitHub profile">
                            <button class="proj-btn proj-btn--ghost">
                                View GitHub
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data() {
        return { revealed: false };
    },
    mounted() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.revealed = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(this.$refs.grid);
    },
    methods: {
        projectsRoute() {
            window.location.href = '/projects';
        }
    }
}
</script>

<style src="../css/Projects.scss" lang="scss"></style>
