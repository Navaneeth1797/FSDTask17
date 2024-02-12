# React + Vite

# React Context API Cart 

This is a simple React application demonstrating the use of the Context API to manage a shopping cart.

## Project Structure

The project consists of the following files and folders:

- **components/**: This folder contains React components.
- **cartPage.jsx**: This file contains the CartPage component, which displays the list of products in the cart and allows users to update the quantity of each product.
- **utils/**: This folder contains utility files.
- **cartPageContextComponent.jsx**: This file contains the context provider component that manages the state of the products in the cart.

    
## Explanation of Code

### cartPageContextComponent.jsx

This file contains the context provider component that manages the state of the products in the cart. Here's an explanation of the code:

- The `userContext` is created using `React.createContext()`, providing a context for the cart state.
- The `cartPageContextComponent` function is a functional component that initializes the state for the products using the `useState` hook.
- The `userContext.Provider` component wraps its children and provides them access to the context value, which includes the `products` state and the `setProducts` function.
- Finally, the `cartPageContextComponent` function is exported as the default export of the file.

### cartPage.jsx

This file contains the CartPage component, which displays the list of products in the cart and allows users to update the quantity of each product. Here's an explanation of the code:

- The `useContext` hook is used to access the context values from the `cartPageContextComponent` file.
- The `CartPage` function component is defined, which renders the list of products, input fields to update quantity, and displays total quantity and total amount.
- The `updateQuantity` function is defined to update the quantity of a product.
- `getTotalQuantity` and `getTotalAmount` functions are defined to calculate the total quantity and total amount of all products, respectively.
- The `CartPage` component is exported as the default export of the file.
