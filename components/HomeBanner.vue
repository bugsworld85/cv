<template>
    <div id="home-banner">
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <div class="banner-content">
                        <div class="banner-info">
                            <h1>Hello, I am</h1>
                            <h2>{{ $parent.alias }}</h2>
                            <h3>{{ $parent.role }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "banner",
};
</script>

<style lang="scss" scoped>
</style>