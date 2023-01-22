import { Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcrticles } from "../../createApi/acrticleApi";
import { setProducts } from "../Slice/ProductSlice";
import Card from "./Card";

export default function CardLayout(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    const getProducts = async () => {
      var responce = await getAcrticles();
      dispatch(setProducts(responce));
    };
    getProducts();
  }, [dispatch]);

  
  return (
    <Flex marginTop="7em"  >
      <SimpleGrid  minChildWidth='250px' w="100%" spacing='40px'>
        {products.map((pos) => (
          <Card admin={props.admin} key={pos.id} data={pos} color="black" />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
