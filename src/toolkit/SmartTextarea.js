import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SmartTextarea.css';

class SmartTextarea extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: '',
            currentLength: 0
        };

        this.maxLength = props.maxLength;

        this.outOf = this.outOf.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.value && nextProps.value) {
            return {
                value: nextProps.value
            };
        }

        return null;
    }

    outOf() {
        const {
            currentLength
        } = this.state;
        let className = '';

        if (currentLength > this.maxLength) {
            className = ' error';
        } else if (currentLength > (this.maxLength - (this.maxLength / 10))) {
            className = ' warn';
        }

        return (
            <div className={'counter' + className}>
                Counter <span className="currentLength">
                    {currentLength}
                </span> / <span className="maxLength">
                    {this.maxLength}
                </span>
            </div>
        );
    }

    handleChange(e) {
        const text = e.target.value;
        const length = text.length;

        this.setState(prevState => ({
            ...prevState,
            value: text,
            currentLength: length
        }), () => {
                if (this.props.handleChange instanceof Function) {
                    this.props.handleChange(this.state);
                }
            }
        )
    }

    render() {
        const {
            value
        } = this.state;

        return (
            <div className="smartTextareaContainer">
                <textarea
                    className="textarea"
                    onChange={this.handleChange}
                    value={value}
                ></textarea>
                { this.maxLength > 0 && this.outOf() }
            </div>
        );
    };
};

SmartTextarea.propTypes = {
    value: PropTypes.string,
    maxLength: PropTypes.number,
    handleChange: PropTypes.func
};

export default SmartTextarea;