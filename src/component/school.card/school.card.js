import React from "react";
import Emoji from "@app/component/emoji";

import './school.cards.scss';

export function SchoolCard({props}) {
    return (
        <div className="row mb-5">
            <div className="col-7">
                <h3 className="mb-0 subheading">{ props.schoolName } <Emoji symbol={props.schoolEmoji} label={props.schoolEmojiLabel}/></h3>
                <div className="mb-3">
                    <p className="subheading">
                        { props.degree }
                        <span className="grades"> {props.grades}</span> <Emoji symbol={props.gradesEmoji}/>
                    </p>
                </div>
                <p className="mb-3">
                    { props.description }
                </p>
                <p className="mb-3">
                    { props.dissertation }
                </p>
            </div>
            <div className="col text-center">
                <p className="inner-heading font-weight-bold d-inline primary-light-red-text">
                    { props.date }
                </p>
            </div>
        </div>
    )
}

export default SchoolCard;