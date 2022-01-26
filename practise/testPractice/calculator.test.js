import { expect, test } from '@jest/globals'
import {calc} from './calculator.js'

test('return undefined if not enough arguments are passed', () => {
    expect(calc()).toBe(undefined)
    expect(calc(1)).toBe(undefined)
})
