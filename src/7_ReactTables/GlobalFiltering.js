import React from 'react'

export const GlobalFiltering = ({filter, setFilter}) => {
    return (
        <span>
            Search: { ' ' }
            <input value={filter || ''} onChange={(e) => setFilter(e.target.value)}/>
        </span>
    )
}

// To use -- entire data should be loaded and filtering is happened on client side 
// If we are fetching 1000s of rows also it will be okay

export const ColumnFiltering = ({column}) => {
    const {filterValue, setFilter} = column
    return (
        <span>
            Search: { ' ' }
            <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)}/>
        </span>
    )
}


// simply we can't remove a filtering property if we don't want --- it gives error 
// use property : ----- disableFilters: true



// How can we remove Filter: ColumnFiltering --- in every data, and add as a default filter in FilteringTable

// const defaultColumn = useMemo(() => {
//     return {
//         Filter: ColumnFilter
//     }
// },[])

// add this defaultColumn after columns, data