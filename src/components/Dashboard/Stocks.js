import { Card, DonutChart, Legend } from "@tremor/react";
import { useState } from "react";

const datahero = [
    { name: "New York", sales: 980, growthRate: "5%" },
    { name: "London", sales: 456, growthRate: "3%" },
    { name: "Hong Kong", sales: 390, growthRate: "2%" },
    { name: "San Francisco", sales: 240, growthRate: "4%" },
    { name: "Singapore", sales: 190, growthRate: "6%" },
];

const Stocks = () => {
    const [value, setValue] = useState(null);
    const [selectedGrowthRate, setSelectedGrowthRate] = useState('0%');

    const dataFormatter = (number) =>
        `$ ${Intl.NumberFormat('us').format(number).toString()}`;

    const filteredData = datahero.filter(item => {
        const itemGrowth = parseInt(item.growthRate, 10);
        const selectedGrowth = parseInt(selectedGrowthRate, 10);
        return itemGrowth >= selectedGrowth;
    });

    return (
        <div className="w-full">
            <Card className="max-w-4xl flex flex-col h-full">
                <div className="flex justify-between items-center ">
                    <div>
                        <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                            Overall Sales
                        </span>
                    </div>
                    <select
                        value={selectedGrowthRate}
                        onChange={(e) => setSelectedGrowthRate(e.target.value)}
                        className="text-sm text-gray-700 border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                    >
                        <option value="0%">All Growth Rates</option>
                        <option value="2%">2% and above</option>
                        <option value="3%">3% and above</option>
                        <option value="4%">4% and above</option>
                        <option value="5%">5% and above</option>
                        <option value="6%">6% and above</option>
                    </select>
                </div>
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong mb-4">
                    6,568
                </p>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-center space-x-6">
                        <DonutChart
                            showTooltip
                            showAnimation
                            showLabel
                            data={filteredData}
                            category="sales"
                            index="name"
                            valueFormatter={dataFormatter}
                            colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                            className="w-full md:w-40"
                            onValueChange={(v) => setValue(v)}
                        />

                        <Legend
                            categories={filteredData.map(item => item.name)}
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
                                    <span className="text-sm">{value ? dataFormatter(value.sales) : '--'}</span>
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
    );
}

export default Stocks;
