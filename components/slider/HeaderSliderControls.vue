<template>
  <div>
    <div class="container pt-3">
      <div class="row">
        <div class="col-12">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <nuxt-img
                  preset="default"
                  src="/images/header/header1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <div class="boxShadow mb-5">
                    <p class="h1">Slot Machines</p>
                    <p>Spiele kostenlos Casino Slots</p>
                  </div>
                </div>
              </div>
              <!-- <div class="carousel-item">
                <nuxt-img
                preset="default"
                  src="/images/header/header2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <nuxt-img
                preset="default"
                  src="/images/header/header3.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <nuxt-img
                preset="default"
                  src="/images/header/header4.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <nuxt-img
                preset="default"
                  src="/images/header/header5.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div> -->
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boxShadow {
  font-size: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  background: rgba(0, 0, 0, 0.7);
  font-family: "Oswald";
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  line-height: 120%;
  text-transform: uppercase;
  display: block;
  clear: both;
}
</style>