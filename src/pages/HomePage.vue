<!-- src/pages/HomePage.vue -->
<template>
  <div class="home-page">
    <h1>Movie and TV Show List</h1>
    <div v-for="movie in movies" :key="movie.id" class="movie-item">
      <router-link :to="`/movies/${movie.id}`">{{ movie.title }}</router-link>
    </div>
    <div v-for="tvShow in tvShows" :key="tvShow.id" class="tvshow-item">
      <router-link :to="`/tvshows/${tvShow.id}`">{{ tvShow.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
      ],
      tvShows: [
        { id: 1, title: 'TV Show 1' },
        { id: 2, title: 'TV Show 2' },
      ],
    };
  },
};
</script>

<style scoped>
/* สามารถเพิ่ม CSS styles ที่นี่ */
</style>
