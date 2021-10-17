import React, { useState, useEffect, KeyboardEvent } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star.svg"
import cn from 'classnames';

export const Rating = ({ children, isEditable = false, setRating, className, rating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setratingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    }

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }

    const handleSpase = (e: KeyboardEvent<SVGAElement>, i: number) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }

    const constructRating = (currRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currRating,
                        [styles.editable]: isEditable

                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpase(e, i + 1)} />
                </span>
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