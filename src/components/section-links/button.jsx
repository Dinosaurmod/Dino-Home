import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import './button.css';

const ButtonComponent = function (props) {
    const {
        intl,
        label,
        //onclick,
        link
    } = props;
    return (
        <button
            //onClick={onclick || (() => {})}
            href={link}
            className='sectionInfoButton'
        >
            {label}
        </button>
    )
}

ButtonComponent.propTypes = {
    intl: intlShape,
    label: PropTypes.string.isRequired,
    //onclick: PropTypes.func,
    link: PropTypes.string
};

export default injectIntl(ButtonComponent);