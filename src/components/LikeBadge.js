import React, { useState, setState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Permit from '../shared/Permit'
import {useSelector} from 'react-redux';
import {apiKey} from "../shared/firebase";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";


// import {useSelector} from 'react-redux';
// import {realtime} from '../shared/firebase';
// import ReactDOM from 'react-dom'

// const LikeBadge = props => {
//     const [is_like, setIsLike] = React.useState(true);
//     // const user_id = useSelector(state => state.user.user.uid);


//         console.log('a');

//       props._onClick();
//     React.useEffect(() => {
//       const likeDB = realtime.ref(`like`);
//       likeDB.on("value", (snapshot) => {
//         console.log(snapshot.val());
//         setIsLike(snapshot.val().read);
//       });
//       return () => likeDB.off();
//     },[])

//     return (
//         // <div className="App">
//         //     <button
//         //         style={{ padding: 8, background: 'transparent', border: 0 }}
//         //         onClick={() => setIsBlue(!isBlue)}
//         //     >
//         //         <FavoriteIcon
//         //         color={isBlue ? 'blue' : 'black'}
//         //         style={{ verticalAlign: 'middle' }}
//         //         />
//         //     </button>
//         // </div>
        
//         <React.Fragment>
//                 <FavoriteIcon style={{ verticalAlign: 'middle', color: 'red'}} ></FavoriteIcon>
//         </React.Fragment>
//     );
// }
// LikeBadge.defaultProps = {
//     _onClick: () => {
//     },
// };

// export default LikeBadge;
//////////


//함수형
function LikeBadge (props) {
  // const dispatch = useDispatch();

  let [likes, setLike] = useState(0);
  let [updated, setUpdated] = useState(false);
  let [color, setColor] = useState('gray');


  const updateLikes = () => {

    if(!updated) {
      setLike(likes + 1);
      setUpdated(updated = true);
      setColor(color = 'red');
      
    } else {
      setLike(likes - 1);
      setUpdated(updated = false);
      setColor(color = 'gray');

    }
    // dispatch(postActions.toggleLikeFB(props.id));
    
  }

  
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true: false;
    if(is_login && is_session) {
        return (
            <React.Fragment>
                <div><FavoriteIcon style={{verticalAlign: 'middle', color:color}} onClick={updateLikes}>좋아요</FavoriteIcon>{likes}개</div>
            </React.Fragment>
        )
    }
    return (
      <div><FavoriteIcon style={{verticalAlign: 'middle', color:'gray'}}></FavoriteIcon>{likes}개</div>
    );
}


// 클래스형 
// class LikeBadge extends React.Component {
// // function Likes (props){

//   constructor(props){

//     super(props);
//     this.state = {
//       likes: 0,
//       updated: false,
//       color: 'gray',
//     };

//   }
//     // const [likes, setLikes] = useState(0);
//     // const [updated, setUpdate] = useState(false);
//     // const [color, setColor] = useState('gray');
//   updateLikes = () => {

//     if(!this.state.updated) {
//       this.setState((prevState, props) => {
//         return {
//           likes: prevState.likes + 1,
//           updated: true,
//           color: 'red',
//         };
//       });

//     } else {

//       this.setState((prevState, props) => {
//         return {
//           likes: prevState.likes - 1,
//           updated: false,
//           color: 'gray',
//         };
//       });

//     }
//   }
  
  
//   render(){
//     // const is_login = useSelector(state => state.user.is_login);
//     const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
//     const is_session = sessionStorage.getItem(_session_key)? true: false;
    
//     if(is_session) {
//         return (
//             <React.Fragment>
//                 <div><FavoriteIcon style={{verticalAlign: 'middle', color:this.state.color}} onClick={this.updateLikes}>좋아요</FavoriteIcon>{this.state.likes}개</div>
//             </React.Fragment>
//         )
//     }
//     return (
//       <div><FavoriteIcon style={{verticalAlign: 'middle', color:'gray'}}></FavoriteIcon>{this.state.likes}개</div>
//     );
//   }
// }

export default LikeBadge;

