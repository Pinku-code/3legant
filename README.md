# Full-Stack E-Commerce Application

This is a full-stack e-commerce application built with Node.js, Express, MongoDB, React.js, and Redux. The project demonstrates user authentication, product listing, and shopping cart functionality. Admins can add, update, or delete products, while users can view, search, and manage their shopping carts.

## Features
  
- **Authentication**: Login, register, and logout functionality.
- **Product Listing**: View available products and their details.
- **Shopping Cart**: Add/remove items and manage the cart.
- **Admin Functions**: Admin users can manage products (add/update/delete).
- **State Management**: Managed via Redux.
- **Routing**: Handled with React Router.



## API Endpoints

### Product Management
- `GET /products`: Retrieve a list of all products.
- `GET /products/:id`: Retrieve details of a specific product.
- `POST /products`: Add a new product (admin only).
- `PUT /products/:id`: Update a product (admin only).
- `DELETE /products/:id`: Delete a product (admin only).

### Shopping Cart
- `GET /cart`: Retrieve the user's shopping cart.
- `POST /cart`: Add an item to the cart.
- `DELETE /cart/:id`: Remove an item from the cart.

## Installation and Setup

### Prerequisites:
- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **MongoDB**: Make sure MongoDB is running locally or use MongoDB Atlas.

### Steps to Run the Project:
1. Clone this repository:
   ```bash
   git clone https://github.com/Pinku-code/3legant.git

   cd 3legant 
   ```

2. Install dependencies:
    ```bash
    npm install 
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```


### Access the application:

Development Server :  http://localhost:5173/

### Login Credentials For Admin
- Username : Abinash
- Password : 123456789

### Future Enhancements
- Implement order management.
- Add product search and filtering functionality.
- Implement persistent cart storage across sessions.

```js
const Developer = {
    "NAME" : "ABINASH",
    "GMAIL" : "ns4507262@gmail.com",
    "MOBILE" : "+91-637205288"
}
```
