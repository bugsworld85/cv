<template>
    <div id="about" class="about-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-title">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="about-info">
                        <p>
                            I have more than 7 years experience in web
                            development. I started out as a web designer, then I
                            found interest in web development since I am good
                            with problem solving, has great analytical skills
                            and has experienced programming during my college
                            days. During my early web development days, I
                            started out with Wordpress, proceeded to
                            CodeIgniter, then had various projects and clients
                            with Laravel / Vue and NodeJS / React platforms.
                        </p>
                        <p>
                            I am very proficient with programming languages such
                            as PHP, CSS, HTML, and Javascript, and I always
                            prefer future proof solutions. I am also well
                            experienced with Google API Libraries, Stripe API,
                            Spark Platform API and other API services available
                            as well as building RESTful APIs from scratch.
                        </p>
                        <div class="signature">
                            <h1>{{ $parent.alias }}</h1>
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "about",
};
</script>

<style lang="scss" scoped>
</style>