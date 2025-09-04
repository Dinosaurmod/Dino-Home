import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './search-bar.css';
import searchScript from './search.js';

import magnifyingGlassIcon from './icons/magnifying-glass.svg';

const SearchBarComponent = function () {
    return (
        <React.Fragment>
            <script>{searchScript}</script>
            <div className="searchbar-main-div">
                <button id="searchbar-searchIcon" id="searchbar-searchIcon">{magnifyingGlassIcon}</button>
                <input type="text" className="searchbar-searchInput" id="searchbar-searchInput" placeholder="Search for projects on PM..."/>
            </div>
        </React.Fragment>
    )
}

SearchBarComponent.propTypes = {};

const IntlSearchBar = injectIntl(SearchBarComponent);
export default (IntlSearchBar)