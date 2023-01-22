import { ChakraProvider, Spinner, Text } from "@chakra-ui/react";
import { RouterProvider, HashRouter} from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return (
    <div className="App">
      
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </div>
  );
}

export default App;
