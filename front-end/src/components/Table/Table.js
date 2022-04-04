import React, { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';

export default function Table({ data, columnsTable}) {

    const columns = useMemo(
        // () => [
        //     {
        //         Header: 'Pair',
        //         accessor: 'pair',
        //     },
        //     {
        //         Header: 'Last Price',
        //         accessor: 'price',
        //     },
        //     {
        //         Header: 'Change',
        //         accessor: 'change',
        //     },
        //     {
        //         Header: 'Favorite',
        //         accessor: 'favorite',
        //     },
        // ],
        () => columnsTable,
        [],
    );

    // const data = [
    //     {
    //         pair: '1',
    //         price: '2',
    //         change: '2',
    //         favorite: '1',
    //     }
    // ]

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: data
    });

    return (
        <table className="w-full bg-dark-1 border border-gray-700 text-sm-md" {...getTableProps()}>
            <thead className="border-b border-gray-700 text-left">
                {headerGroups.map((headerGroup, i) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i} className="">
                        {headerGroup.headers.map((column, index) => {
                            return (
                                <th
                                    key={index}
                                    scope="col"
                                    className="px-5 py-3"
                                    {...column.getHeaderProps()}
                                >
                                    {column.render('Header')}
                                </th>
                            );
                        })}
                    </tr>
                ))}
            </thead>
            <tbody className="text-right border-b border-gray-700" {...getTableBodyProps()}>
                {
                    rows.map((row, index) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} key={index} className="text-md text-left">
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()} className="px-5 py-3">
                                            {cell.render('Cell')}
                                        </td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
