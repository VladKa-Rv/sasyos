import { Flex } from "@chakra-ui/react";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";
export default function AdminPage() {
  return (
    <Flex w="100%">
      <AdminHeader />
      <Outlet />
    </Flex>
  );
}
