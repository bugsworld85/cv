<template>
    <div id="personal" class="about-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-title">
                        <h1>Personal Information</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <address>
                        <p><span>Full Name:</span> {{ $parent.fullName }}</p>
                        <p><span>Nick Name:</span> {{ $parent.nickname }}</p>
                        <p><span>Email:</span> {{ $parent.email }}</p>
                        <p><span>Phone:</span> {{ $parent.phone }}</p>
                        <p>
                            <span>Date of Birth:</span>
                            {{ $parent.dateOfBirth }}
                        </p>
                        <p><span>Address:</span> {{ $parent.address }}</p>
                    </address>
                    <div class="signature">
                        <h1>{{ $parent.alias }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "personal-info",
};
</script>

<style lang="scss" scoped>
</style>