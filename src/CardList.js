import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {

    return (
        <>
            {
                list.map( user => {
                    return (<Card key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} />);
                })
            }
        </>
  );
};

export default CardList;