import React from "react";
import Propstypes from 'prop-types'

const MyComponent = ({name,favoriteNumber ,children}) => {
    return(
        <div>
            myname : {name}<br/>
            children : {children}입니다.
            <br/>
            myNum : {favoriteNumber}
        </div>
    )
};

MyComponent.defaultProps={
    name : 'standard'
};

MyComponent.propstypes={
    name : Propstypes.string,
    favoriteNumber : Propstypes.number.isRequired
};
export default MyComponent;