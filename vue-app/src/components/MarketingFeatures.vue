<template>
  <div>
    <hr class="featurette-divider" />

    <div class="row featurette" id="cup">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">
          Live Music, Poetry, Art Nights and More!
          <span class="text-muted">It’ll blow your mind.</span>
        </h2>
        <p class="lead">
          At Paravos Cafe we not only serve great food, we also inspire people
          to follow their dreams. If you have a talent you'd like to show on
          stage, sign up below for our performance nights!
        </p>
      </div>
      <div class="col-md-5">
        <img
          src="../assets/media/images/marketing/guy-playing-guitar.jpeg"
          alt="Guy playing guitar at paravos cafe"
          width="400"
          height="500"
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette" id="live-performances">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">
          We roast the finest coffee beans in house.
          <span class="text-muted">For you, each day.</span>
        </h2>
        <p class="lead">
          We want you to feel at home. This coffee shop was designed with
          tranquility in mind. From the lush green plants and green house style
          to the beautiful salvaged wood around you. Paravos Cafe wants you to
          have a place where you feel centered and connected to nature, even
          when you have work to get done.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          src="../assets/media/images/marketing/coffee-plants.jpeg"
          alt="Guy playing guitar at paravos cafe"
          width="400"
          height="500"
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette" id="paravos-jobs">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">
          Need a place to focus?
          <span class="text-muted">We're the place.</span>
        </h2>
        <p class="lead">
          We want you to feel at home. This coffee shop was designed with
          tranquility in mind. From the lush green plants and green house style
        </p>
      </div>
      <div class="col-md-5">
        <img
          src="../assets/media/images/marketing/woman-writing.jpeg"
          alt="Guy playing guitar at paravos cafe"
          width="400"
          height="500"
        />
      </div>
    </div>

    <hr class="featurette-divider" />
  </div>
</template>

<script>
export default {
  mounted() {
    var scrollSection = this.$router.currentRoute.hash.replace('#', '')
    if (scrollSection)
      this.$nextTick(() =>
        window.document.getElementById(scrollSection).scrollIntoView()
      )
  },
}
</script>

<style scoped>
.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -0.05rem;
}

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>
