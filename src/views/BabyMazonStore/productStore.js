import { defineStore } from 'pinia'
import Product from '@/views/BabyMazonProduct/product'

export const useProductStock = defineStore('productStock', {
  //STATE------------------------------------------------------
  state: () => ({
    stock: []
  }),

  //GETTERS------------------------------------------------------
  getters: {
    getAllCategory() {
      const categories = []
      for (const product of this.stock) {
        categories.push(product.product.category)
      }
      return [...new Set(categories)]
    }
  },

  //ACTIONS------------------------------------------------------

  actions: {
    async initStore() {
      //console.log('Store initialisation ...')

      const response = await fetch('src/stores/data.json')
      const data = await response.json()
      //console.log('Data loaded from JSON:', data)
      for (const product of data) {
        //console.log('Product from JSON:', product)

        if (product && product.id && product.name) {
          const newProduct = new Product(product)
          this.addProduct(newProduct, 1)
        } else {
          //console.error('Produit invalide dans les données JSON :', product)
        }
      }
    },
    createNewStock(newProduct) {
      this.stock.push({
        quantity: 1,
        product: newProduct
      })
    },
    addProduct(newProduct, quantity) {
      let alreadyExist = false
      for (const product of this.stock) {
        if (product.product.id == newProduct.id) {
          product.quantity += quantity
          this.updateStatus(product)
          alreadyExist = true
          break
        }
      }
      if (alreadyExist == false) {
        this.createNewStock(newProduct)
      }
      //console.log(this.stock)
    },
    deleteProduct(productId, quantity) {
      console.log('deletedProduct')
      const productInStock = this.getStockById(productId)
      console.log(productInStock)
      productInStock.quantity -= quantity
      this.updateStatus(productInStock)
    },
    updateStatus(product) {
      const lowStock = 1
      if (product.quantity <= 0) {
        console.log('quantity <= 0')

        product.product.setStatusAsOutOfStock()
        return
      }
      if (product.quantity <= lowStock) {
        console.log('quantity <= lowStock')

        product.product.setStatusAsLowStock()
        return
      }
      console.log('setStatusAsInStock')
      product.product.setStatusAsInStock()
    },
    getProductsByCategory(category) {
      const productsWithSameCategory = []
      for (const product of this.stock) {
        if (
          product.product.category === category &&
          !productsWithSameCategory.some((p) => p.id === product.product.id)
        ) {
          productsWithSameCategory.push(product.product)
        }
      }
      return productsWithSameCategory
    },
    getProductById(id) {
      for (let product of this.stock) {
        if (product.product.id === id) {
          return product.product
        }
      }
    },
    getStockById(id) {
      for (let product of this.stock) {
        if (product.product.id === id) {
          return product
        }
      }
    }
  }
})
