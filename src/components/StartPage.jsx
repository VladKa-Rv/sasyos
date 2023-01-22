import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import CardLayout from "./Cards/CardLayout";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import { getLoader, setLoader } from "./Slice/LoaderSlice";
import SpinnerLoader from "./Spinner/SpinnerLoader";
import SubHeader from "./SubHeader";

export default function StartPage() {
  const loader = useSelector(getLoader);
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoader(false))
    }, 1000);
  }, [dispatch]);

  return (
    <>
      {loader ? (
        <SpinnerLoader />
      ) : (
        <>
          <Header />
          <SubHeader />
          <CardLayout />
        </>
      )}
    </>
  );
}
