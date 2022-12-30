<template>
  <div>
    <div class="row">
      <div class="col">
        <ul class="nav flex-column mt-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/menu/all">All</router-link>
          </li>
          <li v-for="(cat, i) in categories" :key="i" class="nav-item">
            <router-link class="nav-link" :to="'/menu/' + cat.slug">{{
              cat.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['categories']),
  },
}
</script>

<style scoped>
.row {
  margin-top: 10rem;
  width: 55%;
}

.nav-link {
  width: 100%;
  color: var(--dark-green);
  opacity: 0.8;
  font-size: 1.2em;
  height: 3rem;
}
.nav-link:hover {
  color: var(--light-green);
}
.nav-item:hover {
  background: rgba(223, 227, 215, 0.8);
  border-radius: 5%;
}

@media (max-width: 700px) {
  .row {
    margin-top: 8.7rem;
    margin-left: 0;
    width: 100%;
  }
  .col {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
  .nav-link {
    text-align: center;
    margin: 0 auto;
    width: 100%;
  }

  .nav-item {
    background: rgba(148, 163, 126, 0.3);
    border: 1px solid rgb(207, 203, 189, 0.8);
    width: 100%;
  }
  .nav-item:hover {
    background: rgba(223, 227, 215, 0.8);
  }

  .nav {
    width: 100%;
  }
}
</style>
