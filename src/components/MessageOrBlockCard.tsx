import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import Message from "./Message";

function MessageOrBlockCard({ ...rest }: DocumentType & { block?: boolean }) {
  return rest.photoURL === null ? (
    <p className="mx-auto text-sm text-center sm:text-base sm-width-block sm:max-w-3xl text-slate-600 dark:text-slate-400 ">
      {rest.email} blocked for breaking community guideline!
    </p>
  ) : (
    <Message {...rest} />
  );
}

export default MessageOrBlockCard;
