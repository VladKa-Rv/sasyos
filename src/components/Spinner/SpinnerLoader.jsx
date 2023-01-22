import { Flex } from "@chakra-ui/react";
import { FallingLines } from "react-loader-spinner";
import "react-loader-spinner";
import MainLogo from "../../logo/MainLogo";

export default function SpinnerLoader() {
  return (
    <Flex
      direction="column"
      w="96em"
      h="46.5em"
      justifyContent="center"
      alignItems="center"
      bgSize="cover"
      background="black"
      bgRepeat="no-repeat"
    >
      <Flex w={300} height={300}>
        <MainLogo />
      </Flex>
      <FallingLines
        background={"white"}
        color="white"
        width="200"
        visible={true}
      />
    </Flex>
  );
}
