import uuid from "uuid";

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, { id: uuid(), ...action.quote, votes: 0 }];

    case "REMOVE_QUOTE":
      const newQuotes = state.filter(quote => quote.id !== action.quoteId);
      return newQuotes;
    case "UPVOTE_QUOTE":
      const quotes = state.slice();
      const quote = quotes.find(quote => quote.id === action.quoteId);
      quote.votes += 1;
      return quotes;
    case "DOWNVOTE_QUOTE":
      const qs = state.slice();
      const q = qs.find(quote => quote.id === action.quoteId);
      q.votes > 0 ? --q.votes : q.votes;
      return qs;
    default:
      return state;
  }
  return state;
};
