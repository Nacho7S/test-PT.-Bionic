import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useJobStore = defineStore('job', {
  state: () => ({
    jobs: [],
    job: ''
  }),

  actions: {
    async fetchJob(id) {
      try {
        // const res = await fetch("https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth", {
        //   mode: 'cors',
        //   credentials: "include",
        //   headers: {
        //     "Content-Type": "application/json"
        //   }
        // })
        // const dataJson = await res.json()
        // console.log(dataJson);
        // this.jobs = dataJson
        const { data } = await axios({
          method: 'GET',
          url: 'http://localhost:3000/data',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        })
        console.log(data);
        this.jobs = data
        if (id) {
          this.job = data.find(el => el.id === +id)
        }
        // console.log(this.job);
      } catch (err) {
        console.log(err);
      }
    }
  }
})
