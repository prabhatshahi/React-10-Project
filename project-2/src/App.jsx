import "./App.css";
import "./components/Navigation/Navigation";
import "./components/ConatctHeader/ConatctHeader";
import "./components/ContactForm/ContactFrom";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
