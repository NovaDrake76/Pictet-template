import Text from "../../components/Text";
const Choose = () => {

    const RightContent = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    At Berkswell Keller, our team comprises seasoned professionals who excel in the nuances of human resources, particularly within the startup ecosystem. Our expertise is finely tuned to the needs and challenges faced by emerging businesses. With a keen understanding of the startup landscape, we are adept at tailoring solutions that amplify growth, streamline operations, and foster a culture of innovation.
                </div>

                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    By choosing Berkswell Keller, you're partnering with a team that not only possesses a wealth of experience but also remains at the forefront of HR trends and strategies. We consistently adapt our methods to align with the ever-evolving startup environment, ensuring that our clients receive the most cutting-edge solutions that make a meaningful impact.
                </div>
            </div>
        )
    }

    const RightContent2 = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    We stand out in a crowded field by deliberately limiting our clientele. This exclusive approach allows us to dedicate our full attention to each client we serve. At Berkswell Keller, your success is our priority, and we believe that quality surpasses quantity. Each member of our team is carefully assigned to work exclusively with a single client, allowing us to immerse ourselves in your company's vision, culture, and challenges.                </div>

                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    Our client-centric model ensures that you receive personalized attention, tailored strategies, and unwavering support. We become an integral part of your team, understanding your unique dynamics and tailoring our services to align seamlessly with your goals.
                </div>
            </div>
        )
    }


    const RightContent3 = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    Confidentiality is at the heart of our operations. We recognize the critical importance of safeguarding your business strategies, operations, and sensitive information. Our discreet nature ensures that your proprietary details remain in the utmost confidence, allowing you to explore HR solutions without compromising your business's integrity.
                </div>
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    With Berkswell Keller, you can confidently engage in discussions, strategies, and solutions knowing that your privacy is paramount. Our commitment to confidentiality extends to every aspect of our partnership, enabling you to focus on growth while we work diligently behind the scenes.
                </div>
            </div>
        )
    }

    const RightContent4 = () => {
        return (
            <div className="flex flex-col gap-16">
                <div className="flex text-md md:text-2xl py-4 md:py-0">

                    No two startups are the same, and we understand that your journey is unique. By choosing Berkswell Keller, you're selecting a partner that customizes solutions to your specific needs. Whether it's talent acquisition, organizational development, or HR policy implementation, our strategies are designed with your business's DNA in mind.                </div>
                <div className="flex text-md md:text-2xl py-4 md:py-0">

                    Our dedication to tailored solutions means that you receive recommendations and guidance that align perfectly with your stage of growth, industry, and long-term goals. Your success story is distinct, and Berkswell Keller is committed to ensuring that your HR strategies are equally distinctive.
                </div>
                <div className="flex text-md md:text-2xl py-4 md:py-0">
                    When you choose Berkswell Keller, you're choosing a partner that values expertise, dedication, confidentiality, and customization. We are here to empower your journey by amplifying your strengths and addressing your challenges, all while working discreetly to achieve your aspirations.
                </div>
            </div>

        )
    }

    return (
        <div className="flex flex-col mt-16">
            <Text title={'1. Expertise and Innovation:'} content={RightContent} />
            <Text title={'2. Exclusive and Dedicated Focus:'} content={RightContent2} />
            <Text title={'3. Confidentiality as a Core Pillar:'} content={RightContent3} />
            <Text title={'4. Tailored Solutions for Your Journey:'} content={RightContent4} />
        </div>
    )
}

export default Choose;