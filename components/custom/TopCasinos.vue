<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4 pt-5" v-for="(casino, index) in casinos" :key="index">
          <div class="card">
            <nuxt-img
              preset="default"
              :src="`/images/anbieter/${casino.logo}`"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ casinos.name }}</h5>
              <p class="card-text h6">
                {{ casino.subline }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import casinos from "../../assets/casinos";

export default {
  name: "featurelinks",
  data() {
    return {
      casinos,
    };
  },
};
</script>


<style scoped>
.topCasinoImage {
  margin: 20px;
  vertical-align: middle;

  padding: 50px;
}

.subline {
}
</style>