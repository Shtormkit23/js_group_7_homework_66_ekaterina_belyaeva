import React, {useEffect, useMemo, useState} from 'react';
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
    return function ErrorHandler(props) {
        const[error, setError] = useState(null);

        const ic = useMemo(() => {
            axios.interceptors.response.use(res => res, error => {
                setError(error);
                throw error;
            });
        }, []);

        const errorDismissed = () => {
            setError(null);
        };

        useEffect(() => {
            return () => axios.interceptors.response.eject(ic);
        }, [ic]);

        return (
            <>
                <Modal show={!!error} closed={errorDismissed}>{error && error.message}</Modal>
                <WrappedComponent {...props}/>
            </>
        );
    }
};

export default withErrorHandler;