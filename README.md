# Blog Viewer Application 📚

---This is a **simple Blog Viewer Application** built using Next.js, designed to demonstrate fundamental concepts like routing, dynamic routes, server and client components, authentication, and data fetching. The project integrates **ShadCN UI** for styling and **Kinde Auth** for authentication, ensuring a visually appealing and secure user experience.---

## ✨ Overview

### **Home Page**

- Displays a list of blog post titles fetched from a mock API.
- Each title links to a detailed blog page using dynamic routing.

### **Blog Page**

- A dedicated route (/blogs) that displaying all the blogs
- Each blog card provides a button to the Blog Details Page for each post.

### **Blog Details Page**

- Dynamic route (/blog/[id]) to display details of a specific blog post.
- Fetches blog details based on the id from the URL.

### **Protected Profile Page**

- A route (/profile) that displays a message like "Welcome to your profile!". and user details like email , username, photo.

- The page is protected with Kinde Auth and redirects users to the login page if they are not authenticated.

### **Header and Navigation**

- A global header with navigation links to Home, Blogs, and Profile.
- Dynamically displays a Login button if the user is not authenticated, and a Logout button if they are.

### **Styling**

- Built with ShadCN UI and tailwindcss for ensuring a clean, responsive, and modern design.

## 🚀 Features

### **🔐 Authentication with Kinde Auth**

- The app uses Kinde Auth for authentication.
- Users must log in to access the Profile page.
- If a user is not logged in, they will be redirected to the Kinde Login Page.
- The Login and Logout buttons dynamically update based on the authentication state.

## Getting Started

- **Clone repository**
```
git clone https://github.com/sheikh-saiyam/NextJs-Blog-Project
cd blog-viewer  
```

- **Install dependencies**
```
npm install  
```

- **Setup .env file**
```
KINDE_CLIENT_ID=<your_kinde_client_id>
KINDE_CLIENT_SECRET=<your_kinde_client_secret>
KINDE_ISSUER_URL=https://<your_kinde_subdomain>.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
```

- **Run development server**
```
npm run dev
```