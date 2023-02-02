<template>
  <div>
    <div class="w-full max-w-sm">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8" @submit.prevent>
        <label class="block text-gray-600 text-sm font-bold mb-2" for="date"
          >Select Date & Time for your order</label
        >
        <!--- Date piker start-->
        <div class="flex w-full">
          <DatePicker
            v-model="date"
            mode="dateTime"
            :minute-increment="5"
            :valid-hours="{ min: 6, max: 23 }"
            :select-attribute="selectAttribute"
          >
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                :value="inputValue"
                v-on="inputEvents"
              /> </template
          ></DatePicker>
          <button
            type="button"
            class="text-white font-bold py-1 px-4 rounded-r user-select-none focus:outline-none clear-btn"
            :class="blue"
            :disabled="!date"
            @click="date = null"
          >
            Clear
          </button>
        </div>
        <p class="text-red-600 text-xs italic mt-1" v-if="errorMessage">
          {{ errorMessage }}
        </p>
        <p class="text-blue-500 text-xs font-bold mt-1" v-else>
          We got it. Thanks!
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  components: { DatePicker },
  data() {
    let date = new Date()
    date.setMinutes(0, 0, 0)
    return {
      date: new Date(),
      selectAttribute: {
        dot: true,
      },
    }
  },
  computed: {
    errorMessage() {
      if (!this.date) return 'Date is required.'
      return ''
    },
  },
  methods: {},
  mounted: function () {},
}
</script>

<style>
.w-full {
  margin: 0 auto;
  width: 97%;
}
.clear-btn {
  border: 1.4px solid rgba(46, 93, 37, 0.9);
  border-radius: 5px;
  background: rgb(205, 204, 201, 0.7);
}
.clear-btn:hover {
  background: rgba(181, 184, 178, 0.7);
}
</style>
