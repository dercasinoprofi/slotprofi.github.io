<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-4 pt-5"
          v-for="(provider, index) in providers"
          :key="index"
        >
          <div class="card pageButtons">
            <nuxt-link
              :to="`/provider/${provider.key}/1/`"
              :title="provider.name"
            >
              <nuxt-img
                preset="default"
                :src="`/images/provider/${provider.logo}`"
                class="card-img-top"
                :alt="provider.name"
              />
            </nuxt-link>
            <div class="card-body">
              <h5 class="card-title">
                <nuxt-link
                  :to="`/provider/${provider.key}/1/`"
                  :title="`${provider.name} Slots`"
                  >{{ provider.name }} Slots</nuxt-link
                >
              </h5>
              <p class="card-text h6">
                {{ provider.subline }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import config from "../assets/config";
const providers = config.provider.filter((x) => x.publish === true);

export default {
  name: "providerComponent",
  data() {
    return {
      providers,
    };
  },
};
</script>


<style scoped>
.pageButtons {
  background-color: #212529;
  font-size: 18px;
  font-weight: bold;
  color: #f66095;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  text-decoration: none;
}

.topCasinoImage {
  margin: 20px;
  vertical-align: middle;

  padding: 50px;
}

.subline {
}
</style>