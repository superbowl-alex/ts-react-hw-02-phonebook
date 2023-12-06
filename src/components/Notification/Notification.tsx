import { Alert } from './Notification.styled';

interface INotification {
  message: string;
}

const Notification = ({ message }: INotification) => {
  return <Alert>{message} </Alert>;
};

export default Notification;
