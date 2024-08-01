import { create } from "zustand";
import { TFeedbackItem } from '../lib/types';

type State = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  filteredFeedbackItems: TFeedbackItem[];
  selectedHashtag: () => void;
  addFeedbackItem: (text: string) => void;
}

create((set) => ({
  /**
   * State
   */
  feedbackItems: [] as TFeedbackItem[],
  isLoading: false,
  erorMessage: "",
  companyList: [],
  filteredFeedbackItems: [],
  selectedHashtag: "",

  /**
   * Actions
   */
  selectHashtag: (company: string) => {
    set(() => ({
      selectedHashtag: company
    }))
  },

  addFeedbackItem: async(text: string) => {
    const companyName = text
      .split(" ")
      .find((word: string) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    set((state: State) => {
      return {
        feedbackItems: [...state.feedbackItems, newItem]
      }
    })

    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        {
          method: "POST",
          body: JSON.stringify(newItem),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error();
      }
    } catch {
      console.log("Something went wrong");
    }
  },

}))