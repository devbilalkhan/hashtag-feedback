import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

const FeedbackItem = ({
  upvoteCount,
  text,
  company,
  badgeLetter,
  daysAgo,
}: TFeedbackItem) => {
  return (
    <li className="tranform grid auto-cols-min grid-flow-col place-content-center gap-6 border-b py-6 transition-transform duration-500 ease-in-out hover:translate-x-0.5 hover:border-b-0 hover:border-l-4 hover:border-purple-600 hover:bg-purple-50">
      <div className="flex items-center justify-center">
        <button className="flex flex-col items-center justify-center">
          <TriangleUpIcon />
          <span>{upvoteCount}</span>
        </button>
      </div>
      <div className="flex h-14 w-14 items-center justify-center rounded bg-purple-700 text-3xl font-bold text-white">
        <p>{badgeLetter}</p>
      </div>
      <div className="flex w-[500px] flex-col">
        <p className="text-xs font-bold uppercase text-gray-400">{company}</p>
        <p>{text}</p>
      </div>
      <div className="">
        <p className="font-semibold text-purple-400">{daysAgo === 0 ? "NEW" : daysAgo + "d"}</p>
      </div>
    </li>
  );
};

export default FeedbackItem;
