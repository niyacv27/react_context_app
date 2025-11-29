import React from "react";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./components/ProfilePage";
import PropsDrillingExample from "./components/PropsDrillingExample";
import ContextSolutionExample from "./components/ContextSolutionExample";
import useAuthContext from "./hooks/useAuthContext";

function MainContent() {
  const { user } = useAuthContext();

  return (
    <main className="main">
      {!user && (
        <>
          <p>
            You are not logged in. Use the form below to log in. Your data will
            be stored in Context and localStorage.
          </p>
          <LoginForm />
        </>
      )}

      {user && (
        <>
          <p>
            You are logged in. This page reads your data from Context (no props
            drilling).
          </p>
          <ProfilePage />
        </>
      )}

      <section className="examples">
        <PropsDrillingExample />
        <ContextSolutionExample />
      </section>
    </main>
  );
}

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <div className="app">
          <Navbar />
          <MainContent />
          <Footer />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
