// const BASE_URL = process.env.REACT_APP_BASE_URL;

// async function handleResponse(response) {
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return await response.json();
// }

// export const getProducts = () => 
//   fetch(`${BASE_URL}/products`).then(handleResponse);

// export const getProduct = (id) => 
//   fetch(`${BASE_URL}/products/${id}`).then(handleResponse);










const BASE_URL = process.env.REACT_APP_BASE_URL;

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

export const getProducts = () => 
  fetch(`${BASE_URL}/products`).then(handleResponse);






// const baseUrl = process.env.REACT_APP_BASE_URL;
// console.log({ baseUrl });

// export const login = async (username, password) => {
//   try {
//     const response = await fetch(`${baseUrl}/auth/login`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(username, password),
//     });
//     return response.JSON;
//   } catch (error) {
//     return `error during login ${error.message}`;
//   }
// };