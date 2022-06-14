<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurveys"
          >Load Submitted Experiences</base-button
        >
      </div>

      <p v-if="isLoading">Loading ...</p>
      <ul v-if="!isLoading">
        <p v-if="results.length === 0 && !error">No Results to show.</p>
        <p v-if="error">An error have occured.</p>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import { getAllSurveys } from '../../http.js';

export default {
  data() {
    return {
      results: [],
      isLoading: true,
      error: false,
    };
  },
  components: {
    SurveyResult,
  },
  async mounted() {
    await this.loadSurveys();
  },
  methods: {
    async loadSurveys() {
      try {
        this.results = (await getAllSurveys()) || [];
        console.log(this.results);
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
