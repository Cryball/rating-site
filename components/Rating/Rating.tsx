import React, { useState, useEffect } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star.svg"
import cn from 'classnames';

export const Rating = ({ children, isEditable = false, setRating, className, rating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setratingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon className={cn(styles.star, {
                    [styles.filled]: i < currRating,

                })} />
            );
        });
        setratingArray(updatedArray);
    };
    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
}