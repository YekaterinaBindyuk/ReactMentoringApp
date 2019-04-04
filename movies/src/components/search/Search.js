import React from "react";
import { SEARCH_BUTTON } from "../../environment/const";
import SearchType from "./SearchType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import actionCreators from "../../redux/action-creators/actionCreators";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: null, searchType: "title" };
  };

  onSearchClick = () => {
    const { searchMovies } = this.props;
    const {searchInput, searchType} = this.state;
    searchMovies(searchInput, searchType);
  };

  onSearchByTitleClick = () => {
    this.setState({ searchType: "title" });
  };

  onSearchByGenreClick = () => {
    this.setState({ searchType: "genre" });
  };

  onSearchValueChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  render = () => {
    return (
      <div className="search">
        <input
          id="search-input"
          className="search-input"
          onChange={this.onSearchValueChange}
        />
        <button id="search-btn" className="btn btn-success m-2 ml-3" onClick={this.onSearchClick}>
          <FontAwesomeIcon icon="search" className="mr-1"/>
          {SEARCH_BUTTON}
        </button>
        <div className="search-type">
          <SearchType
            onSearchByGenreClick={this.onSearchByGenreClick}
            onSearchByTitleClick={this.onSearchByTitleClick}
          />
        </div>
      </div>
    );
  };
}


const mapDispatchToProps = {
  searchMovies: actionCreators.searchMovies
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
