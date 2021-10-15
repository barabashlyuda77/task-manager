const rewire = require("rewire")
const index = rewire("./index")
const createItem = index.__get__("createItem")
const checkItem = index.__get__("checkItem")
// @ponicode
describe("createItem", () => {
    test("0", () => {
        let callFunction = () => {
            createItem("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createItem("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createItem("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createItem(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("checkItem", () => {
    test("0", () => {
        let param1 = ["Alabama", {}, {}, {}, "Alabama", {}]
        let callFunction = () => {
            checkItem(param1, "assign")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [{}, "Alabama", {}, {}, "Alabama", {}]
        let callFunction = () => {
            checkItem(param1, { type: "ADD_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [{}, {}, {}, {}, "Alabama", {}]
        let callFunction = () => {
            checkItem(param1, { type: "ADD_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = ["Alabama", "Alabama", {}, {}, {}, "Alabama"]
        let callFunction = () => {
            checkItem(param1, { type: "RECEIVE_MESSAGE" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [{}, {}, {}, {}, "Alabama", {}]
        let callFunction = () => {
            checkItem(param1, "discard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            checkItem(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
