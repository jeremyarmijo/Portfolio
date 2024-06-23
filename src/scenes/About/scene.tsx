const About = () => {
  const size_logo = "40";
  return (
    <div>
      <h1 className="title">About me</h1>
      <center>
        <h1 className="presentation"> Hi, </h1>
        <p className="description_body">I am Jérémy Armijo, a passionate developer currently studying at Epitech Paris. Proficient in various programming languages such as C, TypeScript, JavaScript, and SQL. My project experience includes creating an AI auto-pilot, an online todo list, and modeling air traffic. I also excel in managing IT projects, utilizing agile methods and development tools like GitHub and Git. Currently in my second year of studies, I aim to achieve a diploma in Information Technology Expertise and a title of Software Engineering Expert at level 7. I am dedicated to enhancing my skills and contributing to innovative projects in the field of computer science</p>
      </center>
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

export default About;