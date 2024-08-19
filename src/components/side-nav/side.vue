<template>
  <ul class="menu-root">
    <li
      v-for="(item,key) in config"
      :key="key"
    >
      <p class="menu__group__title">
        {{ item.title }}
      </p>
      <ul class="menu__group__item">
        <li
          v-for="(sub,skey) in item.list"
          :key="skey"
        >
          <router-link :to="{path: sub.path}">
            {{ sub.name||sub.path }}
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {

  name: 'Side',
  props: {
    config: {
      type: Array,
      default(){
        return []
      }

    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import '../../assets/var.scss';

.menu-root {
  padding: 0 40px;
}

.menu-root li {
  list-style: none;
}

.menu__group__title {
  font-weight: 600;
  color: $auiTextColorGeneral;
}

.menu__group__item {
  font-weight: 400;
  padding-left: 20px;

  a {
    font-size: 16px;
    color: $auiTextColorGeneral;

    &.active {
      color: $auiColorPrimary;
    }
  }
}
</style>