import ReactDOMServer from "react-dom/server";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { App } from "./App";

export async function generatePDF(data: any) {
  // create raw html
  const htmlContent = ReactDOMServer.renderToString(<App data={data} />);
  fs.writeFileSync("output.html", htmlContent, "utf-8");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.waitForSelector("img", { visible: true });

  await page.addStyleTag({ path: path.join(__dirname, "styles.css") });
  await page.pdf({
    path: "output.pdf",
    format: "A4",
    printBackground: true,
  });
  await browser.close();
  console.log("Archivo PDF generado correctamente en output.pdf");
}

(async () => {
  const data = {};
  await generatePDF(data);
})();
