<template>
  <div class="row mt-3 full-page">
    <BannerMarketing class="banner" />
    <div class="col"><CategoriesList /></div>
    <div class="col-10">
      <div class="row products">
        <div class="col-3 mt-3" v-for="(p, i) in products" :key="i">
          <router-link
            :to="'/menu/product-summary/' + p.slug"
            class="product-sum"
          >
            <div>
              <img
                :src="require(`../assets/media/images/products/${p.image}`)"
                class="img-fluid"
              />
            </div>
            <h3>
              {{ p.name }}
            </h3>
            <p>{{ p.description }}</p>
            <div class="price-cart">
              <p>{{ p.price | currency }}</p>
              <p id="cal">- {{ p.calories }} cal</p>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CategoriesList from '../components/CategoriesList'
import BannerMarketing from '../components/BannerMarketing'

export default {
  components: { CategoriesList, BannerMarketing },
  computed: {
    ...mapState(['products']),
  },
  methods: {
    ...mapActions(['setProductsByCatAction']),
  },
  created() {
    // When component is created, route will redirect based on category selected and get products based on cat as directed in action >>
    const category = this.$route.params.category
    this.setProductsByCatAction(category)
  },
  beforeRouteUpdate(to, from, next) {
    // This will allow $route to actually update without needing to refresh the page after the action to fetch products based on category selected, has been called in created()
    const category = to.params.category
    this.setProductsByCatAction(category)
    next()
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 1px 1px 3px 1px rgb(148, 153, 150);
}
h3 {
  font-size: 1.3em;
  margin-top: 5%;
  text-align: center;
  color: var(--dark-green);
}

p {
  margin-bottom: 15px;
  color: var(--light-brown);
}

/* on categories list and ALL products div */
.row {
  margin: 0 auto;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 2rem;
}

.full-page {
  min-height: 100vh;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
/* on each individual product*/
.col-3 {
  width: 14rem;
  height: 400px;
  padding-top: 15px;
  position: relative;
  margin-right: 3%;
  border: 1px solid rgba(171, 170, 165, 0.8);
  border-radius: 5px;
}
/* on each individual product, price & cal to only*/
.price-cart {
  display: flex;
  position: absolute;
  bottom: 2px;
}
#cal {
  margin-left: 85px;
}
/* Add to cart button*/
.btn {
  background-color: var(--light-green);
}
.banner {
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 88px;
}
.col-10 {
  width: 75%;
}
/* Link to product summary */
.product-sum {
  text-decoration: none;
}

/* RESPONSIVE CSS
-------------------------------------------------- */
@media (max-width: 700px) {
  /* Div holding product images, p tags and buttons*/
  .col-10 {
    width: 100%;
  }
  /* on each individual product*/
  .products {
    margin-top: 5%;
  }
  .col-3:nth-of-type(odd) {
    margin-right: 5%;
  }
  .col {
    padding: 0;
    margin: 0;
  }
}
</style>
