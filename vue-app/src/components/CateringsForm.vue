<template>
  <div>
    <h3>Want us to cater?</h3>
    <p>Submit this form and we'll get back to you within 24 hours.</p>
    <form action="submit">
      <label for="fname">First Name</label>
      <input
        v-model="firstName"
        type="text"
        id="fname"
        :firstName="firstName"
        placeholder="Your name.."
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        v-model="lastName"
        :lastName="lastName"
        placeholder="Your last name.."
      />
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        v-model="email"
        :email="email"
        placeholder="Your email.."
      />

      <label for="date">Date</label>
      <input
        type="text"
        id="date"
        v-model="date"
        :date="date"
        placeholder="Date of event.."
      />

      <label for="partyCount">Number of people</label>
      <input
        type="text"
        id="party-count"
        v-model="numOfPeople"
        :numOfPeople="numOfPeople"
        placeholder="Your party count.."
      />

      <input
        type="submit"
        value="Submit"
        @click.prevent="createNewInquiryStart()"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['createNewInquiryAction']),
    createNewInquiryStart: function () {
      let payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        date: this.date,
        numOfPeople: this.numOfPeople,
      }
      this.createNewInquiryAction(payload)
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.date = ''
      this.numOfPeople = ''
    },
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      numOfPeople: '',
    }
  },
}
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
  height: 67%;
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
