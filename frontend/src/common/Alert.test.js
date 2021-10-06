import React from "react";
import { render } from "@testing-library/react";
import Alert from "./Alert";

it("renders without crashing", function () {
  render(<Alert />);
});

it("matches snapshot for danger", function () {
  let message = ["OMG, everything is broken", "Everything needs to be redone"];
  const { asFragment } = render(<Alert type="danger" messages={message} />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for success", function () {
  let messages = ["Everything works great!"];
  const { asFragment } = render(<Alert type="success" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});
