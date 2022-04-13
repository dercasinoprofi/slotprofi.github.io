<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/" :title="config.title">
          <nuxt-img
            preset="default"
            src="/images/logo/logo_transparent.png"
            :alt="config.siteName"
            height="70"
          />
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li
              v-for="(link, index) in navigationLinks"
              :key="index"
              class="nav-item"
            >
              <nuxt-link
                class="nav-link"
                aria-current="page"
                :to="link.url"
                :title="link.title"
                >{{ link.name }}</nuxt-link
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Slots
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li v-for="(provider, index) in config.provider" :key="index">
                  <nuxt-link
                    class="dropdown-item"
                    :to="`/provider/${provider.key}/1/`"
                    :title="`${provider.name} Slots`"
                    >{{ provider.name }}</nuxt-link
                  >
                </li>
                <!-- <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li> -->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import config from "../../assets/config";
const navigationLinks = config.navigationLinks.filter(
  (x) => x.publish === true
);

export default {
  name: "headerlogo",
  data() {
    return {
      config,
      navigationLinks,
    };
  },
};
</script>

<style scoped>
.navFont {
  font-size: 20px;
  font-weight: bold;
  color: rgb(149, 138, 138);
}
/* Modify the background color */
.link-unstyled,
.link-unstyled:link,
.link-unstyled:hover {
  color: inherit;
  text-decoration: inherit;
}

.roundCorners {
  border-radius: 5px;
}
</style>