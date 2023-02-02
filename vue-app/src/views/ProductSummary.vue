<template>
  <div class="row mt-3">
    <BannerMarketing class="banner" />
    <div class="col"><CategoriesList /></div>
    <div
      class="col-10"
      v-for="(p, i) in products"
      :key="i"
      v-show="urlSlug == p.slug"
    >
      <div>
        <img
          :src="require(`../assets/media/images/products/${p.image}`)"
          class="img-fluid"
        />
        <figcaption>
          Trulli, Puglia, Italy.
          <p>{{ p.calories }} cal</p>
        </figcaption>
      </div>
      <div class="summary">
        <h3>
          {{ p.name }}
        </h3>
        <p id="description">{{ p.description }}</p>
        <!-------------- Looping through entire toppings array ---------->
        <div class="checkbox-div">
          <div id="checkboxes" v-for="(toppings, i) in p.toppings" :key="i">
            <label id="type-topping">{{ Object.keys(toppings)[0] }}</label>
            <!-------Looping over each object in toppings array---------->
            <div
              class="all-products"
              id="pruduct-names"
              v-for="(key, value) in toppings[Object.keys(toppings)[0]]"
              :key="key"
            >
              <div class="checkbox-product-div">
                <input
                  type="checkbox"
                  @click="toppingToggle(p.toppings[i], value)"
                />
                <p id="each-product">{{ key }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-box">
          <textarea
            type="text"
            id="comments"
            name="comments"
            v-model="commentsAdded"
            rows="4"
            cols="50"
          ></textarea>
          <label for="comments">Add any comments or allergies</label>
        </div>
        <div class="price-cart">
          <button class="btn btn-primary">
            <p id="add" @click="handleAddProduct(p)">Add To Cart</p>
            <p id="price">{{ p.price | currency }}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BannerMarketing from '../components/BannerMarketing'
import CategoriesList from '../components/CategoriesList'

export default {
  components: { BannerMarketing, CategoriesList },
  computed: {
    ...mapState(['products']),
  },
  data() {
    return {
      urlSlug: window.location.pathname.slice(22, 44),
      toppingsSelected: [],
      commentsAdded: '',
    }
  },
  methods: {
    ...mapMutations({ addProduct: 'cart/addProduct' }),
    toppingToggle(typeOfTop, toppingsArrayIndex) {
      this.toppingsSelected.push(
        typeOfTop[Object.keys(typeOfTop)[0]][toppingsArrayIndex]
      )
      console.log(this.toppingsSelected)
    },

    handleAddProduct(product) {
      let productWithToppings = {
        name: product.name,
        price: product.price,
        toppings: this.toppingsSelected,
        comments: this.commentsAdded,
        id: product._id,
      }
      this.addProduct(productWithToppings)
    },
  },
  created() {},
  beforeRouteUpdate(to, from, next) {
    next()
  },
}
</script>

<style scoped>
img {
  width: 250px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 1px 1px 3px 1px rgb(148, 153, 150);
}

figcaption {
  margin-top: 4%;
  font-style: italic;
}
h3 {
  font-size: 2em;
}
#description {
  font-style: italic;
}
.col {
  width: 20%;
}
.row {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin-top: 10rem;
  margin-bottom: 2rem;
}
.col-10 {
  width: 80%;
  height: 85vh;
  margin-top: 25vh;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
}
.summary {
  margin-left: 5%;
  width: 65%;
  background-color: rgba(220, 220, 215, 0.3);
  padding: 6% 5% 20% 5%;
  border-radius: 8px;
  box-shadow: 1px 1px 3px 1px rgb(148, 153, 150);
}

.banner {
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 88px;
}

input {
  cursor: pointer;
  width: 17px;
  height: 17px;
  accent-color: rgb(112, 150, 114);
}

#checkboxes {
  font-size: 14px;
  margin-right: 0px;
  width: 40%;
}
.checkbox-div {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.checkbox-product-div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.all-products {
  margin-left: 15%;
  margin-bottom: 4%;
}
#each-product {
  margin-bottom: 0;
  margin-left: 4%;
}
#type-topping {
  font-size: 1.1em;
  font-weight: bold;
  color: rgb(43, 43, 43, 0.8);
}

.btn {
  background-color: rgba(197, 196, 176, 0.4);
  border: 1.4px solid rgba(37, 93, 61, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  padding: 0.6rem 0;
}
.btn:hover {
  background-color: rgb(54, 100, 50);
}

.btn p {
  margin-bottom: 0px;
}

#add {
  margin-right: 20%;
  font-size: 18px;
}
#price {
  background: rgba(147, 183, 147, 0.8);
  padding: 2%;
  border-radius: 6px;
}
.price-cart {
  text-align: center;
  float: right;
  margin-top: 10%;
}
.comment-box {
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  text-align: center;
  font-size: 10px;
}
#comments {
  width: 20vw;
  height: 6vh;
  background: rgba(255, 252, 252, 0.7);
}
</style>
