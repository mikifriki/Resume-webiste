import React from "react";
import "../Css/table.css";
import axios from "axios";
import Moment from 'react-moment';

export default class PersonList extends React.Component {
  state = {
    githubInfo: [],
    description: [],
    language: [],
    homepage: [],
    date: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/mikifriki/repos`).then(rest => {
      const githubInfo = rest.data;
      this.setState({githubInfo});
      console.table(githubInfo)
    });
  }

  render() {
    return (
      <section>
        <div className="tbl-content">
          <table className="headtb" cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              <tr>
                <th className="other">Projects:</th>
                {this.state.githubInfo.map(githubInfo => (
                  <td className="others">{githubInfo.name}</td>
                ))}
              </tr>
              <tr>
                <th className="other">Description:</th>
                {this.state.githubInfo.map(githubInfo => (
                  <td className="others">{githubInfo.description}</td>
                ))}
              </tr>
              <tr>
                <th className="other">Language:</th>
                {this.state.githubInfo.map(githubInfo => (
                  <td className="others">{githubInfo.language}</td>
                ))}
              </tr>
              <tr>
                <th className="other">Demo site:</th>
                {this.state.githubInfo.map(githubInfo => (
                  <td className="others"><a href={githubInfo.homepage}>{githubInfo.homepage}</a></td>
                ))}
              </tr>
              <tr>
                <th className="other">Date:</th>
                {this.state.githubInfo.map(githubInfo => (
                  <td className="others"><Moment format="YYYY/MM/DD">{githubInfo.created_at}</Moment></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
