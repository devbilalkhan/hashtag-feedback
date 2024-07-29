import React, { useRef, useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

const FeedbackForm = () => {
  const [newFeedback, setNewFeedback] = useState("");
  const feedbackRef = useRef();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newFeedback) {
      alert("Please enter feedback with hashtag!");
      feedbackRef.current.autoFocus();
      return;
    }
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
          ref={feedbackRef}
          value={newFeedback}
          id="feedback-textarea"
          onChange={handleChange}
          spellCheck={false}
          className="h-full w-full rounded-lg border-0 bg-gray-100 p-2 text-sm text-gray-900 focus:ring-0"
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
