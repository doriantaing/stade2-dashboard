import React from 'react';
import {Draggable, Droppable} from "react-beautiful-dnd";
import sources from "../assets/img";

const DashboardAntenne = ({items, getListStyle, clickAudio}) => {
    return(
        <div className="dashboard-antenne">
            <nav className="dashboard-antenne_header">
                <div className="dashboard-antenne_links">
                    <a href="#">Paramètres</a>
                    <a href="#">Statistiques</a>
                </div>

                <div className="dashboard-select text-black">
                    <p>John Doe</p>
                </div>
            </nav>
            <div className="dashboard-antenne_body">
                <div className="dashboard-title text-black">
                    <div className="dashboard-title_container">
                        <h3>Passer à l'antenne</h3>
                        <span className="red-dot"/>
                    </div>
                    {items.length > 0 && (
                        <a href="#" className='dashboard-antenne_remove'>Retirer la réaction</a>
                    )}
                </div>
                <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {items.length > 0 ? (
                                    items.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided, snapshot) => (
                                                <article
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className='dashboard-message color-green'
                                                >
                                                    <nav className="dashboard-message_header">
                                                        <h4 className="dashboard-message_author">{item.author}</h4>
                                                        <div className="dashboard-play" onClick={clickAudio}>
                                                            <img src={sources.play} alt="icon play audio"/>
                                                        </div>
                                                    </nav>
                                                    <div className="dashboard-message_body">
                                                        <p>{item.message}</p>
                                                    </div>
                                                </article>
                                            )}
                                        </Draggable>
                                    ))
                                ) :
                                <article className='dashboard-message empty'>
                                    <div className="dashboard-message_body">
                                        <p>Cette réaction va être présenter lors de l’emission</p>
                                    </div>
                                </article>
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <div className="dashboard-folders">
                    <h3 className="dashboard-subtitle">Mes dossiers</h3>

                    <div className="dashboard-folders_container">
                        <Droppable droppableId='droppable-folder1'>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    className="dashboard-folders_item first"
                                >
                                    <article>
                                        <p>Les questions</p>
                                    </article>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <Droppable droppableId='droppable-folder2'>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    className="dashboard-folders_item"
                                >
                                    <article>
                                        <p>Dossier 2</p>
                                    </article>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <Droppable droppableId='droppable-folder3'>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    className="dashboard-folders_item"
                                >
                                    <article>
                                        <p>Dossier 3</p>
                                    </article>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashboardAntenne;