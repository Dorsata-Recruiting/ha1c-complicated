<template>
  <div class="patient-data">
    <div>{{ patient.firstName || 'given_name' }} {{ patient.lastName || 'surname'}} </div>
    <div>{{ patient.dob || 'born!'}}</div>
    <div>{{ patient.vitals || 'no vitals' }}</div>
  </div>
</template>

<script>
export default {
  name: 'PatientItem',
  props: {
    patient: {
      type: Object,
      required: true
    }
  },
  methods: {
    fullName(patient) {
      return `${patient.firstName || 'given_name'} ${patient.lastName || 'surname'}`
    }
  }
}
</script>
<style>
.patient-data .red {
  color: red;
}
</style>
