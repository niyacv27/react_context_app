🌿 React Context App

This project is focusing on mastering the Context API, using the useContext hook, and overcoming the common React issue known as props drilling.
The application demonstrates how global state can be shared efficiently without passing props manually across multiple components.

The project includes:

A working login system

Dark/Light theme switching

API fetching using Context

Updating global data

LocalStorage persistence

Multiple contexts

Demonstrations of props drilling and its solution

This README explains everything in detail so that anyone visiting this repository clearly understands the purpose and implementation of the app.


🎬 How to Watch the Demo Video

GitHub cannot preview large MP4 files directly.

To view the project demonstration:

Open the folder app_recording

Click on React_context_recording.mp4

Click View raw (top-right corner)

The video will download or play depending on your browser

This video shows all features implemented as part of the assignment.


🌐 How to Run This Project
1️⃣ Install dependencies
npm install

2️⃣ Start the development server
npm start

3️⃣ Open your browser and visit:

👉 http://localhost:3000



1️⃣ Props Drilling – Theory and Code Explanation
🌟 What is Props Drilling?

Props drilling happens when data from a parent component must be passed through multiple child components even though some of those components do not need the data.
This makes the code more complicated, tightly coupled, and less scalable.

🌟 Why is it a problem?

Intermediate components become “data carriers”

Harder to maintain and update large applications

Unnecessary prop chains make the component tree harder to understand

🌟 Props Drilling Example (Used in This Project)

The following code demonstrates how data flows unnecessarily through the component hierarchy:

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


This artificial passing of props through unused layers clearly illustrates why props drilling is inefficient.


2️⃣ Context Setup (Creating Global State)

To avoid props drilling, the Context API was used.
A dedicated contexts folder was created with the following files:

✔ UserContext.js

Manages:

Login

Logout

Name

Email

Update user information

✔ ThemeContext.js

Manages:

Light & dark mode

Theme toggling logic

✔ ApiUserContext.js

Manages:

Fetching API data

Storing response globally

All Context Providers wrap <App />, allowing any component to access shared data directly.


3️⃣ Using useContext in Child Components

Instead of passing props manually, components access global state using:

const { user } = useAuthContext();


or

const { theme, toggleTheme } = useTheme();


Examples of components that use Context:

Navbar

Profile

Login form

Theme Toggle component

API User Display

Context Solution Example

This shows how useContext solves the problem of props drilling.


4️⃣ Fetching API Data Using useEffect + Context

The project fetches user details from:

https://jsonplaceholder.typicode.com/users/1


The result is stored in ApiUserContext and displayed in:

Navbar (name + email)

Footer (company + city)

All components access this data through context, not props.


5️⃣ Updating Global Data

The user can update their name through the Profile section.
When updated:

The name updates globally

Navbar updates instantly

Profile updates instantly

Deep context example updates instantly

This demonstrates real-time global state management.


6️⃣ Mini Project – Login Application

A functional login system was created with Context.

Features:
✔ Login Form

Accepts:

Name

Email

✔ Store User in Context

Logged-in user information is globally stored.

✔ Save to LocalStorage

User remains logged in even after refreshing.

✔ Profile Page

Displays user information and includes a name update feature.

✔ Logout Button

Clears:

Context data

LocalStorage

This completes all mandatory mini project requirements.


7️⃣ Bonus Tasks – Completed
🌗 Dark / Light Theme Toggle

Switch themes globally using ThemeContext.

🧩 Custom Hook: useAuthContext()

Simplifies accessing user context.

🔀 Multiple Contexts

UserContext, ThemeContext, and ApiUserContext work together seamlessly.

🌍 API Data Displayed in Footer and Navbar

Demonstrates shared state across components.


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

This project successfully demonstrates:

What props drilling is

How Context API solves it

How to manage global state without prop passing

Combining multiple contexts in one app

Fetching external API data using context

Login system with global user state

Theme toggling

LocalStorage persistence
