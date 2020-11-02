app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template:
        /*html*/
        `
        <p>{{ details }}</p>
        `
})