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
.banner-content {
    display: flex;
    align-items: center;

    .banner-info {
        position: relative;
        margin-top: unset;
        top: unset;
    }
}

@media screen and (max-width: 512px) {
    #home-banner {
        height: auto;

        >.container {
            background-size: 190px;

            .banner-content {
                height: 300px;

                .banner-info {
                    transform: translate(0, 30%);
                }
            }
        }
    }
}
</style>