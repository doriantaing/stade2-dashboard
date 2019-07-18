import React, { Component } from "react";
import {DragDropContext} from "react-beautiful-dnd";
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
        items: [
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
        selected: []
    };

    id2List = [
        {
            droppable: 'items'
        },
        {
            droppable: 'selected'
        }
    ];

    getList = id => this.state[this.id2List[id].droppable];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = this.reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            console.log(source.droppableId);
            console.log(this.getList(source.droppableId));
            const result = this.move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };


    reorder = (list, startIndex, endIndex , droppableId) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    move = (source, destination, droppableSource, droppableDestination) => {
        console.log('OKKK');
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        
        console.log('SOURCE', sourceClone);
        console.log('DEST', destClone);
        console.log('REMOVED', removed);
        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };


    render() {
        const {items, selected} = this.state;
        return (
            <section className='dashboard'>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <DashboardChat
                        items={items}
                    />
                    <DashboardAntenne
                        items={selected}
                        getListStyle={getListStyle}
                    />
                </DragDropContext>
            </section>
        );
    }
}

export default Dashboard;