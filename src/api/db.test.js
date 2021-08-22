const db = require("./db")
// @ponicode
describe("db", () => {
    test("0", () => {
        let callFunction = () => {
            db()
        }
    
        expect(callFunction).not.toThrow()
    })
})
