<template>
  <div class="row mt-3">
    <div class="col"><CategoriesList /></div>
    <div class="col-10">
      <div class="row">
        <div class="col-3 mt-3" v-for="(p, i) in products" :key="i">
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
            <p>{{ p.price }}</p>
            <div>
              <button class="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CategoriesList from '../components/CategoriesList'

export default {
  components: { CategoriesList },
  computed: {
    ...mapState(['products']),
  },
  methods: {
    ...mapActions(['setProductsByCatAction']),
  },
  created() {
    const category = this.$route.params.category
    this.setProductsByCatAction(category)
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
  margin-top: 10%;
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

/* on products div for ALL products */
.col-10 {
  margin-top: 10%;
}
/* on categories list and ALL products div */
.row {
  margin: 0 auto;
  width: 100%;
}
/* on each individual product*/
.col-3 {
  height: 400px;
  position: relative;
}
/* on each individual product, price & add to cart btn only*/
.price-cart {
  position: absolute;
  bottom: -15px;
}

.btn {
  background-color: var(--light-green);
}
</style>
