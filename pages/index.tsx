import { Button, Htag, Paragragh, Rating, Tag } from "../components";
import React, { useState, useEffect } from "react";

export default function Home(): JSX.Element {
  const [counter, setcounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter, "counter");
    return () => {
      console.log("unmount");
    };
  });

  return (<>
    <Htag tag='h1'>{counter}</Htag>
    <Button appearance="primary" arrow="right" onClick={() => { setcounter(counter + 1); }}>Click</Button>
    <Button appearance="ghost" arrow="down">Click</Button>
    <Paragragh size='l'>Big</Paragragh>
    <Paragragh size='m'>Medium</Paragragh>
    <Paragragh size='s'>Small</Paragragh>
    <Tag size="m" color='red'>Kek</Tag>
    <Tag size="s" color='green'>Lol</Tag>
    <Tag size="m" color='primary'>Lol</Tag>
    <Rating rating={4}></Rating>
  </>
  );
}
