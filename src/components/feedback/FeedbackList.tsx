// import useFeedback from "../../lib/hooks";
import { TFeedbackItem } from "../../lib/types";
import { useFeedbackItemStore } from "../../stores/feedbackItemStore";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const errorMessage = useFeedbackItemStore((state) => state.errorMessage);
  const isLoading = useFeedbackItemStore((state) => state.isLoading);
  const getfilteredFeedbackItems = useFeedbackItemStore(
    (state) => state.getfilteredFeedbackItems(),
  );
  return (
    <div className="w-full">
      {<ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      <ol className="flex flex-col">
        {getfilteredFeedbackItems.map((feedbackItem: TFeedbackItem) => (
          <FeedbackItem {...feedbackItem} key={feedbackItem.id} />
        ))}
      </ol>
    </div>
  );
}
