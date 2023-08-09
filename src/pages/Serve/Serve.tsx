import Text from "../../components/Text";
const Serve = () => {

    const RightContent1 = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    We have to embrace new models that are based on solid science and innovative partnerships and also take account of environmental, social and governance factors in investment decisions and active ownership practices.
                </div>
                <div className="flex flex-wrap gap-8">
                    {
                        [
                            { title: "Individuals", subtitle: "We offer a range of investment solutions to help you achieve your financial goals." },
                            { title: "Institutions", subtitle: "We offer a range of investment solutions to help you achieve your financial goals." },
                            { title: "Intermediaries", subtitle: "We offer a range of investment solutions to help you achieve your financial goals." },
                            { title: "Financial professionals", subtitle: "We offer a range of investment solutions to help you achieve your financial goals." },
                        ].map((item, index) => {
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

    const RightContent2 = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    To achieve our ambitions, we have identified key levers of action for conducting our own activities and for managing assets on behalf of our clients. We are convinced these levers of action will make us better investors and corporate citizens and help us play our part in designing a thriving system for future generations.
                </div>
                <div className="flex flex-wrap gap-8">
                    {
                        [
                            { title: "Individuals", subtitle: "We offer a range of investment solutions to help you achieve your financial goals." },
                            { title: "Institutions", subtitle: "We offer a range of investment solutions to help you achieve your financial goals." },
                            { title: "Intermediaries", subtitle: "We offer a range of investment solutions to help you achieve your financial goals." },
                            { title: "Financial professionals", subtitle: "We offer a range of investment solutions to help you achieve your financial goals." },
                        ].map((item, index) => {
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
            <Text title={'Who We Serve'} content={RightContent1} />
            <Text title={'10 levers of action'} content={RightContent2} />

        </div>
    )
}

export default Serve;