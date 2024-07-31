import useFeedback from "../../lib/hooks";
import { TFeedbackItem } from "../../lib/types";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const { errorMessage, isLoading, filteredFeedbackItems } = useFeedback();
  return (
    <div className="w-full">
      {<ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      <ol className="flex flex-col">
        {filteredFeedbackItems.map((feedbackItem: TFeedbackItem) => (
          <FeedbackItem {...feedbackItem} key={feedbackItem.id} />
        ))}
      </ol>
    </div>
  );
}
