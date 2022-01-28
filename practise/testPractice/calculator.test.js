import { expect, test } from '@jest/globals'
import {calc} from './calculator.js'

test('calc is an object', () => {
    expect(typeof calc).toBe('object');
    expect(calc.hasOwnProperty('sum')).toBe(true)
    expect(calc.hasOwnProperty('divide')).toBe(true)
    expect(calc.hasOwnProperty(0)).toBe(false)
})

let sum = calc.sum;
let subtract = calc.subtract
let multiply = calc.multiply
let divide = calc.divide

test('operator doesn\'t work if right arguments aren\'t passed', () => {
    let operators = [sum,subtract,multiply,divide]
    operators.forEach(function(op){
        expect(op()).toBe(false);
    })
    operators.forEach(function(op){
        expect(op(1)).toBe(false);
    })
    operators.forEach(function(op){
        expect(op('s')).toBe(false);
    })
    operators.forEach(function(op){
        expect(op('s', 'd')).toBe(false);
    })
    operators.forEach(function(op){
        expect(op(null, null)).toBe(false);
    })
    operators.forEach(function(op){
        expect(op(undefined, undefined)).toBe(false);
    })
    
})
test('correct sum', () => {
    expect(sum(1,3)).toBe(4)
    expect(sum(4,0)).toBe(4)
    expect(sum(23098456,10000000)).toBe(33098456)
    expect(sum(0,3)).toBe(3)
    expect(sum(3.3456,0.0005)).toBe(3.3461)
})

test('sums negative numbers', () => {
    expect(sum(-2,3)).toBe(1)
    expect(sum(4,-17)).toBe(-13)
})

test('correct subtraction', () => {
    expect(subtract(1,3)).toBe(-2)
    expect(subtract(5,0)).toBe(5)
    expect(subtract(1345689,5689)).toBe(1340000)
    expect(subtract(0,3)).toBe(-3)
    expect(subtract(3.3456,0.0005)).toBe(3.3451)
})

test('subtracts negative numbers', () => {
    expect(subtract(-2,3)).toBe(-5)
    expect(subtract(-4,17)).toBe(-21)
    expect(subtract(-2,-3)).toBe(1)
    expect(subtract(-4,-17)).toBe(13)
})

test('correct multiply', () => {
    expect(multiply(1,3)).toBe(3)
    expect(multiply(4,0)).toBe(0)
    expect(multiply(0,3)).toBe(0)
    expect(multiply(3.3,0.005)).toBe(0.0165)
})

test('multiplies negative numbers', () => {
    expect(multiply(-2,3)).toBe(-6)
    expect(multiply(-15,-10)).toBe(150)
})

test('correct division', () => {
    expect(divide(1,3)).toBe(0.3333333333)
    expect(divide(4,0)).toBe(Infinity)
    expect(divide(23098456,100)).toBe(230984.56)
    expect(divide(0,8)).toBe(0)
    expect(divide(0,0)).toBe(NaN)
    expect(divide(4,0.12)).toBe(33.3333333333)
})

test('divides negative numbers', () => {
    expect(divide(-60,-10)).toBe(6)
    expect(divide(-45,9)).toBe(-5)
})