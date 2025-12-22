<template>
    <div id="contactScroll" name="scroll">
        <div class="contactContent">
            <h1 class="conTitle">Send me a message!</h1>
            <div class="contact">
                <p>
                For inquires please contact me below. I am looking forward to hearing from you!
                </p>

                <form action="https://formspree.io/f/mrbkglll"
                      method="POST">

                    <div class="subjectFlex" id="scale-in-bottom">
                        <input type="email" id="email" name="from" size="45" maxlength="35" placeholder="Enter your email"><br><br>
                        <input type="text" id="subject" name="subject" size="45" maxlength="40" placeholder="Enter a subject"><br><br>
                    </div>

                    <textarea @input="handleInput" rows="10" cols="40" placeholder="Hi, we would like to consider you for a upcoming opportunity." maxlength="300" id="scale-in-bottom" name="message"></textarea><br><br>
                    <p id="scale-in-bottom" class="textarea-label">300</p>
                    
                    <input type="submit" class="submit" value="Submit">
                </form> 
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Contact',
    methods : {
        handleInput: (e) => {document.querySelector(".textarea-label").innerHTML = (e.target.maxLength - e.target.textLength)}
    }
}
</script>
<style src="../css/Contact.css" />