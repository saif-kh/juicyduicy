import "./Second.css";
import { ReactComponent as Ananas } from "./assets/ananas.svg";

function Second() {
  return (
    <div className="bg">
      <div className="about">
        <div className="about-title">
          Fresh, exotic and absolutly <span className="orange">flavorful.</span>
        </div>
        <div className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <Ananas className="ananas" />
    </div>
  );
}

export default Second;
