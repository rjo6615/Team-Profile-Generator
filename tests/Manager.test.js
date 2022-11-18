const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getName", () => {
        it("should return inputed name", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const officeNumber = 1;

            const result = new Manager(id, name, email, officeNumber).getName();

            expect(result).toEqual(name);
        })
    })
    describe("getId", () => {
        it("should return inputed Id", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const officeNumber = 1;

            const result = new Manager(id, name, email, officeNumber).getId();

            expect(result).toEqual(id);
        })
    })
    describe("getEmail", () => {
        it("should return inputed email", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const officeNumber = 1;

            const result = new Manager(id, name, email, officeNumber).getEmail();

            expect(result).toEqual(email);
        })
    })
    describe("getOfficeNumber", () => {
        it("should return inputed office number", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const officeNumber = 1;

            const result = new Manager(id, name, email, officeNumber).getOfficeNumber();

            expect(result).toEqual(officeNumber);
        })
    })
    describe("getRole", () => {
        it("should return default role", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const officeNumber = 1;
            const role = "Manager";

            const result = new Manager(id, name, email, officeNumber).getRole();

            expect(result).toEqual(role);
        })
    })
})