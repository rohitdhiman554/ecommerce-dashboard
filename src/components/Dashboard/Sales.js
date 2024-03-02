import { Badge, Card, Flex, Metric, Text } from "@tremor/react";

export default function Sales() {
    return (
        <div className="flex gap-6 w-full">
            <Card className="max-w-4xl">
                <Flex>
                    <div className="flex flex-col">
                        <span className="text-lg text-black font-semibold">
                            E-Commerce Overview
                        </span>
                        <span className="text-sm">
                            Sales and orders overview for the selected period.
                        </span>
                    </div>
                </Flex>

                <div className="mt-6 flex md:flex-row flex-col gap-4">
                    <Card className="max-w-xs space-y-4">
                        <div>
                            <span className="font-medium">Total Orders</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-3xl">78</span>
                            <Badge color="green" size="xs">
                                +2.8%
                            </Badge>
                        </div>
                        <hr />
                        <div>
                            <span className="font-medium">Available Orders</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-3xl">10</span>
                            <Badge color="green" size="xs">
                                +2.8%
                            </Badge>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col gap-3">
                            <span className="font-medium">Sales</span>
                            <div className="flex sm:flex-row flex-col gap-1 sm:gap-4">
                                <div>
                                    <Metric>$ 34,743</Metric>
                                    <Text>Received last month</Text>
                                </div>
                                <div className="w-px bg-[#E0DEF7]" />
                                <div>
                                    <div className="flex gap-2">
                                        <Metric>$ 34,743</Metric>
                                        <Badge color="indigo" size="xs">
                                            +70.96%
                                        </Badge>
                                    </div>
                                    <Text>Received this month</Text>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="flex sm:flex-row flex-col sm:gap-4 gap-1">
                                    <div>
                                        <Metric className="text-red-500">$ 34,743</Metric>
                                        <Text>Loss</Text>
                                    </div>
                                    <div className="w-px bg-[#E0DEF7]" />
                                    <div>
                                        <Metric>$ 9,650</Metric>
                                        <Text>Other funds</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </Card>
        </div>
    );
}
