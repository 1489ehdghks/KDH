const TodoTemplate = ({chrildren}) =>{
    return(
        <div className='TodoTemplate'>
            <div className='app-title'>일정관리</div>
            <div className='content'>{chrildren}</div>
        </div>
    )
}

export default TodoTemplate;