import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { WeeklySalesReport } from '../types/AmazonProduct'

interface TableProps {
    data: WeeklySalesReport[]
}

const CustomTable = ({ data }: TableProps) => {
    const columns: GridColDef[] = [
        { field: 'weekEnding', headerName: 'Week Ending', width: 150, type: 'string' },
        { field: 'retailSales', headerName: 'Retail Sales', width: 100, type: 'number' },
        { field: 'wholesaleSales', headerName: 'Wholesale Sales', width: 150, type: 'number' },
        { field: 'unitsSold', headerName: 'Units Sold', width: 125, type: 'number' },
        { field: 'retailerMargin', headerName: 'Retailer Margin', width: 200, type: 'number' }
    ]
    const rows = [];
    for(let i = 0; i < data.length; i++) {
        rows.push({
            id: i,
            weekEnding: data[i].weekEnding,
            retailSales: data[i].retailSales,
            wholesaleSales: data[i].wholesaleSales,
            unitsSold: data[i].unitsSold,
            retailerMargin: data[i].retailerMargin
        })
    }

    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    )
}
export default CustomTable