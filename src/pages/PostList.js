import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import Post from '../components/Post';
import Layout from '../components/Layout'
import {actionCreators as postActions} from '../redux/modules/post'
import InfinityScroll from "../shared/InfinityScroll";
import {Button, Grid} from '../elements';

  

const PostList = (props) => {
    
    const post_list = useSelector((state) => state.post.list);
    const dispatch = useDispatch();
    const user_info = useSelector((state) => state.user.user);
    const is_loading = useSelector((state) => state.post.is_loading);
    const paging = useSelector((state) => state.post.paging)

   

    const {history} = props;

    React.useEffect(() => {
        if(post_list.length < 2) { // 댓글 보기 누르면 post_list.length === 1
                                   // 원래 상태는 post_list.length === 0
            dispatch(postActions.getPostFB());
        }
    }, []);
    
    return (
        <React.Fragment>
        <Layout></Layout>

            <Grid bg={"#EFF6FF"} padding="20px 0">
            {/* <Post /> */}
            <InfinityScroll callNext={() => {
                dispatch(postActions.getPostFB(paging.next))
            }}
            is_next={paging.next? true : false}
            loading={is_loading}
            >
            {post_list.map((p, idx) => {
                if(p.user_info.user_id === user_info?.uid) {
                    return (
                        // <Grid bg="#ffffff" margin="10px 0" key={p.id} _onClick={() => history.push(`/post/${p.id}`)}>
                        <Grid bg="#ffffff" margin="10px 0" key={p.id}>
                            <Post {...p} is_me />
                            <Button margin="0 0 20px 20px" width="auto" padding="4px" _onClick={() => history.push(`/post/${p.id}`)}>댓글 보기</Button>
                            {/* <Button _onClick={() => dispatch(postActions.countLikeFB())}>as</Button> */}
                        </Grid>
                    )
                } else {
                    return (
                    <Grid bg="#ffffff" margin="10px 0" key={p.id}>
                        <Post {...p} _onClick={() => history.push(`/post/${p.id}`)}/>
                        <Button margin="0 0 20px 20px" width="auto" padding="4px" _onClick={() => history.push(`/post/${p.id}`)}>댓글 보기</Button>
                    </Grid>
                    );
                }
                
            })}

            </InfinityScroll>
            </Grid>

        </React.Fragment>
    )
} 

export default PostList;
