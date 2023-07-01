<template>
    <div id="profiles" class="exprience-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-title">
                        <h1>Profiles</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <ul class="profiles">
                        <li v-for="profile in profiles" :key="profile.title">
                            <span class="profile-icon" v-if="profile.icon">
                                <a :href="profile.link">
                                    <img :src="profile.icon" :alt="profile.title" />
                                </a>
                            </span>
                            <a :href="profile.link">{{ profile.link }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "profiles",
    data() {
        return {
            profiles: [
                {
                    title: "LinkedIn",
                    icon: "/images/linkedin.png",
                    link: "https://www.linkedin.com/in/jovanniraygarcia/",
                },
                {
                    title: "Upwork",
                    icon: "/images/upwork.png",
                    link: "https://www.upwork.com/o/profiles/users/_~0112f0dd16f70e38ee/",
                },
                {
                    title: "NPM",
                    icon: "/images/npm.png",
                    link: "https://www.npmjs.com/~bugsworld85",
                },
                {
                    title: "Github",
                    icon: "/images/github.png",
                    link: "https://github.com/bugsworld85",
                },
                {
                    title: "Stackoverflow",
                    icon: "/images/stackoverflow.png",
                    link: "https://stackoverflow.com/users/2090288/jovanni-g",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.profiles {
    li {
        margin-bottom: 10px;

        .profile-icon {
            font-size: 30px;

            img {
                max-width: 40px;
            }
        }
    }
}

@media screen and (max-width: 512px) {
    .profiles {
        display: flex;
        justify-content: space-between;

        li {
            >a {
                display: none;
            }

            .profile-icon {
                img {
                    max-width: 50px;
                }
            }
        }
    }
}
</style>