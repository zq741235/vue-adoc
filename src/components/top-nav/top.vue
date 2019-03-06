<template>
  <div>
    <nav class="navbar  navbar-fixed-top hidden-sm hidden-xs">
      <div class="container-fluid">
        <div class="navbar-header">
          <logo :src="logo" />
          <a class="navbar-brand"
                        href="#">
                {{title}}
                 </a>
        </div>
      </div>
    </nav>
    <!-- navbar navbar-inverse -->
    <nav class=" navbar-fixed-top visible-xs visible-sm mobie__navbar ">
      <div class="container-fluid">
        <div class="navbar-header">
          <slot name="menuButton"></slot>
          <logo size="small"
            :src="logo" />
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import logo from './logo'
export default {
  name: 'top',
  props: {
    title: {
      type: String
    },
    logo: {
      type: String,
      default: require('../../assets/logo.png')
    }
  },
  computed: {
    examplesSrc() {
      // return this.origin + '/examples.html#' + this.$route.path
      return this.origin + '#' + this.$route.path
    }
  },
  data() {
    return {}
  },
  components: {
    logo
  }
}
</script>
<style lang="scss">
@import '../../assets/var.scss';

.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  box-shadow: 0 0 2px rgba(255, 228, 82, 0.25);
  background-color: #fff;
  border-color: $auiColorPrimary;
}

// mobie
.mobie__navbar {
  height: 50px;
  background-color: #fce601;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  .navbar-header {
    text-align: center;
  }

  .navbar-brand {
    // line-height: 40px;
    color: #fff;
    float: none;
  }
}

.navbar-header {
  // padding: 15px 0;
}

.navbar-brand {
  font-family: Monaco, "Lucida Console", monospace;

  float: left;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  color: $auiColorPrimary;
  font-weight: 700;

  &:hover,
  &:focus {
    color: $auiColorPrimary;
    text-decoration: none;
  }

  overflow: hidden;
}

.navbar-fixed-top {
  position: fixed;
  top: 0;
  border-width: 0 0 1px;
  right: 0;
  left: 0;
  z-index: 9;
}
</style>