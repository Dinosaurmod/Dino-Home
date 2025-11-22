import {IntlShape} from 'react-intl'; 

class Utils {
    /**
     * A simple formatMessage function
     * @param {object} message the message to be formatted
     * @param {IntlShape} intl the intl with the formatMessage function
     * @param {string} defaultMessage the backup message when something goes wrong with the formatted message
     * @returns {string} either the formatted message or the defaultMessage
     */
    formatMessage (message, intl, defaultMessage) {
        return (intl && intl.formatMessage) ? intl.formatMessage(message) : defaultMessage;
    }
}

export default new Utils;