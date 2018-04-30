A typical session using the Java Pet Store would be: </br>
###### Homepage
—This is the main page that loads when the user first starts the application.
###### Category View
—There are five top-level categories: Fish, Dogs, Reptiles, Cats, and Birds. Eachcategory has several products associated to it. If we select Fish as the category, we might see"Angelfish" etc.
###### Products
—If you now select a product the application will display all variants of the product.Typically the product variant is either male or female.
###### Product Details
—Each product variant (represented as items) will have a detailed view thatdisplays the product description, a product image, price, and the quantity in stock.
###### Shopping Cart
—This allows the user to manipulate the shopping cart (add, remove, and updateline items).
###### Checkout
—The checkout page displays the shopping cart in a read-only view.
###### Login Redirect
—When the user selects "Continue" on the checkout page, they are redirected tologin page if they have not signed in yet.
###### Verify Sign In
—After being authenticated onto the site, the user is then redirected to the creditcard and billing address form.
###### Confirm Order
—The billing and the shipping addresses are displayed.
###### Commit Order
—This is the final step in the order-processing pipeline. The order is now committedto the database at this point.
2
