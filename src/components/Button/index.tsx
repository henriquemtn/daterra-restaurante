interface CustomButtonProps {
    title: string;
    backgroundColor: string; 
    hoverColor: string; 
    width: string;
}

export default function CustomButton({ title, backgroundColor, hoverColor, width }: CustomButtonProps) {
    const buttonStyles = {
        backgroundColor: backgroundColor,
        transition: 'background-color 0.2s',
        width: width,
    };

    const hoverStyles = {
        backgroundColor: hoverColor,
    };

    return (
        <button
            className='text-white h-[55px] rounded-[20px] flex justify-center items-center duration-200'
            style={buttonStyles}
        >
            <h1>{title}</h1>
            <style>
                {`
                    .bg-custom-button:hover {
                        background-color: ${hoverStyles.backgroundColor};
                    }
                `}
            </style>
        </button>
    );
}