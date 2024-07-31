import { useContext } from "react";
import { FeedbackContext } from '../context/FeedbackContextProvider';

export default function useFeedback() {
  return useContext(FeedbackContext)
}