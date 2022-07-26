import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import useDogImages from "patterns/design/container-presentational/components/useDogsImages";
import axios from "axios";


jest.mock("axios");

const useApiFetchMock = { data: { message: ['Hello'] } };


describe("CustomHook: useDogImages", () => {

    it("should return data with a successful request", async () => {
        //  mockFetch(useApiFetchMock);
        axios.get.mockResolvedValueOnce(useApiFetchMock);
        const { result, waitForNextUpdate } = renderHook(() => useDogImages("https://dog.ceo/api/breed/labrador/images/random/6"));
        expect(result.current).toMatchObject({
            data: [],
            error: '',
            state: 'LOADING',
        });
        await waitForNextUpdate();
        expect(result.current).toMatchObject({
            data: ['Hello'],
            state: 'SUCCESS',
        });
    });

    it("should return data with a failed response", async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage))
        );
        const { result, waitForNextUpdate } = renderHook(() => useDogImages("https://dog.ceo/api/breed/labrador/images/random/6"));
        await waitForNextUpdate();
        expect(result.current).toMatchObject({
            data: [],
            error: 'Fetch failed',
            state: 'ERROR',
        });
    });
});