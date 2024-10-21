import { defineStore } from 'pinia'
import { useProductStock } from '@/views/BabyMazonStore/productStore'

export const useProductBasket = defineStore('productBasket', {
  //STATE------------------------------------------------------
  state: () => ({
    basket: []
  }),
  //GETTERS------------------------------------------------------
  getters: {
    getTotalQuantity() {
      let totalQuantity = 0
      for (const product of this.basket) {
        totalQuantity = totalQuantity + product.quantity
      }
      return totalQuantity
    },
    getTotalPrice() {
      let totalPrice = 0
      const productStock = useProductStock()

      for (const product of this.basket) {
        const productStore = productStock.getProductById(product.productId)
        totalPrice += productStore.price * product.quantity
      }
      return totalPrice
    }
  },
  //ACTIONS------------------------------------------------------
  actions: {
    getProdudctBasketById(productId) {
      for (let productBasket of this.basket) {
        if (productBasket.productId === productId) {
          return productBasket
        }
      }
    },
    addProductToBasket(productId, quantity) {
      let alreadyExist = false
      const productStock = useProductStock()

      for (const product of this.basket) {
        if (product.productId == productId) {
          console.log('same product in basket')
          product.quantity += quantity
          alreadyExist = true
          console.log(alreadyExist)
          productStock.deleteProduct(productId, quantity)
          break
        }
      }
      if (alreadyExist == false) {
        this.createProductToBasket(productId, quantity)
        productStock.deleteProduct(productId, quantity)
      }
    },
    createProductToBasket(productId, quantity) {
      this.basket.push({
        quantity: quantity,
        productId: productId
      })
    },
    removeProductToBasket(productId, quantity) {
      const productStocks = useProductStock()
      const productStock = productStocks.getStockById(productId)
      const productBasket = this.getProdudctBasketById(productId)

      if (productBasket.productId == productId) {
        productBasket.quantity -= quantity
        productStock.quantity += quantity
        productStocks.updateStatus(productStock)
        if (productBasket.quantity <= 0) {
          this.deleteProductToBasket(productBasket)
        }
      }
    },
    deleteProductToBasket(productBasket) {
      const index = this.basket.findIndex(
        (product) => product.productId === productBasket.productId
      )
      if (index !== -1) {
        this.basket.splice(index, 1)
      }
    }
  }
})
