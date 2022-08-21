import fader from "../src/index"
import { readFileSync } from "fs"
const html = readFileSync("./tests/test.html", "utf-8")

test("findAll image", () => {
    expect(fader.findAll(html, `"image"`, [[`"`,`"`]])).toStrictEqual([["image_source"], ["image_source1"], ["image_source2"], ["image_source3"]])
})

test("findOne innerHtml", () => {
    expect(fader.findOne(html, `"title"`, [[">", "<"]]).result).toStrictEqual(["Hello!"])
})

test("findOnx", () => {
    expect(fader.findOne(html, `"image"`, [["\"","\""], ["\"", "\""]]).result).toStrictEqual(["image_source", "cute cats"])
})