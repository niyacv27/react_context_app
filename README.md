🌿 React Context API 

This project is focusing on the useContext hook, Context API, and addressing the problem of props drilling.
The aim is to demonstrate how global state can be managed cleanly in React without manually passing props between components.

The application includes:

A functional login system

Dark/Light theme switching

API data fetching using Context

Global state updates

LocalStorage persistence

Multiple context providers

Props drilling example and context-based solution

This README gives a full explanation so anyone viewing this repository can understand what the project does.

🎬 How to Watch the Demo Video

GitHub cannot preview large MP4 files directly.

To view the assignment demonstration video:

Open the folder app_recording

Click React_context_recording.mp4

Then click View raw (top-right)

The video will download or stream depending on your browser

This shows the entire working example of props drilling, context usage, login system, theme switching, and API integration.

🌐 How to Run This Project

To run this app on your computer:

1️⃣ Install Dependencies
npm install

2️⃣ Start the Development Server
npm start

3️⃣ Open your browser and visit:

👉 http://localhost:3000

This is the URL where your React project runs locally.

1️⃣ Props Drilling – Theory and Code Explanation
📌 What is Props Drilling?

Props drilling occurs when data from a parent component must be passed through several intermediate components that do not need the data, only so the deepest component can use it.

This creates:

Unnecessary prop chains

Hard-to-maintain code

Confusing component trees

Tightly coupled components

📌 Props Drilling Code Example (Used in This Project)
// Parent.js
export default function Parent() {
  const message = "Hello from Parent via props!";
  return <Middle message={message} />;
}

// Middle.js
export default function Middle({ message }) {
  // Middle does NOT use the message
  return <DeepChild message={message} />;
}

// DeepChild.js
export default function DeepChild({ message }) {
  return <p>DeepChild got: {message}</p>;
}


In the UI, this is shown in the Props Drilling Example card.

This demonstrates exactly why props drilling is inefficient.

2️⃣ Context Setup (Creating Global State)

A dedicated contexts directory contains:

✔ UserContext.js

Handles:

Login

Logout

User name and email

Update user details

✔ ThemeContext.js

Handles:

Light/Dark theme

Theme toggle logic

✔ ApiUserContext.js

Handles:

Fetching API data

Storing fetched user globally

These contexts wrap <App /> so all components can access shared data without prop passing.

3️⃣ Using useContext to Access Data in Child Components

Instead of passing props manually, components access global state directly:

const { user } = useAuthContext();
const { theme } = useTheme();


Examples of components using context:

Navbar

Profile

Login form

Theme toggle button

API user display

Context solution example

This replaces props drilling with clean, managed global state access.

4️⃣ Fetching API Data Using useEffect + Context

Data is fetched from:

https://jsonplaceholder.typicode.com/users/1


The response is stored globally in ApiUserContext and displayed in:

Navbar (name + email)

Footer (company + city)

No props are used — the data comes entirely through context.

5️⃣ Updating Global Data

A profile interface allows users to update their name.

When the name is updated:

The change propagates to all components instantly

Navbar updates

Profile updates

Deep context example updates

This demonstrates global state synchronization.

6️⃣ Mini Project – Login Application

The app includes a complete login system:

✔ Login Form

Takes:

Name

Email

✔ Store User in Context

Logged-in user is stored in global state.

✔ Save User in LocalStorage

User remains logged in even after refreshing the browser.

✔ Profile Page

Shows:

User data

Update name option

✔ Logout Button

Clears:

Context

LocalStorage

This completes the mandatory mini project requirements.

7️⃣ Bonus Features Implemented
🌗 Dark / Light Theme Toggle

Switches theme globally using ThemeContext.

🧩 Custom Hook: useAuthContext()

A simplified way for components to access user data.

🔀 Multiple Contexts Combined

UserContext, ThemeContext, and ApiUserContext work together across the entire app.

🌍 API Data Displayed in Navbar and Footer

Same API data appears in multiple components using context.

📁 Folder Structure
react_context_app/
│
├── public/
├── src/
│   ├── components/
│   ├── contexts/
│   │    ├── UserContext.js
│   │    ├── ThemeContext.js
│   │    ├── ApiUserContext.js
│   ├── hooks/
│   │    ├── useAuthContext.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│
├── app_recording/
│   ├── React_context_recording.mp4
│
└── README.md

🎯 Conclusion

This project demonstrates:

What props drilling is

How Context API solves it

How to manage global state in React

How to use multiple contexts together

How to fetch API data and share it globally

How to create a login system using context

How to persist user data with localStorage

How to implement theme toggling globally

All assignment tasks — including the optional bonus tasks — are completed successfully.
