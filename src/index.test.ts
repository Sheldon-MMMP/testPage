import {index} from './index';
import { expect, test } from 'vitest'



test('index',()=>{
    expect(index()).toBe('Hello World')
})