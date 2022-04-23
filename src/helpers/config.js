export const URL = "https://reqres.in/api/";

export const onChangeHandler = (event, setData) => {
  setData((prev) => ({
    ...prev,
    [event.target.name]: event.target.value,
  }));
};
export const fetchDataHandler = async (request) => {
  return fetch(request.url, {
    method: request.method ? request.method : "GET",
    body: request.body ? JSON.stringify(request.body) : null,
    headers: request.headers ? request.headers : {},
  });
};
