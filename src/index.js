import sharp from "sharp";
import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";
import Loading from "./Loading";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333;
`;

const Text = styled.div`
  font-size: 20px;
  color: #ccc;
  text-align: center;
`;

new Promise((r) => setTimeout(r, 10000)).then(() => {
  for (let i = 0; i < 3; i++) {
    sharp({
      create: {
        width: 300,
        height: 300,
        channels: 4,
        background: { r: 0, g: 250, b: 0, alpha: 1 },
      },
    })
      .png()
      .toFile(`/Users/alain/Downloads/output/renderer${i}.png`, (err, info) => {
        if (err) {
          console.log("err: ", err);
        }
        if (info) {
          console.log(`Created image nr: `, i);
        }
      });
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text> Executing sharp in render process!</Text>
        <Loading />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
