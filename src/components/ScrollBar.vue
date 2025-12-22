<script>
export default {
    name: 'ScrollBar',
    data() {
        return { 
            pageIndex: 0,
            pageTags: [],
            animations: ["slide-in-right", "scale-in-bottom", "scale-in-ver-bottom", "tracking-in-expand"],
            currentTab: null,
            shouldScroll: true,
            wheelCooldown: false
        }
    },
    mounted() {
        // Automatically collect all divs with name="scroll"
        const scrollDivs = document.querySelectorAll('div[name="scroll"]');
        this.pageTags = Array.from(scrollDivs).map(div => div.id).filter(id => id);
        
        // Set initial currentTab if we have tags
        if (this.pageTags.length > 0) {
            this.currentTab = document.getElementById(this.pageTags[0]);
        }
        
        window.addEventListener("wheel", (e) => {
           if (this.wheelCooldown) {
               e.preventDefault();
               return;
           }
           
           e.preventDefault();
           console.log(scrollDivs)
           this.Scroll(e)
           
           this.wheelCooldown = true;
           setTimeout(() => {
               this.wheelCooldown = false;
           }, 1000)
        }, { passive: false })
        
        window.addEventListener("keydown", (e) => {
           if (this.wheelCooldown) {
               e.preventDefault();
               return;
           }
           
           if (e.key === "ArrowDown" || e.key === "ArrowUp") {
               e.preventDefault();
               // Create a fake wheel event object
               const fakeEvent = {
                   deltaY: e.key === "ArrowDown" ? 1 : -1
               };
               this.Scroll(fakeEvent)

               console.log(scrollDivs)
               
               this.wheelCooldown = true;
               setTimeout(() => {
                   this.wheelCooldown = false;
               }, 1000)
           }
        })
    },
    methods: {        
        Scroll(e){
            if(!this.shouldScroll) return; 
            if(this.currentTab == null) return;

            if(e.deltaY > 0 && this.pageIndex < this.pageTags.length - 1){
                //go down
                this.pageIndex++
                this.currentTab = document.getElementById(this.pageTags[this.pageIndex])
                this.currentTab.scrollIntoView({
                    behavior: 'smooth'
                });

                //animations
                this.animations.forEach(e => {
                    let p = this.currentTab.querySelector("#" + e)

                    if (p != null){
                        if(!p.classList.contains(e)) this.HandleAnimation(e); 
                    }
                })
            }
            else if(e.deltaY < 0 && this.pageIndex != 0)
            {
                //go up
                this.pageIndex--
                this.currentTab = document.getElementById(this.pageTags[this.pageIndex])
                this.currentTab.scrollIntoView()
            }
            this.shouldScroll = false; 

            setTimeout(() => {
                this.shouldScroll = true;
            }, 400)
        },
        HandleAnimation(c){
            if(this.currentTab == null) return;
            let target = this.currentTab.querySelectorAll("#" + c)
            let targetDelay = this.currentTab.querySelectorAll("#" + c + "-delay")

            if(target != null){
                target.forEach(e => {
                    e.style.visibility = "hidden";
                    setTimeout(() => {
                        e.style.visibility = "visible";
                        e.classList.add(c); 
                    }, 400)
                })
            }
     
            if(targetDelay == null) return;

            targetDelay.forEach(e => {
                e.style.visibility = "hidden"; 

                setTimeout(() => {
                    e.style.visibility = "visible";
                    e.classList.add("scale-in-ver-bottom");
                }, 800);
            })
        }
    }
}
</script>

<style src="../css/ScrollBar.css" />