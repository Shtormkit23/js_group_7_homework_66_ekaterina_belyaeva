import React, {useEffect, useState} from 'react';
import axiosOrders from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import MessageItem from "../../components/MessageItem/MessageItem";


const Reviews = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosOrders.get('/messages.json');
      const fetchedOrders = Object.keys(response.data).map(id => {
        return {...response.data[id], id};
      });
      setInfo(fetchedOrders);
    };

    fetchData().finally(() => setLoading(false));
  },[]);

  let reviewsOutput = info.map(reviews => (
      <ErrorBoundary key={reviews.id}>
        <MessageItem
            message={reviews.message}
            name={reviews.name}
            email={reviews.email}
        />
      </ErrorBoundary>
  ));

  if (loading) {
    reviewsOutput = <Spinner/>;
  }

  return reviewsOutput;
};

export default withErrorHandler(Reviews, axiosOrders);