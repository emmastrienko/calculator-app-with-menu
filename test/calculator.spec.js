const assert = require("chai").assert;
const expect = require("chai").expect;
const packageFile = require("../package.json");
const calculator = require("../calculator");
const addFunction = require("../calculator/math/add");
const subtractFunction = require("../calculator/math/subtract");
const multiplyFunction = require("../calculator/math/multiply");
const divideFunction = require("../calculator/math/divide");
const menu = require("../calculator/index");
const glob = require("glob");
const fs = require("fs");
const exp = require("constants");
const { setFips } = require("crypto");
const { exitCode } = require("process");

let sum = 0;
let sub = 0;
let mul = 0;
let div = 0;

describe("Calculator testing", function () {
  describe("Functionality testing", function () {
    describe("Addition functionality testing", function () {
      it("Add two positive numbers, returning get positive sum", function () {
        sum = addFunction(5, 9);
        expect(sum).to.equal(14);
      });

      it("Add two negative numbers, returning get negative sum", function () {
        sum = addFunction(-8, -3);
        expect(sum).to.equal(-11);
      });

      it("Add two number, with either of them is negative, producing subtracted output", function () {
        sum = addFunction(9, -5);
        expect(sum).to.equal(4);
      });

      it("Add zeros, produces zero", function () {
        sum = addFunction(0, 0);
        expect(sum).to.equal(0);
      });
    });

    describe("Subtraction functionality testing", function () {
      it("Subtract two positive numbers, returning get positive subtraction", function () {
        sub = subtractFunction(7, 5);
        expect(sub).to.equal(2);
      });

      it("Subtract two negative numbers, returning get negative subtraction", function () {
        sub = subtractFunction(-3, -2);
        expect(sub).to.equal(-1);
      });

      it("Subtract two number, with either of them is negative, producing sum output", function () {
        sub = subtractFunction(8, -2);
        expect(sub).to.equal(10);
      });

      it("Subtract zeros, produces zero", function () {
        sub = subtractFunction(0, 0);
        expect(sub).to.equal(0);
      });
    });

    describe("Multiplication functionality testing", function () {
      it("Multiply two positive numbers, returning get positive Multiplication", function () {
        mul = multiplyFunction(9, 3);
        expect(mul).to.equal(27);
      });

      it("Multiply two negative numbers, returning get positive Multiplication", function () {
        mul = multiplyFunction(-4, -5);
        expect(mul).to.equal(20);
      });

      it(`Multiply two number, with either of them is negative,
        producing negative multiplication output`, function () {
        mul = multiplyFunction(7, -3);
        expect(mul).to.equal(-21);
      });

      it("Multiply zeros, produces zero", function () {
        mul = multiplyFunction(0, 0);
        expect(mul).to.equal(0);
      });
    });

    describe("Division functionality testing", function () {
      it("Divide two positive numbers, returning get positive Multiplication", function () {
        div = divideFunction(8, 4);
        expect(div).to.equal(2);
      });

      it("Divide two negative numbers, returning get positive Multiplication", function () {
        div = divideFunction(-21, -3);
        expect(div).to.equal(7);
      });

      it("Divide two number, with either of them is negative, producing negative Division output", function () {
        div = divideFunction(45, -5);
        expect(div).to.equal(-9);
      });

      it(`Should not divide by 0, producing 'Can not divide by zero' message`, function () {
        div = divideFunction(0, 0);
        expect(div).to.equal("Can not divide by zero");
      });
    });
    
    describe("Unknown operation testing", function () {
      it(`should not calculate if unknown operation is passed,
        producing 'Unknown operation' message`, function () {
        const operation = menu("e", { lhs: 5, rhs: 9 });
        expect(operation).to.equal("Unknown operation");
      });
    });
  });
});
