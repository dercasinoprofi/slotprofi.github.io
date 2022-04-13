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
              <nuxt-link :to="prevLink"
                ><button class="pageButtons buttons btn btn-primary">
                  Vorige Seite
                </button></nuxt-link
              >
            </li>
            <li>
              <nuxt-link v-if="nextPage" :to="`/page/${pageNumber + 1}/`">
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
import config from "~/assets/config";

export default {
  name: "slotPage",
  data() {
    return {};
  },
  async asyncData({ route, $axios }) {
    const maximalPaginationSize = config.slots.maximalPaginationSize;
    const pageNumber = parseInt(route.params.page);
    const skip = pageNumber >= 0 ? config.slots.limit * (pageNumber - 1) : 0;
    const limit = config.slots.limit;
    const url = config.slotsUrl;
    const params = {
      skip,
      limit,
    };
    const data = await $axios.$get(config.slotsUrl, { params });

    if (!data.slots.length) {
      return Error({ statusCode: 404, message: "No slots found!" });
    }

    const nextPage =
      data.slots.length === config.slots.limit &&
      pageNumber <= maximalPaginationSize;
    const games = nextPage ? data.slots.slice(0, -1) : data.slots;

    return {
      games,
      nextPage,
      pageNumber,
    };
  },
  computed: {
    prevLink() {
      return this.pageNumber === 2
        ? `/slots/`
        : `/page/${this.pageNumber - 1}/`;
    },
  },
};
</script>
