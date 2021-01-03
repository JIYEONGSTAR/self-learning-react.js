import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Modal} from '@material-ui/core';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function MovieDetail(props) {
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();
    const [modify,setModify]=useState(false);
    const data=props.data;
    const [title,setTitle]=useState(data.title);
    const [director,setDirector]=useState(data.director);
    const newData = data;
    // const handleChange=(e)=>{
    //     setDirector(e.target.value);
    // }
    const handleSubmit=(e)=>{
        console.log(e);
        e.preventDefault();
        data.director=director;
        data.title=title;
        // newData.director=director;
        // console.log("새 데이터 디렉터"+newData.director);
        // console.log(director);
        // console.log("새 데이터")
        // console.log(newData);
        // console.log("기존데이터")
        // console.log(data);
        // setData({data:newData});
        // console.log("새 데이터")
        // console.log(newData);
        // console.log("기존 데이터 디렉터"+data.director);
        // setData({[data.director]:director});
    }
   
    const body=(
        <div style={modalStyle} className={classes.paper}>
        <div id="simple-modal-description">
            <p>제목:{data.title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}</p>
            <p>감독:{data.director}</p>
            <p>배우:{data.actor}</p>
            <p>평점:{data.userRating}</p>
            <p>개봉년도:{data.pubDate}</p>
        </div>
        </div>
    )
    const inputBody=(
        <form onSubmit={handleSubmit}>
        <div style={modalStyle} className={classes.paper}>
        <div id="simple-modal-description">
            <input name="title" value={title
            .replace(/<b>/gi,"").replace(/<\/b>/gi,"")} onChange={e=>setTitle(e.target.value)} />
            {/* <input name="director" value={director} onChange={e=>setDirector(e.target.value)} /> */}
            <p>배우:{newData.actor}</p>
            <p>평점:{newData.userRating}</p>
            <p>개봉년도:{newData.pubDate}</p>
        </div>
        </div>
        </form>
    )
    return (
        <div>
           <Modal
           open={props.open ? true : false}
           onClose={props.close}
           aria-labelledby="simple-modal-title"
           aria-describedby="simple-modal-description">
               {/* <button>수정</button> */}
               {inputBody}
               {/* {modify?{inputBody}:{body}} */}
           </Modal>
        </div>
    )
}
export default MovieDetail
