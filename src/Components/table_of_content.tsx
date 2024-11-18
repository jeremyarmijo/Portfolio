const Table_of_content = () => {
    return (
        <div>
            <center>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Team</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dom</td>
                            <td>6000</td>
                            <td>6000</td>
                            <td>6000</td>
                            <td>6000</td>
                        </tr>
                        <tr>
                            <td>Melissa</td>
                            <td>5150</td>
                            <td>5150</td>
                            <td>5150</td>
                            <td>5150</td>
                        </tr>
                    </tbody>
                </table>
            </center>

            <form method="get" action="">
                <select>
                    <option value="0">Select the type of project</option>
                    <option value="1">Personal projects</option>
                    <option value="2">Epitech projects</option>
                </select>
            </form>
            <h2>
                Personal project:
            </h2>
            <a href="#Functional tester"> Functional tester </a>
            <h2>
                Epitech project:
            </h2>
            <a href="#Epytodo"> Epytodo </a> <br />
            <a href="#Need4stek"> Need4stek </a> <br />
            <a href="#Amazed"> Amazed </a> <br />
            <a href="#42sh"> 42sh </a> <br />
            <a href="#My_RPG"> My_RPG </a> <br />
            <a href="#My_paint"> My_paint </a> <br />
            <a href="#My_navy"> My_navy </a> <br />
            <a href="#Secured"> Secured </a> <br />
            <a href="#My_radar"> My_radar </a> <br />
            <a href="#Organized"> Organized </a> <br />
            <a href="#My_Sokoban"> My_Sokoban </a> <br />
            <a href="#My_Hunter"> My_Hunter </a> <br />
            <a href="#Setting up"> Setting up </a> <br />
            <a href="#My_ls"> My_ls </a> <br />
            <a href="#My_printf"> My_printf</a>
        </div>
    )
};

export default Table_of_content;