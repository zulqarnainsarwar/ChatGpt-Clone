import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
type Props = {
  id: string;
};
const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();
  const route = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  //if state is active then show message
  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );
  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);
  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${active && "bg-gray-700/50"}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="hidden flex-1 md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
};

export default ChatRow;