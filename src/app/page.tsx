"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HomeScreen from "./homeScreen/page";
import Login from "@/components/molecules/auth/Login";
import { useEffect, useState } from "react";

export default function Home() {
  // const [IsLogin, setIsLogin] = useState();

  // useEffect(() => {
  //   const userLoggedIn = localStorage.getItem("IsLogin");
  //   if (userLoggedIn) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, []);
  return (
    <>
    {/* {IsLogin ? (
      <HomeScreen />
    ) : (<Login />) */}
  {/* } */}
      {/* <HomeScreen /> */}
      <Login />
    </>
  );
}
