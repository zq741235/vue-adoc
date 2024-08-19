<template>
  <a
    class="navbar-brand navbar-logo"
    :class="[size]"
    href="#"
  >
    <img
      :src="src"
      alt="logo"
    >
  </a>
</template>
<script>
export default {

  name: 'Logo',
  props: {
    size: {
      type: String,
      default: 'big'
    },
    src: {
      type: String,
      default: ''
    },
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
.navbar-logo {
  &.big {
    margin-right: 20px;
  }

  img {
    width: 40px;
  }

  &.small {
    img {
      width: 30px;
    }
  }
}

/*.navbar-logo img {
  vertical-align: bottom;
  width: 40px;
}

.navbar-logo img+img {
  width: 20px;
}*/
</style>