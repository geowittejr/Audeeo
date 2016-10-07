
describe("We're running a test here...", function() {

    it("and true means true", function() {
        let a : boolean = true;
        expect(a).toBe(true);
    });

    it("and 1 does not equal 2", function() {
        let b : number = 1;
        expect(b).not.toEqual(2);
    });

});