const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return inputed name", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";

            const result = new Employee(name, id, email).getName();

            expect(result).toEqual(name);
        })
    })
    describe("getId", () => {
        it("should return inputed Id", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";

            const result = new Employee(name, id, email).getId();

            expect(result).toEqual(id);
        })
    })
    describe("getEmail", () => {
        it("should return inputed email", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";

            const result = new Employee(name, id, email).getEmail();

            expect(result).toEqual(email);
        })
    })
    describe("getRole", () => {
        it("should return default role", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const role = "Employee";

            const result = new Employee(name, id, email).getRole();

            expect(result).toEqual(role);
        })
    })
})