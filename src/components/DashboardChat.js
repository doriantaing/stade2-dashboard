import React from 'react';
import sources from "../assets/img";
import {Draggable, Droppable} from "react-beautiful-dnd";

const DashboardChat = ({items}) => {
  return(
      <div className="dashboard-chat">
          <nav className='dashboard-chat_header'>
              <img src={sources.logo} alt="logo" className='dashboard-logo'/>
              <div className='dashboard-select'>
                  <p>Stade 2</p>
              </div>
          </nav>
          <div className="dashboard-chat_body">
              <div className="dashboard-title">
                  <h3>Chat en ligne</h3>
                  <div className="dashboard-chat_count">
                      <p>24</p>
                  </div>
              </div>
              <div className="dashboard-chat_list">
                  <Droppable droppableId="droppable">
                      {(provided, snapshot) => (
                          <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
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
              </div>
          </div>
      </div>
  )
};

export default DashboardChat;