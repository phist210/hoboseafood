export default {
    title: 'Product',
    name: 'product',
    type: 'document',
    id: '_id',
    url: `https://ez95hkal.apicdn.sanity.io/v1/data/query/products?query=*[_type=="product"]`,
    fields: [
        {
            title: 'ID',
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