<template>
  <div class="card border-0">
    <NuxtLink :to="`/slot/${game.slug}/`" :title="`${game.name} Slot`">
      <nuxt-img
        preset="default"
        :src="`/images/thumbs/${game.thumbnail}`"
        class="thumbnail"
        :alt="`${game.name} Slot`"
      />
    </NuxtLink>
    <!-- <div class="card-body"> -->
    <span class="h6 card-title">
      <NuxtLink :to="`/slot/${game.slug}/`" :title="`${game.name} Slot`">
        {{ game.name }}
      </NuxtLink>
    </span>
  </div>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>

<script>
export default {
  name: "gameThumb",
  props: ["game"],
};
</script>

<style scoped>
.thumbnail {
  width: 100%;
  border-radius: 6px;
  border-style: none;
  object-fit: cover;
}
</style>