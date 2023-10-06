interface CustomChoices {
    title: string;
    image: string;
}

export default function Choices({ title, image }: CustomChoices) {
    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="w-[280px] h-[280px] rounded-[15px] flex justify-center left-20 bottom-0  bg-gray-600"  style={backgroundImageStyle} >
            <div className="w-full mt-auto rounded-bl-[15px] rounded-br-[15px] h-[68px] bg-[#1c4e32c2] flex justify-center items-center">
                <h1 className="text-white">{title}</h1>
            </div>
        </div>
    )
}
