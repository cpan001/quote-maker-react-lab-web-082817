import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { bindActionCreators } from "redux";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => (
                <QuoteCard
                  quote={quote}
                  key={quote.id}
                  removeQuote={this.props.removeQuote}
                  upvoteQuote={this.props.upvoteQuote}
                  downvoteQuote={this.props.downvoteQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { quotes: state.quotes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { removeQuote, upvoteQuote, downvoteQuote },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
