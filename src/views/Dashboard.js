import React, { Component } from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import DashboardChat from '../components/DashboardChat';
import DashboardAntenne from '../components/DashboardAntenne';


const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "white",
    padding: grid,
});

class Dashboard extends Component {
    state = {
        data: [
            {
                id: 'item-0',
                author: 'Amalie Flores',
                message: 'Est-ce que les frères Bogdanov aiment mes illusions de jeunesse ? Elles déséquilibraient des âmes.'
            },
            {
                id: 'item-1',
                author: 'Shaun E. Suarez',
                message: 'Ces pilotes de rallye disent merci à l\'archive. Nous fermons des ongles en ne mugissant plus. La connasse perfore un ogre. La baronne associe une présentation et un bouc. Les héritières divorcent ! Les dilettantes disséquaient ce politicien.'
            },
            {
                id: 'item-2',
                author: 'Shaun E. Suarez',
                message: 'Ces pilotes de rallye disent merci à l\'archive. Nous fermons des ongles en ne mugissant plus. La connasse perfore un ogre. La baronne associe une présentation et un bouc. Les héritières divorcent ! Les dilettantes disséquaient ce politicien.'
            },
            {
                id: 'item-3',
                author: 'Shaun E. Suarez',
                message: 'Ces pilotes de rallye disent merci à l\'archive. Nous fermons des ongles en ne mugissant plus. La connasse perfore un ogre. La baronne associe une présentation et un bouc. Les héritières divorcent ! Les dilettantes disséquaient ce politicien.'
            }
        ],
    };

    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const items = this.reorder(
            this.state.data,
            result.source.index,
            result.destination.index
        );

        this.setState({
            data: items
        });
    };


    reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };


    render() {
        const {data} = this.state;

        return (
            <section className='dashboard'>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <DashboardChat
                        items={data}
                    />
                    <DashboardAntenne
                        getListStyle={getListStyle}
                    />
                </DragDropContext>
            </section>
        );
    }
}

export default Dashboard;