/* eslint-env jasmine */

const SimpleClass = require('../lib/SimpleClass')

describe('SimpleClass', () => {
  it('should instatiate', () => {
    const v = new SimpleClass()

    expect(v instanceof SimpleClass).toBeTruthy()
  })

  describe('hello', () => {
    let v

    beforeEach(() => {
      v = new SimpleClass()
    })

    it('should instatiate', () => {
      spyOn(console, 'log')

      v.hello()

      expect(console.log).toHaveBeenCalledWith('Hello World')
    })
  })
})
