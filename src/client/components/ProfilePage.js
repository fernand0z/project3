import React from 'react';
import withUser from '../containers/withUser';

const Profile = (props) => {
  const { user } = props;

  if(user.exists) {
    return <h1>{ user.name }</h1>;
  } else {
    return <h1>Not logged in</h1>
  }
}

export default withUser(Profile);