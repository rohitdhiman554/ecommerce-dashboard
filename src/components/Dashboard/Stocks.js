import { Card, DonutChart, Legend } from "@tremor/react";
import { useState } from "react";


const datahero = [
    {
        "name": "New York",
        "sales": 980,
        "growthRate": "5%"
    },
    {
        "name": "London",
        "sales": 456,
        "growthRate": "3%"
    },
    {
        "name": "Hong Kong",
        "sales": 390,
        "growthRate": "2%"
    },
    {
        "name": "San Francisco",
        "sales": 240,
        "growthRate": "4%"
    },
    {
        "name": "Singapore",
        "sales": 190,
        "growthRate": "6%"
    }
]


const Stocks = () => {

    const [value, setValue] = useState(null);

    const dataFormatter = (number) =>
        `$ ${Intl.NumberFormat('us').format(number).toString()}`;

    return (
        <div className="w-full">
            <Card className="max-w-4xl flex flex-col h-full">
                <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Overall Sales
                </span>
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    6,568
                </p>
                <div className="flex flex-col gap-6">
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
                            className="w-full md:w-40"
                            onValueChange={(v) => setValue(v)}
                        />

                        <Legend
                            categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
                            colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                            className="md:max-w-md max-w-xs font-medium"
                        />
                    </div>
                    <div className="w-full h-full mt-5">
                        <div className="flex md:flex-row flex-col md:gap-5 gap-4">
                            <Card>
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold">City Name</span>
                                    <span className="text-sm">{value ? value.name : '--'}</span>
                                </div>
                            </Card>
                            <Card>
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold">Total Sales</span>
                                    <span className="text-sm">{value ? value.sales : '--'}</span>
                                </div>
                            </Card>
                            <Card>
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold">Growth Rate</span>
                                    <span className="text-sm">{value ? value.growthRate : '--'}</span>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default Stocks