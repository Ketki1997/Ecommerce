import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products"
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading:false,
    singleProducts:{},
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

   //getAllProduct
    const getProducts = async (url) => {
        dispatch({
            type: "SET_LOADING"
        });

        try {
            const res = await axios.get(url);
            console.log(res.data);
            dispatch({
                type: "SET_API_DATA",
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: "API_ERROR",
                payload:[]

            });
        }
    }

    //getSingleProduct

    const getSingleProduct =async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"});

        try {
              const res =await axios.get(url);
            const singleProducts = await res.data;
            console.log(singleProducts);
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProducts})
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})
        }

    }

    useEffect(() => {
        getProducts(API);
    },[]);
    return (

        <AppContext.Provider value={{ ...state,getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
}
//custom hook
const useProductContext = () => {

    return useContext(AppContext);

}

export { AppProvider, AppContext, useProductContext };