import { expect, test } from '@jest/globals'
import {capitals} from './capitalise.js'

test('converts first letter to uppercase', () => {
    expect(capitals('capitals')).toBe('Capitals');
    expect(capitals('WORDS')).toBe('Words');
})
test('returns undefined if empty string', () => {
    expect(capitals('')).toBe(undefined)
})
test('returns undefined if the argument is not a string type', () => {
    expect(capitals(4)).toBe(undefined);
    let obj = {};
    expect(capitals(obj)).toBe(undefined);

})
test('returns undefined if the argument is not given', () => {
    expect(capitals()).toBe(undefined);
})

