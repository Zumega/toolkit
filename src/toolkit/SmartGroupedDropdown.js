import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SmartGroupedDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: ''
        };

        this.setOptions = this.setOptions.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    // TODO: update this 'componentWillMount' has been depricated
    componentWillMount () {
        this.setState(prevState => ({
            ...prevState,
            selected: this.props.selected || (this.props.noDefault ? 'DEFAULT' : prevState.selected)
        }));
    }

    setOptions() {
        const {
            options
        } = this.props;

        return options.map(option => (
            <option
                key={option.id}
                value={option.value}
            >
                {option.text}
            </option>
        ));
    }

    handleSelect(e) {
        const selected = e.target.value;

        this.setState(prevState => ({
            ...prevState,
            selected
        }), () => {
            if (this.props.action instanceof Function) {
                this.props.action(this.state);
            }
        });
    }

    render() {
        return (
            <select onChange={this.handleSelect} value={this.state.selected}>
                {
                    this.props.noDefault &&
                    <option key={0}
                            value='DEFAULT'
                            disabled
                            selected
                    >
                        { this.props.noDefault }
                    </option>
                }
                { this.setOptions() }
            </select>
        );
    }
}

SmartGroupedDropdown.propTypes = {
    options: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    ).isRequired,
    selected: PropTypes.string,
    noDefault: PropTypes.string,
    handleSelect: PropTypes.func
};

export default SmartGroupedDropdown;