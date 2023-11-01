<script>
import { mapActions, mapState } from 'pinia'
import { useJobStore } from '../stores/Jobs'
import axios from 'axios';

export default {
  name: 'JobsDetail',

  data() {
    return {
      id: window.location.pathname.split("/").join(""),
      // job: '',
      form: {
        name: '',
        mobileNumber: '',
        email: '',
        message: '',
        filename: ''
      }
    }
  },
  methods: {
    ...mapActions(useJobStore, ['fetchJob']),
    async submit(form) {
      console.log(form);
      try {
        const { data } = await axios('https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth', {
          methods: 'POST',
          body: form
        })
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: {
    ...mapState(useJobStore, ['job'])
  },
  created() {
    this.fetchJob(this.id)
    // this.job = this.jobs?.find((el) => el.id === this.id)
    // console.log(this.jobs)
  }
}
</script>

<template>
  <div>
    <div class="mt-5 ms-3">
      <h1 style="color: rgb(128, 214, 0)">{{ this.job?.title }}</h1>
      <div>
        <div v-html="this.job?.description.txt"></div>
      </div>
    </div>
    <form class="mt-5 ms-3" @submit.prevent="submit">
      <h1>Send Your Job Application</h1>
      <div class="d-flex flex-row gap-2 flex-wrap">

        <div class="d-flex flex-column">
          <label> Your Name </label>
          <input class="form-control" v-model="form.name">
          <!-- {{ form.email }} -->
          <label> Email Address </label>
          <input class="form-control" v-model="form.email">
          <input class="mt-2" type="file" v-on:change="form.filename"/>
          <button class="btn btn-dark mt-5">Submit</button>
        </div>
        <div class="d-flex flex-column">
          <label> Mobile Number </label>
          <input class="form-control" v-model="form.mobileNumber">
          <label> Write Your Message Here </label>
          <input class="form-control" v-model="form.message">
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
