// only for formatting dates  -- in date of birth field
import {format} from "date-fns"
import { ColumnFiltering } from "./GlobalFiltering"


export const COLUMNS = [
    {Header: 'Id',Footer: 'Id', accessor: 'id', Filter: ColumnFiltering, disableFilters: true}, 
    {Header: 'First Name',Footer: 'First Name', accessor: 'first_name', Filter: ColumnFiltering}, 
    {Header: 'Last Name',Footer: 'Last Name', accessor: 'last_name', Filter: ColumnFiltering}, 
    {Header: 'Date of Birth',Footer: 'Date of Birth', accessor: 'date_of_birth', Cell: ({value}) => {return format(new Date(value), 'dd/MM/yy')}, Filter: ColumnFiltering}, 
    {Header: 'Country',Footer: 'Country', accessor: 'country', Filter: ColumnFiltering}, 
    {Header: 'Phone',Footer: 'Phone', accessor: 'phone', Filter: ColumnFiltering}
]

// accessor -- map each column to a specific data value in the mock data ( identify what data goes to which table )
// We can pick what needs to be rendered in the UI ( intentionally not added 2 columns )


// for header groups

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',Footer: 'Id', accessor: 'id'
    },
    {
        Header: 'Name', Footer: 'Name', 
        columns: [
            {Header: 'First Name',Footer: 'First Name', accessor: 'first_name'}, 
            {Header: 'Last Name',Footer: 'Last Name', accessor: 'last_name'}
        ]
    },
    {
        Header: 'Info', Footer: 'Info',
        columns: [
            {Header: 'Date of Birth',Footer: 'Date of Birth', accessor: 'date_of_birth'}, 
            {Header: 'Country',Footer: 'Country', accessor: 'country'}, 
            {Header: 'Phone',Footer: 'Phone', accessor: 'phone'}
        ]
    }
]