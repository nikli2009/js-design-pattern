<template>
  <div class="page">
    <ul class="navigation">
      <li>
        <router-link :to="{ name: 'strategy-pattern' }">strategy pattern</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'factory-pattern' }">factory pattern</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {

  },
  methods: {

  },
  created() {

  },
};
</script>
<style lang="scss" scoped>
  @import './index.scss';
  li {

    .router-link-exact-active {
      position:relative;
      &:after {
        content: '';
        width: 100%;
        height:3px;
        background: #e0baba;
        position:absolute;
        left:0;
        bottom:0;
        animation: 0.2s showActiveLink;
      }

    }
  }

  @keyframes showActiveLink {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }


</style>
