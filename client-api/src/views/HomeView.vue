<script>
import { mapState, mapActions } from 'pinia';
import { useJobStore } from '../stores/Jobs';


export default {
  name: 'homePage',
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(useJobStore, ['fetchJob']),
    toJobsDetail(id) {
      console.log('pressed', id);
      this.$router.push({ path: `/${id}` });
    }
  },
  
  computed: {
    ...mapState(useJobStore, ['jobs'])
  },
  created() {
    this.fetchJob()
    console.log(this.jobs);
  }
}

</script>

<template>
  <main>
    <div class="d-flex ms-5 mt-5">
      <!-- <p>{{ jobs }}</p> -->
      <div class="d-flex flex-row flex-wrap gap-4">
        <div v-for="job in jobs" :key="job.id" class="shadow p-3 bg-info rounded-4 d-flex justify-content-between">
          <h6 class="mt-2">{{ job.title }}</h6>
          <button class="btn btn-danger ms-1" @click.prevent="toJobsDetail(job.id)">See Job</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>

</style>
