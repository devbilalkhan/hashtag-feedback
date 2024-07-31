import React, { createContext, useMemo, useState } from "react";
import { TFeedbackItem } from "../lib/types";
import { useFeedbackItems } from "../lib/hooks";

type DefaultFeedbackItemType = {
  companyList: string[];
  handleSelectHashtag: (company: string) => void;
  filteredFeedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddFeedbackItem: (text: string) => void;
};

type FeedbackContextProviderProps = {
  children: React.ReactNode;
};

export const FeedbackContext = createContext<DefaultFeedbackItemType | null>(
  null,
);

function FeedbackContextProvider({ children }: FeedbackContextProviderProps) {
  const { feedbackItems, isLoading, errorMessage, setFeedbackItems } =
    useFeedbackItems();
  const [selectedHastag, setSelectedHastag] = useState("");
  /**
   * Selects the company bases on the user click
   */
  const handleSelectHashtag = (company: string) => {
    setSelectedHastag(company);
  };

  /**
   * The array one-liner uses the filter method to return only the feedback items
   * that match the selected hashtag. If no hashtag is selected, it returns all feedback items.
   */
  const filteredFeedbackItems = useMemo(() => {
    return selectedHastag
      ? feedbackItems.filter(
          (feedbackItem) => feedbackItem.company === selectedHastag,
        )
      : feedbackItems;
  }, [feedbackItems, selectedHastag]);

  /**
   * Returns unqiue hashtags list
   */
  const companyList = useMemo(
    () =>
      feedbackItems
        .map((feedbackItem) => feedbackItem.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems],
  );

  /**
   * Adds new feedback items from the user and to the database
   */
  const handleAddFeedbackItem = async (text: string) => {
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
    setFeedbackItems([...feedbackItems, newItem]);

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
  };

  /**
   * Reads all the feedback items from the database server
   */

  return (
    <FeedbackContext.Provider
      value={{
        companyList,
        handleSelectHashtag,
        filteredFeedbackItems,
        isLoading,
        errorMessage,
        handleAddFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContextProvider;
