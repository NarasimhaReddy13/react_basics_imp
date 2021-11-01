import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'  // useFilters hook is only for column filtering
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './Columns'    // GROUPED_COLUMNS ---- imported from grouped headers
import './table.css'
import { GlobalFiltering } from './GlobalFiltering'

// useTable -- is hook -- we pass an object as an argument
// catch -- useMemo() -- 2 args -- arrow fun, [] ------- here using useMemo hook , ensures that data isn't recreated on every re-render -- memoized

export const FilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])      // ---------- replace COLUMN with GROUPED_COLUMN and verify
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    }, useFilters, useGlobalFilter)

    // use ES6 Short-hand syntax -- simply columns, data ( without property name )

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, state, setGlobalFilter } = tableInstance

    // Basically functions, arrays -- useTable hook from react-table package for easy table creation

    const { globalFilter } = state

    return (
        <>
        <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter}/>
        <div>
            <table {...getTableProps()}>
                <thead >
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps()}> {column.render('Header')} 
                                    <div> {column.canFilter ? column.render('Filter') : null } </div> 
                                    {/* this div is only for column filtering -- and add filter in columns.js */}
                                </th>
                            ))}
                        </tr>
                    ))}
                    
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map( row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map( (cell) => {
                                    return <td {...cell.getCellProps()} > {cell.render('Cell')} </td>
                                })}
                             </tr>
                            )
                    })}
                </tbody>

                <tfoot >
                    {footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map( column => (
                                <td {...column.getFooterProps()}> {column.render('Footer')} </td>
                            ))}
                        </tr>
                    ))}
                    
                </tfoot>
            </table>
        </div>
    </>
    )
}


// Adding footer --- specify footer property in column.js
// from tableInstance destructure footerGroups
// add <tfoot>



// Grouping headers