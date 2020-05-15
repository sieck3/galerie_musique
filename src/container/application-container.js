import React, { Component } from 'react'
import GendersComponent from 'component/genders-component'
import SearchComponent from 'component/search-component'
import MainContainer from 'container/main-container'

const Discogs = require('disconnect').Client
const userToken = 'zcKYLBGXpZxWofeEFPPZQUvblPZQOvQFCXWCoAqx'
const discogs = new Discogs({ userToken: userToken })

class ApplicationContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            genders: [],
            genderChoisi: 'Default',
            searchChoisi: 'discogs',
            albums: {},
            albumsContainerAffiche: false,
            detailleContainerAffiche: false,
            currentGender: 'Default',
            playlist: {}

        }
        this.returneGender = this.returneGender.bind(this)
        this.returneSearch = this.returneSearch.bind(this)
        this.handleSearchResults = this.handleSearchResults.bind(this)
        this.returneGenderOnclick = this.returneGenderOnclick.bind(this)
        this.returneSearchOnClick = this.returneSearchOnClick.bind(this)
    }

    componentDidMount () {
        fetch('/genders', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ genders: response })
            })
    }

    handleSearchResults () {
        fetch('/search', { method: 'POST' })
            .then(response => response.json())
            .then(response => {
                this.setState({ resultRecherche: JSON.stringify(response) })
            })
    }

    returneSearchOnClick () {
        const data = { search: this.state.searchChoisi }

        discogs.database().search(data.search, { type: 'master', per_page: 2000 }, (error, data) => {
            if (error !== null) {
                console.log(error)
            }
            this.setState({ albums: data })
            if (this.state.albums !== {}) {
                this.setState({ albumsContainerAffiche: true })
                this.setState({ isVrai: true })
            }
        })
    }

    returneGender (event) {
        if (event.target.value !== '') {
            this.setState({ genderChoisi: event.target.value })
            this.setState({ genderCurrent: event.target.value })
        }
    }

    returneGenderOnclick () {
        console.log(this.state.genderChoisi)
    }

    returneSearch (event) {
        // console.log(event.target.value)

        this.setState({ searchChoisi: event.target.value })
    }

    render () {
        return (
            <div>
                <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
                    <GendersComponent options={this.state.genders} handleChange={this.returneGender} handleClick={this.returneGenderOnclick} text='Music' id='genders' />
                    <SearchComponent handleChange={this.returneSearch} handleClick={this.returneSearchOnClick} />
                </nav>
                <div> {this.state.albumsContainerAffiche ? <MainContainer albums={this.state.albums} isVrai={this.state.isVraiOn} /> : ''}</div>
            </div>
        )
    }
}

export default ApplicationContainer
