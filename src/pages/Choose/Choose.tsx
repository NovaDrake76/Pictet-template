import Text from "../../components/Text";
const Choose = () => {

    const RightContent = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    We are a leading independent investment firm with more than two hundred years’ experience. As long-term investors, we aim to direct capital to the real economy in a manner that improves the state of the planet. We do this by building responsible partnerships with our clients and the companies in which we invest.
                </div>

                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    These 10 levers of action align us with our purpose: to protect, grow and transmit wealth, in every sense, by building responsible partnerships with our clients, colleagues, communities and the companies in which we invest.                 </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col mt-16">
            <Text title={'Why Choose Us'} content={RightContent} />
        </div>
    )
}

export default Choose;