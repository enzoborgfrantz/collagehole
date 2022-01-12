import styled from "styled-components";
import "./App.css";
import logo from "./collagehole_logo.png";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: #eeebe0;
  margin-top: -50px;
  font-size: 25px;
  font-family: monospace;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <img src={logo} height={200} />
        <Text>is coming soon...</Text>
      </Header>
    </div>
  );
}

export default App;
