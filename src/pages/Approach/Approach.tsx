import Text from "../../components/Text";
const Approach = () => {

    const contentSections = [
        {
            title: 'Our Approach',
            text: [
                "Berkswell Keller takes pride in being a strategic partner for stealth startups on their journey to success. Our emphasis on human resources stems from the understanding that a startup's greatest asset is its people. By providing targeted HR solutions, we empower startups to build strong, cohesive teams that drive innovation and growth. We leverage our expertise to help startups identify and attract top-tier talent even within the constraints of stealth mode."
            ]
        },
        {
            title: 'Small firm, high quality',
            text: [
                "Berkswell Keller is a boutique firm characterized by its tight-knit team and exclusive client approach. With a deliberate focus on delivering unparalleled quality, Berkswell Keller intentionally maintains a small number of employees and an even smaller clientele. This approach enables us to devote our full attention and resources to the clients we serve, ensuring that their needs are met with the utmost dedication and precision."
            ]
        },
        {
            title: 'A dedicated team for your needs',
            text: [
                "In line with our commitment to excellence, each employee at Berkswell Keller is carefully selected and assigned to work exclusively with a single client throughout the duration of their engagement. This unique dedication ensures that our clients receive personalized attention and tailored solutions that align seamlessly with their business objectives. By immersing ourselves in the intricacies of each client's operations, we are able to develop a deep understanding of their needs and deliver strategic human resources services that make a tangible impact."
            ]
        },
        {
            title: 'Stealth in Action',
            text: [
                "In a world that clamors for attention and applause, we operate in the shadows, working diligently behind the scenes to uncover prospects that align perfectly with your talents. Berkswell Keller's discreet nature is not a veil to hide behind; it's a strategy to unveil potential in its purest form. Our clients thrive on the edge of innovation, and we enable them to navigate that edge with the utmost confidentiality. Every interaction with Berkswell Keller is a testament to the power of discretion. We don't just promise secrecy; we infuse it into our core operations. From initial engagements to strategic collaborations, our goal is to provide a safe space where opportunities can be nurtured, ideas can be incubated, and talents can be nurtured—away from prying eyes."]
        }
    ];


    const RightContent = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    Berkswell Keller takes pride in being a strategic partner for stealth startups on their journey to success. Our emphasis on human resources stems from the understanding that a startup's greatest asset is its people. By providing targeted HR solutions, we empower startups to build strong, cohesive teams that drive innovation and growth. We leverage our expertise to help startups identify and attract top-tier talent even within the constraints of stealth mode.                </div>
                <div className="flex flex-wrap">
                    {
                        ['Strategic', 'Empowering', 'Innovative'].map((item, index) => {
                            return (
                                <div className="px-4 md:px-12 border-r w-[160px] md:w-[200px]">
                                    <div className="flex flex-col items-center max-w-[150px]" key={index}>
                                        <div className="text-3xl text-[#93645d]">
                                            {item}
                                        </div>



                                    </div>
                                </div>

                            )
                        })
                    }
                </div>

            </div>
        )
    }


    return (
        <div className="flex flex-col mt-16">
            <Text title={'Our Approach'} content={RightContent} />
            {contentSections.map((section, index) => (
                <Text
                    key={index}
                    title={section.title}
                    content={() => (
                        <div className="flex flex-col gap-16">
                            {section.text.map((paragraph, i) => (
                                <div className="flex text-md md:text-2xl py-4 md:py-0" key={i}>
                                    {paragraph}
                                </div>
                            ))}
                        </div>
                    )}
                />
            ))}
        </div>
    )
}

export default Approach;