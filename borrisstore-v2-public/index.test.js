// ./index.test.js

const { getByText } = require("@testing-library/dom");
require("@testing-library/jest-dom/extend-expect");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const html2 = fs.readFileSync(path.resolve(__dirname, "./about.html"), "utf8");
const html3 = fs.readFileSync(path.resolve(__dirname, "./buy.html"), "utf8");
const html4 = fs.readFileSync(path.resolve(__dirname, "./copyright.html"), "utf8");

let dom;
let container;
//home page
describe("Test for elements on Home page", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("Page renders a heading element", () => {
    expect(container.querySelector("h1")).not.toBeNull();
    expect(
      getByText(container, "The Borris store")
    ).toBeInTheDocument();
  });
});


//about page
describe("Test for elements on About page", () => {
  beforeEach(() => {
    dom = new JSDOM(html2, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("Page renders a heading element", () => {
    expect(container.querySelector("h1")).not.toBeNull();
    expect(
      getByText(container, "about the Borris company")
    ).toBeInTheDocument();
  });
});


//buy page
describe("Test for elements on Buy page", () => {
  beforeEach(() => {
    dom = new JSDOM(html3, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("Page renders a heading element", () => {
    expect(container.querySelector("h1")).not.toBeNull();
    expect(
      getByText(container, "green")
    ).toBeInTheDocument();
  });
});



//copyright page
describe("Test for elements on Copyright page", () => {
  beforeEach(() => {
    dom = new JSDOM(html4, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("Page renders a heading element", () => {
    expect(container.querySelector("h1")).not.toBeNull();
    expect(
      getByText(container, "green")
    ).toBeInTheDocument();
  });
});

//hint
