import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import Utils from '../../lib/utils';

import styles from './search-bar.css';
import './search.js';

const messages = defineMessages({
    searchText: {
        id: "home.menubar.search",
        defaultMessage: 'Search for projects on PM...',
        description: 'search bar label'
    }
})

const SearchBarComponent = function (props) {
    const { intl } = props;

    return (
        <React.Fragment>
            <div className="searchbar-main-div">
                <button class="searchbar-searchIcon" id="searchbar-searchIcon"><svg xmlns="http://www.w3.org/2000/svg" style={{width: "30px", height: "20px", marginBottom:"5px", marginTop: "5px"}} viewBox="0 0 19.9 19.7"><g class="search-path" fill="none" stroke="#ffffff" stroke-width="2px"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"></path><circle cx="8" cy="8" r="7"></circle></g></svg></button>
                <input type="text" className="searchbar-searchInput" id="searchbar-searchInput" placeholder={Utils.formatMessage(messages.searchText, intl, "Search for projects on PM...")}/>
            </div>
        </React.Fragment>
    )
}

SearchBarComponent.propTypes = {
    intl: intlShape
};

const IntlSearchBar = injectIntl(SearchBarComponent);
export default (IntlSearchBar)