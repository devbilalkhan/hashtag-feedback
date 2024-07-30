import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

const FeedbackItem = ({
  upvoteCount,
  text,
  company,
  badgeLetter,
  daysAgo,
}: TFeedbackItem) => {
  const [toggleFeedback, setToggleFeedback] = useState(false);
  const [upvoteCounts, setUpvoteCounts] = useState(upvoteCount);
  const [isLocked, setIsLocked] = useState(false);

  const handleUpvote = () => {
    setUpvoteCounts((prev) => prev++);
    setIsLocked(true);
  };

  return (
    <li className="tranform grid cursor-pointer auto-cols-min grid-flow-col place-content-center gap-6 border-b py-6 transition-transform duration-500 ease-in-out hover:translate-x-0.5 hover:border-b-0 hover:border-l-4 hover:border-purple-600 hover:bg-gray-50">
      <div className="flex items-center justify-center">
        <button
          onClick={handleUpvote}
          className="flex flex-col items-center justify-center rounded px-2 py-1 text-sm font-semibold text-gray-400 hover:bg-purple-100"
        >
          {!isLocked && <TriangleUpIcon />}
          <span>{upvoteCounts}</span>
        </button>
      </div>
      <div className="flex h-14 w-14 items-center justify-center rounded bg-purple-600 text-3xl font-bold text-white">
        <p>{badgeLetter}</p>
      </div>
      <div
        onClick={() => setToggleFeedback(!toggleFeedback)}
        className="w-[500px] flex-col"
      >
        <p className="text-xs font-bold uppercase text-gray-400">{company}</p>
        <p className={!toggleFeedback ? "line-clamp-2" : ""}>{text}</p>
      </div>
      <div className="">
        <p className="text-sm font-semibold text-purple-400">
          {daysAgo === 0 ? "NEW" : daysAgo + "d"}
        </p>
      </div>
    </li>
  );
};

export default FeedbackItem;
