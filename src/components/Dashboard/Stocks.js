import { Card, DonutChart, Legend } from "@tremor/react";
import { useState } from "react";


const datahero = [
    {
        name: 'New York',
        sales: 980,
    },
    {
        name: 'London',
        sales: 456,
    },
    {
        name: 'Hong Kong',
        sales: 390,
    },
    {
        name: 'San Francisco',
        sales: 240,
    },
    {
        name: 'Singapore',
        sales: 190,
    },
]

const Stocks = () => {

    const [value, setValue] = useState(null);

    console.log("calue", value)

    const dataFormatter = (number) =>
        `$ ${Intl.NumberFormat('us').format(number).toString()}`;

    return (
        <div className="w-full">
            <Card className="max-w-4xl h-full border-2">
                <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Total Requests
                </span>
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    6,568
                </p>
                <div className="flex items-center justify-center space-x-6">
                    <DonutChart
                        showTooltip
                        showAnimation
                        showLabel
                        data={datahero}
                        category="sales"
                        index="name"
                        valueFormatter={dataFormatter}
                        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                        className="w-40"
                        onValueChange={(v) => !v && setValue(v)}
                    />

                    <Legend
                        categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
                        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                        className="max-w-xs"
                    />
                </div>
                {value ? <div className="w-full h-full mt-5">
                    <Card className="w-full flex gap-10">
                        <Card>
                            <div className="flex flex-col">
                                <span className="text-lg font-semibold">City Name</span>
                                <span className="text-sm">{value.name}</span>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col">
                                <span className="text-lg font-semibold">Total Sales</span>
                                <span className="text-sm">{value.sales}</span>
                            </div>
                        </Card>


                    </Card>
                </div> : null}


            </Card>
        </div>
    )
}

export default Stocks