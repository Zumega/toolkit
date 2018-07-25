import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Help.css';
import {
    SmartTextarea,
    SmartButton,
    SmartRadioGroup,
    SmartDropdown,
    Loading,
    Tiles,
    SmartFancyDropdown,
    L10N
} from './_index';

class Help extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showComponent: false
        };

        this.onClick = this.onClick.bind(this);
        this.handleShowHide = this.handleShowHide.bind(this);
    }

    onClick (...e) {
        console.log(...e);
    }

    handleShowHide () {
        this.setState(prevState => ({
            ...prevState,
            showComponent: !prevState.showComponent
        }));
    }

    render() {
        const {
            showComponent
        } = this.state;

        switch (this.props.component.toUpperCase()) {
            case 'TILES':
                return (
                    <div className="helpContainer">
                        <h3>Tiles</h3>
                        <ul>
                            <li><strong>data</strong>: REQUIRED - array: An array of objects:
                                <ul>
                                    <li><strong>id</strong>: REQUIRED - string: A unique id for this image.</li>
                                    <li><strong>src</strong>: REQUIRED - string: Image source path.</li>
                                    <li><strong>altText</strong>: REQUIRED - string: Text for if the image doesn't laod.</li>
                                    <li><strong>caption</strong>: OPTIONAL - string: Caption text under the image.</li>
                                    <li><strong>type</strong>: OPTIONAL - string: Type of image; ie JPG</li>
                                    <li><strong>date</strong>: OPTIONAL - string: Date of image</li>
                                </ul>
                            </li>
                            <li><strong>maxPerRow</strong>: REQUIRED - number: Max number of items per row</li>
                            <li><strong>containerWidth</strong>: OPTIONAL - string: Easily change the width by passing it here: ie '200px' </li>
                            <li><strong>handleClick</strong>: OPTIONAL - function: What to do when the image is clicked.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with only required fields</legend>
                                <table cellSpacing="0" cellPadding="0" width="100" border="1">
                                    <thead>
                                        <tr>
                                            <td>PROP</td>
                                            <td>VALUE</td>
                                            <td>TYPE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                data
                                            </td>
                                            <td>
                                                <pre>
                                                    {
                                                        JSON.stringify([{id:'0', src: '<IMAGE PATH>', altText: '1'},{id:'1', src: '<IMAGE PATH>', altText: '2'},{id:'2', src: '<IMAGE PATH>', altText: '3'}], null, 2)
                                                    }
                                                </pre>
                                            </td>
                                            <td>
                                                ARRAY of OBJECTS
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                maxPerRow
                                            </td>
                                            <td>
                                                5
                                            </td>
                                            <td>
                                                int
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr />

                                <Tiles data={[
                                    {id:'0', src: 'http://via.placeholder.com/120x68', altText: '1'},
                                    {id:'1', src: 'http://via.placeholder.com/120x68', altText: '2'},
                                    {id:'2', src: 'http://via.placeholder.com/120x68', altText: '3'},
                                    {id:'3', src: 'http://via.placeholder.com/120x68', altText: '4'},
                                    {id:'4', src: 'http://via.placeholder.com/120x68', altText: '5'},
                                    {id:'5', src: 'http://via.placeholder.com/120x68', altText: '6'},
                                    {id:'6', src: 'http://via.placeholder.com/120x68', altText: '7'},
                                    {id:'7', src: 'http://via.placeholder.com/120x68', altText: '8'},
                                    {id:'8', src: 'http://via.placeholder.com/120x68', altText: '9'},
                                    {id:'9', src: 'http://via.placeholder.com/120x68', altText: '10'},
                                    {id:'10', src: 'http://via.placeholder.com/120x68', altText: '11'},
                                    {id:'11', src: 'http://via.placeholder.com/120x68', altText: '12'}
                                ]} maxPerRow={5} />
                            </fieldset>
                        }
                    </div>
                );
            case 'LOADING':
                return (
                    <div className="helpContainer">
                        <h3>Loading</h3>
                        <ul>
                            <li><strong>active</strong>: REQUIRED - bool: Toggles the display of the loading.</li>
                            <li><strong>width</strong>: OPTIONAL - string: Display width.</li>
                            <li><strong>height</strong>: OPTIONAL - string: Display height.</li>
                            <li><strong>color</strong>: OPTIONAL - string: Color value.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with required fields and height</legend>

                                <table cellSpacing="0" cellPadding="0" width="100" border="1">
                                    <thead>
                                        <tr>
                                            <td>PROP</td>
                                            <td>VALUE</td>
                                            <td>TYPE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                active
                                            </td>
                                            <td>
                                                true
                                            </td>
                                            <td>
                                                BOOLEAN
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                maxPerRow
                                            </td>
                                            <td>
                                                5
                                            </td>
                                            <td>
                                                INT
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr />

                                <Loading active={true} height="1.5em" width="1.5em" />
                            </fieldset>
                        }
                    </div>
                );
            case 'TEXTAREA':
                return (
                    <div className="helpContainer">
                        <h3>TextArea</h3>
                        <ul>
                            <li><strong>value</strong>: OPTIONAL - string: Text to display in the textarea.</li>
                            <li><strong>maxLength</strong>: OPTIONAL - number: When > 0 a counter showing x/y; under the textarea.</li>
                            <li><strong>handleChange</strong>: OPTIONAL - function: Function that receives one argument, the newest state.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with only required fields</legend>
                                <SmartTextarea />
                            </fieldset>
                        }
                    </div>
                );
            case 'BUTTON':
                return (
                    <div className="helpContainer">
                        <h3>Button</h3>
                        <ul>
                            <li><strong>text</strong>: REQUIRED - string: Text within the button.</li>
                            <li><strong>handleClick</strong>: REQUIRED - function: What to do when the button is clicked.</li>
                            <li><strong>loading</strong>: OPTIONAL - bool: Toggles the button and a loading animation.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with only required fields</legend>

                                <table cellSpacing="0" cellPadding="0" width="100" border="1">
                                    <thead>
                                        <tr>
                                            <td>PROP</td>
                                            <td>VALUE</td>
                                            <td>TYPE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                text
                                            </td>
                                            <td>
                                                Click Me
                                            </td>
                                            <td>
                                                STRING
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                handleClick
                                            </td>
                                            <td>
                                                FUNCTION
                                            </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr />

                                <SmartButton text="Click Me" handleClick={this.onClick} />
                            </fieldset>
                        }
                    </div>
                );
            case 'RADIOGROUP':
                return (
                    <div className="helpContainer">
                        <h3>RadioGroup</h3>
                        <ul>
                            <li><strong>radios</strong>: REQUIRED - array: An array of objects:
                                <ul>
                                    <li><strong>id</strong>: REQUIRED - string: A unique id for this radio.</li>
                                    <li><strong>text</strong>: REQUIRED - string: Text for the label.</li>
                                    <li><strong>value</strong>: REQUIRED - string: Value of the radio.</li>
                                </ul>
                            </li>
                            <li><strong>groupClass</strong>: OPTIONAL - string: CSS class name to add to parent div.</li>
                            <li><strong>groupId</strong>: OPTIONAL - string: A unique id for this group.</li>
                            <li><strong>active</strong>: OPTIONAL - string: The id of the radio to be active</li>
                            <li><strong>handleChange</strong>: OPTIONAL - function: Function that receives one object argument containing the group id and the newest state.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with only required fields</legend>

                                <table cellSpacing="0" cellPadding="0" width="100" border="1">
                                    <thead>
                                        <tr>
                                            <td>PROP</td>
                                            <td>VALUE</td>
                                            <td>TYPE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                radios
                                            </td>
                                            <td>
                                                <pre>
                                                    {
                                                        JSON.stringify([
                                                            {id: '10', text: 'One', value: 'ONE'},
                                                            {id: '20', text: 'Two', value: 'TWO'},
                                                            {id: '30', text: 'Three', value: 'THREE'},
                                                            {id: '40', text: 'Three + 1', value: 'FOUR'}
                                                        ], null, 2)
                                                    }
                                                </pre>
                                            </td>
                                            <td>
                                                ARRAY of OBJECTS
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr />

                                <SmartRadioGroup radios={
                                    [
                                        {id: '10', text: 'One', value: 'ONE'},
                                        {id: '20', text: 'Two', value: 'TWO'},
                                        {id: '30', text: 'Three', value: 'THREE'},
                                        {id: '40', text: 'Three + 1', value: 'FOUR'}
                                    ]
                                }
                                />
                            </fieldset>
                        }
                    </div>
                );
            case 'DROPDOWN':
                return (
                    <div className="helpContainer">
                        <h3>Dropdown</h3>
                        <ul>
                            <li><strong>options</strong>: REQUIRED - array: An array of objects:
                                <ul>
                                    <li><strong>id</strong>: REQUIRED - string: A unique id for this radio.</li>
                                    <li><strong>text</strong>: REQUIRED - string: Text for the label.</li>
                                    <li><strong>value</strong>: REQUIRED - string: Value of the radio.</li>
                                </ul>
                            </li>
                            <li><strong>selected</strong>: OPTIONAL - string: The string of the value of the option to be selected.</li>
                            <li><strong>noDefault</strong>: OPTIONAL - string: A string to display as the unselectable first item.</li>
                            <li><strong>handleSelect</strong>: OPTIONAL - function: Function that receives one object argument containing the newest state.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with only required fields</legend>

                                <table cellSpacing="0" cellPadding="0" width="100" border="1">
                                    <thead>
                                        <tr>
                                            <td>PROP</td>
                                            <td>VALUE</td>
                                            <td>TYPE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                options
                                            </td>
                                            <td>
                                                <pre>
                                                    {
                                                        JSON.stringify([
                                                            {id: '10', text: 'One', value: 'ONE'},
                                                            {id: '20', text: 'Two', value: 'TWO'},
                                                            {id: '30', text: 'Three', value: 'THREE'},
                                                            {id: '40', text: '4', value: 'FOUR'}
                                                        ], null, 2)
                                                    }
                                                </pre>
                                            </td>
                                            <td>
                                                ARRAY of OBJECTS
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr />

                                <SmartDropdown options={
                                    [
                                        {id: '10', text: 'One', value: 'ONE'},
                                        {id: '20', text: 'Two', value: 'TWO'},
                                        {id: '30', text: 'Three', value: 'THREE'},
                                        {id: '40', text: '4', value: 'FOUR'}
                                    ]
                                }
                                />
                            </fieldset>
                        }
                    </div>
                );
            case 'GROUPDEDDROPDOWN':
                return (
                    <div className="helpContainer">
                        <h3>Dropdown</h3>
                        <ul>
                            <li><strong>options</strong>: REQUIRED - array: An array of objects:
                                <ul>
                                    <li><strong>id</strong>: REQUIRED - string: A unique id for this radio.</li>
                                    <li><strong>text</strong>: REQUIRED - string: Text for the label.</li>
                                    <li><strong>value</strong>: REQUIRED - string: Value of the radio.</li>
                                </ul>
                            </li>
                            <li><strong>selected</strong>: OPTIONAL - string: The string of the value of the option to be selected.</li>
                            <li><strong>noDefault</strong>: OPTIONAL - string: A string to display as the unselectable first item.</li>
                            <li><strong>handleSelect</strong>: OPTIONAL - function: Function that receives one object argument containing the newest state.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with with groups and required fields</legend>
                                <SmartDropdown options={
                                    {
                                        group1: [
                                            {id: '10', text: 'One', value: 'ONE'},
                                            {id: '20', text: 'Two', value: 'TWO'},
                                            {id: '30', text: 'Three', value: 'THREE'},
                                            {id: '40', text: '4', value: 'FOUR'}
                                        ],
                                        group2: [
                                            {id: '100', text: 'One1', value: 'ONE_ONE'},
                                            {id: '200', text: 'Two2', value: 'TWO_TWO'},
                                            {id: '300', text: 'Three3', value: 'THREE_THREE'},
                                            {id: '400', text: '4Four', value: 'FOUR_FOUR'}
                                        ]
                                    }

                                }
                                />
                            </fieldset>
                        }
                    </div>
                );
            case 'FANCYDROPDOWN':
                return (
                    <div className="helpContainer">
                        <h3>FancyDropdown</h3>
                        <ul>
                            <li><strong>options</strong>: REQUIRED - array: An array of objects:
                                <ul>
                                    <li><strong>id</strong>: REQUIRED - string: A unique id for this radio.</li>
                                    <li><strong>text</strong>: REQUIRED - string: Text for the label.</li>
                                    <li><strong>value</strong>: REQUIRED - string: Value of the radio.</li>
                                </ul>
                            </li>
                            <li><strong>selected</strong>: OPTIONAL - string: The string of the id of the option to be selected.</li>
                            <li><strong>noDefault</strong>: OPTIONAL - string: A string to display as the unselectable first item.</li>
                            <li><strong>disabled</strong>: OPTIONAL - array: List of ids to disable.</li>
                            <li><strong>handleSelect</strong>: OPTIONAL - function: Function that receives one object argument containing the newest state.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with only required fields</legend>

                                <table cellSpacing="0" cellPadding="0" width="100" border="1">
                                    <thead>
                                        <tr>
                                            <td>PROP</td>
                                            <td>VALUE</td>
                                            <td>TYPE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                options
                                            </td>
                                            <td>
                                                <pre>
                                                    {
                                                        JSON.stringify([
                                                            {id: '10', text: 'One', value: 'ONE'},
                                                            {id: '20', text: 'Two', value: 'TWO'},
                                                            {id: '30', text: 'Three', value: 'THREE'},
                                                            {id: '40', text: '4', value: 'FOUR'}
                                                        ], null, 2)
                                                    }
                                                </pre>
                                            </td>
                                            <td>
                                                ARRAY of OBJECTS
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr />

                                <SmartFancyDropdown options={
                                    [
                                        {id: '10', text: 'One'},
                                        {id: '20', text: 'Two'},
                                        {id: '30', text: 'Three'},
                                        {id: '40', text: '4'}
                                    ]
                                }
                                />
                            </fieldset>
                        }
                    </div>
                );
            case "L10N":
                return (
                    <div className="helpContainer">
                        <h3>L10N</h3>
                        <ul>
                            <li><strong>id</strong>: REQUIRED - string: The location id of the text to be translated.</li>
                            <li><strong>defaultText</strong>: OPTIONAL - string: A string to use incase the 'id' can't be translated.</li>
                        </ul>
                        <button onClick={this.handleShowHide}>{showComponent ? 'Hide' : 'Show'} Component</button>
                        {
                            showComponent &&
                            <fieldset>
                                <legend>Shown with only required fields</legend>

                                <table cellSpacing="0" cellPadding="0" width="100" border="1">
                                    <thead>
                                        <tr>
                                            <td>PROP</td>
                                            <td>VALUE</td>
                                            <td>TYPE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                id
                                            </td>
                                            <td>
                                                string.to.translate
                                            </td>
                                            <td>
                                                STRING -> object path to value
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr />

                                <p>
                                    <L10N id="string.to.translate" />
                                </p>
                            </fieldset>
                        }
                    </div>
                );
            default:
                const helpAll = [
                    'Button',
                    'Dropdown',
                    'FancyDropdown',
                    'Loading',
                    'RadioGroup',
                    'TextArea',
                    'Tiles',
                    'L10N'
                ];

                return (
                    <div className="helpContainer">
                        <fieldset>
                            <legend>"{this.props.component}"</legend>
                            Is not configured in the Help: please check our spelling.
                            <br />
                            Available components in Help:
                            <ul>
                                {
                                    helpAll.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </fieldset>
                    </div>
                );
        }
    }
};

Help.propTypes = {
    component: PropTypes.string.isRequired,
    showComponent: PropTypes.bool
};

export default Help;