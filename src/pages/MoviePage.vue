<!-- src/pages/MoviePage.vue -->
<template>
    <div class="movie-page">
        <h1>{{ movie.title }}</h1>
        <video controls width="600">
            <source :src="movie.videoUrl" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movie: {
                title: 'Sample Movie',
                videoUrl: 'https://path-to-video/movie.mp4',
            },
        };
    },
};
</script>
