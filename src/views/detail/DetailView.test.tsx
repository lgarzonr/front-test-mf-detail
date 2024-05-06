import React from "react";
import DetailView from "./DetailView";
import { render } from "@testing-library/react";

let mockResultItem: any;
jest.mock("./DetailViewModel", () => () => ({
  resultItem: mockResultItem,
}));

describe("ResultView Test", () => {
  it("should render the ResultView component", () => {
    const view = render(<DetailView></DetailView>);
    expect(view.getByText("Loading...")).toBeTruthy();
  });
  it("should render the ResultView component", () => {
    mockResultItem = {
      id: "1",
      title: "Item 1",
      price: {
        amount: 10,
        decimals: 0,
      },
      picture: "https://example.com/item1.jpg",
      condition: "new",
      free_shipping: true,
      description: "Description",
    };
    const view = render(<DetailView></DetailView>);
    expect(view.getByText("Item 1")).toBeTruthy();
  });
});
