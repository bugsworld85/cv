<template>
    <div id="education" class="education-section bg-color section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-title">
                        <h1>Education</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="section-content">
                        <Education
                            v-for="(university, i) in education"
                            :key="university.name"
                            :data="university"
                            :showDivider="!isLast(i)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Education from "../components/Education.vue";
export default {
    name: "education-section",
    components: {
        Education,
    },
    data() {
        return {
            education: [
                {
                    logo: null,
                    name: "University of Cebu - Main Campus",
                    course: "Bachelor of Science in Computer Engineering",
                    from: "2007",
                    to: "2012",
                },
            ],
        };
    },
    methods: {
        isLast(index) {
            return this.education.length - 1 === index;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>