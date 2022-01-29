import { expect, test } from '@jest/globals'
import {analyse} from './analyseArr.js'

let sample = analyse([1,2,3,4])

test('analyse returns an object', () => {
    expect(typeof sample ).toBe('object');
    expect(sample.hasOwnProperty(0)).toBe(false)
})

test('final object returns all properties', () => {
    expect(sample.hasOwnProperty('average')).toBe(true);
    expect(sample.hasOwnProperty('min')).toBe(true);
    expect(sample.hasOwnProperty('max')).toBe(true);
    expect(sample.hasOwnProperty('length')).toBe(true);
})

test('argument passed in is an array', () => {
    expect(analyse(2)).toBe(undefined);
    expect(analyse('this is a string')).toBe(undefined);
    expect(analyse({})).toBe(undefined);
})

test('array is populated with number types', () => {
    let badArray1 = [0,null,0,0];
    let badArray2 = ['',1,3,4];
    let empty = []

    expect(analyse(badArray1)).toBe(false)
    expect(analyse(badArray2)).toBe(false)
    expect(analyse(empty)).toBe(false)

})

test('average returned is the correct value', () => {
    expect(analyse([1,2,3,4])['average']).toBe(2.5)
    expect(analyse([0,0])['average']).toBe(0)
    expect(analyse([1,3,-2,3])['average']).toBe(1.25)

})

test('min returned is the correct value', () => {
    expect(analyse([1,2,3,4])['min']).toBe(1)
    expect(analyse([0,0])['min']).toBe(0)
    expect(analyse([1,3,-2,3])['min']).toBe(-2)
    
})

test('max returned is the correct value', () => {
    expect(analyse([1,2,3,4])['max']).toBe(4)
    expect(analyse([0,0])['max']).toBe(0)
    expect(analyse([1,3,-2,3])['max']).toBe(3)
    
})
test('length returned is the correct value', () => {
    expect(analyse([1,2,3,4])['length']).toBe(4)
    expect(analyse([0,0])['length']).toBe(2)
    expect(analyse([1,3,-2,3])['length']).toBe(4)
    
})

