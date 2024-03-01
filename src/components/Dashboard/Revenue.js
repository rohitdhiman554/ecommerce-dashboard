import { BarChart, Card } from "@tremor/react";

const chartdata = [
    { "name": "January", "transactions": 305 },
    { "name": "February", "transactions": 231 },
    { "name": "March", "transactions": 267 },
    { "name": "April", "transactions": 236 },
    { "name": "May", "transactions": 338 },
    { "name": "June", "transactions": 274 },
    { "name": "July", "transactions": 91 },
    { "name": "August", "transactions": 337 },
    { "name": "September", "transactions": 27 },
    { "name": "October", "transactions": 152 },
    { "name": "November", "transactions": 296 },
    { "name": "December", "transactions": 119 }
]



export default function Example() {
    const dataFormatter = (number) =>
        Intl.NumberFormat('us').format(number).toString();


    return (
        <div className="w-full h-full">
            <Card className="max-w-4xl">
                <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Total Transactions
                </span>
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    2,673
                </p>
                <BarChart
                    data={chartdata}
                    index="name"
                    categories={['transactions']}
                    colors={['blue']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={80}
                    onValueChange={(v) => console.log(v)}
                />




            </Card>
        </div>
    );
}