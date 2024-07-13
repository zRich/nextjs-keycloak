/* eslint-disable react/no-unescaped-entities */
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const Dashboard = () => {
    const { data: session, status } = useSession();
  return (
    <>
    {session? (
        <div>
            <p>Dashboard</p>
            <h1>Welcome {session.user?.name} </h1>
            <p> Session: {JSON.stringify(session)}</p>
            <button onClick={() => signOut()}>Sign Out</button>         
        </div>
    ) : (
        <div>
            <h1> You're not logged in</h1>
            <div className="flex space-x-5">
            <button onClick={() => signIn("github")} className="border border-black rounded-lg px-6 py-2" >Sign in with Github</button>
            <button onClick={() => signIn("keyCloak")}>Sign in with Keycloak</button>
            </div>
        </div>
    )}
    </>
  );
};