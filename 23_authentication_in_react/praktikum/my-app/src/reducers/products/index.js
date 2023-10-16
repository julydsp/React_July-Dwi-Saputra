import {
  GET_LIST_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  DETAIL_PRODUCT,
  EDIT_PRODUCT,
} from "../../actions/productAction";
const initialState = {
  getListProductResult: false,
  getListProductLoading: false,
  getListProductError: false,

  addProductResult: false,
  addProductLoading: false,
  addProductError: false,

  getDetailProductResult: false,
  getDetailLoading: false,
  getDetailError: false,

  deleteProductResult: false,
  deleteProductLoading: false,
  deleteProductError: false,

  editProductResult: false,
  editProductLoading: false,
  editProductError: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        getListProductResult: action.payload.data,
        getListProductLoading: action.payload.loading,
        getListProductError: action.payload.errorMessage,
      };

    case DETAIL_PRODUCT:
      return {
        ...state,
        getDetailProductResult: action.payload.data,
        getDetailProductLoading: action.payload.loading,
        getDetailProductError: action.payload.errorMessage,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProductResult: action.payload.data,
        deleteProductLoading: action.payload.loading,
        deleteProductError: action.payload.errorMessage,
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        editProductResult: action.payload.data,
        editProductLoading: action.payload.loading,
        editProductError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default products;
