import React from 'react';

export default class Board extends React.Component
{
    renderCell(i) {
        return <button className="square">{i}</button>
    }
    render() {
        return (
            <div>
                <div className='board-row'>
                    {this.renderCell(0)}
                    {this.renderCell(1)}
                    {this.renderCell(2)}
                </div>
                <div className='board-row'>
                    {this.renderCell(3)}
                    {this.renderCell(4)}
                    {this.renderCell(5)}
                </div>
                <div className='board-row'>
                    {this.renderCell(6)}
                    {this.renderCell(7)}
                    {this.renderCell(8)}
                </div>
            </div>
        );
    }
}