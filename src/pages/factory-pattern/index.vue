<template>
  <div>
    <h1>factory pattern</h1>
    <p>help build request among different environment</p>
    <ul>
      <li v-for="i in response">{{ i }}</li>
    </ul>
  </div>
</template>
<script>
import { fetch } from '@/utils';

export default {
  data() {
    return {
      response: {}
    };
  },
  created() {
    /* specify any env as we want */
    fetch({
      url: '',
      method: 'get',
    }).then(result => {
      this.response = result.data
      console.log(this.response)
    }).catch(e => {
      this.response = e
    })
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>
