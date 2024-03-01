import { Card, ProgressCircle, Subtitle, Title } from "@tremor/react"

const ShoppingRate = () => {
    return (
        <div className="w-full">
            <Card className="max-w-4xl flex flex-col gap-2 justify-around">
                <Title>Shopping Cart Abandonment Rate</Title>
                <div className="flex w-full">
                    <Card className="max-w-xs">
                        <div className="flex flex-col">
                            <Title className="font-bold">Units</Title>
                            <Subtitle>Total growth units available</Subtitle>
                            <div className="mt-8">
                                <ProgressCircle value={75} size="xl" strokeWidth={10} color="green">
                                    <span className="text-lg font-semibold text-slate-700">75%</span>
                                </ProgressCircle>
                            </div>
                        </div>
                    </Card>
                    <Card className="max-w-xs">
                        <div className="flex flex-col">
                            <Title className="font-bold">Units</Title>
                            <Subtitle>Total loss units available</Subtitle>
                            <div className="mt-8">
                                <ProgressCircle value={25} size="xl" strokeWidth={10} color="red">
                                    <span className="text-lg font-semibold text-slate-700">25%</span>
                                </ProgressCircle>
                            </div>
                        </div>
                    </Card>
                </div>
            </Card></div>
    )
}

export default ShoppingRate