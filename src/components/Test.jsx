import { useDispatch, useSelector } from "react-redux"
import { getAcrticles } from "../createApi/acrticleApi";
import { setProducts } from "./Slice/ProductSlice";
 
export default function Test(){
    const products = useSelector((state) => state.product.products)
    const dispatch = useDispatch()
  
    const GetArticles = async () => {
        var responce = await getAcrticles();
        dispatch(setProducts(responce));
        console.log(products)
      };

    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => GetArticles()}
          >
            Increment
          </button>

        </div>
      </div>
    )
}