<template>
  <div class="container">
    <h1>strategy-pattern</h1>
    <p>handling different cases with strategy</p>
    <div class="strategy-switch" @click="onClickLoadProduct">
      load product
    </div>
    <div class="product-item" v-if="notification">
      {{ product.name }} {{ product.type }}
      <p class="product-item__notification">
        {{ notification }}
      </p>
    </div>
  </div>
</template>
<script>
  const notificationStrategies = {
    '0': function() {
      window.alert('show toast for demo')
      this.notification = 'the phone is [brand new]'
    },
    '3': function() {
      this.notification = 'the phone is [70% new with some scratches]'
    },
    'other': function() {
      this.notification = 'the phone is kind of damaged..'
    }
  }

  export default {
    components: {},
    data() {
      return {
        product: {
          name: '',
          type: ''
        },
        notification: ''
      }
    },
    computed: {

    },
    methods: {
      _getProductItem() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const productItem = {
              name: 'iPhone X',
              type: (Math.random()*10).toFixed(0)
            }
            resolve(productItem)
          }, 500)
        })
      },
      onClickLoadProduct() {
        this._getProductItem()
          .then(result => {
            const { name, type } = result
            this.product.name = name
            this.product.type = type

            // type can be a number from 0 - 10
            // say if we want to handle the type
            // we can simply add some strategies

            // benefit 1: you can add new strategy as you want without CHANGE THE CODE HERE
            // benefit 2: avoid using lots of If-Else and Switch, make this piece of code easier to read
            // benefit 3: dev just need to care about on the Strategies' code, [notificationStrategies]
            this.handleProductType(result)

          })
          .catch(e => {

          })
      },
      handleProductType({ name, type = '0' }){
        if(notificationStrategies[type]) {
          notificationStrategies[type].bind(this)()
        } else {
          notificationStrategies.other.bind(this)()
        }
      }
    },
    created() {

    }
  }
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>
