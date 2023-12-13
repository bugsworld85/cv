<template>
    <div class="education-info">
        <img
            v-if="data.logo"
            class="img-fluid"
            :src="data.logo"
            :alt="data.name"
        />
        <h3>{{ data.course }}</h3>
        <h5>{{ data.name }}</h5>
        <h6>{{ data.from }} - {{ data.to }}</h6>
        <hr v-if="showDivider" />
    </div>
</template>

<script>
export default {
    name: "education",
    props: ["data", "showDivider"],
};
</script>

<style lang="scss" scoped>
</style>