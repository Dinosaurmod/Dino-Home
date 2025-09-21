import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import SectionLinksComponent from '../components/section-links/section-links.jsx';

class SectionLinks extends React.Component {
    render () {
        const {
            ...props
        } = this.props;
        return (
            <SectionLinksComponent
                {...props}
            />
        );
    }
}

export default SectionLinks;