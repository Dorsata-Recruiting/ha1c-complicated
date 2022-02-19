<template>
  <div id="app">
    <form @submit="getVitals()">
      <input v-model="patientId" type="text"/>
      <button @click.prevent="getVitals()">submit</button>
    </form>
    <patientItem class="patient-data" v-if="!loading && !error" :patient="patientData"></patientItem>
    <div v-if="!loading && error">
      {{ error }}
    </div>
    <div v-if="loading && !error">
      Omg we're totally loading data!
    </div>
  </div>
</template>

<script>
import { getPatientVitals } from './api'
import PatientItem from './Patient'

export default {
  name: 'App',
  components: { PatientItem },
  data() {
    return {
      patientData: {},
      loading: false,
      patientId: null,
      error: null
    }
  },
  methods: {
    getVitals() {
      this.loading = true
      this.error = null
      getPatientVitals(this.patientId)
        .then(data => {
          this.loading = false
          this.patientData = data
        }).catch((err) => {
          this.loading = false
          this.error = err
        })
    }
  }
}
</script>

<style>
#app {
  color: black;
}
</style>
