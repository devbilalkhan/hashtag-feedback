import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemType = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

const FeedbackItem = ({ upvoteCount, text }: FeedbackItemType) => {
  return (
    <li className="grid auto-cols-min grid-flow-col place-content-center gap-6 border-b py-6">
      <div className="flex items-center justify-center">
        <button className="flex flex-col items-center justify-center">
          <TriangleUpIcon />
          <span>{upvoteCount}</span>
        </button>
      </div>
      <div className="flex h-14 w-14 items-center justify-center rounded bg-purple-700 text-3xl font-bold text-white">
        <p>B</p>
      </div>
      <div className="flex w-[500px] flex-col">
        <p className="text-xs font-bold uppercase text-gray-400">Bilal</p>
        <p>{text}</p>
      </div>
      <div className="">
        <p className="font-semibold text-purple-400">4d</p>
      </div>
    </li>
  );
};

export default FeedbackItem;
