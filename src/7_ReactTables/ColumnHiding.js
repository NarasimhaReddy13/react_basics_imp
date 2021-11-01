import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './Columns'  
import './table.css'

export const ColumnHiding = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, allColumns, getToggleHideAllColumnsProps, rows, prepareRow } = tableInstance

    return (
        <div>
            <div>
                <div>
                    <label htmlFor='forSelecting'> Toggle All </label>
                    <input type='checkbox' {...getToggleHideAllColumnsProps()} id="forSelecting"/> 
                </div>
                {
                    allColumns.map(column => (
                        <div key={column.id}> <label> <input type='checkbox' {...column.getToggleHiddenProps()}/> {column.Header} </label> </div>
                    ))
                }
            </div>
            
            {/* Add above to hide columns */}

            <table {...getTableProps()}>
                <thead >
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps()}> {column.render('Header')} </th>
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
            </table>
        </div>
    )
}