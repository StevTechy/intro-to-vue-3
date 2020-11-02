const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            if(this.cart.length > 0)
            {
                this.cart.splice(this.cart.findIndex(x => x === id), 1)
            }
        }
    }
})