import React, {PropTypes} from 'react';


class DetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areDetailsExpanded: false
    };
    this.expandDetails = this.expandDetails.bind(this);
  }

  expandDetails() {
    this.setState(previousState => ({
      areDetailsExpanded: !previousState.areDetailsExpanded
    }));
  }

  render() {
    return (
      <div className={'tile is-horizontal is-animated ' + (this.state.areDetailsExpanded ? 'is-12' :'is-7')}>
        <article className="tile is-12 is-primary" >
          <div className="content tile is-12 is-vertical block">

            <div className="hero is-primary is-small">
              <div className="columns">
                <div className="column is-2 is-vertical-center">
                  <figure className="image"><a href="#" onClick={this.expandDetails}><img src="https://imgur.com/4VXrpK5.png" /></a></figure>
                </div>
                <div className="hero-body column">
                    <div className="title is-12">{this.props.restaurant.name}</div>
                    <div className="subtitle is-12">{this.props.restaurant.category}</div>
                </div>
              </div>

            </div>
            <div >
              <ul>
                {this.props.restaurant.location ? <p>{this.props.restaurant.location.address}</p> : ""}
                {this.props.restaurant.contact ? <p>{this.props.restaurant.contact.formattedPhone}</p> : ""}
                {this.props.restaurant.contact && (this.props.restaurant.contact.twitter) ? <p>@{this.props.restaurant.contact.twitter}</p> : ""}
            </ul>
            </div>

          </div>
        </article>
      </div>

    )
  }
}



export default DetailComponent;
