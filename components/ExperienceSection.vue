<template>
    <div id="exprience" class="exprience-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-title">
                        <h1>Experience</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <Experience
                        v-for="(experience, i) in experiences"
                        :key="`exp-${experience.company}`"
                        :experience="experience"
                        :showDivider="!isLast(i)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Experience from "../components/Experience.vue";

export default {
    name: "experiences",
    components: {
        Experience,
    },
    data() {
        return {
            experiences: [
                // {
                //     logo: null,
                //     title: "Owner & CTO",
                //     company: "NeoMart Convenience Store",
                //     from: "2017-11",
                //     to: "present",
                //     description:
                //         "Responsible for managing technological requirements, enhancements, digital tools and inventory software.",
                //     address: "Cebu, Philippines",
                //     stack: "Laravel, VueJS, NuxtJS, AdonisJS, MySQL, Postgres",
                // },
                {
                    logo: null,
                    title: "Senior Software Engineer",
                    company: "Winedepot",
                    from: "2019-12",
                    to: "2021-11",
                    description:
                        "Full stack web developer and at the same time take lead in development process, checking people's work if they meet company policy and standards, manage Git branches for staging server and lastly, reassign tasks that had failed testing.",
                    address: "Sydney, Australia",
                    stack: "Laravel, VueJS, NextJS, MySQL",
                },
                {
                    logo: null,
                    title: "Full-Stack Web Developer",
                    company: "Upwork",
                    from: "2015-11",
                    to: "2019-12",
                    description:
                        "Accepted various freelance side projects not only to earn extra, but also to broaden knowledge on different development technologies, methodologies and patterns which benefit both the companies that I worked with and me.",
                    address: "Online",
                    stack: "Wordpress, CodeIgniter, Laravel, VueJS, NodeJS",
                },
                {
                    logo: null,
                    title: "Webmaster & Senior Frontend Developer",
                    company: "Agentsquared",
                    from: "2016-01",
                    to: "2019-07",
                    description:
                        "Design templates for site app users and develop frontend elements needed for specific client templates. Also act as webmaster to make sure everything is inline with SEO standards.",
                    address: "San Diego, California",
                    stack: "Wordpress, CodeIgniter, NodeJS, React, VueJS",
                },
                {
                    logo: null,
                    title: "Senior PHP Developer",
                    company: "Stockchase | Wealthica",
                    from: "2017-10",
                    to: "2018-12",
                    description:
                        "Lead PHP developer and in charge on maintainance and enhancement of Stockchase site features and took part on Wealthica app base code.",
                    address: "Montreal, Canada",
                    stack: "CodeIgniter, VueJS, NodeJS",
                },
                {
                    logo: null,
                    title: "Wordpress Theme Developer",
                    company: "Whitetower Digital",
                    from: "2016-08",
                    to: "2017-02",
                    description:
                        "Built Wordpress themes for Whitetower clients as part-time job.",
                    address: "Sydney, Australia",
                    stack: "Wordpress, jQuery",
                },
                {
                    logo: null,
                    title: "Webmaster & Wordpress Developer",
                    company: "Increase Your Profits",
                    from: "2014-12",
                    to: "2016-12",
                    description:
                        "Lead web designer and developer. Built Wordpress plugins and developed themes for IYP clients. Also took charge of maintaining client websites and improve SEO rankings by optimizing sites to full SEO standards including implementation of OpenGrab metas.",
                    address: "San Diego, California",
                    stack: "Wordpress, jQuery",
                },
                {
                    logo: null,
                    title: "Wordpress Plugin Developer",
                    company: "NetWebLogic",
                    from: "2014-07",
                    to: "2014-12",
                    description:
                        "Built Wordpress plugin extensions for an event manager plugin.",
                    address: "Spain",
                    stack: "Wordpress, jQuery",
                },
                {
                    logo: null,
                    title: "Microsoft Answer Desk Online Technician",
                    company: "Convergys Philippines",
                    from: "2012-09",
                    to: "2014-07",
                    description:
                        "Online technical support for various Microsoft Windows and Office issues including virus removal.",
                    address: "Cebu, Philippines",
                },
                {
                    logo: null,
                    title: "Graphics Designer & OIC - Link Department",
                    company: "University of Cebu - Main Campus",
                    from: "2011-06",
                    to: "2012-03",
                    description:
                        "Lead Graphics Designer and Officer-In-Charge at Link department which handles marketing media and student ID processing.",
                    address: "Cebu, Philippines",
                },
            ],
        };
    },
    methods: {
        isLast(index) {
            return this.experiences.length - 1 === index;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>