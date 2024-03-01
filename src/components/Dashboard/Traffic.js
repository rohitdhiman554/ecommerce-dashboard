import { Card, LineChart, Text, Title } from '@tremor/react';
import React from 'react'

const chartdata = [
    { "date": "Jan 23", "SearchPaid": 73.76, "Referrals": 28.67, "Direct": 2.7, "SemiAnalysis": 11.23 },
    { "date": "Feb 23", "SearchPaid": 62.48, "Referrals": 48.7, "Direct": 24.68, "SemiAnalysis": 59.22 },
    { "date": "Mar 23", "SearchPaid": 10.89, "Referrals": 23.02, "Direct": 80.55, "SemiAnalysis": 34.03 },
    { "date": "Apr 23", "SearchPaid": 46.54, "Referrals": 45.94, "Direct": 23.84, "SemiAnalysis": 68.58 },
    { "date": "May 23", "SearchPaid": 88.03, "Referrals": 39.74, "Direct": 75.1, "SemiAnalysis": 95.06 },
    { "date": "Jun 23", "SearchPaid": 48.12, "Referrals": 72.89, "Direct": 67.07, "SemiAnalysis": 91.67 },
    { "date": "Jul 23", "SearchPaid": 55.67, "Referrals": 56.28, "Direct": 31.74, "SemiAnalysis": 20.16 },
    { "date": "Aug 23", "SearchPaid": 53.1, "Referrals": 41.36, "Direct": 90.39, "SemiAnalysis": 81.63 },
    { "date": "Sep 23", "SearchPaid": 18.39, "Referrals": 41.49, "Direct": 15.08, "SemiAnalysis": 46.62 },
    { "date": "Oct 23", "SearchPaid": 99.35, "Referrals": 97.48, "Direct": 18.96, "SemiAnalysis": 60.85 },
    { "date": "Nov 23", "SearchPaid": 82.55, "Referrals": 2.16, "Direct": 31.39, "SemiAnalysis": 48.31 },
    { "date": "Dec 23", "SearchPaid": 90.89, "Referrals": 60.71, "Direct": 79.52, "SemiAnalysis": 78.99 }
]

const dataFormatter = (number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;

export function Traffic() {
    return (
        <Card className='w-[98%]'>
            <Title>Ecommerce Industry Traffic Trend-2023</Title>
            <Text>From Jan 2023 - Dec 2023</Text>
            <LineChart
                className="h-80"
                data={chartdata}
                index="date"
                categories={['SearchPaid', 'Referrals', 'Direct']}
                colors={['indigo', 'rose', 'blue']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
            />
        </Card>
    );
}

export default Traffic