# Product Viewer App

Product Viewer is an Angular application that allows users to view, filter, and manage products using the **DummyJSON API**. It includes features for displaying a list of products, showing detailed product information in a modal, and managing a favorites list, all with a responsive design.

## Features

- **Product Listing Page**:
  - Displays a list of products fetched from the `GET /products` endpoint.
  - Each product shows **Title**, **Price**, **Thumbnail**, and **Rating**.
  - A dropdown allows users to filter products by category using the `GET /products/categories` endpoint.

- **Product Details Modal**:
  - Clicking on a product opens a modal displaying **Title**, **Description**, **Stock**, **Price**, and **Images**.
  - Users can add products to their **Favorites** list.

- **Favorites Page**:
  - Displays a list of products added to the **Favorites**.
  - The favorites list is persisted locally using **localStorage**, so it remains intact after page refresh.

## Libraries Used

- **Angular**: The core framework for building the app.
- **RxJS**: For handling asynchronous operations and making API calls.
- **Angular Material**: For UI components like buttons, modals, dropdowns, etc.
- **NGRX**: For state management, handling actions, reducers, effects, and selectors.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/product-viewer.git
   cd product-viewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   ng serve
   ```

   The app will be available at `http://localhost:4200`.

## Screenshots

### Desktop View:
![Desktop View](/src/assets/product-list-desktop.PNG?raw=true)
![Desktop View](/src/assets/product-details-desktop.PNG?raw=true)
![Desktop View](/src/assets/favorite-products-desktop.PNG?raw=true)

In the desktop view, the application displays products in a grid layout with filters and modals for product details.

### Responsive View:
![Responsive View](/src/assets/product-list-responsive.PNG?raw=true)
![Responsive View](/src/assets/favorite-products-responsive.PNG?raw=true)

The responsive view adapts to a smaller screen, maintaining a responsive layout that adjusts product grid and modals.
