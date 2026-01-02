import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import WhatsNewComponent from '../components/whats-new/whats-new.jsx';

class WhatsNew extends React.Component {
    render () {
        const {
            ...props
        } = this.props;
        return (
            <WhatsNewComponent
                {...props}
            />
        );
    }
}

export default WhatsNew;