import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <div className="">
      <ol className="flex flex-col items-center justify-center">
        <li className="grid auto-cols-min grid-flow-col gap-6 border-b py-6">
          <div className="flex items-center justify-center">
            <button className="flex flex-col items-center justify-center">
              <TriangleUpIcon />
              <span>593</span>
            </button>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded bg-purple-700 text-3xl font-bold text-white">
            <p>B</p>
          </div>
          <div className="flex w-[500px] flex-col">
            <p className="text-xs font-bold uppercase text-gray-400">Bilal</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              amet quasi exercitationem obcaecati aperiam dignissimos.
            </p>
          </div>
          <div className="">
            <p className="font-semibold text-purple-400">4d</p>
          </div>
        </li>
      </ol>
    </div>
  );
}
