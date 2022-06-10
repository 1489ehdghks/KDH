import React,{useState,useMemo,useCallback,useRef} from "react";

const getAverage = number =>{
    console.log('계산중');
    if(number.length===0) return 0;
    const sum = number.reduce((a,b) => a+b);
    return sum/number.length;
}
    const Average=()=>{
        const [list,setList] = useState([]);
        const [number,setNumber] = useState('');
        const inputE1=useRef(null);


        const onChange = useCallback (e=> {
            setNumber(e.target.value);
        },[]);


        const onInsert = useCallback(() => {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
            inputE1.current.focus();
        },[list,number]);

        const avg = useMemo(()=> getAverage(list),[list]);

        return(
            <div>
                <input value={number} onChange={onChange} ref={inputE1} />
                <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b> {avg}
            </div>
            </div>

        );
    };


export default Average;