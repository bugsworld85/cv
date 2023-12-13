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
                            I am a seasoned web developer with nearly {{ yearsInTheIndustry }} years of experience creating high-quality websites
                            and web applications. I am known for my dedication to delivering excellent results, and I always
                            prioritize clear communication and open dialogue with clients.
                        </p>
                        <p>
                            With a focus on both system architecture and development, I am well-versed in a range of
                            approaches, from Monolith to Microservices, and I work closely with clients to determine the
                            best fit for their specific needs. My expertise lies in Laravel, NuxtJS, NextJS, and Javascript,
                            and I am always eager to take on new challenges and expand my skillset.
                        </p>
                        <p>
                            Over the years, I have completed numerous SaaS-based projects, building a reputation for my
                            ability to deliver efficient, effective solutions that meet client requirements and exceed
                            expectations. If you're looking for a skilled, reliable developer to help you bring your vision
                            to life, I am here to help.
                        </p>
                        <div class="signature">
                            <h1>{{ $parent.alias }}</h1>
                        </div>
                    </div>
                    <address>
                        <p><span>Full Name:</span> {{ $parent.fullName }}</p>
                        <p><span>Nick Name:</span> {{ $parent.nickname }}</p>
                        <p><span>Email:</span> <a :href="`mailto:${$parent.email}`" target="_blank">{{ $parent.email }}</a>
                        </p>
                        <!-- <p><span>Phone:</span> {{ $parent.phone }}</p>
                        <p>
                            <span>Date of Birth:</span>
                            {{ $parent.dateOfBirth }}
                        </p> -->
                        <!-- <p><span>Address:</span> {{ $parent.address }}</p> -->
                    </address>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: "about",
    data() {
        return {
            yearsInTheIndustry: moment().year() - 2014
        }
    },
};
</script>

<style lang="scss" scoped></style>