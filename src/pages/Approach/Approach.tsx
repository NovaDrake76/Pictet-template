import Text from "../../components/Text";
const Approach = () => {

    const data = [
        {
            title: "Assets under management or custody",
            subtitle: "With the challenges the world is now facing, we need to move swiftly to a more resilient and sustainable economy. For the financial system, we believe this calls for a systemic shift in focus away from exclusively maximising financial returns.",
        },
        {
            title: "Total capital ratio",
            subtitle: "Our environmental approach is driven by the understanding that our activities have an impact on the environment and that we have an obligation to reduce this impact wherever possible.",
        },
        {
            title: "Liquidity coverage ratio",
            subtitle: "Founded in 2008, the Prix Pictet has become the world’s leading award for photography and sustainability. To date, there have been nine cycles of the award, each of which has highlighted a particular facet of sustainability.",
        },
        {
            title: "Full-time equivalent employees",
            subtitle: "The Pictet Group Foundation is a grant-making foundation established by the Managing Partners of Pictet to pursue our long-term tradition of social engagement and environmental commitment.",
        },
    ];

    const RightContent = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    We are a leading independent investment firm with more than two hundred years’ experience. As long-term investors, we aim to direct capital to the real economy in a manner that improves the state of the planet. We do this by building responsible partnerships with our clients and the companies in which we invest.
                </div>
                <div className="flex flex-wrap gap-8">
                    {
                        data.map((item, index) => {
                            return (
                                <div className="flex flex-col border-gray-400 pb-2 gap-4 px-4" key={index}>
                                    <div className="text-xl">{item.title}</div>
                                    <div className="text-lg max-w-[400px] pb-8 border-b">{item.subtitle}</div>
                                </div>
                            );
                        })

                    }
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col mt-16">
            <Text title={'Our Approach'} content={RightContent} />
        </div>
    )
}

export default Approach;