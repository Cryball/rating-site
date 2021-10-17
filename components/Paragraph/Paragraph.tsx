import React from "react";
import styles from "./Paragraph.module.css";
import { ParagraghProps } from "./Paragraph.props";
import cn from 'classnames';

export const Paragragh = ({ children, size = 'm', className, ...props }: ParagraghProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.l]: size == 'l',
        })}
            {...props}>{children}
        </p>
    );
}