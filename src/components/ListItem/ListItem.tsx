import * as React from 'react';
import {ListItemWrapper , StyledListItem , ListItemLink , ListItemDetails , Star} from './styled.ListItem';
import {Item } from '../../types';

const star = require('../../assets/imgs/star.png');
const NotFoundAvatar = require('../../assets/imgs/empty.png');

interface ListItemProps {
  item: Item,
 }

export function ListItem(props : ListItemProps) {
  const {item} = props;
  function getStars(score : number){
    const stars = []

    for (let i = 0 ; i < score ; i++) {
      stars.push(<Star key={i} src={star} />)
    }
    return stars;
  }
  return (
    item ? 
    <ListItemWrapper>
      <StyledListItem>
          <ListItemLink target={"_blank"} href={item.url || "javascript:void(0);"}>
            <img src={item.icon || NotFoundAvatar} alt={"Logo"} />
          </ListItemLink>
          <ListItemDetails>
            <div>
              <label>Title : </label>
              <h4>{item.displayName}</h4>
            </div>
            {
            item.score ? <div><label>Score :</label> <div>
              {
               getStars(item.score)
              }
            </div>
            </div> : null
            }
          </ListItemDetails>
      </StyledListItem>
    </ListItemWrapper> : null
  );
}
