<template>
  <div>
    <SliderHeaderSliderControls />

    <Anbieter />

    <Games :games="games" class="pt-5" />

    <!-- <CustomFeatureLinks /> -->

    <!-- <CustomTopCasinos /> -->

    <!-- <CustomStartpageText /> -->

    <!-- <CardsCard /> -->
    <!-- <CardsGroup /> -->
    <!-- <CardsHorizontal /> -->

    <div class="container">
      <div class="row pt-5">
        <div class="col-12" v-html="seoText"></div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../assets/config";

export default {
  name: "IndexPage",
  head() {
    return {
      title: config.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: config.meta.description,
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const numberOfSlots = config.slots.numberOfSlots;
    const params = {
      limit: numberOfSlots,
      skip: 0,
    };
    const data = await $axios.get(config.slotsUrl, { params });
    const games = data.data.slots;

    // seo
    return {
      games,
      seoText: config.seo.seoText,
    };
  },
};
</script>
