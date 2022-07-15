import { useState, useEffect } from "react";

const Dots = ({ slideIndex, spot, status }) => {
    const numDots = [1, 2, 3, 4, 5];

    useEffect(() => {

    }, [slideIndex])

    return (
        numDots.map((dot, index) => {
            return (
                <div className={slideIndex === index + 1 ? 'active-dot' : 'not-active'} key={index}>
                    <i className="fa-solid fa-circle fa-2xs"></i>
                </div>

            )

        })
    )
}

export default Dots;
