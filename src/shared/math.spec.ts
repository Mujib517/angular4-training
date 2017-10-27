import { Math } from './math';

describe("Math Service", ()=> {
    let math;

    beforeEach(function () {
        //Arrange
        math = new Math();
    });

    describe("Add function", ()=> {
        it("should add two number and return result", function () {
            //AAA
            //Act
            var c = math.add(2, 3);

            //Assert
            expect(c).toBe(5);

        });

        it('should add two strings', function () {
            var result = math.add("Mujib", "Rahman");

            expect(result).toBe("MujibRahman");
        });

        it('should return zero when first parameter is zero', function () {
            var result = math.add(0, 100);

            expect(result).toBe(0);
        });

        it('should return 2 when first parameter is one', function () {
            var result = math.add(1, 100);

            expect(result).toBe(2);
        });

    });

    describe("Sub function", function () {
        it('should subtract two numbers and return result', function () {
            var c = math.sub(4, 2);

            expect(c).toBe(2);
        });
    });

    afterEach(function () {
        math = null;
    });
});