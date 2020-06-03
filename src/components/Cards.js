import React from "react"
import Card from "./Card"




class Cards extends React.Component {
  render() {
    return (
      <div>
        {this.props.data ? this.props.data.map(product => <Card {...product} incrementUpvote={this.props.incrementUpvote} />) :<div></div>}
        )}
      </div>
    )
  }
}

export default Cards