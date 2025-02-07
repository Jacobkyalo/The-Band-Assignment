# TheBandShop

This is the name I gave this application

## Features

- **Home and Products pages:** Provides promotions banners and products listings with sorting and filtering capabilities
- **Admin Panel:** Allows administrators to manage products, including creating, updating, and deleting entries.
- **Products Management:** Admins can add new products, update products details, and remove them from the system.

## Instructions to run the app locally

### Prerequisites

Make sure you have the following tools installed in your machine:

- Nodejs
- npm
- Git

## Installation Steps

1. Clone the repository

```bash
git clone https://github.com/Jacobkyalo/The-Band-Assignment.git
```

2. Change into the project directory

```bash
cd The-Band-Assignment
```

3. Install dependencies

```bash
npm install
```

4. Start the app development server

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000` to view the app

Alternatively, you can view the live application [here](https://the-band-assignment.vercel.app/).

## Project structure

- **app**: Contains the main application code, including:

  - **admin/**: Admin-related pages and components.
  - **dashboard/**: Dashboard-related pages and components.
  - **products/**: Product-related pages and components.
  - **globals.css**: Global CSS styles.
  - **layout.tsx**: Layout component for the application.
  - **page.tsx**: Main page component.

- **components**: Contains reusable UI components, organized into subdirectories:

  - **common/**: Common components used across the application.
  - **dashboard/**: Components specific to the dashboard.
  - **forms/**: Form components.
  - **home/**: Components for the home page.
  - **tables/**: Table components.
  - **ui/**: General UI components.

- **contexts**: Contains context providers for managing global state, such as:

  - **auth-context.tsx**: Authentication context.
  - **cart-context.tsx**: Shopping cart context.

- **hooks**: Custom React hooks.
- **lib**: Utility functions and libraries.
- **public**: Static assets like images and fonts.
- **next.config.mjs**: Configuration file for Next.js.
- **tailwind.config.ts**: Configuration file for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project metadata and dependencies.
- **README.md**: README file and project documentation.

## Description of the application and its features

The platform is designed to manage products efficiently. As an admin, you can:

- **Manage Products:** Add, edit, view, categorize and delete products.
- **View Metrics:** The application provides metrics such as total products, total categories and total value of products in the system.

## Local links to the app

You can follow these links to navigate to the respective pages after running the app locally.

- **Products:** `http://localhost:3000/products`
- **Admin Login:** `http://localhost:3000/admin`
- **Dashboard:** `http://localhost:3000/dashboard`

## Mockapi

For this project i used [FakeStore API](https://fakestoreapi.com/docs) to handle all functionalities like getting, viewing, updating and deleting products, admin login and getting current loggined user.

- **Products:** `https://fakestoreapi.com/products`
- **Current user:** `https://fakestoreapi.com/user/1`
- **Admin login:** `https://fakestoreapi.com/auth/login`

To test application login functionality use these credentails, otherwise you will get an error

```
username:'johnd',
password:'m38rmF$'
```

Or use any other user details from [FakeStore API](https://fakestoreapi.com/user)

## Testing the dashboard

After running the app locally, each page contains buttons that can help you navigate to different sections/pages of the app. For example **Add Product** buttons. You can use these buttons to test the CRUD operations of the app.
