import React from 'react'

class SearchBar extends React.Component {
  state = {
    inputText: '',
  }

  onInputChange = e => {
    this.setState({
      inputText: e.target.value,
    })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSearchInputSubmit(this.state.inputText)
    this.setState({
      inputText: '',
    })
  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Type something and press enter"
              value={this.state.inputText}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
