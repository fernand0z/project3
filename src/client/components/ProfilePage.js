import React from 'react';
import withUser from '../containers/withUser';

const Profile = (props) => {
  const { user } = props;

  if(user.exists) {
    return <span>{ user.name }</span>;
  } else {
    return <h1>Not logged in</h1>
  }
}

export default withUser(Profile);