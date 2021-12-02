<template>
    <div id="skill" class="skill-section bg-color section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-title">
                        <h1>Expertise</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="section-content">
                        <div class="text-info">
                            <p>
                                I am a very resourceful person, dedicated and
                                efficient full stack web developer. Successfully
                                transitioned between various stack technologies
                                such as LAMP and MERN. And now seeking to
                                further improve my software architectural skills
                                and advance on Server-Side Rendering.
                            </p>
                        </div>
                        <div
                            class="progress-content"
                            v-for="category in categories"
                            :key="`skill-category-${category.title}`"
                        >
                            <h4>{{ category.title }}</h4>
                            <div class="rating-bar bar-left">
                                <Skill
                                    v-for="skill in divideIntoColumns(
                                        category.skills
                                    )"
                                    :key="`skill-${skill.title}`"
                                    :skill="skill"
                                />
                            </div>
                            <div class="skill rating-bar bar-right">
                                <Skill
                                    v-for="skill in divideIntoColumns(
                                        category.skills,
                                        true,
                                        category.title
                                    )"
                                    :key="`skill-${skill.title}`"
                                    :skill="skill"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Skill from "../components/Skill.vue";

export default {
    name: "skills",
    components: {
        Skill,
    },
    data() {
        return {
            categories: [
                {
                    title: "Design",
                    skills: [
                        {
                            title: "Photoshop",
                            logo: "/images/photoshop.png",
                            percent: 95,
                        },
                        {
                            title: "Illustrator",
                            logo: "/images/illustrator.png",
                            percent: 80,
                        },
                        {
                            title: "SCSS / SASS",
                            logo: "/images/sass.svg",
                            percent: 100,
                        },
                        {
                            title: "Figma",
                            logo: "/images/figma.png",
                            percent: 90,
                        },
                        {
                            title: "Sketch",
                            logo: "/images/sketch.png",
                            percent: 80,
                        },
                    ],
                },
                {
                    title: "Frameworks",
                    skills: [
                        {
                            title: "Laravel",
                            logo: "/images/laravel.png",
                            percent: 90,
                        },
                        {
                            title: "AdonisJS",
                            logo: "/images/adonisjs.png",
                            percent: 80,
                        },
                        {
                            title: "VueJS",
                            logo: "/images/vuejs.png",
                            percent: 85,
                        },
                        {
                            title: "ReactJS",
                            logo: "/images/reactjs.png",
                            percent: 70,
                        },
                        {
                            title: "NextJS",
                            logo: "/images/nextjs.png",
                            percent: 70,
                        },
                        {
                            title: "NuxtJS",
                            logo: "/images/nuxtjs.png",
                            percent: 75,
                        },
                        {
                            title: "Wordpress",
                            logo: "/images/wordpress.png",
                            percent: 80,
                        },
                    ],
                },
                {
                    title: "Database",
                    skills: [
                        {
                            title: "MySQL / MariaDB",
                            logo: "/images/mariadb.png",
                            percent: 95,
                        },
                        {
                            title: "PostgreSQL",
                            logo: "/images/postgresql.png",
                            percent: 80,
                        },
                        {
                            title: "MongoDB",
                            logo: "/images/mongodb.png",
                            percent: 60,
                        },
                        {
                            title: "Redis",
                            logo: "/images/redis.png",
                            percent: 30,
                        },
                    ],
                },
                {
                    title: "State Management",
                    skills: [
                        {
                            title: "VueX",
                            logo: "/images/vuex.png",
                            percent: 90,
                        },
                        {
                            title: "Redux",
                            logo: "/images/redux.png",
                            percent: 80,
                        },
                    ],
                },
                {
                    title: "Servers & Version Control",
                    skills: [
                        {
                            title: "AWS (EC2, EB, RDS, SQS)",
                            logo: "/images/aws.png",
                            percent: 70,
                        },
                        {
                            title: "Digital Ocean",
                            logo: "/images/do.svg",
                            percent: 80,
                        },
                        {
                            title: "Heroku",
                            logo: "/images/heroku.png",
                            percent: 50,
                        },
                        {
                            title: "Git",
                            logo: "/images/git.png",
                            percent: 95,
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        divideIntoColumns(skills, second = false, test = "") {
            const half = Math.ceil(skills.length / 2);

            if (second) {
                if (skills.length === 2) {
                    return skills.slice(half);
                }

                if (half < 2) {
                    return [];
                }

                return skills.slice(half);
            }

            return skills.slice(0, half);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>