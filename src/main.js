const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'This is a description',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.bbc.co.uk/news',
            inventory: 100,
            onSale: false,
            cart: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: '2234', colour: 'green', image: './assets/images/socks_green.jpg' },
                { id: '2235', colour: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            sizes: [ 
                { id: '3001', name: 'XS' },
                { id: '3002', name: 'S' },
                { id: '3003', name: 'M' },
                { id: '3004', name: 'L' },
                { id: '3005', name: 'XL' }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            if(this.cart > 0) this.cart -= 1;
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})