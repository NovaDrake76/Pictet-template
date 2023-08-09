import Hero from "./Hero";
import Text from "../../components/Text";
const Landing = () => {

    const data = [
        {
            value: '750+',
            unit: '',
            description: 'Past and previous clients*'
        },
        {
            value: 38,
            unit: '',
            description: 'Full-time specialists'
        },
        {
            value: '5000+',
            unit: '',
            description: 'Talents recruited'
        },
        // {
        //     value: '5300+',
        //     unit: '',
        //     description: 'Talents recruited '
        // }
    ]

    const RightContent = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    Berkswell Keller is dedicated to offering comprehensive human resources solutions tailored to the unique needs of emerging stealth startups. Our team of experienced professionals understands the challenges and intricacies that stealth startups face in their early stages. From talent acquisition and onboarding to performance management and organizational development, we work closely with founders and leadership teams to ensure that their human capital strategies align with their business objectives.
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
            <Text title={'About Berkswell'} content={RightContent} />
        </div>
    )
}

export default Landing;