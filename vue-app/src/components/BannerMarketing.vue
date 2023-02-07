<template>
  <div class="banner" data-aos="fade-right" data-aos-easing="ease-in">
    <h5>{{ currentPromo }}</h5>
    <router-link :to="currentLink">
      <a>{{ currentLinkName }}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promotions: [
        {
          promo: 'Come enjoy & support local live musicians',
          linkName: 'Live Music',
          link: '/#live-performances',
        },
        {
          promo: 'Earn Points for every purchase!',
          linkName: 'Join Rewards',
          link: '/rewards',
        },
        {
          promo: 'Want to Join the team? ',
          linkName: 'Paravos Jobs',
          link: '/#paravos-jobs',
        },
      ],
      currentPromo: '',
      currentLinkName: '',
      currentLink: '',
    }
  },
  methods: {
    promos() {
      let i = Math.floor(Math.random() * this.promotions.length)
      this.currentPromo = this.promotions[i].promo
      this.currentLinkName = this.promotions[i].linkName
      this.currentLink = this.promotions[i].link
      setTimeout(this.promos, 3000)
    },
  },
  mounted() {
    this.promos()
  },
}
</script>

<style scoped>
.banner {
  width: 100%;
  padding: 1.4rem;
  background: rgb(146, 197, 146);
  font-family: 'Helvetica';
  color: var(--background);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
}
a {
  width: 18%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding-right: 4%;
  color: rgb(77, 110, 51);
  font-weight: bold;
}
</style>
