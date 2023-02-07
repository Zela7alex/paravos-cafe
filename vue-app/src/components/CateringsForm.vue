<template>
  <div>
    <h3>Want us to cater?</h3>
    <p>Submit this form and we'll get back to you within 24 hours.</p>
    <form action="submit">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />
      <label for="lname">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email.." />

      <label for="partyCount">Number of people</label>
      <input
        type="text"
        id="party-count"
        name="partycount"
        placeholder="Your party count.."
      />

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
input[type='text'],
select {
  width: 100%;
  padding: 10px 15px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='submit'] {
  width: 100%;
  background-color: #437545;
  color: white;
  padding: 10px 15px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #45a049;
}

div {
  width: 25%;
  height: 57%;
  border: 1px solid green;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  position: absolute;
  top: 64%;
  left: 2%;
}
p {
  color: var(--dark-green);
}
</style>
