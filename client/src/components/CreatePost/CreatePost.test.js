import React from "react";
import { render } from "@testing-library/react";
import CreatePost from "./CreatePost";

describe("CreatePost tests", () => {
  it("should render", () => {
    expect(render(<CreatePost />)).toBeTruthy();
  });
});
