import React from "react";
import renderer from "react-test-renderer";
import Link from "../Link";

describe("Link renders correctly", () => {
  it("with icon", () => {
    const tree = renderer.create(<Link icon="fa fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with right icon", () => {
    const tree = renderer.create(<Link icon="fa fa-star" iconPosition={Link.position.END} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Link id="TestId" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with componentClassName", () => {
    const tree = renderer.create(<Link componentClassName="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with text", () => {
    const tree = renderer.create(<Link text="Link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaLabeledBy", () => {
    const tree = renderer.create(<Link ariaLabeledBy="aria label link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaLabelDescription", () => {
    const tree = renderer.create(<Link ariaLabelDescription="arialabel link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});