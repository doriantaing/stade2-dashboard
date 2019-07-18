import React from 'react';
import {Draggable, Droppable} from "react-beautiful-dnd";
import sources from "../assets/img";

const DashboardAntenne = ({getListStyle}) => {
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
                    <a href="#" className='dashboard-antenne_remove'>Retirer la réation</a>
                </div>
                <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            <article className="dashboard-message empty">
                                <div className="dashboard-message_body">
                                    <p>
                                        Cette réaction va être présenter lors de l’emission
                                    </p>
                                </div>
                            </article>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <div className="dashboard-folders">
                    <h3 className="dashboard-subtitle">Mes dossiers</h3>

                    <div className="dashboard-folders_container">
                        <article className="dashboard-folders_item first">
                            <p>Les questions</p>
                        </article>
                        <article className="dashboard-folders_item">
                            <p>Dossier 2</p>
                        </article>
                        <article className="dashboard-folders_item">
                            <p>Dossier 3</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashboardAntenne;