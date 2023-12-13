<template>
    <div id="exprience" class="exprience-section bg-color section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-title">
                        <h1>Experience</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <Experience v-for="(experience, i) in experiences" :key="`exp-${experience.company}`"
                        :experience="experience" :showDivider="!isLast(i)" />
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
                {
                    logo: null,
                    title: '[Part-time] Senior Software Engineer',
                    company: 'Drivers1st / Right Turn Recruiting, Inc.',
                    from: "2023-06",
                    to: "present",
                    address: 'Minnesota, US',
                    stack: "Laravel, NextJS, Redis, MySQL, MongoDB, Typescript, Wordpress, Docker",
                    list: [
                        'Migrated legacy app to Laravel and NextJS',
                        'Developed and maintained the Drivers1st portal for various carriers.',
                        'Developed and maintained Driver1st Wordpress website.',
                        'Developed and maintained the Drivers1st portal for drivers applying for the jobs posted by variou carriers within the system.',
                        'Attempted to implement CI/CD.',
                        'Managed Github repositories and integration.',
                    ],
                },
                {
                    logo: null,
                    title: "Senior Software Engineer",
                    company: "Xctuality / Xctualyfe",
                    from: "2022-02",
                    to: "2023-04",
                    description:
                        "As the Senior Software Engineer at Xctuality, I oversaw the development and implementation of our NFT marketplace, which served as a platform for buying, selling, and trading digital assets. In addition to my work on the marketplace, I was also responsible for managing the web server for Xctuality's game product \"Xctualyfe\", ensuring that it was running smoothly and efficiently. Through my technical expertise and leadership, I played a critical role in driving the success of both the NFT marketplace and the game APIs, gaining valuable experience in web3 development and web server management. It was a fulfilling and exciting opportunity to work on such innovative projects at Xctuality.",
                    address: "Singapore",
                    stack: "Laravel, Nuxt 3, Vuex, Redis, MySQL, Web3, Typescript, Docker",
                    list: [
                        'Acted as the Product Owner who oversaw the development and implementation of the XMarketplace (Xctualyfe Marketplace) which serves as the platform to handle buying, selling and trading of digital assets.',
                        'Built integration between the blockchain and the game\'s backend server so whatever user\'s bought from the XMarketplace, will exist in the game.',
                        'Built the chat system server backbone in order to communicate within the game\'s chat feature. Used custom Laravel websocket authentication inorder for it to work with Unreal Engine.',
                        'Built a page builder for one client of Xctuality.',
                        'Maintained AWS services such as autoscaling and autoload-balancing of EC2 and RDS instances.',
                        'Managed and maintained Xctuality repositories.',
                        'Performed code reviews and quality control to ensure code submitted meets company set standards.'
                    ]
                },
                // {
                //     logo: null,
                //     title: "Owner & CTO",
                //     company: "NeoMart Convenience Store",
                //     from: "2017-11",
                //     to: "2023-02",
                //     description:
                //         "As the owner and CTO of NeoMart convenience store, I held the responsibility of managing the store's technological requirements, enhancing digital tools and overseeing inventory software. By utilizing my expertise in technology and inventory management, I implemented various technological upgrades to streamline the store's operations and improve the customer experience. Additionally, I led the development and deployment of digital tools to enhance the store's online presence and attract more customers.My contributions as the owner and CTO played a critical role in improving NeoMart's overall efficiency and customer satisfaction, which was a rewarding experience for me.",
                //     address: "Cebu, Philippines",
                //     stack: "Laravel, NuxtJS, MySQL",
                // },
                {
                    logo: null,
                    title: "Senior Software Engineer",
                    company: "Winedepot",
                    from: "2019-12",
                    to: "2021-11",
                    description:
                        "During my time as a senior software engineer at this company, I had the opportunity to contribute to the development process in a significant way. As a full-stack web developer, I led the development process and ensured that our products met high-quality standards. In addition to coding, I also checked my colleagues' work against the company's policies and standards and managed Git branches for the staging server. Whenever a task failed testing, I would quickly reassign it to ensure that any issues were resolved as soon as possible. I am proud of my contributions to the company's success and hope that other developers can learn from my experience.",
                    address: "Sydney, Australia",
                    stack: "Laravel, VueJS, NextJS, MySQL, Elastic Beanstalk",
                    list: [
                        'Developed and enhanced VueJS components used within the system.',
                        'Review Pull-Requests ensuring code submitted meets company standards.',
                        'Maintined AWS EB services.',
                    ],
                },
                {
                    logo: null,
                    title: "Full-Stack Web Developer",
                    company: "Upwork",
                    from: "2015-11",
                    to: "2019-12",
                    description:
                        "Accepting various freelance side projects allowed me to earn extra income while also broadening my knowledge on different development technologies, methodologies, and patterns. These experiences not only benefited me but also the companies I worked with, as I was able to bring a diverse range of skills and perspectives to each project. As a result, I was able to provide high-quality work and build strong relationships with my clients, ultimately leading to more opportunities in the future.",
                    address: "Online",
                    stack: "Wordpress, CodeIgniter, Laravel, VueJS, NodeJS",
                    list: [
                        'Developed various web based applications for Upwork clients.'
                    ],
                },
                {
                    logo: null,
                    title: "Webmaster & Senior Frontend Developer",
                    company: "Agentsquared",
                    from: "2016-01",
                    to: "2019-07",
                    description:
                        "In my role as a web designer and developer, I was responsible for designing templates for site app users and developing frontend elements needed for specific client templates. This included creating visually appealing designs that were optimized for user experience and ensuring that all elements were functioning correctly. Additionally, I acted as a webmaster and ensured that everything was in line with SEO standards, making sure that the website was easily discoverable by search engines and ranking well in search results. By doing so, I was able to create a seamless user experience and improve the website's visibility, ultimately driving more traffic and engagement.",
                    address: "San Diego, California",
                    stack: "Wordpress, CodeIgniter, NodeJS, React, VueJS",
                    list: [
                        'Design and develop templates used for auto-generated website produced by the company\'s web app.',
                        'Was also the webmaster of the company ensuring templates generated conform to the latest SEO standards.',
                        'Developed the frontend of a chat bot system where user\'s get to decide the flow of conversation of the company\'s customers or leads.'
                    ]
                },
                {
                    logo: null,
                    title: "Senior PHP Developer",
                    company: "Stockchase | Wealthica",
                    from: "2017-10",
                    to: "2018-12",
                    description:
                        "As the lead PHP developer for the Stockchase site, I was responsible for maintaining and enhancing its features, ensuring that the site was running smoothly and providing the best possible user experience. In addition, I also took part in the development of the base code for the Wealthica app, contributing to its functionality and helping to improve its overall performance. By leveraging my expertise in PHP development, I was able to make significant contributions to both projects, ultimately helping to drive their success and improve the experience for users.",
                    address: "Montreal, Canada",
                    stack: "CodeIgniter2, VueJS, NodeJS, VueX",
                    list: [
                        'Responsible for maintaining and enhancing overall app features both backend and frontend, ensuring user\'s smooth experience.',
                        'Helped migrated the legacy app to NodeJS / VueJS from CodeIgniter2.'
                    ]
                },
                {
                    logo: null,
                    title: "Wordpress Theme Developer",
                    company: "Whitetower Digital",
                    from: "2016-08",
                    to: "2017-02",
                    description:
                        "As a part-time Wordpress theme developer for Whitetower, my primary responsibility was to create and customize Wordpress themes for clients. I utilized my expertise in theme development to build visually appealing and highly functional themes that met the unique needs of each client. Through my work, I helped to ensure that Whitetower's clients had access to high-quality themes that were tailored to their specific requirements. My contributions ultimately helped to drive the success of Whitetower and its clients, making it a valuable and rewarding experience for me as a developer.",
                    address: "Sydney, Australia",
                    stack: "Wordpress, jQuery, Magento, Joomla",
                    list: [
                        'Developed Wordpress theme and plugins.',
                        'Added features to pre-existing applications of my client such as Magento and Joomla.'
                    ]
                },
                {
                    logo: null,
                    title: "Webmaster & Wordpress Developer",
                    company: "Increase Your Profits",
                    from: "2014-12",
                    to: "2016-12",
                    description:
                        "As a lead web designer and developer for IYP, I was responsible for building custom Wordpress plugins and themes that met the specific needs of our clients. In addition to development work, I also acted as the webmaster for our clients, ensuring that their websites were running smoothly and optimizing them to meet full SEO standards, including the implementation of OpenGraph metas. By leveraging my expertise in Wordpress development and SEO optimization, I was able to improve the performance and visibility of our clients' websites, ultimately driving more traffic and engagement. My contributions helped to ensure the success of IYP and its clients, making it a fulfilling and rewarding experience for me as a developer.",
                    address: "San Diego, California",
                    stack: "Wordpress, jQuery",
                    list: [
                        'Developed Wordpress themes and plugins for company clients.',
                        'Managed and maintained Google services specific for the company\'s SEO efforts for clients.',
                        'Designed Wordpress themes.'
                    ]
                },
                {
                    logo: null,
                    title: "Wordpress Plugin Developer",
                    company: "NetWebLogic",
                    from: "2014-07",
                    to: "2014-12",
                    description:
                        "As a Wordpress plugin developer, my primary responsibility was to build custom plugin extensions for an Event Manager plugin. Leveraging my expertise in Wordpress development, I was able to create highly functional and user-friendly plugin extensions that seamlessly integrated with the Event Manager plugin, expanding its functionality and providing additional value to users. Through my work, I helped to ensure that the Event Manager plugin was able to meet the specific needs of its users and remain a valuable tool for event management. My contributions ultimately helped to drive the success of the plugin and made it a rewarding experience for me as a developer.",
                    address: "Spain",
                    stack: "Wordpress, jQuery",
                    list: [
                        'Built custom plugins on-top of the company\'s own Wordpress Event Manager plugin.',
                        'Integrated Google maps into the Event Manager plugin.',
                        'Developed a variety of bespoke Google Maps themes tailored to accommodate versatile customization options within the Event Manager plugin. These uniquely crafted themes empower users to seamlessly personalize their maps, enhancing the overall user experience and ensuring a visually cohesive integration with the Event Manager plugin.'
                    ]
                },
                {
                    logo: null,
                    title: "Microsoft Answer Desk Online Technician",
                    company: "Convergys Philippines",
                    from: "2012-09",
                    to: "2014-07",
                    description:
                        "As a Microsoft Answer Desk Online Technician, I provided online technical support for a variety of Microsoft Windows and Office issues. This included troubleshooting and resolving technical issues related to software installation, configuration, and operation, as well as virus removal. By leveraging my expertise in Microsoft technologies, I was able to provide high-quality support to customers, helping them to resolve issues and get the most out of their software. My contributions ultimately helped to drive customer satisfaction and loyalty, making it a fulfilling and rewarding experience for me as a technician.",
                    address: "Cebu, Philippines",
                    list: [
                        'Provided tech support for Microsoft Windows customers.'
                    ],
                },
                {
                    logo: null,
                    title: "Graphics Designer & OIC - Link Department",
                    company: "University of Cebu - Main Campus",
                    from: "2011-06",
                    to: "2012-03",
                    description:
                        "As a lead graphics designer and officer-in-charge at the Link department, I was responsible for managing marketing media and the student ID processing system. By leveraging my expertise in graphic design, I was able to create visually compelling marketing materials that effectively conveyed the department's message and improved engagement with our target audience. Additionally, I streamlined the student ID processing system, ensuring all student IDs were processed accurately and efficiently. Through my contributions, I was able to enhance the overall effectiveness of the Link department, resulting in a successful and fulfilling experience for me as a graphics designer and office in charge.",
                    address: "Cebu, Philippines",
                    list: [
                        'Designed various marketing materials for the university\'s marketing efforts.',
                        'Managed student\'s ID processing system.'
                    ]
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

<style lang="scss" scoped></style>