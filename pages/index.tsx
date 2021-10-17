import { Button, Htag, Paragragh, Rating, Tag } from "../components";
import React, { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setrating] = useState(4);

  return (<>
    <Htag tag='h1'>Text</Htag>
    <Button appearance="primary" arrow="right">Click</Button>
    <Button appearance="ghost" arrow="down">Click</Button>
    <Paragragh size='l'>Big</Paragragh>
    <Paragragh size='m'>Medium</Paragragh>
    <Paragragh size='s'>Small</Paragragh>
    <Tag size="m" color='red'>Kek</Tag>
    <Tag size="s" color='green'>Lol</Tag>
    <Tag size="m" color='primary'>Lol</Tag>
    <Rating rating={rating} isEditable={true} setRating={setrating}></Rating>
  </>
  );
}
