import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../Css/Data.css";

class Data extends Component {
  
  render() {
    const data = [{
      title:  [<a href="https://github.com/mikifriki/Assembly-Homework" target="_blank" rel="noopener noreferrer"  className="link">Assembly homework</a> ],
      des: "This is a short Assembly code I had to make as Homework",
      lang: 'Assembly',
      creat: '14 Dec 2018',
      page: ''
    },{
      title: [<a href="https://github.com/mikifriki/SimpleWebBrowser" target="_blank" rel="noopener noreferrer"  className="link">Simple Web Browser</a> ],
      des: "Basic Windows Forms WebBrowser that can be modified easily",
      lang: 'C#',
      creat: '10 Jun 2018',
      page: ''
    },{
      title: [<a href="https://github.com/mikifriki/AccountHolder" target="_blank" rel="noopener noreferrer"  className="link">Account Holder</a> ],
      des: "AcountHolder made using c#. I created this to learn sql",
      lang: 'C#',
      creat: '16 Aug 2018',
      page: ''
    },{
      title: [<a href="https://github.com/mikifriki/WeatherReact" target="_blank" rel="noopener noreferrer"  className="link">React Based Weather App</a> ],
      des: "A small and basic React app using the OpenWeatherApp Api that shows the weather based on the location.",
      lang: 'JavaScript',
      creat: '14 Sept 2018',
      page: [<a href="https://mikifriki.github.io/WeatherReact/" target="_blank" rel="noopener noreferrer"  className="link">WeatherReact</a>]
    },{
      title: [<a href="https://github.com/mikifriki/Fansite" className="link">Fansite</a> ],
      des: "A fan site that is a work in progress for a game I have been a fan of for years. Made with React and also for learning react-router",
      lang: 'JavaScript',
      creat: '9 Jan 2019',
      page: [<a href="https://mikifriki.github.io/Fansite" className="link">Fansite</a>]
    },{
      title: [<a href="https://github.com/mikifriki/Tweet" className="link">Tweet</a> ],
      des: "Learning React by recreating a tweet with different ways and such.",
      lang: 'JavaScript',
      creat: '21 Aug 2018'
    },{
      title: [<a href="https://github.com/mikifriki/Rp-Cost" className="link">RP Cost</a> ],
      des: "Small website I made to show how expensive microtransactions really are in the game League of Legends",
      lang: 'JavaScript',
      creat: '25 Feb 2019',
      page: [<a href="https://mikifriki.github.io/RP-Cost/" className="link">RP Cost</a>]
    },{
      title: [<a href="https://mikifriki.github.io/Resume-webiste/#/Home" className="link">Resume site</a> ],
      des: "This is the current site your on. My resume site",
      lang: 'JavaScript',
      creat: '13 Apr 2019',
      page: [<a href="https://mikifriki.github.io/Resume-webiste/#/Home" className="link">This current site</a>]
    },
  ]

    const columns = [
      {
        Header: 'Title',
        accessor: 'title',
    },
    {
      Header: 'Description',
      accessor: 'des',
      sortable: false
    },
    {
        Header: 'Language',
        accessor: 'lang'
    },
    {
        Header: 'Created at',
        accessor: 'creat',
        sortable: false
    },
    {
      Header: 'Demo Page',
      accessor: 'page'
    }
  ];

    return (
          <div className="table">
          <h2 className="head"> Github Repositories</h2>
              <ReactTable
                data={data}
                columns={columns}
                defaultPdesSize = {3}
                pdesSizeOptions = {[3, 6]}
                defaultPageSize = {10}
                showPaginationBottom = {false}
              />
              <div id="opensource-projects"></div> 
          </div>      
    )

  }
}


  export default Data;