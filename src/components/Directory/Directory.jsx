import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Curry from '../../assets/images/curry.png';
import Beverages from '../../assets/images/beverages.png';
import Desserts from '../../assets/images/desserts.png';
import Veg from '../../assets/images/veg.png';
import NonVeg from '../../assets/images/nonveg.png';
class Directory extends React.Component {

    constructor () {
        super();

        this.state = {
            sections: [
               
                {
                  title: 'Curry',
                  imageUrl: Curry,
                  id: 1,
                  size: 'small',
                  linkUrl: 'Curry'
                },
                {
                  title: 'Beverages',
                  imageUrl: Beverages,
                  id: 2,
                  size: 'small',
                  linkUrl: 'Beverages'
                },
                {
                  title: 'Desserts',
                  imageUrl: Desserts,
                  id: 3,
                  size: 'small',
                  linkUrl: 'Desserts'
                },
                {
                  title: 'Veg',
                  imageUrl: Veg,
                  size: 'large',
                  id: 4,
                  linkUrl: 'Veg'
                },
                {
                  title: 'Non-Veg',
                  imageUrl: NonVeg,
                  size: 'large',
                  id: 5,
                  linkUrl: 'Non-Veg'
                }, 
              ]
        } 
    };

    render(){

        return(
            <div className = "directory-menu"> 
                {this.state.sections.map(({ id, title , imageUrl ,size}) => (
                    <MenuItem key={id} title = {title} imageUrl = {imageUrl} size={size}/>
                    ))}
            </div>
        
        );
    }

}

export default Directory;