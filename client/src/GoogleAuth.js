import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      /* This is a call back method saying gapi.client.init and telling client id and what we want to modify */
      window.gapi.client
        .init({
          clientId:
            "1171068124-1ilmrgk2mnkjsjcg3js13auqdhe7ocmb.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); // getting the instance of the auth.
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // checking the status if we are signed in or not and then updating the state for the screen to re render
          this.auth.isSignedIn.listen(this.onAuthChange());
        });
    });
  }
  // since this is a call back function using arrow funtion so the context is bound to the component.
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn == null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);
