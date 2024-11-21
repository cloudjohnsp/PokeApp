import axios from 'axios';
import { toast } from 'react-toastify';

export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const requestMessage = error.response?.data?.message;
    console.log(requestMessage);
    if (error.status === 401) {
      toast.error('Session expired. Please, Log In again!');
    } else {
      toast.error(requestMessage);
    }
  }
};
