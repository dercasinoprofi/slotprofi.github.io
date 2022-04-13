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
              <nuxt-link :to="prevLink" v-if="pageNumber !== 1"
                ><button class="pageButtons buttons btn btn-primary">
                  Vorige Seite
                </button></nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                v-if="nextPage"
                :to="`/provider/${provider}/${pageNumber + 1}/`"
              >
                <button class="pageButtons buttons btn btn-primary">
                  Nächste Seite
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row pt-5" v-if="pageNumber === 1">
        <div class="container"></div>
        <div class="col-12">
          <h1 class="text-center pb-2">{{ p.name }}</h1>
          {{ p.seo.seoText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../../assets/config";

export default {
  name: "providerSubpage",
  head() {
    return {
      title: this.p.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.p.meta.metaDescription,
        },
        {
          hid: "robots",
          name: "robots",
          content: this.pageNumber === 1 ? "index, follow" : "noindex, follow",
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    const maximalPaginationSize = config.slots.maximalPaginationSize;
    const provider = route.params.provider;
    const pageNumber = parseInt(route.params.page);
    const skip = pageNumber >= 0 ? config.slots.limit * (pageNumber - 1) : 0;
    const limit = config.slots.limit;
    const params = {
      limit,
      skip,
      provider,
    };
    const data = await $axios.get(config.slotsUrl, { params });
    const counterData = await $axios.get("http://localhost:3002/counter");
    const counter = counterData.data.counter;

    if (!data.data.slots.length) {
      return Error({ statusCode: 404, message: "No slots found!" });
    }
    const nextPage =
      data.data.slots.length === config.slots.limit &&
      pageNumber <= maximalPaginationSize &&
      pageNumber * 10 < counter;
    const games = nextPage ? data.data.slots.slice(0, -1) : data.data.slots;

    const p = config.provider.find((x) => x.key === provider);

    return {
      games,
      nextPage,
      pageNumber,
      provider,
      p,
    };
  },
  computed: {
    prevLink() {
      return this.pageNumber === 2
        ? `/provider/${this.provider}/1/`
        : `/provider/${this.provider}/${this.pageNumber - 1}/`;
    },
  },
};
</script>
