<template>
    <div id="languageScroll" name="scroll">
        <div class="mainlang-wrapper">
            <div class="lang-title">
                <h1>Experience</h1>
            </div>

            <p class="langflavour">
                full stack developer with a broad and versatile skill set, experienced in working across both front-end and back-end technologies. I have a strong command of multiple programming languages, allowing me to adapt to diverse projects and technology stacks.
            </p>

            <div class="langwrap">
                <div class="lang-right">
   
                    <div class="lang-block">
                        <LangBlock title="JavaScript" language="JavaScript" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                        <LangBlock title="C#" language="C#" url="https://img.icons8.com/color/48/c-sharp-logo.png"/>
                        <LangBlock title="Python" language="Python" url="https://img.icons8.com/color/48/python--v1.png"/>          
                    </div>

                    <div class="lang-block">
                        <LangBlock title="C++" language="C++" url="https://img.icons8.com/color/48/c-plus-plus-logo.png"/>
                        <LangBlock title="HTML" language="HTML" url="https://img.icons8.com/color/48/html-5--v1.png"/>
                        <LangBlock title="Java" language="Java" url="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"/>           
                    </div>
                </div>

                <div class="lang-right">

                    <div class="lang-block">
                        <LangBlock title="CSS3" language="CSS3" url="https://img.icons8.com/color/48/css3.png"/>
                        <LangBlock title="TypeScript" language="TypeScript" url="https://img.icons8.com/color/48/typescript.png"/>
                        <LangBlock title=".NET" language=".NET" url="https://img.icons8.com/color/48/net-framework.png"/>          
                    </div>

                    <div class="lang-block">
                        <LangBlock title="T-SQL" language="T-SQL" url="https://img.icons8.com/color/48/microsoft-sql-server.png"/>
                        <LangBlock title="MongoDB" language="MongoDB" url="https://img.icons8.com/color/48/mongodb.png"/>
                        <LangBlock title="PostgreSQL" language="PostgreSQL" url="https://img.icons8.com/plasticine/100/postgreesql.png"/>           
                    </div>
                </div>

                <div class="lang-right">

                    <div class="lang-block">
                        <LangBlock title="Visual Studio" language="Visual Studio" url="https://img.icons8.com/color/48/visual-studio--v2.png"/>
                        <LangBlock title="Git" language="Git" url="https://img.icons8.com/color/48/git.png"/>
                        <LangBlock title="Flask" language="Flask" url="https://img.icons8.com/nolan/64/flask.png"/>          
                    </div>

                    <div class="lang-block">
                        <LangBlock title="React" language="React" url="https://img.icons8.com/office/40/react.png"/>
                        <LangBlock title="Bootstrap" language="Bootstrap" url="https://img.icons8.com/color/48/bootstrap--v2.png"/>
                        <LangBlock title="Vue" language="Vue" url="https://img.icons8.com/color/48/vue-js.png"/>           
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import LangBlock from '../shared/LangBlock.vue';

export default{
    name: "Languages",
    components:{
        LangBlock
    }
}
</script>
<style src="../css/Languages.scss" lang="scss" />