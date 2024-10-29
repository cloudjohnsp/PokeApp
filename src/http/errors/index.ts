import axios from 'axios';
import { toast } from 'react-toastify';

export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const requestMessage = error.response?.data?.message;
    console.log(requestMessage);
    toast.error(requestMessage);
  }
};
