import React, { Component } from 'react'
import Upload from './Upload'
import './App.css';

function importAll(r) {
  let img = {};
  r.keys().map((item, index) => { img[item.replace('./', '')] = r(item); });
  return img;
}

const img = importAll(require.context('./res', false, /\.(png|jpe?g|svg)$/));
export default class App extends Component {
	render() {
    const content = () => {
      switch(true) {
        default:
          return <Upload onChange={this.onChange} />
      }
    }

    return (
      <div>
	  
  <header className="App-header">
	k4kirin's&nbsp;<br/>         
	<h2>Imaginary Gift Maker</h2>
	<img src={img['logo.png']} className="App-logo" />
  </header>
        <div>
          {content()}
        </div>
			<div style={{alignItems: "center",justifyContent: "center"}}>
			<br/>
			This website is not affliated in any way to Bushiroad. Cardfight!! Vanguard belongs to Bushiroad.
			<br/><small><b>16 Jan 2020</b>: If you like my work, and would like to donate to me, please instead donate to help
				fight Australian wildfires <a href="https://fundraise.redcross.org.au/drr">here</a>.</small><br/><br/><br/></div>
	  <br/>
	  <b>History:</b><br/></div>
    )
  }

}
