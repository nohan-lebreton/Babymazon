import Product from '@/stores/product'
import { describe, test, beforeEach, expect } from 'vitest'

describe('Product tests', () => {
  let testProduct

  beforeEach(() => {
    testProduct = new Product()
    testProduct.name = 'testName'
    testProduct.description = 'testDescription'
    testProduct.imagePath = '/testCategory/testProduct'
    testProduct.onSale = null
    testProduct.price = 100
    testProduct.category = 'test'
    testProduct.stars = 5
  })

  test('Can mark a product as InStock', () => {
    testProduct.setStatusAsInStock()
    expect(testProduct.status).toBe('InStock')
  })

  test('Can mark a product as LowStock', () => {
    testProduct.setStatusAsLowStock()
    expect(testProduct.status).toBe('LowStock')
  })

  test('Can mark a product as OutOfStock', () => {
    testProduct.setStatusAsOutOfStock()
    expect(testProduct.status).toBe('OutOfStock')
  })

  test("Can't valid a not validStatus product", () => {
    expect(() => {
      testProduct.validStatus('notValidStatusProduct')
    }).toThrowError('Invalid status: notValidStatusProduct')
  })

  test('Can change a stars product', () => {
    testProduct.setStars(2)
    expect(testProduct.stars).toBe(2)
  })

  test("Can't change a stars product above 5", () => {
    expect(() => {
      testProduct.setStars(5.2)
    }).toThrowError('Invalid stars')
  })

  test("Can't change a stars product below 0", () => {
    expect(() => {
      testProduct.setStars(-1)
    }).toThrowError('Invalid stars')
  })
})
