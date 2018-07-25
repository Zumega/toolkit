import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SmartRadioGroup.css';

class SmartRadioGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: null
        };

        this.repeater = this.repeater.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.active && nextProps.active) {
            return {
                active: nextProps.active
            };
        }

        return null;
    }

    repeater() {
        const {
            active
        } = this.state;
        const {
            radios,
            groupId
        } = this.props;

        return radios.map(radio => (
            <label
                key={radio.id}
                htmlFor={groupId + '_' + radio.id}
                className={(active === radio.id) ? 'checked' : ''}
            >
                {radio.text}
                <input
                    type="radio"
                    id={groupId + '_' + radio.id}
                    name={'btnGroup_' + groupId}
                    checked={active === radio.id}
                    value={radio.value}
                    className="radio"
                    onChange={() => this.handleChange(radio.id)}
                />
            </label>
        ));
    };

    handleChange(obj) {
        this.setState(prevState => ({
            ...prevState,
            active: obj
        }), () => {
            if (this.props.handleChange instanceof Function) {
                this.props.handleChange({groupId: this.props.groupId, state:this.state});
            }
        });

    };

    render() {
        const css = [
            'smartRadioGroupContainer',
            this.props.groupClass
        ];

        return (
            <div className={css.join(' ')}>
                {this.repeater()}
            </div>
        );
    };
};

SmartRadioGroup.propTypes = {
    groupClass: PropTypes.string,
    groupId: PropTypes.string,
    radios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    active: PropTypes.string,
    handleChange: PropTypes.func
};

export default SmartRadioGroup;
