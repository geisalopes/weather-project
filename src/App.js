import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://geisalopes.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Geisa Lopes
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/geisalopes/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
