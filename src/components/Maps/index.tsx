interface IframeProps {
    src: string;
    width: string;
    height: string;
    title: string;
    marginheight?: string;
    marginwidth?: string;
    frameborder?: string;
    scrolling?: string;
}

export default function CustomIframe({
    src,
    width,
    height,
    title,
    frameborder = '0',
    scrolling = 'no',
}: IframeProps) {
    return (
        <iframe
            width={width}
            height={height}
            className="absolute inset-0"
            frameBorder={frameborder}
            title={title}
            scrolling={scrolling}
            src={src}
        ></iframe>
    );
}
