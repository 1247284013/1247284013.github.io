import "./app.css";

function App(){
    const[PathXYArr,setPathXYArr] = useState([]);
    const mapPathStr =(arr)=>{
        if(arr.length<2) return"";
        let tempStr=`M ${arr[0]} ${arr[1]}`;
        for (let i=2; i<arr.length -1; i+=2){
            tempStr+=` L ${arr[i]} ${arr[i+1]}`;
        }
        return tempStr;
    }
    return(
        <SVG width="500" height="500" viewbox="0 0 500 500" onclick={(e)=>{
            // console.log(e);
            const{clientX,clientY}=e;
            const _pathXYArr=[..._pathXYArr,clientX,clientY];
            setPathXYArr(_pathXYArr);
            console.log(_pathXYArr);
        }}>
            <path id="polyline" d={mapPathStr(PathXYArr)}/>
        </SVG>
    );
}

export default App;