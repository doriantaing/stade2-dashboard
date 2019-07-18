import React, {useRef, useEffect} from 'react';
import sources from "../assets/img";
import {Draggable, Droppable} from "react-beautiful-dnd";

const DashboardChat = ({items, clickAudio}) => {
    

    const hoverRef = useRef(null);

    useEffect(() => {
       // const message = document.querySelectorAll('.dashboard-message');
       //
       // message.forEach(item => {
       //     if(!item.classList.contains('empty')){
       //         item.addEventListener('mouseenter', current => {
       //             current.target.classList.add('active');
       //
       //
       //         });
       //
       //         item.addEventListener('mouseleave', current => {
       //             current.target.classList.remove('active');
       //         })
       //     }
       // })
    }, []);

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
                      <p>{items ? items.length : 0}</p>
                  </div>
              </div>
              <div className="dashboard-chat_list">
                  <Droppable droppableId="droppable">
                      {(provided, snapshot) => (
                          <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              className="dashboard-chat_container"
                          >
                              {items && items.map((item, index) => (
                                  <Draggable key={item.id} draggableId={item.id} index={index}>
                                      {(provided, snapshot) => (
                                          <div
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                          >
                                              <article className='dashboard-message' ref={hoverRef}>
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
                                          </div>
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