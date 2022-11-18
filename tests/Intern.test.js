const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getName", () => {
        it("should return inputed name", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const school = "UCONN";

            const result = new Intern(id, name, email, school).getName();

            expect(result).toEqual(name);
        })
    })
    describe("getId", () => {
        it("should return inputed Id", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const school = "UCONN";

            const result = new Intern(id, name, email, school).getId();

            expect(result).toEqual(id);
        })
    })
    describe("getEmail", () => {
        it("should return inputed email", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const school = "UCONN";

            const result = new Intern(id, name, email, school).getEmail();

            expect(result).toEqual(email);
        })
    })
    describe("getSchool", () => {
        it("should return inputed school", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const school = "UCONN";

            const result = new Intern(id, name, email, school).getSchool();

            expect(result).toEqual(school);
        })
    })
    describe("getRole", () => {
        it("should return default role", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const school = "UCONN";
            const role = "Intern";

            const result = new Intern(id, name, email, school).getRole();

            expect(result).toEqual(role);
        })
    })
})