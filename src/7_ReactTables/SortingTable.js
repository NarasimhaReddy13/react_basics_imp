import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './Columns'
import './table.css'

export const SortedTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    }, useSortBy)

    // use ES6 Short-hand syntax -- simply columns, data ( without property name )

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = tableInstance

    // Basically functions, arrays -- useTable hook from react-table package for easy table creation

    return (
        <div>
            <table {...getTableProps()}>
                <thead >
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}> {column.render('Header')} 
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? 'Decre' : 'Incre'): ' '}
                                    </span>
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
    )
}

// sorting feature can be directly made use by using a hook and passed as argument