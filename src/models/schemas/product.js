const {Schema} = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment')


const ProductSchema = new Schema({
    num: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    size: {
        type: Array,
        required: true,
    },
    color: {
        type: Array,
        requried: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }, 
    img: {
        type: String,
        required: true,   
    }
}, {
    collection: "products",
    timestamps: true,
});

// ProductSchema(autoIncrement.plugin,{
//     model: 'products',
//     field: 'num',
//     startAt: 1,
//     increment: 1
// });

export { ProductSchema };