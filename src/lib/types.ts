
export type TFeedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type Store = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  getfilteredFeedbackItems: () => TFeedbackItem[];
  selectedHashtag: string;
  getSelectedHashtag: (company: string) => void;
  addFeedbackItem: (text: string) => Promise<void>;
  fetchComments: () => Promise<void>;
}