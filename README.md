Project Overview
NewzCast is a React-based web application that allows users to register, log in, and interact with news content by posting, viewing, and commenting.
The application leverages Supabase for backend services, including authentication and data management. 
Users can view profiles, follow other users, and manage their posts and interactions.

Project Structure
The project is organized into several directories and files as follows:

newzCast/
│
├── public/                  # Static public assets
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/                     # Main source code directory
│   ├── assets/              # Assets like images and CSS
│   ├── components/          # Reusable components
│   ├── context/             # Context providers
│   ├── pages/               # Page components
│   ├── utils/               # Utility functions and configurations
│   ├── App.js               # Main App component
│   ├── db.json              # Local JSON database
│   └── index.js             # Application entry point
│
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # NPM package configuration
├── package-lock.json        # NPM lock file
├── README.md                # Project README file
└── tailwind.config.js       # Tailwind CSS configuration

Components
ColoredLogo.jsx: Renders a colored logo.
Loading.jsx: Displays a loading spinner.
PrivateRoute.jsx: A higher-order component to protect routes.
alertModal.jsx: Modal component for displaying alerts.
smallAlertBox.jsx: Smaller alert box component.
authenticate/Container.jsx: Container for authentication pages.
authenticate/RegisterLinkItems.jsx: Links for the registration page.
authenticate/TermsOfUse.jsx: Terms of use component.
profile/UserProfile.jsx: User profile component.
profile/UserID.jsx: Displays user ID.
profile/UserConnectionActiviyInfo.jsx: Displays user connection activity info.
profile/ChangeProfilePic.jsx: Component for changing profile picture.
verify/Verify.jsx: Component for verification.
verify/InfoBox.jsx: Info box component for verification.
Context
LoginContext: Provides user authentication and session management. Defined in context/LoginContext.js.
Utilities
Utility functions and configurations are located in the src/utils directory:

generateRandomPostID.js: Generates a random post ID.
getUsersList.js: Fetches the list of users.
handleDeletePost.js: Handles deleting a post.
HandleLogIn.js: Handles user login.
handlePostEdit.js: Handles editing a post.
handleSendComment.js: Handles sending comments.
handleSignedUpEmails.js: Checks signed-up emails.
handleSignOut.js: Handles user sign-out.
handleSignUp.js: Handles user sign-up.
handleTokenExpiration.js: Handles token expiration.
handleUpdateEmail.js: Handles updating user email.
handleUpdateUserInfo.js: Handles updating user information.
handleUploadDate.js: Handles uploading dates.
handleUploadNewPost.js: Handles uploading a new post.
manageUsersFavorites.js: Manages user favorites.
manageUsersLikes.js: Manages user likes.
supabaseAdmin.js: Supabase admin configurations.
SupabaseClient.js: Supabase client configurations.
Pages
The src/pages directory contains the main page components:

Favorites.jsx: Displays the user's favorite posts.
Home.jsx: Home page component.
landing.jsx: Landing page component.
login.jsx: Login page component.
NewzNav.jsx: Navigation for news.
profile.jsx: User profile page.
ProfileSettings.jsx: User profile settings page.
register.jsx: Registration page component.
Settings.jsx: General settings page.
Trending.jsx: Trending posts page.
VerifyClient.jsx: Client verification page.
Styling
Styling is managed using Tailwind CSS. The main CSS file is located at src/assets/css/index.css.


