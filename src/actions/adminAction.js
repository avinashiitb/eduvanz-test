export function getStoreAction(storeList) {
  // console.log("Store Action", storeList);
  return {
    type: 'STORE_LIST',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      storeList
    }
  }
}

export function getMyStoreAction(myStoreList) {
  // console.log("Store Action", storeList);
  return {
    type: 'ADMIN_STORE_LIST',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      myStoreList
    }
  }
}

export function getOrderAction(orderList) {
  // console.log("Order Action", orderList);
  return {
    type: 'ORDER_LIST',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      orderList
    }
  }
}
export function getAdminOrderAction(orderList) {
  // console.log("Admin Order Action", orderList);
  return {
    type: 'ADMIN_ORDER_LIST',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      orderList
    }
  }
}
export function getBuyerAction(buyerList) {
  // console.log("Buyer Action", buyerList);
  return {
    type: 'BUYER_LIST',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      buyerList
    }
  }
}

export function addPrice(orderData) {
  // console.log("Admin Order Action", orderList);
  return {
    type: 'ADD_PRICE',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      orderData
    }
  }
}

export function addCartId(cartId) {
  // console.log("Admin Order Action", orderList);
  return {
    type: 'ADD_CART_ID',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      cartId
    }
  }
}

export function status(orderStatus) {
  // console.log("Admin Order Action", orderList);
  return {
    type: 'ORDER_STATUS',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      orderStatus
    }
  }
}

export function currentStoreInfo(storeInfo) {
  // console.log("Admin Order Action", orderList);
  return {
    type: 'STORE_INFO',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      storeInfo
    }
  }
}