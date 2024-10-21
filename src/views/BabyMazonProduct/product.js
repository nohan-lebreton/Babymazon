import { v4 as uuidv4 } from 'uuid'

export default class Product {
  constructor(savedProduct = null) {
    //console.log('Saved product passed to constructor:', savedProduct)
    this.id = savedProduct ? savedProduct.id : uuidv4()
    this.name = savedProduct ? savedProduct.name : 'No name'
    this.description = savedProduct ? savedProduct.description : 'No description'
    this.imagePath = savedProduct ? savedProduct.imagePath : 'No image'
    this.category = savedProduct ? savedProduct.category : 'others'
    this.onSale = savedProduct ? savedProduct.onSale : null
    this.price = savedProduct ? savedProduct.price : 0
    this.status = savedProduct ? savedProduct.status : 'Low stock'
    this.stars = savedProduct ? savedProduct.stars : 0
  }

  //GETTERS------------------------------------------------------

  //SETTERS------------------------------------------------------

  setStatusAsInStock() {
    console.log('setStatus')
    this.validStatus('In stock')
    this.status = 'In stock'
  }

  setStatusAsLowStock() {
    this.validStatus('Low stock')
    this.status = 'Low stock'
  }

  setStatusAsOutOfStock() {
    this.validStatus('Out of stock')
    this.status = 'Out of stock'
  }

  setStars(stars) {
    this.validStars(stars)
    this.stars = stars
  }

  //VALIDATOR------------------------------------------------------

  validStatus(newStatus) {
    console.log('validstatus')
    const validStatuses = ['In stock', 'Low stock', 'Out of stock']
    if (validStatuses.includes(newStatus)) {
      this.status = newStatus
      return
    }
    throw new Error(`Invalid status: ${newStatus}`)
  }

  validStars(stars) {
    if (stars < 0 || stars > 5) {
      throw new Error(`Invalid stars`)
    }
  }
}
