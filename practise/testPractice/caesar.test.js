import { test,expect } from '@jest/globals';
import {caesar} from './caesar.js';

test('returns undefined if the arguments are not the right type', () => {
    expect(caesar(4,2)).toBe(undefined);
    let obj = {};
    expect(caesar(obj,'a')).toBe(undefined);

})
test('returns undefined if the argument is not given', () => {
    expect(caesar()).toBe(undefined);
})

test('shifts by correct no. of times', () => {
    expect(caesar('abba',5)).toBe('fggf')
    expect(caesar('maupax',2)).toBe('ocwrcz')
    expect(caesar('b',0)).toBe('b')
})

test('shifts in reverse by correct no. of times', () => {
    expect(caesar('boby', -1)).toBe('anax')
    expect(caesar('wont',-8)).toBe('ogfl')
})

test('when shift value exceeds length of alphabet, carried over to the start', () => {
    expect(caesar('xyzw',10)).toBe('hijg')
    expect(caesar('lab',27)).toBe('mbc')
})

test('when shift-reverse value exceeds length of alphabet, reverse carry over', () => {
    expect(caesar('hijg',-10)).toBe('xyzw')
    expect(caesar('mbc',-27)).toBe('lab')
})

test('everything in lower case', () => {
    expect(caesar('HOP',2)).toBe('jqr')
    expect(caesar('hOBble',0)).toBe('hobble')
})

test('spaces and punctuation marks remain', () => {
    expect(caesar('aaa !@23',3)).toBe('ddd !@23')
    expect(caesar('....!',3)).toBe('....!')
})

