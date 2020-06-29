import React from "react";
import Emoji from "@app/component/emoji";

import './school.cards.css';

export function SchoolCard({props}) {
    return (
        <div className="row mb-5">
            <div className="col-7">
                <h3 className="mb-0 title">{ props.schoolName } <Emoji symbol={props.schoolEmoji} label={props.schoolEmojiLabel}/></h3>
                <div className="mb-3 subheading">{ props.degree }
                    <span className="grades"> {props.grades}</span> <Emoji symbol={props.gradesEmoji}/>
                </div>
            </div>
            <div className="col text-center">
                <p className="largest font-weight-bold d-inline date">
                    { props.date }
                </p>
            </div>
        </div>
    )
}

export default SchoolCard;