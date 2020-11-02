const app = Vue.createApp({
    data() {
        return {
            brand: 'Vuecomfy',
            product: 'Socks',
            description: 'This is a description',
            url: 'https://www.bbc.co.uk/news',
            onSale: false,
            cart: 0,
            premium: true,
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
            if(this.cart > 0) this.cart -= 1
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
        }
    }
})