import {MdCheckBox,MdCheckBoxOutlineBlank,MdRemoveCircleOutline} from 'react-icons/md';
import cn from 'classnames';
import React from 'react';

const TodoListItem=({todo,onRemove})=>{
    const {id,text, checked} = todo;
    return(
        <div className='TodoListItem'>
            <div className={cn('checkBox',{checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            </div>
            <div className='text'>{text}</div>
            <div className='remove' onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);