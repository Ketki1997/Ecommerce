
const  ProductReducer = (state,action)=>{
   //Method:1
   /*  if(action.type=== "SET_LOADING"){
        return{
            ...state,
            isLoading:true,
        };

    }
    if(action.type==="API_ERROR"){
        return{
            ...this.state,
         isLoading:false,
         isError:true
        };
    } */

    //Method:2
    switch (action.type) {
        case "SET_LOADING":
            
            return{
                ...state,
                isLoading:true,
            };

         case "SET_API_DATA":
                const featureData=action.payload.filter((currElement)=>{
                    return currElement.featured===true; 
                })
                return {
                    ...state,
                    isLoading:false,
                    products: action.payload,
                    featureProducts:featureData,                 }


        
         case "API_ERROR" :
            return{
                ...state,
                isLoading:false,
                isError:true
            }

        case "SET_SINGLE_LOADING":
           return{
            ...state,
            isSingleLoading:true,

           };
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading:false,
                 singleProducts:action.payload,
            }
            case "SET_SINGLE_ERROR" :
            return{
                ...state,
                isSingleLoading:false,
                isError:true
            }
        default:
            return state;
    }

};
export  default ProductReducer;