import React, { useState } from 'react';
import { Card, LineChart, Text, Title } from '@tremor/react';
import { TRAFFIC_DATA, TRAFFIC_DATA_CATEGORIES } from '../../utils/constants';


export function Traffic() {
    const [activeCategories, setActiveCategories] = useState(TRAFFIC_DATA_CATEGORIES);

    const toggleCategory = (category) => {
        if (activeCategories.includes(category)) {
            setActiveCategories(activeCategories.filter(c => c !== category));
        } else {
            setActiveCategories([...activeCategories, category]);
        }
    };

    const dataFormatter = (number) => `$${Intl.NumberFormat('us').format(number).toString()}`;


    const filteredChartData = TRAFFIC_DATA.map(entry => {
        const filteredEntry = { date: entry.date };
        activeCategories.forEach(category => {
            if (entry[category] !== undefined) {
                filteredEntry[category] = entry[category];
            }
        });
        return filteredEntry;
    });

    return (
        <Card className='w-full'>
            <Title>Ecommerce Industry Traffic Trend-2023</Title>
            <Text>From Jan 2023 - Dec 2023</Text>
            <div className="flex flex-wrap my-4">
                {TRAFFIC_DATA_CATEGORIES.map(category => (
                    <div key={category} className="flex items-center mr-4 mb-2">
                        <input
                            id={`checkbox-${category}`}
                            type="checkbox"
                            checked={activeCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label htmlFor={`checkbox-${category}`} className="ml-2 text-sm">
                            {category}
                        </label>
                    </div>
                ))}
            </div>
            <LineChart
                className="h-80"
                data={filteredChartData}
                index="date"
                categories={activeCategories}
                colors={['indigo', 'rose', 'blue', 'green']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
            />
        </Card>
    );
}

export default Traffic;
