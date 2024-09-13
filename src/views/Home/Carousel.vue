<template>
  <div class="carousel-container">
    <div class="carousel" :style="carouselStyle">
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        < img :src="item.image" :alt="item.alt" />
      </div>
    </div>
    <button class="prev" @click="prev">←</button>
    <button class="next" @click="next">→</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { image: 'https://via.placeholder.com/600x400?text=Image+1', alt: 'Image 1' },
        { image: 'https://via.placeholder.com/600x400?text=Image+2', alt: 'Image 2' },
        { image: 'https://via.placeholder.com/600x400?text=Image+3', alt: 'Image 3' },
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 800}px)`,
        transition: 'transform 0.5s ease-in-out',
      };
    },
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    startAutoPlay() {
      this.intervalId = setInterval(this.next, 2000);
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.stopAutoPlay();
  },
};
</script>

<style scoped>
.carousel-container {
  margin: 0 auto;
  position: relative;
  width: 800px;
  height: 400px;
  overflow: hidden;
}

.carousel {
  display: flex;
}

.carousel-item {
  min-width: 800px;
  height: 400px;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button.prev,
button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(187, 187, 187, 0.7);
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}
</style>