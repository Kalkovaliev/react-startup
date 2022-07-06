import React, { useContext, useMemo, useState } from "react";
import cleanObject from "./clean-object";

type TFilters = {
    ids?: string[];
};

type TFilterIds = {
    label: string;
    value: string;
};

type TTiesFilterOptionsObject<T> = {
    isLoading: boolean;
    data: T[];
};

const defaultFilterOptions: TTiesFilterOptionsObject<TFilterIds> = {
    isLoading: true,
    data: [],
};


type TContext = {
    activeFilters: TFilters;
    setActiveFilters: (filters: TFilters) => void;
    filterOptions: {
        ids: TTiesFilterOptionsObject<TFilterIds>;
    };
    // error: Response | null;
};

const defaultContext: TContext = {
    activeFilters: {
        ids: ["1", "2"],
    },
    setActiveFilters: () => { },
    filterOptions: {
        ids: defaultFilterOptions,
    },
    // error: null,
};

export const DataFilterContext = React.createContext(defaultContext);

const DataFiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [activeFilters, setActiveFilters] = useState(defaultContext.activeFilters);

    // filter options loaded from the backend
    const [ids, setIds] = useState<
        TTiesFilterOptionsObject<TFilterIds>
    >(defaultFilterOptions);

    // load the filter options
    // TODO: backend to provide a different endpoint in the future and not extend on the operations one
    // const [isLoadingFilterOptions, filterOptions, error] = useGetApi(
    //     `${config.getResource("tiesFilters")}`,
    //     fromTiesFiltersDto,
    //     mockFilterOptions,
    // );

    // // save the filter options into the context
    // useEffect(() => {
    //     setDistributionGroupCenters({
    //         isLoading: isLoadingFilterOptions,
    //         data: filterOptions?.distributionGroupCenters || [],
    //     });
    //     setTieResult({
    //         isLoading: isLoadingFilterOptions,
    //         data: filterOptions?.tieResult || [],
    //     });
    // }, [isLoadingFilterOptions, filterOptions]);


    const value = useMemo(
        () => ({
            activeFilters,
            setActiveFilters: (filters: TFilters) => setActiveFilters(cleanObject<TFilters>(filters)),
            filterOptions: {
                ids,
            },
        }),
        [activeFilters, setActiveFilters, ids],
    );

    return <DataFilterContext.Provider value={{ ...value }}> {children} </DataFilterContext.Provider>;
}

//hook
export const useDataFilters = () => {
    return useContext(DataFilterContext);
}

export default DataFiltersProvider;