<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1 class="pb-3">{{ game.name }} Slot</h1>
          <div class="ratio ratio-16x9">
            <iframe
              allowfullscreen
              :src="`${game.iframeSrc}`"
              frameborder="0"
              scrolling="no"
              style="max-width: 100%; height: 100%"
            ></iframe>
          </div>
          <!-- <div class="pt-2">
            <nuxt-link
              v-for="(tag, id) in game.tags"
              :key="id"
              :to="`/tag/${tag}/`"
              :title="`${tag} Pornos`"
            >
              <span class="tag"> {{ tag }} </span></nuxt-link
            >
          </div> -->
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12 text-center">
          <nuxt-link :to="`/provider/${game.provider}/1/`">
            <button class="pageButtons buttons btn btn-primary">
              Mehr Pragmatic Play Slots
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .tag {
  background-color: crimson;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
  margin-bottom: 1px;
  padding-left: 5px;
} */

a {
  color: inherit;
  text-decoration: none;
}
</style>

<script>
import config from "../../assets/config";

export default {
  name: "game",
  head() {
    return {
      title: `${this.game.name} Slot kostenlos Spielen | ${config.siteName}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Spiele den Slot ${this.game.name} kostenlos beim SlotProfi. Spielgeld Einsatz, damit du den Slot ${this.game.name} kostenlos testen kannst.`,
        },
      ],
    };
  },
  async asyncData({ route, $axios }) {
    const slug = route.params.slug;
    const params = {
      slug,
    };
    const data = await $axios.get(config.slotUrl, { params });
    const game = data.data.game;

    return {
      game,
    };
  },
};
</script>