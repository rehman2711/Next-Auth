"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <>
      <div className="h-screen flex justify-center items-center gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-2">
            <img
              src={session?.user?.image}
              alt="profile"
              height={70}
              width={70}
              className="rounded-md"
            ></img>
            <p className="text-2xl text-blue-300 font-bold">
              {session?.user?.name}
            </p>
          </div>
          <div>
            <p className="mt-4">
              Email : <b>{session?.user?.email} </b>
            </p>
            {/* <p className="mt-2">
              Expiry :{" "}
              {new Date(session?.expires).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              {new Date(session?.expires).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
