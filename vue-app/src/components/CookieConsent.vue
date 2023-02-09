<template>
  <div>
    <div
      id="cookie-consent"
      :class="{ displayNone: cookiesBtn }"
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-easing="ease-in"
    >
      <p>
        We at ParavosCafe.com use cookies to give you the best experience on our
        site. By continuing to use our website, you consent to our use of
        cookies in accordance with our
        <span
          ><router-link to="/cookie-consent" id="cookie-link"
            >Cookie Consent</router-link
          ></span
        >.
      </p>
      <button id="accept-btn" @click="$emit('hideCookie')">Accept</button>
      <button @click="$emit('hideCookie')">Decline</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookiesBtn: false,
    }
  },
  methods: {
    hideCookie() {
      this.cookiesBtn = true
      this.cookiesBtn = false
    },
  },
}
</script>

<style scoped>
.displayNone {
  display: none;
}
#cookie-consent {
  width: 100%;
  height: 8%;
  color: white;
  background: rgb(85, 114, 90);
  box-shadow: -3px -3px 8px 2px #888888;
  position: fixed;
  bottom: 0;
  padding-left: 2%;
  display: flex;
  justify-content: space-between;
}
#cookie-link {
  color: rgb(141, 187, 141);
}

button {
  height: 40%;
  position: absolute;
  top: 50%;
  right: 5%;
  border-radius: 10px;
  color: beige;
  background: rgb(141, 187, 141);
  border: none;
  transition-delay: 0.3s;
  transition-duration: 0.5s;
}
button:hover {
  background: rgb(163, 175, 163);
  transition-timing-function: ease-out;
}
#accept-btn {
  margin-right: 6%;
}
</style>
