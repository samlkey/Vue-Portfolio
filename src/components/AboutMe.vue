<template>
    <div class="aboutMe" id="aboutMe" name="scroll">
        <div class="aboutMe-wrapper">

            <!-- Left: Enhanced text panel -->
            <div class="left-flex">
                <span class="about-eyebrow">About Me</span>
                <h1 class="aboutMeTitle">Software<br>Engineer</h1>
                <p class="left-content">
                    Full-stack developer with a passion for building performant, secure web systems using modern frameworks and cloud technologies.
                </p>
                <div class="skill-tags">
                    <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
                </div>
            </div>

            <!-- Right: Terminal console -->
            <div class="terminal-wrapper">
                <div class="terminal" role="img" aria-label="Terminal showing cat aboutme command output">
                    <div class="terminal-header">
                        <div class="terminal-dots">
                            <span class="dot dot--red"></span>
                            <span class="dot dot--yellow"></span>
                            <span class="dot dot--green"></span>
                        </div>
                        <span class="terminal-title">cmd.exe</span>
                        <div class="terminal-header-spacer"></div>
                    </div>
                    <div class="terminal-body" ref="terminalBody">
                        <!-- Typing line -->
                        <div class="terminal-line">
                            <span class="prompt">C:\Users\Sam&gt;</span>
                            <span class="command">{{ displayedCommand }}</span>
                            <span class="cursor" v-show="showInputCursor">&#9608;</span>
                        </div>

                        <!-- Output -->
                        <div class="terminal-output" v-if="outputStarted">
                            <div
                                v-for="(line, i) in outputLines"
                                :key="i"
                                class="output-line"
                                :class="[line.type, { visible: visibleLines > i }]"
                            >
                                <template v-if="line.type === 'blank'">&nbsp;</template>
                                <template v-else-if="line.type === 'divider'">
                                    <span class="divider-text">{{ line.text }}</span>
                                </template>
                                <template v-else-if="line.type === 'header'">
                                    <span class="line-header">{{ line.text }}</span>
                                </template>
                                <template v-else>
                                    <span class="line-key">{{ line.key }}</span>
                                    <span class="line-sep">:</span>
                                    <span class="line-value">{{ line.value }}</span>
                                </template>
                            </div>

                            <!-- New prompt after output -->
                            <div class="terminal-line new-prompt" v-if="outputDone">
                                <span class="prompt">C:\Users\Sam&gt;</span>
                                <span class="cursor blink">&#9608;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "AboutMe",

    data() {
        return {
            fullCommand: "cat aboutme",
            displayedCommand: "",
            showInputCursor: true,
            outputStarted: false,
            visibleLines: 0,
            outputDone: false,

            tags: ["React", "Blazor", ".NET", "C#", "Docker", "Azure", "Cyber Security"],

            outputLines: [
                { type: "blank" },
                { type: "divider", text: "─────────────────────────────" },
                { type: "header",  text: "  Sam Key — Software Engineer" },
                { type: "divider", text: "─────────────────────────────" },
                { type: "blank" },
                { type: "field", key: "Role    ", value: "Full-Stack Developer" },
                { type: "field", key: "Focus   ", value: "Web Dev  |  Cyber Security" },
                { type: "field", key: "Stack   ", value: "React · Blazor · .NET · C#" },
                { type: "field", key: "Cloud   ", value: "Docker · Azure" },
                { type: "blank" },
                { type: "field", key: "Status  ", value: "Open to opportunities ✓" },
                { type: "blank" },
            ],
        };
    },

    mounted() {
        this.runAnimation();
    },

    methods: {
        sleep(ms) {
            return new Promise(r => setTimeout(r, ms));
        },

        async runAnimation() {
            // Check prefers-reduced-motion
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (reduced) {
                this.displayedCommand = this.fullCommand;
                this.showInputCursor = false;
                this.outputStarted = true;
                this.visibleLines = this.outputLines.length;
                this.outputDone = true;
                return;
            }

            await this.sleep(600);

            // Type the command
            for (let i = 0; i <= this.fullCommand.length; i++) {
                this.displayedCommand = this.fullCommand.slice(0, i);
                await this.sleep(70);
            }

            await this.sleep(300);
            this.showInputCursor = false;
            await this.sleep(120);

            // Reveal output lines
            this.outputStarted = true;
            for (let i = 0; i < this.outputLines.length; i++) {
                await this.sleep(this.outputLines[i].type === "blank" ? 60 : 110);
                this.visibleLines = i + 1;
            }

            await this.sleep(200);
            this.outputDone = true;
        },
    },
};
</script>

<style src="../css/AboutMe.scss" lang="scss" />
