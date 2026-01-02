import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './whats-new.css';
import whatsNewData from './whats-new-data.js';

const pictureWidth = whatsNewData.pictureData.width;
const pictureHeight = whatsNewData.pictureData.height;

const WhatsNewComponent = function (props) {
    const { intl } = props;
    return (
        <div id="whats-new">
            <div className="header">
                <span>What's new?</span>
            </div>
            <ul className="whats-new-stuff">
                <li class="commit">
                    <img src={whatsNewData.avatarUrl} alt="avatar" class="avatar"/>
                    <div class="commit-info">
                        <div class="commit-title">
                            <a>{whatsNewData.message}</a>
                        </div>
                        <div class="author-name">By {whatsNewData.author}</div>
                    </div>
                </li>
                <img src={whatsNewData.picture} style={{width: pictureWidth, height: pictureHeight}}></img>
                <p>{whatsNewData.secondMessage}</p>
            </ul>
            <div className="nothing-message" style={{ display: 'none' }}>
                There isn't anything new yet.
            </div>
        </div>
    )
}

WhatsNewComponent.propTypes = {
    intl: intlShape
};

const IntlWhatsNew = injectIntl(WhatsNewComponent);
export default (IntlWhatsNew)