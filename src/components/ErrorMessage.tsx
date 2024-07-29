type MessageType = {
  message?: string;
};

const ErrorMessage = ({ message }: MessageType) => {
  return <div>{message}</div>;
};

export default ErrorMessage;
