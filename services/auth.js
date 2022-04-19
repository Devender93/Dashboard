import { URL } from '../constants/API'


// ..........buyer login...........
export const buyerLoginRequest = async (data) => {
    return await fetch(URL + "buyer/buyerlogin.php", {
    method: "POST",
    headers: new Headers({
      'Accept': 'application/json',  
    }),
    body: data,
  })
 
};
// ..........buyer update...........

export const updateBuyerRequest = async (data) => {
    return await fetch(URL + "buyer/buyer_update.php", {
    method: "POST",
    headers: new Headers({
      'Accept': 'application/json',  
    }),
    body: data,
  })
 
};


// .........................SELLER........................
// ..........seller login...........
export const sellerLoginRequest = async (data) => {
  return await fetch(URL + "seller/sellerlogin.php", {
  method: "POST",
  headers: new Headers({
    'Accept': 'application/json',  
  }),
  body: data,
})

};
// ..........seller update...........

export const updateSellerRequest = async (data) => {
  return await fetch(URL + "seller/seller_update.php", {
  method: "POST",
  headers: new Headers({
    'Accept': 'application/json',  
  }),
  body: data,
})

};