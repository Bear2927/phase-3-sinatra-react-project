import React from "react";

function VideoGameForm ({formCreator, formRating, formTitle, formImage, onChangeRating, onChangeTitle, onChangeImage, onChangeCreator, onSubmitForm}) {
    
    function handleSubmit(e) {
        e.preventDefault()
        onSubmitForm()
    }

    
    return (
        <div className="form_div">

            <p>Add a video game you enjoy playing yourself!</p>
            <form onSubmit={handleSubmit}>
                <h5 className="form">Title</h5>
                <div><input className="form_input" onChange={onChangeTitle} type="text" value={formTitle} placeholder="game title..."/></div>
                <h5 className="form">Image</h5>
                <div><input className="form_input" onChange={onChangeImage} type="text" value={formImage} placeholder="game image url..."/></div>
                <h5 className="form">Rating</h5>
                <div><input className="form_input" onChange={onChangeRating} type="text" value={formRating} placeholder="game rating..."/></div>
                <h5 className="form">Creator</h5>
                <div><input className="form_input" onChange={onChangeCreator} type="text" value={formCreator} placeholder="game creator..."/></div>
                <div><button className="form_button" type="submit">SUBMIT GAME</button></div>
            </form>
        </div>
    )
}

export default VideoGameForm;