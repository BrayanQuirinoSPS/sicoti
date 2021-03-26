const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://localhost:18081/api"; // site that doesn’t send Access-Control-*

//const BASE_URL = "http://localhost:18081/api";
const BASE_URL = "http://localhost:18081/api/usuarios?usuario=bg&contrasena=da";

/*
async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
*/
async function callApi() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let data = "";
  fetch(BASE_URL, requestOptions)
    .then((response) => {
      alert("a1");
      console.log(response); 
    })
    .then((result) => {
      alert("a2");
      console.log(result);
    })
    .catch((error) => console.log("error", error));
  return data;
}

const api = {
  badges: {
    list() {
      //return callApi("/usuarios");
      return callApi();
    },
  },
};

export default api;
