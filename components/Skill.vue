<template>
    <div class="flex">
        <div class="logo-container" v-if="logo">
            <img :src="logo" :alt="skill.title" />
        </div>
        <div>
            <label>{{ skill.title }}</label>
            <strong class="rating-count pull-right">
                {{ skill.percent }}%
            </strong>
            <div class="skill-progress">
                <div class="progress">
                    <div
                        class="progress-bar bar5"
                        role="progressbar"
                        :aria-valuenow="skill.percent"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "skill",
    props: ["skill"],
    computed: {
        logo() {
            if (this.skill.logo) {
                return process.env.APP_ENV === 'production' ? `${this.skill.logo}` : this.skill.logo;
            }
            return null;
        }
    },
};
</script>

<style lang="scss" scoped>
</style>