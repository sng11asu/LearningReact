import React, {Component} from 'react'

class Programs extends Component{
    render () {
        //console.log(this.props.program.launch_success)
        return(
            <div id="program">
                <span>
                    <img src={this.props.program.links.mission_patch_small} alt={this.props.program.mission_name} width="80%" height="90%" />
                    <table class="">
                        <h5>{this.props.program.mission_name}</h5>
                        <tr>
                            <th>Mission Ids:</th>
                            <td>{this.props.program.mission_id[0]}</td>
                        </tr>
                        <tr>
                            <th>Launch Year:</th>
                            <td>{this.props.program.launch_year}</td>
                        </tr>
                        <tr>
                            <th>Successful Launch:</th>
                            <td>{this.props.program.launch_success ? "True" : "False"}</td>
                        </tr>
                        <tr>
                            <th>Successful Landing: </th>
                            <td>{this.props.program.launch_success}</td>
                        </tr>
                    </table>
                </span>
            </div>
        )
    }
}

export default Programs;