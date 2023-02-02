<template>
  <div>
    <div id="cookie-consent">
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
      <button id="accept-btn">Accept</button>
      <button>Decline</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
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
}
button:hover {
  background: rgb(163, 175, 163);
}
#accept-btn {
  margin-right: 6%;
}
</style>
