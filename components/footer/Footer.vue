<template>
  <div class="pt-5">
    <footer>
      <div class="container" style="width: 1930px">
        <p>
          <b>DISCLAIMER</b> Online Glücksspiel ist in einigen Ländern illegal.
          Es liegt daher in der Verantwortung des Spieler, die örtlichen
          Vorschriften zum Thema Online-Glücksspiel zu überprüfen, diese Seite
          übernimmt keine Verantwortung für Ihr Handeln.
        </p>
        <hr />

        <div class="row">
          <div class="col-sm-2">
            <ul class="sitemap-links">
              <li><a href="/">Casino Vergleicher</a></li>
              <!-- <li><a href="/slots/">Slots</a></li> -->
            </ul>
          </div>
          <div class="col-sm-2">
            <ul class="sitemap-links">
              <li v-for="(provider, index) in provider" :key="index">
                <nuxt-link
                  :to="`/provider/${provider.key}/1/`"
                  :title="provider.name"
                  >{{ provider.name }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <!--
          <div class="col-sm-2">
            <ul class="sitemap-links">
              <li><a href="/bonus/">Casino Bonus</a></li>
              <li><a href="/bonus/#stargames">Stargames Bonus</a></li>
              <li><a href="/bonus/#bwin">bwin Bonus</a></li>
              <li><a href="/bonus/#sunmaker">Sunmaker Bonus</a></li>
              <li><a href="/bonus/#mrgreen">Mr Green Bonus</a></li>
              <li><a href="/bonus/#888casino">888 casino Bonus</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <ul class="sitemap-links">
              <li><a href="/slots/">Slots</a></li>
              <li>
                <a
                  href="/slots/book-of-ra.php"
                  title="Book of Ra Deluxe spielen"
                  >Book of Ra Deluxe</a
                >
              </li>
              <li>
                <a
                  href="/slots/lord-of-the-ocean.php"
                  title="Lord of the Ocean online spielen"
                  >Lord of the Ocean</a
                >
              </li>
              <li>
                <a
                  href="/slots/lucky-ladys-charm.php"
                  title="Lucky Ladys Charm online spielen"
                  >Lucky Ladys Charm</a
                >
              </li>
              <li>
                <a href="/slots/starburst.php" title="Starburst online spielen"
                  >Starburst</a
                >
              </li>
              <li>
                <a
                  href="/slots/sizzling-hot.php"
                  title="Spiele Sizzling Hot Deluxe online spielen"
                  >Sizzling Hot</a
                >
              </li>
            </ul>
          </div>
          <div class="col-sm-2">
            <ul class="sitemap-links">
              <li>
                <a
                  href="/zahlungsmethoden/"
                  title="Alle Casino Zahlungsmethoden"
                  >Zahlungsmethoden</a
                >
              </li>
              <li>
                <a
                  href="/zahlungsmethoden/debitkarte.php"
                  title="Debitkarten als Zahlungsmethode in Casinos"
                  >Debitkarten</a
                >
              </li>
              <li></li>
              <li>
                <a
                  href="/zahlungsmethoden/neteller.php"
                  title="Online Casinos mit Neteller"
                  >Neteller</a
                >
              </li>
              <li>
                <a
                  href="/zahlungsmethoden/sofortueberweisung.php"
                  title="Online Casinos mit Sofortüberweisung"
                  >Sofortüberweisung</a
                >
              </li>
              <li>
                <a
                  href="/zahlungsmethoden/kreditkarten.php"
                  title="Online Casinos mit Kreditkarten"
                  >Kreditkarten</a
                >
              </li>
              <li>
                <a
                  href="/zahlungsmethoden/skrill.php"
                  title="Online Casinos mit Skrill"
                  >Skrill</a
                >
              </li>
              <li>
                <a
                  href="/zahlungsmethoden/paypal.php"
                  title="Online Casinos mit Paypal"
                  >Paypal</a
                >
              </li>
              <li></li>
              <li>
                <a
                  href="/zahlungsmethoden/paysafecard.php"
                  title="Online Casinos mit Paysafecard"
                  >paysafecard</a
                >
              </li>
            </ul>
          </div>
          <div class="col-sm-2">
            <ul class="sitemap-links">
              <li>
                <a href="/software/" title="Jede Casino Software getestet"
                  >Software</a
                >
              </li>
              <li>
                <a
                  href="/software/playtech.php"
                  title="Playtech Casino Software"
                  >Playtech</a
                >
              </li>
              <li></li>
              <li>
                <a href="/software/betsoft.php" title="Betsoft Casino Software"
                  >Betsoft</a
                >
              </li>
              <li>
                <a
                  href="/software/boss-media.php"
                  title="Boss Media Software Casino Software"
                  >Boss Media</a
                >
              </li>
              <li>
                <a href="/software/cassava.php" title="Cassava Casino Software"
                  >Cassava</a
                >
              </li>
              <li>
                <a
                  href="/software/greentube.php"
                  title="Greentube Casino Software"
                  >Greentube</a
                >
              </li>
              <li>
                <a href="/software/netent.php" title="Netent Casino Software"
                  >Netent</a
                >
              </li>
              <li></li>
              <li>
                <a
                  href="/software/microgaming.php"
                  title="Microgaming Casino Software"
                  >Microgaming</a
                >
              </li>
            </ul>
          </div> -->
        </div>

        <hr />

        <p class="copy">
          © 2022
          <span
            ><nuxt-link to="/" :title="config.title">{{
              config.siteName
            }}</nuxt-link></span
          >
        </p>
        <hr />
      </div>
    </footer>
  </div>
</template>

<script>
import config from "../../assets/config";
const provider = config.provider.filter((x) => x.publish === true);

export default {
  name: "footerNav",
  data() {
    return {
      config,
      provider,
    };
  },
};
</script>


<style scoped>
footer {
  background: #f7f7f7;
  color: #777;
  margin-top: 20px;
  padding: 25px 0 20px 0;
  -webkit-box-shadow: inset 0px 0px 5px 0px rgb(0 0 0 / 20%);
  -moz-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 5px 0px rgb(0 0 0 / 20%);
}

a {
  color: #333;
  text-decoration: none;
}

footer ul.sitemap-links {
  list-style: none;
  font-size: 12px;
}

footer p {
  font-size: 13px;
  text-transform: uppercase;
}

footer p.copy {
  text-align: center;
}

footer span {
  font-family: "Oswald";
  font-weight: normal;
  font-style: italic;
  text-align: center;
  vertical-align: -1px;
  font-size: 13px;
  text-transform: uppercase;
}
</style>