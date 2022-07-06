import { render, screen } from "@testing-library/react";
import Provider from "patterns/design/provider";
import { useDataFilters } from "patterns/design/provider/components";

jest.mock("../../../../../patterns/design/provider/components/data-provider-context", () => {
    const dataFiltersProvider = jest.requireActual("../../../../../patterns/design/provider/components/data-provider-context");
    return {
        __esModule: true,
        default: dataFiltersProvider.default,
        useDataFilters: jest.fn(),
    };
});

const doRender = () => {
    render(
        <Provider />
    )
};

describe("Dessign Pattern: Provider", () => {
    beforeEach(() => {
        useDataFilters.mockImplementation(() => ({
            setActiveFilters: jest.fn(),
            filterOptions: {},
            activeFilters: {},
        }));
    });

    it("should display the page title", () => {
        doRender();
        expect(screen.getByText("Provider Pattern")).toBeInTheDocument();
    });
});