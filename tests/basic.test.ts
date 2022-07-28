import bleiyze from "../src/index"
import { readFileSync } from "fs"
const html = readFileSync("./tests/test.html", "utf-8")

test("findAll image", () => {
    expect(bleiyze.findAll(html, `"image"`, `"`,`"`)).toStrictEqual(["image_source", "image_source1", "image_source2", "image_source3"])
})

test("findOne innerHtml", () => {
    expect(bleiyze.findOne(html, `"title"`, ">", "<").result).toBe("Hello!")
})