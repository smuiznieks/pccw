import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MenuItem from "./MenuItem";


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders menu item", async () => {
  const fakeMenuItem = {
    name: "Nachos",
    price: 4.99
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeMenuItem)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<MenuItem menuItem={fakeMenuItem} key="1" />, container);
  });

  expect(container.querySelector("li").textContent).toBe("Nachos ($4.99)");

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});