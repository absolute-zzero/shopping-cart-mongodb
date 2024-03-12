# shopping-cart-mongodb

## The files/code for the react shopping cart app that contains a backend and utilizes a locally hosted MongoDB database  

## database: MongoDB

### database name: store-database

### collection: shop-items

### documents:

{"_id":{"$oid":"65da396ce2fc09c10b06a50a"},"id":{"$numberInt":"1"},"file":"product-1.jpg","name":"Blue Top","price":{"$numberInt":"100"},"description":"Simple blue and white top. This unique design will turn heads and if you are seeking to be an attention grabber"}

{"_id":{"$oid":"65da3bf1e2fc09c10b06a50b"},"id":{"$numberInt":"2"},"file":"product-2.jpg","name":"Grey Dress","price":{"$numberInt":"200"},"description":"Simple grey dress with long sleeves. The stylish sleeves allow you to look both elegant and simple for any event "}

{"_id":{"$oid":"65da3d7ce2fc09c10b06a50c"},"id":{"$numberInt":"3"},"file":"product-3.jpg","name":"Stripe Dress","price":{"$numberInt":"300"},"description":"Simple blue and white stripe dress. It has a classic retro look if you're an old fashion person who is not afraid to show it"}

{"_id":{"$oid":"65da3dffe2fc09c10b06a50d"},"id":{"$numberInt":"4"},"file":"product-4.jpg","name":"Floral Top","price":{"$numberInt":"400"},"description":"Simple yellow and blue floral top. A bright and colorful piece of garment that will no doubt light up any room "}


### collection: cart-items

### documents:

{"_id":{"$oid":"65da3ed1e2fc09c10b06a50f"},"id":{"$numberInt":"1"},"product_id":{"$numberInt":"1"},"quantity":{"$numberInt":"3"},"item":"Blue Top","cost":{"$numberInt":"100"},"image":"product-1.jpg","description":"Simple blue and white top. This unique design will turn heads and if you are seeking to be an attention grabber"}

{"_id":{"$oid":"65da3efee2fc09c10b06a510"},"id":{"$numberInt":"2"},"product_id":{"$numberInt":"2"},"quantity":{"$numberInt":"2"},"item":"Grey Dress","cost":{"$numberInt":"200"},"image":"product-2.jpg","description":"Simple blue and white stripe dress. It has a classic retro look if you're an old fashion person who is not afraid to show it"}
