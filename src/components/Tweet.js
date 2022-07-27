import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";


function Tweet(props) {

 
  const { tweet: { user, timestamp, message } } = props;

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User userData = {user}/>
          <Timestamp time={timestamp} />
        </div>

        <p className="message">
        <Message message={message} /> 
        </p>

        <Action />

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
