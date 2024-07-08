import axios from "axios";
import React, { useContext } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useGetUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["/user", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });
  return [users, refetch, loading, isLoading];
};

export default useGetUser;
