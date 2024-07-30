import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackItem } from "../lib/types";

type FeedbackItemProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

export default function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackItemProps) {
  return (
    <div className="w-full">
      {<ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      <ol className="flex flex-col">
        {feedbackItems.map((feedbackItem: TFeedbackItem) => (
          <FeedbackItem {...feedbackItem} key={feedbackItem.id} />
        ))}
      </ol>
    </div>
  );
}
