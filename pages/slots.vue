<template>
  <div>
    <div class="container mt-5 px-4">
      <!-- <div class="row">
        <div class="col-md-12 text-center">
          <div class="h2"><span class="bigRedText"> Neue Slots </span></div>
        </div>
      </div> -->

      <div class="row pt-2">
        <div
          class="col-xl-4 col-lg-4 col-md-4 col-sm-6 text-center"
          v-for="(game, id) in games"
          :key="id"
        >
          <Game :game="game" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-3 d-flex justify-content-center">
          <ul class="pagination">
            <li>
              <nuxt-link :to="`/page/2/`" v-if="nextPage">
                <button class="pageButtons buttons btn btn-primary">
                  Nächste Seite
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../assets/config";

export default {
  name: "slots",
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    const skip = 0;
    const limit = config.slots.limit;
    const params = {
      limit,
      skip,
    };
    const data = await $axios.$get(config.slotsUrl, { params });
    const nextPage = data.slots.length === config.slots.limit;
    const games = nextPage ? data.slots.slice(0, -1) : data.slots;

    return {
      games,
      nextPage,
    };
  },
};
</script>
