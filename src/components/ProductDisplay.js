app.component('product-display', {
  props:{
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" :class="[ !inStock ? outOfStockImageClass : '' ]" />
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <p>{{ description }}</p>
            <p v-if="inStock >= 10">In Stock</p>
            <p v-else-if="inStock < 10 && inStock > 0">Low Stock!</p>
            <p v-else>Out of Stock!</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">
                {{ detail }}
              </li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateImage(index)"
              class="color-circle" :class="[ isActive ? activeClass : '' ]" :style="{ backgroundColor: variant.colour }">
            </div>
            <p v-show="onSale && inStock > 0">{{ onSaleText }}</p>
            <button class="button" @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
            <button class="button" @click="removeFromCart" v-show="cart > 0">Remove from Cart</button>
          </div>
        </div>
      </div>`,
  data() {
    return {
      brand: 'Vuecomfy',
      product: 'Socks',
      description: 'This is a description',
      url: 'https://www.bbc.co.uk/news',
      onSale: false,
      details: ['50% cotton', '30% wool', '20% polyester'],
      selectedVariant: 0,
      variants: [
        { id: '2234', colour: 'green', image: './assets/images/socks_green.jpg', quantity: 0 },
        { id: '2235', colour: 'blue', image: './assets/images/socks_blue.jpg', quantity: 15 }
      ],
      sizes: [
        { id: '3001', name: 'XS' },
        { id: '3002', name: 'S' },
        { id: '3003', name: 'M' },
        { id: '3004', name: 'L' },
        { id: '3005', name: 'XL' }
      ],
      isActive: true,
      activeClass: 'active',
      outOfStockImageClass: 'out-of-stock-img'
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1
    },
    updateImage(variant) {
      console.log(variant)
      this.selectedVariant = variant
    }
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    onSaleText() {
      return this.brand + ' ' + this.product + ' is on sale'
    },
    shipping() {
      if(this.premium) return 'Free'
      return '$2.99'
    }
  }
})