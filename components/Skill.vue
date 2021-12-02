<template>
    <div class="flex">
        <div class="logo-container" v-if="skill.logo">
            <img :src="skill.logo" :alt="skill.title" />
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
};
</script>

<style lang="scss" scoped>
</style>