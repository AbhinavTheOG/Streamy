import React from "react";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";

//since edit component is being rendered using Route component, the react router dom automatically passes in the props
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    if (!this.props.stream) return <div>Loading...</div>;
    return <div>{this.props.stream.title}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
