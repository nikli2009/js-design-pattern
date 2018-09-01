<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ name: 'strategy-pattern' }">strategy pattern</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {}
    },
    computed: {

    },
    methods: {

    },
    created() {

    }
  }
</script>
