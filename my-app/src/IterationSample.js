import React, {useState} from "react";

const IterationSample = () => {
    const [names,setNamtes] = useState([
        {id : 1, text : 'snow'},
        {id : 2, text : 'ice'},
        {id : 3, text : 'snowman'}
    ]);
    const [inputText, setInputText] =useState('');
    const [nextId, setnextId] = useState(4);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames= names.concat({
            id : nextId, //nextId 값에 id로 설정
            text : inputText,
        })
        setnextId(nextId + 1);
        setNamtes(nextNames); //names 값을 업데이트
        setInputText('');
    };
    const onRemove = id => {
        const nextNames=names.filter(name => name.id !==id);
        setNamtes(nextNames);
    };

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={()=> onRemove(name.id)}>{name.text}</li>));
    return(
        <>
        <input value={inputText} onChange={onChange}/> 
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </>
    );
};
export default IterationSample;


