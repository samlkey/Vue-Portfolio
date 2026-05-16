<script>
const TRANSITION_MS = 720;

export default {
    name: 'ScrollBar',
    data() {
        return {
            pageIndex: 0,
            pageTags: [],
            animations: ["slide-in-right", "scale-in-bottom", "scale-in-ver-bottom", "tracking-in-expand"],
            currentTab: null,
            isAnimating: false,
            touchStartY: 0,
        }
    },
    mounted() {
        const scrollDivs = document.querySelectorAll('div[name="scroll"]');
        this.pageTags = Array.from(scrollDivs).map(div => div.id).filter(id => id);

        if (this.pageTags.length > 0) {
            this.currentTab = document.getElementById(this.pageTags[0]);
        }

        window.addEventListener("wheel", (e) => {
            e.preventDefault();
            if (!this.isAnimating) this.Scroll(e);
        }, { passive: false });

        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                if (!this.isAnimating) {
                    this.Scroll({ deltaY: e.key === "ArrowDown" ? 1 : -1 });
                }
            }
            if (e.key === "PageDown") { e.preventDefault(); if (!this.isAnimating) this.Scroll({ deltaY: 1 }); }
            if (e.key === "PageUp")   { e.preventDefault(); if (!this.isAnimating) this.Scroll({ deltaY: -1 }); }
        });

        window.addEventListener("touchstart", (e) => {
            this.touchStartY = e.touches[0].clientY;
        }, { passive: true });

        window.addEventListener("touchend", (e) => {
            if (this.isAnimating) return;
            const delta = this.touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(delta) > 40) {
                this.Scroll({ deltaY: delta });
            }
        }, { passive: true });
    },
    methods: {
        Scroll(e) {
            if (this.isAnimating) return;
            if (this.currentTab == null) return;

            if (e.deltaY > 0 && this.pageIndex < this.pageTags.length - 1) {
                this.pageIndex++;
                this.currentTab = document.getElementById(this.pageTags[this.pageIndex]);
                this.$emit('navigate', this.pageIndex);
                this.triggerAnimations();
            } else if (e.deltaY < 0 && this.pageIndex !== 0) {
                this.pageIndex--;
                this.currentTab = document.getElementById(this.pageTags[this.pageIndex]);
                this.$emit('navigate', this.pageIndex);
            }

            this.isAnimating = true;
            setTimeout(() => { this.isAnimating = false; }, TRANSITION_MS + 50);
        },
        goToPage(index) {
            if (this.isAnimating || index === this.pageIndex) return;
            const prevIndex = this.pageIndex;
            this.pageIndex = index;
            this.currentTab = document.getElementById(this.pageTags[index]);
            this.$emit('navigate', index);
            if (index > prevIndex) this.triggerAnimations();
            this.isAnimating = true;
            setTimeout(() => { this.isAnimating = false; }, TRANSITION_MS + 50);
        },
        triggerAnimations() {
            this.animations.forEach(animClass => {
                const el = this.currentTab?.querySelector("#" + animClass);
                if (el && !el.classList.contains(animClass)) {
                    this.HandleAnimation(animClass);
                }
            });
        },
        HandleAnimation(c) {
            if (this.currentTab == null) return;
            const targets = this.currentTab.querySelectorAll("#" + c);
            const delays  = this.currentTab.querySelectorAll("#" + c + "-delay");

            targets.forEach(el => {
                el.style.visibility = "hidden";
                setTimeout(() => {
                    el.style.visibility = "visible";
                    el.classList.add(c);
                }, 400);
            });

            delays.forEach(el => {
                el.style.visibility = "hidden";
                setTimeout(() => {
                    el.style.visibility = "visible";
                    el.classList.add("scale-in-ver-bottom");
                }, 800);
            });
        }
    }
}
</script>

<style src="../css/ScrollBar.scss" lang="scss" />
