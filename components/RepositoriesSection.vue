<template>
    <div id="repositories" class="exprience-section bg-color section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-title">
                        <h1>Hobby Projects</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <ul class="repositories">
                        <li v-for="(repository, i) in repositories" :key="`repo-${i}`" class="mb-2">
                            <a :href="repository.link">{{ repository.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "repositories",
    data() {
        return {
            repositories: [
                {
                    title: "Laravel Comments",
                    link: "https://github.com/bugsworld85/project-comments",
                },
                {
                    title: "NeoComponents (Vue2) Github",
                    link: "https://github.com/bugsworld85/neocomponents",
                },
                {
                    title: "Wordpress Blank Canvas",
                    link: "https://github.com/bugsworld85/project-blank-canvas",
                },
                {
                    title: "NeoComponents (Vue2) NPM",
                    link: "https://www.npmjs.com/package/@bugsworld85/neocomponents",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>