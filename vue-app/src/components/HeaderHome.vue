<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container-fluid">
        <button
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
        <router-link :to="{ name: 'Home' }" class="home-link"
          ><img
            id="paravos-logo"
            src="../assets/media/images/Paravos_Cafe_logo.png"
            alt="Paravos Cafe logo"
        /></router-link>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mb-2 mb-md-0">
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
                ><a class="nav-link story">Our Story</a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Sign-In' }">
                <a class="nav-link right-side sign-in" aria-current="page"
                  >Sign In
                </a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Order' }"
                ><a class="nav-link right-side order">Order</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <h2 id="slogan">Made Just for You.</h2>
      <div class="slogan-logo">
        <h1 id="logo-name">Paravos cafe</h1>
        <h2 id="slogan-1">Made Just for You.</h2>
      </div>
      <i class="fa-solid fa-bag-shopping bag">
        <CartCount id="cart-count" />
      </i>
    </nav>
  </div>
</template>
<script>
import CartCount from '../components/CartCount'
export default {
  components: {
    CartCount,
  },
}
</script>

<style scoped>
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
  border-bottom: 5px solid rgba(13, 10, 10, 0.5);
}

.container-fluid {
  padding: none;
  height: 4.5em;
  margin: 0;
  width: 65%;
}

a,
.nav-link {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(172, 166, 145);
  text-decoration: none;
  position: relative;
  overflow: hidden;
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
}
a:hover::after,
a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.right-side {
  position: absolute;
  left: 25rem;
}

.sign-in {
  position: fixed;
  left: 25rem;
  width: 5rem;
}

navbarCollapse {
  width: 20%;
}

/* Logo's & slogan with responsiveness */
.home-link {
  width: 10vw;
}

.home-link::after {
  display: none;
}

#paravos-logo {
  width: 100%;
  padding: 0px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 6px;
}

#slogan {
  font-size: 1.5em;
  color: rgb(141, 127, 103);
  text-align: center;
  margin: 0 auto;
  padding-right: 25%;
  font-family: 'Times New Roman', Times, serif;
  width: 60%;
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

.bag {
  font-size: 23px;
  padding-right: 3rem;
  cursor: pointer;
  color: rgb(164, 157, 134);
}

.bag:hover {
  color: rgb(227, 224, 216);
}
#cart-count {
  width: 1.5rem;
  height: 1rem;
  padding-top: 2px;
  text-align: center;
  font-size: 12px;
  position: fixed;
  z-index: 1;
  top: 5%;
  left: 96.1%;
  background: rgb(187, 182, 154, 0.7);
  border-radius: 4px;
}

@media (max-width: 90em) {
  .right-side {
    position: absolute;
    left: 40rem;
  }

  .sign-in {
    position: absolute;
    left: 34rem;
    width: 5rem;
  }
}

@media (max-width: 70em) {
  .right-side {
    position: absolute;
    left: 33rem;
  }

  .sign-in {
    position: absolute;
    left: 27rem;
    width: 5rem;
  }
}

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

  .container-fluid {
    padding: none;
    height: 4.5em;
    margin: 0;
    width: 20%;
  }
  .story {
    width: 7rem;
  }

  .right-side {
    position: relative;
    left: 5rem;
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
  .bag {
    width: 10%;
    margin-right: 5%;
  }
  .right-side {
    position: relative;
    right: rem;
  }

  /* .sign-in {
    position: relative;
    right: 0rem;
  } */
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
  .bag {
    width: 10%;
    margin-right: 5%;
  }

  .right-side {
    position: relative;
    left: 0rem;
  }

  /* .sign-in {
    position: relative;
    left: 0rem;
  } */
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
  .bag {
    width: 10%;
    margin-right: 7%;
  }

  .right-side {
    position: relative;
    left: 0rem;
  }

  .sign-in {
    position: relative;
    left: 0rem;
  }
}
</style>
