import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SmartDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: ''
        };

        this.setOptions = this.setOptions.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.selected !== nextProps.selected) {
            return {
                selected: prevState.selected || (nextProps.noDefault ? '0_DEFAULT_0' : nextProps.selected)
            };
        }

        return null;
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
                            value='0_DEFAULT_0'
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

SmartDropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    selected: PropTypes.string,
    noDefault: PropTypes.string,
    handleSelect: PropTypes.func
};

export default SmartDropdown;