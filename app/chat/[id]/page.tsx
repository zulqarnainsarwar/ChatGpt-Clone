import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
type Props = {
  params: {
    id: string;
  };
};
const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* chat */}
      <Chat chatId={id} />
      {/**Input filed for chat */}
      <ChatInput chatId={id} />
    </div>
  );
};
export default ChatPage;
