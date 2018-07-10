export default {
    title: 'Product',
    name: 'product',
    type: 'document',
    id: '_id',
    fields: [
        {
            title: 'id',
            name: 'id',
            type: 'number'
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        }
    ]
}