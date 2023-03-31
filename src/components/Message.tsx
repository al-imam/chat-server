import useMedia from "@app/hooks/useMedia";
import lngType from "@app/utilitys/detectLanguage";
import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import useAuth from "@app/hooks/useAuth";

export default function Message({ message, photoURL, uid }: DocumentType) {
  const smell = useMedia("(min-width: 40rem)");

  const { currentUser } = useAuth();

  const send = currentUser?.uid === uid ? false : true;

  return (
    <div
      className={`sm-width sm:max-w-3xl mx-auto relative flex gap-2 translate-x-[1px] ${
        send ? "items-start" : "flex-row-reverse items-end"
      }`}
    >
      {(send || smell) && (
        <img
          className="w-8 bg-red-200 rounded-full sm:w-10 aspect-square"
          src={
            photoURL ||
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
          }
        />
      )}
      <p
        className={`w-[fit-content] max-w-[65%] md:max-w-[55%] min-h-[40px] flex items-center rounded-md p-2 backdrop-blur-lg ${
          send
            ? "bg-black bg-opacity-5 text-fg"
            : "bg-[#0b93f6] bg-opacity-70 text-white"
        } ${lngType(message) === "bangla" ? "font-bangla" : "font-primary"}`}
      >
        {message}
      </p>
    </div>
  );
}
