import React from "react";
import "../Css/table.css";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    title: [],
    description: [],
    language: [],
    homepage: [],
    date: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/mikifriki/repos`).then(rest => {
      const title = rest.data;
      const description = rest.data;
      const language = rest.data;
      const homepage = rest.data;
      const date = rest.data;
      this.setState({ title });
      this.setState({ description });
      this.setState({ language });
      this.setState({ homepage });
      this.setState({ date });
    });
  }

  render() {
    return (
      <section>
        <div class="tbl-content">
          <table className="headtb" cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr />
              <tr>
                <th className="other">Projects:</th>
                {this.state.title.map(title => (
                  <td className="others">{title.name}</td>
                ))}
              </tr>
              <tr>
                <th className="other">Description:</th>
                {this.state.description.map(description => (
                  <td className="others">{description.description}</td>
                ))}
              </tr>
              <tr>
                <th className="other">Language:</th>
                {this.state.language.map(language => (
                  <td className="others">{language.language}</td>
                ))}
              </tr>
              <tr>
                <th className="other">Demo site:</th>
                {this.state.homepage.map(homepage => (
                  <td className="others">{homepage.homepage}</td>
                ))}
              </tr>
              <tr>
                <th className="other">Date:</th>
                {this.state.date.map(date => (
                  <td className="others">{date.created_at}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
