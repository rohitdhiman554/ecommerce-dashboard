import { BarChart, Card } from "@tremor/react";
import { useState } from "react";

const chartdata = [
    { name: "January", transactions: 305 },
    { name: "February", transactions: 231 },
    { name: "March", transactions: 267 },
    { name: "April", transactions: 236 },
    { name: "May", transactions: 338 },
    { name: "June", transactions: 274 },
    { name: "July", transactions: 91 },
    { name: "August", transactions: 337 },
    { name: "September", transactions: 27 },
    { name: "October", transactions: 152 },
    { name: "November", transactions: 296 },
    { name: "December", transactions: 119 },
];

export default function Example() {
    const [minTransactions, setMinTransactions] = useState(0);
    const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString();


    const filteredData = chartdata.filter(item => item.transactions >= minTransactions);

    return (
        <div className="w-full">
            <Card className="max-w-4xl">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        Total Transactions
                    </span>
                    <select
                        className="text-sm"
                        value={minTransactions}
                        onChange={(e) => setMinTransactions(Number(e.target.value))}
                    >
                        <option value="0">Show All</option>
                        <option value="100">100+</option>
                        <option value="200">200+</option>
                        <option value="300">300+</option>
                    </select>
                </div>
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong mb-4">
                    {filteredData.reduce((acc, curr) => acc + curr.transactions, 0)}
                </p>
                <BarChart
                    data={filteredData}
                    index="name"
                    categories={['transactions']}
                    colors={['blue']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={20}
                    onValueChange={(v) => console.log(v)}
                />
            </Card>
        </div>
    );
}
