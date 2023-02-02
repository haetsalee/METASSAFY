import { useContext } from 'react';

function TechStackItem(props) {
  return (
    <li>
      <div>
        <div>
          <img src={props.image} alt={props.title} />
        </div>
        {/* <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div> */}
        {/* <div>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div> */}
      </div>
    </li>
  );
}

export default TechStackItem;
