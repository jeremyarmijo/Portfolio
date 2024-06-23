const Contact = () => {
  const size_logo = "40";  
  return (
      <div>
        <h1>Contact</h1>
        <div className='logos'>
            <a href="https://github.com/jeremyarmijo" target="_blank" rel="noopener noreferrer">
            &nbsp;&nbsp;
                <img src="/github.png" alt="GitHub Logo" width={size_logo} height={size_logo} />
            </a>
            <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-armijo-989a6a2b4/" target="_blank" rel="noopener noreferrer">
            &nbsp;&nbsp;
                <img src="/linkedin.png" alt="Linkedin Logo" width={size_logo} height={size_logo} />
            </a>
            <a href="https://discord.com/users/647480156096692224" target="_blank" rel="noopener noreferrer">
            &nbsp;&nbsp;
                <img src="/discord.png" alt="Discord Logo" width={size_logo} height={size_logo} />
            </a>
        </div>
        <div className='edition'><br/>©&nbsp;2024&nbsp;|&nbsp;Jérémy Armijo</div>
    </div>
    )    
  };

export default Contact;