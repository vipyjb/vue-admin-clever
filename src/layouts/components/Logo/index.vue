<template>
  <div class="logo-container">
    <router-link to="/">
      <vab-remix-icon class="logo" icon-class="chat-smile-3-fill" />
      <span class="title" :title="title">
        {{ title }}
      </span>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Logo",
  data() {
    return {
      title: this.$baseTitle,
    };
  },
  computed: {
    ...mapGetters(["logo", "layout"]),
  },
};
</script>
<style lang="scss" scoped>
@mixin container {
  position: relative;
  height: 56px;
  overflow: hidden;
  line-height: 56px;
  background: $base-color-header;
}

@mixin logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 5px;
  color: $base-title-color;
  vertical-align: middle;
}

@mixin title {
  display: inline-block;
  overflow: hidden;
  font-size: $base-font-size-max;
  font-weight: 600;
  line-height: 55px;
  color: $base-title-color;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.logo-container {
  @include container;

  text-align: center;

  .logo {
    @include logo;
  }

  .title {
    @include title;

    max-width: 140px;
  }
}
</style>
