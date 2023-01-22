import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcrticles } from "../../createApi/acrticleApi";
import AlertArticle from "../Alerts/AlertArticle";
import Card from "../Cards/Card";
import { setProducts } from "../Slice/ProductSlice";
import NoPisitionPage from "./NoPisitionPage";

export default function AdminCardLayout(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products)


  useEffect(() => {
    const getProducts = async () => {
      var responce = await getAcrticles();
      dispatch(setProducts(responce));
    };
    getProducts();
  }, [dispatch]);

  return (
    <Flex marginTop="7em"  justifyContent="center">
      <Grid templateColumns="repeat(5, 1fr)">
        {products === undefined ?
        <NoPisitionPage/> 
        :
        products.map((pos) => (
          <Card admin={props.admin} key={pos.id} data={pos} color="black" />
        ))}
      </Grid>
    </Flex>
  );
}
