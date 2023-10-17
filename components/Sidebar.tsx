"use client";
import { NewChat } from "./NewChat";
import { useSession, signOut } from "next-auth/react";
const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div className="">{/**Model Selection */}</div>
          {/**Chat List */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="profile Pic"
          className="h-12 w-12 rounded-full cursor-pointer ml-2 mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default Sidebar;
