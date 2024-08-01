import React, { useRef, useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
//import useFeedback from "../../lib/hooks";
import { useFeedbackItemStore } from "../../stores/feedbackItemStore";

const FeedbackForm = () => {
  const addFeedbackItem = useFeedbackItemStore(
    (state) => state.addFeedbackItem,
  );
  const [newFeedback, setNewFeedback] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newFeedback) {
      inputRef.current && inputRef.current.focus();
      return;
    }

    if (newFeedback.includes("#") && newFeedback.length > 2) {
      setIsValid(true);
      setTimeout(() => {
        setIsValid(false);
      }, 2000);
    } else {
      setIsInvalid(true);
      setTimeout(() => {
        setIsInvalid(false);
      }, 2000);
      return;
    }

    addFeedbackItem(newFeedback);
    setNewFeedback("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setNewFeedback(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative flex h-[250px] flex-col gap-y-4 px-10"
      >
        <textarea
          ref={inputRef}
          value={newFeedback}
          id="feedback-textarea"
          onChange={handleChange}
          spellCheck={false}
          className={`h-full w-full rounded-lg border-0 bg-gray-100 p-2 text-sm text-gray-900 focus:ring-0 ${isValid && "border-2 border-green-500"} ${isInvalid && "border-2 border-red-600"}`}
          placeholder="Enter your feedback here, remember to incluse the company #hashtag"
        />

        <div className="flex justify-between">
          <button className="mb-2 me-2 inline-flex items-center rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-[#050708]/50">
            Submit
          </button>
          <p className="absolute right-14 top-[10rem] italic text-purple-500">
            {MAX_CHARACTERS - newFeedback.length}
          </p>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
