import React from "react";
import { render } from "@testing-library/react";
import Featured from "./Featured";

describe("Featured tests", () => {
  it("should render", () => {
    expect(render(<Featured />)).toBeTruthy();
  });
});
