import { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class L10N extends Component {
    constructor(props) {
        super(props);

        // this should be loaded via AJAX and before this component is needed
        this.state = {
            l10n: {
                string: {
                    to: {
                        translate: 'I like cheese'
                    }
                }
            }
        };
    }

    render() {
        const {
            id,
            defaultText
        } = this.props;

        return (
            this.state.l10n &&
            _.get(this.state.l10n, id, defaultText || '')
        );
    }
}

L10N.propTypes = {
    id: PropTypes.string.isRequired,
    defaultText: PropTypes.string
};

export default L10N;