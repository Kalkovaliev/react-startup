import { DataFilterContext, DataFiltersProvider, useDataFilters } from "patterns/design/provider/components";
import { useContext } from "react";
import { act, render } from '@testing-library/react';


describe("Context: data-provider", () => {

    it("should provide to children with the right information", () => {
        const activeFiltersSpy = jest.fn();
        const setActiveFiltersSpy = jest.fn();
        const filterOptionsSpy = jest.fn();

        const MockComponent = () => {
            const context = useContext(DataFilterContext);

            activeFiltersSpy(context.activeFilters);
            setActiveFiltersSpy(context.setActiveFilters);
            filterOptionsSpy(context.filterOptions);

            //      return <div />;
        }

        render(
            <DataFiltersProvider>
                <div>
                    <MockComponent />
                </div>
            </DataFiltersProvider>,
        );

        expect(activeFiltersSpy).toHaveBeenNthCalledWith(1, {
            ids: ["1", "2"],
        });

        // update active filters
        const setActiveFilters = setActiveFiltersSpy.mock.calls[0][0];
        act(() => {
            setActiveFilters({
                test: 1,
                emptyStringFilter: "",
                emptyArrayFilter: [],
            });
        });
        expect(activeFiltersSpy).toHaveBeenCalledWith({ test: 1 });

    })
});
