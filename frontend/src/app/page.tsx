"use client";

import { logout } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import Cookies from "js-cookie";

export default function Home() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  console.log("user ===> ", user);
  const handleLogout = async () => {
    dispatch(logout());
    Cookies.remove("usertoken");
    await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/logout`);
  };
  return (
    <div>
      <button onClick={handleLogout}>LogOut</button>
      <h1>welcome Home</h1>
    </div>
  );
}
