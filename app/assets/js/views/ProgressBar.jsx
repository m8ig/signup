export default class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: this.props.width + "%" }}>
          <span className="sr-only">{this.props.width}% Complete</span>
        </div>
      </div>
    );
  }
}
