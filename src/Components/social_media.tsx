const Social_media = () => {
    const size_logo = "40";

    const description1 = "GitHub Logo";
    const description2 = "Linkedin Logo";
    const description3 = "Discord Logo";
    const imageUrl1 = "/github.png";
    const imageUrl2 = "/linkedin.png";
    const imageUrl3 = "/discord.png";
    const linkUrl1 = "https://github.com/jeremyarmijo";
    const linkUrl2 = "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-armijo-989a6a2b4/";
    const linkUrl3 = "https://discord.com/users/647480156096692224";
    return (
        <div className='logos'>
            <a href={linkUrl1} target="_blank" rel="noopener noreferrer">
            &nbsp;&nbsp;
                <img src={imageUrl1} alt={description1} width={size_logo} height={size_logo} />
            </a>
            <a href={linkUrl2} target="_blank" rel="noopener noreferrer">
            &nbsp;&nbsp;
                <img src={imageUrl2} alt={description2} width={size_logo} height={size_logo} />
            </a>
            <a href={linkUrl3} target="_blank" rel="noopener noreferrer">
            &nbsp;&nbsp;
                <img src={imageUrl3} alt={description3} width={size_logo} height={size_logo} />
            </a>
        </div>
    )
};

export default Social_media;