import React  from 'react';
import PropTypes from 'prop-types';
import './Tiles.css';

const Tiles = ({
    data,
    maxPerRow,
    containerWidth,
    handleClick
}) => {
    const maxCount = data.length;
    const leftOver = (maxCount % maxPerRow);

    function buildCell (data, i) {
        const build = [];
        const max = (i < leftOver ? leftOver: maxPerRow);

        for (let x=0; x<max; x++) {
            const n = x + i;
            const obj = data[n];

            build.push(
                <div
                    key={'cell_' + x}
                    className="tile"
                    style={{
                        width: ((100 / (n < leftOver ? leftOver : maxPerRow)) + '%'),
                        float: 'left'
                    }}
                >
                    <div className="innerContainer">
                        <img src={obj.src} title={obj.altText} alt={obj.altText} onClick={handleClick} />
                        {
                            obj.caption &&
                            <aside className="tileCaption">
                                { obj.caption }

                                {
                                    obj.type &&
                                    <span className="tileType">{obj.type}</span>
                                }
                                {
                                    obj.date &&
                                    <span className="tileDate">{obj.date}</span>
                                }
                            </aside>
                        }
                    </div>
                </div>
            );
        }

        return build;
    }

    function builder (data) {
        const build = [];

        for (let i=0, ii=data.length; i<ii; i+=(i < leftOver ? leftOver: maxPerRow)) {
            build.push(
                <div
                    key={'row_' + i}
                    className="tileRow"
                >
                    { buildCell(data, i) }
                </div>
            );
        }

        return build;
    }

    return (
        <div
            style={{
                width: containerWidth || '100%'
            }}
            className="tilesContainer"
        >
            { builder(data) }
        </div>
    );
};

Tiles.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired,
            caption: PropTypes.string,
            type: PropTypes.string,
            date: PropTypes.string
        })
    ).isRequired,
    maxPerRow: PropTypes.number.isRequired,
    containerWidth: PropTypes.string,
    handleClick: PropTypes.func
};

export default Tiles;