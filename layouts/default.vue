<template>
  <div>
    <NavbarHeaderLogo :navigationLinks="navigationLinks" />
    <Nuxt />
    <Footer />
  </div>
</template>


<script>
import config from "../assets/config";

const navigationLinks = config.navigationLinks;

export default {
  name: "default",
  data() {
    return {
      navigationLinks,
    };
  },
};
</script>

<style>
.pageButtons {
  background-color: #212529;
  font-size: 30px;
  font-weight: bold;
  color: #f66095;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
}

a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #f66095;
}
</style>