import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getMessage } from '../redux/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);
  async function fetchMessage() {
    await axios
      .get('http://127.0.0.1:3000/api/v1/messages')
      .then((response) => {
        dispatch(getMessage(response.data.greeting));
      });
  }
  useEffect(() => {
    fetchMessage();
  }, []);
  return (
    <>
      <p>{message}</p>
      <button type="button" onClick={() => fetchMessage()}>
        Generate new message
      </button>
    </>
  );
};

export default Greetings;
