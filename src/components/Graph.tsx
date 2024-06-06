import React from 'react'
import { WeeklySalesReport } from '../types/AmazonProduct'
import { LineChart } from '@mui/x-charts'

interface GraphProps {
    data: WeeklySalesReport[]
}

const Graph = ({ data }: GraphProps) => {
    const xLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    //This could be typed to allow for greater flexibility
    const retailSalesData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const wholesaleSalesData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // Data transform here
    // For each entry - parse the string, then add to the appropriate monthly total for the type of data to go in; eg, 01 goes into index 0, etc.
    data.map((report) => {
        const index = Number(report.weekEnding.split('-')[1]) - 1
        retailSalesData[index] += report.retailSales
        wholesaleSalesData[index] += report.wholesaleSales
    })

    return (
        <div>
            <LineChart
                xAxis={[{ scaleType: 'point', data: xLabels }]}
               series={[{ data: retailSalesData, label: 'retail', type: 'line' },
                        { data: wholesaleSalesData, label: 'wholesale', type: 'line'  }
                       ]}
                height={600}
            />
        </div>
    )
}
export default Graph