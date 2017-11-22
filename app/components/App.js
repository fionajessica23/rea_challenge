import React from 'react'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddPropBtnCLick = this.handleAddPropBtnCLick.bind(this)
    this.handleRemovePropBtnCLick = this.handleRemovePropBtnCLick.bind(this)

    this.state = {
      results: [{
        price: "$726,500",
        agency: {
          brandingColors: {
            primary: "#ffe512"
          },
          logo: "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
        },
        id: 1,
        mainImage: "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
      }, {
        price: "$560,520",
        agency: {
          brandingColors: {
            primary: "#fcfa3b"
          },
          logo: "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
        },
        id: 2,
        mainImage: "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
      }, {
        price: "$826,500",
        agency: {
          brandingColors: {
            primary: "#57B5E0"
          },
          logo: "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
        },
        id: 3,
        mainImage: "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
      }],

      saved: [{
        price: "$526,500",
        agency: {
          brandingColors: {
            primary: "#000000"
          },
          logo: "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
        },
        id: 4,
        mainImage: "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
      }]
    }
  }

  handleAddPropBtnCLick(result) {
    var { results, saved } = this.state
    var existingProp = saved.filter(savedProp => savedProp.id === result.id)[0]
    console.log(existingProp);
    // if property does not exist in the saved properties array, clone property object
    if (!existingProp) {
      var copiedProp = Object.assign({}, result)
      saved.push(copiedProp)
      this.setState({ saved: saved })
    }
  }

  handleRemovePropBtnCLick(savedProp) {
    var { results, saved } = this.state
    // create new array of saved property that does not have the id of the removed property
    saved = saved.filter(saved => saved.id !== savedProp.id);
    this.setState({ saved: saved })
  }


  render() {
    var { results, saved } = this.state

    return (
      <div>
        <div>
          <h2>Results</h2>
          <ul>
            {results.map((result) => {
              return <li key={result.id}>
                <div>{result.id}</div>
                <div>{result.mainImage}</div>
                <div>{result.agency.logo}</div>
                <div>{result.price}</div>
                <button onClick={() => { this.handleAddPropBtnCLick(result) }}>add property</button>
                <br/>
                <br/>
              </li>
            })}
          </ul>
        </div>

        <div>
          <h2>Saved Properties</h2>
          <ul>
            {saved.map((savedProp) => {
              return <li key={savedProp.id}>
                <div>{savedProp.id}</div>
                <div>{savedProp.mainImage}</div>
                <div>{savedProp.agency.logo}</div>
                <div>{savedProp.price}</div>
                <button onClick={() => { this.handleRemovePropBtnCLick(savedProp) }}>remove property</button>
                <br/>
                <br/>
              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
