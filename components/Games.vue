<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-xl-4 col-lg-4 col-md-4 col-sm-6 text-center"
          v-for="(game, index) in games"
          :key="index"
        >
          <Game :game="game" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gamesComponent",
  props: ["games"],
};
</script>

</script>


