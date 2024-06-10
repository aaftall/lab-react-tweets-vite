import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.image} />

      <div className="body">
        <div className="top">
          <User user={props.user} />
          <Timestamp time={props.timestamp} />
        </div>
        <Message message={props.message} />
        <Actions actions={props.actions} />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
