import Hero from "./Hero";
import Text from "../../components/Text";
const Landing = () => {

    const data = [
        {
            value: 657,
            unit: 'BN USD',
            description: 'Assets under management or custody*'
        },
        {
            value: 27.4,
            unit: 'Percent',
            description: 'Total capital ratio*'
        },
        {
            value: 176,
            unit: 'Percent',
            description: 'Liquidity coverage ratio*'
        },
        {
            value: '5300+',
            unit: '',
            description: 'Full-time equivalent employees'
        }
    ]

    const RightContent = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    We are a leading independent investment firm with more than two hundred years’ experience. As long-term investors, we aim to direct capital to the real economy in a manner that improves the state of the planet. We do this by building responsible partnerships with our clients and the companies in which we invest.
                </div>
                <div className="flex flex-wrap">
                    {
                        data.map((item, index) => {
                            return (
                                <div className="px-4 md:px-12 border-r w-[160px] md:w-[200px]">
                                    <div className="flex flex-col items-center max-w-[150px]" key={index}>
                                        <div className="text-5xl text-[#93645d]">
                                            {item.value}
                                        </div>
                                        <div className="text-xs text-[#93645d]">
                                            {item.unit}
                                        </div>
                                        <div className="text-center">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div>
                    *Figures as of 31 December 2022
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <Hero />
            <Text title={'About Pictet'} content={RightContent} />
        </div>
    )
}

export default Landing;