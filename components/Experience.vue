<template>
    <div class="exprience">
        <div class="exprience-image" v-if="experience.logo">
            <img
                class="img-fluid"
                :src="experience.logo"
                :alt="experience.title"
            />
        </div>
        <div class="exprience-info">
            <h3>{{ experience.title }}</h3>
            <h5 class="mt-1 company">
                {{ experience.company }} <br />
                <em>{{ experience.address }}</em>
                <br />
                <span>{{ from }} - {{ to }} ({{ age }})</span>
            </h5>
            <p>
                {{ experience.description }}
            </p>
        </div>
        <hr v-if="showDivider" />
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "experience",
    props: ["experience", "showDivider"],
    computed: {
        from() {
            return moment(this.experience.from, "YYYY-MM").format("MMMM YYYY");
        },
        to() {
            try {
                if (this.experience.to === "present") {
                    return "present";
                }
                return moment(this.experience.to, "YYYY-MM").format(
                    "MMMM YYYY"
                );
            } catch (error) {
                return moment();
            }
        },
        age() {
            let from = moment(this.experience.from, "YYYY-MM");
            let to =
                this.experience.to !== "present"
                    ? moment(this.experience.to, "YYYY-MM")
                    : moment();

            return moment.duration(to.diff(from)).locale("en").humanize();
        },
    },
};
</script>

<style lang="scss" scoped>
h5.company {
    em {
        color: #bbb;
    }
}
</style>