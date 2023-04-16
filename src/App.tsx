import ListGroup from "./components/ListGroup";
import Nav from "./Nav";
import { Engagespot } from "@engagespot/react-component";
import React from "react";
import ReactDOM from "react-dom";

const theme = {
  notificationButton: {
    iconFill: "#B764AB",
  },
  colors: {
    brandingPrimary: "#B764AB",
    colorSecondary: "#ecebfa",
  },
  feedItem: {
    hoverBackground: "#ecebfa",
  },
  dropdown: {
    hoverBackground: "#ecebfa",
    menuItemHoverBackground: "#ecebfa",
  },
};

ReactDOM.render(
  <Engagespot apiKey="gjwlbt7whhsu7mww7cnpn" userId="Sajal" theme={theme} />,
  document.body
);

export default function App() {
  return (
    <>
      <div className="App">
        <ListGroup />
        <Nav.NavItem>Home</Nav.NavItem>
        <Nav.NavItem>About</Nav.NavItem>
        <h1>Hello MF</h1>
        <h2>EAT 5STAR DO NOTHING</h2>
      </div>
    </>
  );
}
