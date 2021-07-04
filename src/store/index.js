export const storage = {
  state: {
    category: [],
    inventory : [],
    cart : [],
    todo : [],
    brand: [],
    product: [],
    customer: [],
    order: [],
  },
  getters: {
    getInventory(state){
      return state.inventory
    },
    getCart(state){
      return state.cart
    },
    getTodo(state){
      return state.todo
    },
    getCategory(state){
      return state.category
    },
    getBrand(state){
      return state.brand
    },
    getProduct(state){
      return state.product
    },
    getCustomer(state){
      return state.customer
    },
    getOrder(state){
      return state.order
    }
  },
  mutations: {
    setInventory(state, payload){
      state.inventory = payload
    },
    setTodo(state, payload){
      state.todo = payload
    },
    setCart( state, payload ){
      state.cart = payload
    },
    removeItem(state, payload){
      state.cart.splice(payload, 1)
    },
    SetCategory(state, payload){
      state.category = payload
    },
    setBrand(state, payload){
      state.brand = payload
    },
    setProduct(state, payload){
      state.product = payload
    },
    setCustomer(state, payload){
      state.customer = payload
    },
    setOrder(state, payload){
      state.order = payload
    }
  }
}
