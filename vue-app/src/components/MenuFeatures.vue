<template>
  <div class="container-marketing">
    <div class="marketing">
      <div class="row">
        <div class="col-lg-4">
          <img
            src="../assets/media/images/products/breakfast_box.jpeg"
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
          />

          <h2 class="fw-normal">Breakfast</h2>
          <p>
            Start your day off the right way with a delicious power breakfast
            with GF options.
          </p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            src="../assets/media/images/products/lunch_sandwich.jpeg"
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
          />

          <h2 class="fw-normal">Lunch</h2>
          <p>Need a quick & tasty lunch? We've got you covered.</p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            src="../assets/media/images/products/pastelitos.jpeg"
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
          />

          <h2 class="fw-normal">Bakery</h2>
          <p>
            Homemade pastries made just for you. We have many goodies for our GF
            friends.
          </p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Center aligned the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
  margin: 0 auto;
}

.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

.btn {
  background-color: rgb(1, 87, 61);
  color: rgb(209, 202, 179);
}
/* RESPONSIVE CSS
-------------------------------------------------- */

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
