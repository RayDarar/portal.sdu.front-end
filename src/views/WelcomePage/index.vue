<template>
  <div id="welcome-page">
    <img
      class="logo"
      src="@/assets/icons/sign-in/sdu-logo.svg"
      alt="sdu-logo icon"
    />

    <article class="group-wrapper">
      <p class="text">Developed by</p>
      <h2 class="team">BGS Limited</h2>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import api from "@/api";

@Component
class WelcomePage extends Vue {
  public created() {}
}

export default WelcomePage;
</script>

<style lang="scss" scoped>
@import "globals";

#welcome-page {
  height: 100%;
  padding: 2em;

  background-color: $sduBlue;

  @extend .grid-center;
  @include rows(1fr, 1fr);
}

.logo {
  align-self: flex-end;
}
.group-wrapper {
  @extend .flex-down;

  align-self: flex-end;
  color: white;
  font-size: 0.95rem;
}
</style>
