import Text from "../../components/Text";
const Approach = () => {

    const data = [
        {
            title: "Small firm, high quality",
            subtitle: "Berkswell Keller is a boutique firm characterized by its tight-knit team and exclusive client approach. With a deliberate focus on delivering unparalleled quality, Berkswell Keller intentionally maintains a small number of employees and an even smaller clientele. This approach enables us to devote our full attention and resources to the clients we serve, ensuring that their needs are met with the utmost dedication and precision.",
        },
        {
            title: "A dedicated team for your needs",
            subtitle: "In line with our commitment to excellence, each employee at Berkswell Keller is carefully selected and assigned to work exclusively with a single client throughout the duration of their engagement. This unique dedication ensures that our clients receive personalized attention and tailored solutions that align seamlessly with their business objectives. By immersing ourselves in the intricacies of each client's operations, we are able to develop a deep understanding of their needs and deliver strategic human resources services that make a tangible impact.",
        },
        {
            title: "Stealth in Action",
            subtitle: "In a world that clamors for attention and applause, we operate in the shadows, working diligently behind the scenes to uncover prospects that align perfectly with your talents. Berkswell Keller's discreet nature is not a veil to hide behind; it's a strategy to unveil potential in its purest form. Our clients thrive on the edge of innovation, and we enable them to navigate that edge with the utmost confidentiality. Every interaction with Berkswell Keller is a testament to the power of discretion. We don't just promise secrecy; we infuse it into our core operations. From initial engagements to strategic collaborations, our goal is to provide a safe space where opportunities can be nurtured, ideas can be incubated, and talents can be nurtured—away from prying eyes.",
        },
        // {
        //     title: "Full-time equivalent employees",
        //     subtitle: "The Pictet Group Foundation is a grant-making foundation established by the Managing Partners of Pictet to pursue our long-term tradition of social engagement and environmental commitment.",
        // },
    ];

    const RightContent = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    Berkswell Keller takes pride in being a strategic partner for stealth startups on their journey to success. Our emphasis on human resources stems from the understanding that a startup's greatest asset is its people. By providing targeted HR solutions, we empower startups to build strong, cohesive teams that drive innovation and growth. We leverage our expertise to help startups identify and attract top-tier talent even within the constraints of stealth mode.                </div>
                <div className="flex flex-wrap gap-8">
                    {
                        data.map((item, index) => {
                            return (
                                <div className="flex flex-col border-gray-400 pb-2 gap-4 px-4" key={index}>
                                    <div className="text-xl">{item.title}</div>
                                    <div className="text-lg max-w-[400px] h-[400px] pb-8 border-b">{item.subtitle}</div>
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