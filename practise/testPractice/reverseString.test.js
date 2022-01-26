import { expect, test } from '@jest/globals'
import {reverseString} from './reverseString.js'

test('return undefined if no argument is given',() => {
    expect(reverseString()).toBe(undefined)
})
test('return undefined if empty string',() => {
    expect(reverseString('')).toBe(undefined);
    expect(reverseString(' ')).toBe(undefined);
})
test('return undefined if not a string',() => {
    expect(reverseString(4)).toBe(undefined)
})
test('return back string if it is only a single character',() => {
    expect(reverseString('a')).toBe('a');
    expect(reverseString('b')).toBe('b');
    expect(reverseString('C')).toBe('C');
    expect(reverseString('!')).toBe('!');
})
test('reversed string (includes whitespace)',() => {
    expect(reverseString('testing')).toBe('gnitset');
    expect(reverseString('What is this test?')).toBe('?tset siht si tahW');
    expect(reverseString('[1,2,3,4,[5,6]]')).toBe(']]6,5[,4,3,2,1[')
    expect(reverseString('test ')).toBe(' tset');
    expect(reverseString('t  ')).toBe('  t');
})
