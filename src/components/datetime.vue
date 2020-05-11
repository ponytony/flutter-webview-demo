<template>
    <Popup v-model="show" position="bottom">
        <DatetimePicker
                v-model="currentDate"
                :type="type"
                title=""
                :min-date="minDate"
                :max-date="maxDate"
        />
    </Popup>
</template>

<script>
  import {DatetimePicker, Popup} from 'vant'
  export default {
    name: "dateTime",
    components: {DatetimePicker, Popup},
    data() {
      return {
        minDate: new Date(1970, 0, 1),
        maxDate: new Date(new Date().getFullYear() + 4, 0, 0),
        currentDate: new Date(),
        show: false,
        type: 'datetime',
        resolve: null,
      }
    },
    watch: {
      show(val) {
        if (this.resolve) {
          this.resolve(val);
          this.resolve = null;
        }
      }
    },
    methods: {
      showPicker(hasTime, time) {
        this.currentDate = time;
        this.type = hasTime? 'datetime' : 'date';
        this.show = true;
        return new Promise(resolve  => {
          this.resolve = resolve;
        })
      }
    }
  }
</script>

<style scoped>

</style>