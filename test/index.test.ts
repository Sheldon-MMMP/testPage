import {index} from './index.ts';
import { expect, test } from 'vitest'



test('index',()=>{
    expect(index()).toBe('Hello World')
})