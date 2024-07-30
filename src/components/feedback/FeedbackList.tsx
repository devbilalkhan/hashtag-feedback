import { TFeedbackItem } from "../../lib/types";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import FeedbackItem from "./FeedbackItem";

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
