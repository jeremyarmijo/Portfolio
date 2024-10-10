import Card from "./card"

const Personal_project = () => {
    return (
        <div>
            {/* <Card
                title="Portfolio"
                description="The 'my_ls' project involves creating a custom version of the Unix ls command. This project focuses on handling file system navigation, displaying directory contents, managing various flags (like -l, -a, and -d), and sorting files by different criteria. Students learn to manipulate file metadata, work with system calls, and manage complex data structures, enhancing their skills in C programming and Unix system programming."
                imageUrl1="/my_printf1.png"
                imageUrl2="/my_printf1.png"
                imageUrl3="/my_printf1.png"
                linkUrl="https://stackoverflow.com/questions/72486950/link-card-area-that-contains-a-button"
                language="Typescript ( Framework Reactjs )"
                type="Web"
                group_size="Solo"
                duration_project="1 Week"
                begin_date="3 June"
            /> <br/> <br/> */}
            <div id="Functional tester"></div>
            <Card
                title="Fonctional tester"
                description="The 'Functional Tester' personal project involves creating a shell script to test the functionality of other programs. This script assesses programs by detecting return values, verifying output accuracy, and identifying potential crashes. The project enhances skills in shell scripting, automated testing, and error detection, providing practical experience in ensuring software reliability and robustness."
                imageUrl1="/personal_test1.png"
                imageUrl2="/personal_test2.png"
                imageUrl3="/personal_test3.png"
                linkUrl="https://github.com/jeremyarmijo/Fonctional-tester"
                language="Shell scripting"
                type="Elementary UNIX"
                group_size="Solo"
                duration_project="2 Days"
                begin_date="29 May"
            /> <br/> <br/>
        </div>
    )
};

export default Personal_project;