import "./App.scss";

const packageJSON = require("../package.json");

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-welcome">Welcome!</div>
        <div className="app-header-applications">Current applications:</div>
      </header>
      <div className="application-cards">
        <Card href="https://jenkins.burakbal.tk/">Jenkins</Card>
        <Card href="https://cloud.burakbal.tk/">NextCloud</Card>
        <Card href="https://vpn.burakbal.tk/">OpenVPN</Card>
      </div>
      <div className="version">Version: {packageJSON.version}</div>
    </div>
  );
};

const Card = ({ children, href }) => {
  return (
    <a className="card" href={href}>
      {children}
    </a>
  );
};
