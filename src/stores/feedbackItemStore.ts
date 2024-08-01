import { create } from "zustand";
import { TFeedbackItem, Store } from '../lib/types';



export const useFeedbackItemStore = create<Store>((set, get) => ({
  /**
   * State
   */
  feedbackItems: [] as TFeedbackItem[],
  isLoading: false,
  errorMessage: "",
  companyList: [],
  filteredFeedbackItems: [],
  selectedHashtag: "",

  getCompanyList: () => {
    return get().feedbackItems
        .map((feedbackItem) => feedbackItem.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        })
  },

  getfilteredFeedbackItems: () => {
    const state = get()
    return state.selectedHashtag
      ? state.feedbackItems.filter(
          (feedbackItem: TFeedbackItem) => feedbackItem.company === state.selectedHashtag,
        )
      : state.feedbackItems;
  },

  /**
   * Actions
   */
  getSelectedHashtag: (company: string) => {
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

    set((state) => {
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
  fetchComments: async () => {
    set(()=>{
      return {
        isLoading: true
      }
    }  
      ) 
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      
      set(()=> {
        return {
          feedbackItems: data.feedbacks
        }
      })
    } catch (e) {
      set(()=>({
        errorMessage: "Something went wrong!!"
      }))
    } finally {
      set(()=>({
        isLoading: false
      }))
    }
  },
}))