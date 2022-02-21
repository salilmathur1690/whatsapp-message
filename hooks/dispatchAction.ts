import { useCallback, useState } from 'react';
import { assert } from 'superstruct';

type ReturnProps = {
    dispatch: (body: any) => Promise<any>,
    status: 'idle' | 'dispatching' | 'success' | 'error' | string,
    isDispatching: boolean,
    response: any,
    error: any,
}

const useDispatchAction = (url: string, dispatcher: (url: string, body: any) => Promise<any>, schema: any): ReturnProps => {
    const [states, setStates] = useState({
        isDispatching: false,
        status: 'idle',
        error: null,
        response: null,
    });

    // const logout = useLogout();

    const dispatch = useCallback(
        async (body) => {
            assert(body, schema);

            setStates((prevState) => ({
                ...prevState,
                status: 'dispatching',
                isDispatching: true,
            }));

            return dispatcher(url, body)
                .then((r) => {
                    setStates((prevState) => ({
                        ...prevState,
                        status: 'success',
                        isDispatching: false,
                        response: r,
                    }));
                })
                .catch((error) => {
                    setStates((prevState) => ({
                        ...prevState,
                        error: error,
                        isDispatching: false,
                        status: 'error',
                    }));

                    if (error.status === 401) {
                        // logout();
                    } else {
                        throw error;
                    }
                });
        },
        [url, dispatcher],
    );

    return {
        dispatch,
        status: states['status'],
        isDispatching: states['isDispatching'],
        response: states['response'],
        error: states['error'],
    };
};

export default useDispatchAction;
