const puppeteer = require("puppeteer");

let browser;
let page;
beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});

afterEach(async () => {
  await browser.close();
});

it("header appears", async () => {
  const text = await page.$eval("h2", (el) => el.innerHTML);
  expect(text).toEqual("Enter your Sudoku puzzle");
});

it("input changes value", async () => {
  await page.focus("input");
  await page.keyboard.type("1");
  const text = await page.$eval("input", (el) => el.value);
  expect(text).toEqual("1");
});

it("input default to regular class", async () => {
  await page.focus("input");
  const text = await page.$eval("input", (el) => el.className);
  expect(text).toEqual("regular");
});

it("input changes class to onChange", async () => {
  await page.focus("input");
  await page.keyboard.type("1");
  const text = await page.$eval("input", (el) => el.className);
  expect(text).toEqual("onChange");
});

it("input changes class to error", async () => {
  await page.focus("#n00");
  await page.keyboard.type("1");
  await page.focus("#n01");
  await page.keyboard.type("1");
  const text = await page.$eval("#n01", (el) => el.className);
  expect(text).toEqual("error");
});

it("reset btn clears board", async () => {
  await page.focus("#n00");
  await page.keyboard.type("1");
  await page.focus("#n01");
  await page.keyboard.type("1");
  await page.click("#reset-button");
  const text = await page.$eval("#n01", (el) => el.value);
  expect(text).toEqual("");
});

it("doesnt start algo if error is present in board", async () => {
  await page.on("dialog", async (dialog) => await dialog.accept());
  await page.focus("#n00");
  await page.keyboard.type("1");
  await page.focus("#n01");
  await page.keyboard.type("1");
  await page.click("#solution-button");
  const text = await page.$eval("#n88", (el) => el.value);
  expect(text).toEqual("");
});
