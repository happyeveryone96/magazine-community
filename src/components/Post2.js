import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";


import {Grid, Image, Text, Button} from "../elements";
// import FavoriteIcon from '@material-ui/icons/Favorite';
import LikeBadge from './LikeBadge';
import {realtime} from '../shared/firebase';
import {useSelector} from 'react-redux';



import {history} from '../redux/configureStore';


const Post2 = (props) => {
    // const [is_like, setIsLike] = React.useState(true);
    // const user_id = useSelector(state => state.user.user.uid);
    // const likeCheck = () => {
    //   props._onClick();
    // }
    // React.useEffect(() => {
    //   const likeDB = realtime.ref(`like`);
    //   likeDB.on("value", (snapshot) => {
    //     console.log(snapshot.val());
    //     // setIsLike(snapshot.val().read);
    //   });
    //   return () => likeDB.off();
    // },[])
    
    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>

            </Grid>
            <Grid is_flex width="auto">
              <Text>{props.insert_dt}</Text>
              {props.is_me && 
                <Button margin="4px" width="auto" padding="4px" _onClick={() => {
                  history.push(`/write/${props.id}`)
                }}>
                수정
              </Button>
              }

            </Grid>
          </Grid>
          
          <Grid>
            <Image shape="rectangle" src={props.image_url} />
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid padding="16px">
            <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
            <LikeBadge></LikeBadge>
            
            {/* <Button 
              margin="4px 0 0 4px" 
              width="auto" 
              padding="8px" 
              > */}
                {/* <FavoriteIcon
                // onClick={}
                style={{color:'red', marginTop: '4px', padding:'4px'}}/> */}
                {/* {props.like}개
            </Button> */}

          </Grid>
        </Grid>
      </React.Fragment>
    );
}

Post2.defaultProps = {
  user_info: {
    user_name: "mean0",
    user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  },
  image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
  like: 0,
};






export default Post2;