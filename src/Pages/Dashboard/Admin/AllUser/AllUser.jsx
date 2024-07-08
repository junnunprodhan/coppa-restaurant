import React, { useEffect, useState } from "react";
import TableTop from "../../../../component/TableTop/TableTop";
import useAdmin from "../../../../Hooks/useAdmin/useAdmin";
import toast from "react-hot-toast";
import UserTable from "../../../../component/UserTable/UserTable";
import Empty from "../../../../Empty/Empty";
import useGetUser from "../../../../Hooks/useUser/useGetUser";
import Spin from "../../../../Spin/Spin";

const AllUser = () => {
  const [users, refetch, isLoading, loading] = useGetUser();
  if (isLoading || loading) {
    <Spin />;
  }
  const HandleToTrue = (id) => {
    useAdmin(id, true).then((data) => {
      toast.success("Admin confirm successful");
      refetch();
    });
  };

  const HandleToFalse = (id) => {
    useAdmin(id, false).then((data) => {
      toast.success("Admin canceled successful");
      refetch();
    });
  };

  return users.length > 0 ? (
    <>
      <div className=" hidden md:block">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>#</label>
                </th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((single, index) => (
                <UserTable
                  HandleToTrue={HandleToTrue}
                  HandleToFalse={HandleToFalse}
                  single={single}
                  index={index}
                  key={index}
                  Admin={"Admin"}
                  Cancel={"Cancel"}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" md:hidden ">
        <div className=" flex justify-between bg-gray-100 w-full px-3 text-black py-1">
          <p>Photo</p>
          <p>Name</p>
          <p>Action</p>
        </div>
        <div className="">
          {users.map((product) => (
            <UserTable
              HandleToTrue={HandleToTrue}
              product={product}
              Admin={"Admin"}
            />
          ))}
        </div>
      </div>
    </>
  ) : (
    <Empty path={"/"} />
  );
};

export default AllUser;
