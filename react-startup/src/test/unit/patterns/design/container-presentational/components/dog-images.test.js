import React from "react";
import { waitFor, render, screen } from "@testing-library/react";
import DogImages from "patterns/design/container-presentational/components/dogImages";
import axios from "axios";


jest.mock("axios");

const doRender = () => {
    render(
        <DogImages />
    )
};

const useApiFetchMock = { data: { message: ['Hello'] } };

describe("Component: DogImages", () => {

    it("should return data with a successful request", async () => {
        axios.get.mockResolvedValueOnce(useApiFetchMock);
        doRender();

        await waitFor(() => {
            const getElement = screen.getByTestId("dog-0");
            expect(getElement).toBeInTheDocument();
        });
    });
});