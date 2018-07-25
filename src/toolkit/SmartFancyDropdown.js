import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SmartFancyDropdown.css';
import './SmartFancyDropDownOptional.css';

class SmartFancyDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,
            activeMenu: false
        };

        this.ROOT = document.getElementById('root');

        this.setOptions = this.setOptions.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.selected) {
            const selected = nextProps.options.find(item => (
                item.id === nextProps.selected
            ));

            return {
                selected: selected || (nextProps.noDefault ? { id: '0_DEFAULT_0', text: nextProps.noDefault } : nextProps.options[0])
            };
        }

        return null;
    }

    componentDidMount () {
        const usedClassMap = [
            'fancyDropDownContainer',
            'fancyDropDownDisplay',
            'fancyDropDownButton',
            'fancyDropDown',
            'fancyDropDownItem'
        ];

        this.ROOT.onclick = e => {
            const className = e.target.className.split(' ')[0];

            if (this.state.activeMenu && usedClassMap.indexOf(className) === -1) {
                this.handleOpen(false);
            }
        };
    }

    componentWillUnmount () {
        this.ROOT.onclick = null;
    }

    setOptions() {
        const {
            options,
            disabled
        } = this.props;
        const {
            selected
        } = this.state;

        return options.map(option => (
            <li
                key={option.id}
                onClick={() => this.handleClick(option)}
                className={`fancyDropDownItem ${selected.id === option.id ? 'fdd_selected' : ''} ${disabled && disabled.indexOf(option.id) > -1 ? 'fdd_disabled' : ''}`}
            >
                {option.text}
            </li>
        ));
    }

    handleClick(option) {
        const selected = option;

        this.setState(prevState => ({
            ...prevState,
            selected
        }), () => {
            this.handleOpen();
            if (this.props.handleSelect instanceof Function) {
                this.props.handleSelect(this.state.selected);
            }
        });
    }

    handleOpen(override = null) {
        this.setState(prevState => ({
            ...prevState,
            activeMenu: override === null ? !prevState.activeMenu : override
        }));
    }

    render() {
        const {
            selected,
            activeMenu
        } = this.state;

        return (
            <div
                className="fancyDropDownContainer"
            >
                <ul className={`fancyDropDown ${activeMenu ? 'fdd_active' : 'fdd_inactive'}`}>
                {
                    this.props.noDefault &&
                    <li key={'0_DEFAULT_0'}
                        className={'fancyDropDownItem fdd_disabled'}
                    >
                        { this.props.noDefault }
                    </li>
                }
                { this.setOptions() }
                </ul>
                <div className="fancyDropDownDisplay"
                     onClick={() => this.handleOpen()}
                >
                    { selected.text }
                    <span
                        className={`fancyDropDownButton ${activeMenu ? 'fdd_active' : ''}`}
                    >
                        >
                    </span>
                </div>
            </div>
        );
    }
}

SmartFancyDropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    selected: PropTypes.string,
    noDefault: PropTypes.string,
    disabled: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    handleSelect: PropTypes.func
};

export default SmartFancyDropdown;