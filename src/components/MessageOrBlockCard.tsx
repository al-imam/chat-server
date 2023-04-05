import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import Message from "./Message";

function MessageOrBlockCard({
  block = Math.random() > 0.5 ? true : false,
  ...rest
}: DocumentType & { block?: boolean }) {
  return block ? (
    <p>{rest.email} blocked for breaking community guideline!</p>
  ) : (
    <Message {...rest} />
  );
}

export default MessageOrBlockCard;
