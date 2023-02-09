<template>
  <div>
    <!--********* Navbar collapse for smaller view-port *******-->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container-fluid">
        <button
          on:mouseover="toggleOpen"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--******* Logo / Home page nav-link ******-->
        <router-link :to="{ name: 'Home' }" class="home-link"
          ><img
            id="paravos-logo"
            src="../assets/media/images/Paravos_Cafe_logo.png"
            alt="Paravos Cafe logo"
        /></router-link>
        <!--*********** Nav-links ************-->
        <div
          class="collapse navbar-collapse"
          id="navbarCollapse"
          :on-mouseleave="closeNav()"
          :class="{ hideNav: isActive }"
        >
          <ul class="navbar-nav mb-2 mb-md-0">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }">
                <a class="nav-link home-link-2">Home</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path: '/menu/all' }">
                <a class="nav-link" aria-current="page">Menu</a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Rewards' }">
                <a class="nav-link rewards">Rewards</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Our-Story' }"
                ><a class="nav-link">Our Story</a></router-link
              >
            </li>
            <!--********* These Nav-links displaying at smaller view-port  **********-->
            <li class="nav-item">
              <router-link
                :to="{ name: 'Sign-In' }"
                :class="{
                  displayNone: noDisplay,
                  'display-links': displayLinks,
                }"
                ><a class="nav-link">Sign In</a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'Order' }"
                :class="{
                  displayNone: noDisplay,
                  'display-links': displayLinks,
                }"
                ><a class="nav-link">Order</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <!--********** Slogan and Logo name ***********-->
      <h2 id="slogan">Made Just for You.</h2>
      <div class="slogan-logo">
        <h1 id="logo-name">Paravos cafe</h1>
        <h2 id="slogan-1">Made Just for You.</h2>
      </div>
      <!--*********** Full screen nav items *********-->
      <div class="right-links">
        <li class="nav-item sign-in">
          <router-link :to="{ name: 'Sign-In' }">
            <a class="nav-link" aria-current="page">Sign In </a></router-link
          >
        </li>
        <li class="nav-item order">
          <router-link :to="{ name: 'Order' }"
            ><a class="nav-link">Order</a></router-link
          >
        </li>
      </div>
      <!--************* Shopping Bag **************-->
      <div id="cart">
        <CartCount id="cart-count" />
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartCount from '../components/CartCount'
export default {
  components: {
    CartCount,
  },
  data: () => {
    return {
      noDisplay: true,
      displayLinks: true,
      isActive: false,
    }
  },
  computed: {
    ...mapGetters({
      // Bringing in the count for amount of items in cart
      itemCount: 'cart/itemCount',
      totalPrice: 'cart/totalPrice',
    }),
  },
  methods: {
    closeNav() {
      setTimeout(() => {
        this.isActive = true
      }, 1000)
    },
  },
}
</script>

<style scoped>
/* :class being used with variable */
.displayNone {
  display: none;
}

.nav-scroller {
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.navbar {
  background-color: rgb(7, 47, 38);
  box-shadow: -3px 2px 9px 1px #4d4a4a;
  z-index: 2;
}

.container-fluid {
  padding: none;
  height: 4.5em;
  margin: 0;
  width: 45%;
}

/* NAV-LINKS styling */
a,
.nav-link {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(172, 166, 145);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition-delay: 0.2s;
  transition-duration: 0.3s;
}
a:hover {
  color: rgb(214, 212, 201);
}
.right-links {
  position: fixed;
  right: 8%;
  top: 1%;
  display: flex;
}

.sign-in a {
  padding-right: 2vw;
  height: 49%;
}

.order a {
  height: 49%;
}

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: rgb(149, 138, 101);
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
  transform: translate3d(-100%, 0, 0);
  transition-delay: 0.2s;
}
a:hover::after,
a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* LOGO'S & SLOGAN */
.home-link {
  max-width: 10vw;
}

.home-link::after {
  display: none;
}
.home-link-2 {
  display: none;
}

#paravos-logo {
  max-width: 10vw;
  max-height: 12vh;
  padding: 0px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 6px;
}

#slogan {
  font-size: 1.5em;
  color: rgb(141, 127, 103);
  font-family: 'Times New Roman', Times, serif;
  z-index: 1;
}
.slogan-logo {
  display: none;
  margin: 0 auto;
}

#logo-name {
  font-size: 1.5em;
  color: rgb(99, 87, 66);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#slogan-1 {
  font-size: 0.8em;
  color: rgb(96, 83, 60);
  text-align: center;
  margin: 0 auto;
  font-family: 'Times New Roman', Times, serif;
}
/* cart checkout */

#cart {
  position: fixed;
  right: 1%;
}

#cart-count {
  width: 4rem;
  height: 4rem;
  padding-top: 2px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
}
/* RESPONSIVE CSS
-------------------------------------------------- */
@media (max-width: 50em) {
  #paravos-logo {
    display: none;
  }
  #slogan {
    font-size: 1.5em;
    color: rgb(96, 83, 60);
    text-align: center;
    margin: 0 auto;
    margin-left: 20%;
    padding-right: 20%;
    display: none;
  }
  .slogan-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    margin-left: 20%;
  }
  .slogan-logo h2 {
    display: inline-block;
    width: 100%;
  }
  .right-links {
    display: none;
  }
  .display-links {
    display: inline-block;
    width: 100%;
  }

  .container-fluid {
    padding: none;
    height: 4.5em;
    margin: 0;
    width: 20%;
  }
  .home-link-2 {
    display: inline-block;
    width: 100%;
  }
  .home-link-2::after {
    display: none;
  }

  li {
    background: rgba(179, 167, 150, 0.2);
    border-radius: 3px;
  }
  a,
  .nav-link {
    color: rgb(246, 244, 241);
  }
}

@media (max-width: 30em) {
  .slogan-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin-left: 15%;
  }
}

@media (max-width: 540px) {
  .slogan-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin-left: 10%;
  }
}

@media (max-width: 280px) {
  .slogan-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin-left: 10%;
    font-size: 14px;
  }
}
</style>
