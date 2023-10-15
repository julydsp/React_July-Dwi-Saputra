import axios from "axios";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const getListProduct = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_PRODUCT,
      payload: {
        loading: true,
        data: false,
        erorMessage: false,
      },
    });

    axios({
      method: "GET",
      baseURL: "https://652431a1ea560a22a4e99249.mockapi.io/products",
      timeout: 120000,
    })
      .then((Response) => {
        console.log(Response.data);
        dispatch({
          type: GET_LIST_PRODUCT,
          payload: {
            loading: false,
            data: Response.data,
            erorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_PRODUCT,
          payload: {
            loading: false,
            data: false,
            erorMessage: error.message,
          },
        });
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        loading: true,
        data: false,
        erorMessage: false,
      },
    });

    axios({
      method: "POST",
      baseURL: "https://652431a1ea560a22a4e99249.mockapi.io/products",
      timeout: 120000,
      data: data,
    })
      .then((Response) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            loading: false,
            data: Response.data,
            erorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            loading: false,
            data: false,
            erorMessage: error.message,
          },
        });
      });
  };
};
export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: {
        loading: true,
        data: false,
        erorMessage: false,
      },
    });

    axios({
      method: "DELETE",
      baseURL: "https://652431a1ea560a22a4e99249.mockapi.io/products/" + id,
      timeout: 120000,
    })
      .then((Response) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            loading: false,
            data: Response.data,
            erorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            loading: false,
            data: false,
            erorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_PRODUCT,
      payload: {
        loading: true,
        data: false,
        erorMessage: false,
      },
    });

    axios({
      method: "GET",
      baseURL: "https://652431a1ea560a22a4e99249.mockapi.io/products/" + id,
      timeout: 120000,
    })
      .then((Response) => {
        dispatch({
          type: DETAIL_PRODUCT,
          payload: {
            loading: false,
            data: Response.data,
            erorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DETAIL_PRODUCT,
          payload: {
            loading: false,
            data: false,
            erorMessage: error.message,
          },
        });
      });
  };
};

export const editProduct = (id, data) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PRODUCT,
      payload: {
        loading: true,
        data: false,
        erorMessage: false,
      },
    });

    axios({
      method: "PUT",
      baseURL: "https://652431a1ea560a22a4e99249.mockapi.io/products/" + id,
      timeout: 120000,
      data: data,
    })
      .then((Response) => {
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            loading: false,
            data: Response.data,
            erorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            loading: false,
            data: false,
            erorMessage: error.message,
          },
        });
      });
  };
};
