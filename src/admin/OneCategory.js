import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function OneCategory({category}) {
  const {id, image, name} = category;
  console.log(category);
  return (
    <List
    itemLayout="horizontal">

   
      <List.Item actions={[<Link to ={`/admin-categories/${id}`} key="list-loadmore-edit">edit</Link>, <Link key="list-loadmore-more">delete</Link>]}>
        <List.Item.Meta
          avatar={<Avatar src={image}/>}
          title={<Link>{name}</Link>}
          
        />
      </List.Item>
    
  </List>
  )
}

export default OneCategory