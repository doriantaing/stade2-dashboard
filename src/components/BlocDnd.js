import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import React from "react";
import sources from "../assets/img";

const BlocDnd = ({items, dragEnd, classStyle}) => {
    return(
        <DragDropContext onDragEnd={dragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={classStyle}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <article
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="dashboard-message"
                                    >
                                        <nav className="dashboard-message_header">
                                            <h4 className="dashboard-message_author">{item.author}</h4>
                                            <img src={sources.play} alt="icon play"/>
                                        </nav>
                                        <div className="dashboard-message_body">
                                            <p>{item.message}</p>
                                        </div>
                                    </article>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
};

export default BlocDnd;

