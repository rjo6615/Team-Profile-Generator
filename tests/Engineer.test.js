const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("should return inputed name", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const github = "timmy@github";

            const result = new Engineer(id, name, email, github).getName();

            expect(result).toEqual(name);
        })
    })
    describe("getId", () => {
        it("should return inputed Id", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const github = "timmy@github";

            const result = new Engineer(id, name, email, github).getId();

            expect(result).toEqual(id);
        })
    })
    describe("getEmail", () => {
        it("should return inputed email", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const github = "timmy@github";

            const result = new Engineer(id, name, email, github).getEmail();

            expect(result).toEqual(email);
        })
    })
    describe("getGithub", () => {
        it("should return inputed school", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const github = "timmy@github";

            const result = new Engineer(id, name, email, github).getGithub();

            expect(result).toEqual(github);
        })
    })
    describe("getRole", () => {
        it("should return default role", () => {
            const id = 3;
            const name = "Timmy";
            const email = "timmy@mail.com";
            const github = "timmy@github";
            const role = "Engineer";

            const result = new Engineer(id, name, email, github).getRole();

            expect(result).toEqual(role);
        })
    })
})