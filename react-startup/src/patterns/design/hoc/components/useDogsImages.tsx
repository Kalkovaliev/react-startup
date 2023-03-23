// import { useEffect, useState } from "react";

// function useDogImages() {
//     const [dogs, setDogs] = useState([]);

//     useEffect(() => {
//         const fetchData = () => {
//             fetch("https://dog.ceo/api/breed/labrador/images/random/6")
//                 .then(res => res.json())
//                 .then(({ message }) => setDogs(message));
//         };
//         fetchData();
//     }, []);

//     return dogs;
// }

// export default useDogImages;


import React from 'react';
import axios from 'axios';
import { apiDataStates } from './constants';

const useDogsImages = (endpoint: string) => {
    const [data, setData] = React.useState({
        state: apiDataStates.LOADING,
        error: '',
        data: [],
    });

    const setPartData = (partialData: any) => setData(partialData);

    const fetchData = () => {
        setPartData({
            state: apiDataStates.LOADING,
            error: '',
            data: [],
        });
        axios
            .get(endpoint)
            .then((resp: any) => {
                setPartData({
                    state: apiDataStates.SUCCESS,
                    data: resp.data.message,
                });
            })
            .catch((err: any) =>
                setPartData({
                    state: apiDataStates.ERROR,
                    error: 'Fetch failed',
                    data: [],
                })
            );
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return data;
};

export default useDogsImages;
