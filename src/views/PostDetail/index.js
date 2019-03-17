import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import { connect } from 'react-redux';

import PostItem from '../../components/PostItem';
import Comments from '../../components/Comments';
import Header from '../../components/Header';

import { fetchPostDetail } from './action';

class PostDetail extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(this.props)
    this.props.dispatch(fetchPostDetail(id));
  }
  // state = {
  //   post: null,
  //   comments: []
  // }

  // async componentDidMount() {
  //   const { id } = this.props.match.params;

  //   try {
  //     const postSnapshot = await db.collection('posts').doc(id).get();
  //     const post = postSnapshot.data();

  //     const commentsSnapshot = await Promise.all(post.comments.map(ref => ref.get()));
  //     const comments = commentsSnapshot.map((snapshot) => {
  //       return {
  //         id: snapshot.id,
  //         ...snapshot.data()
  //       }
  //     });

  //     this.setState({
  //       post,
  //       comments,
  //     });

  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render() {
    // const { post, comments } = this.state;

    const { post, comments } = this.props;

    
      return (
        <Wrapper>
          <Header />
          <Contents>
            {
              post ? (
                <>
                  <PostItem isDetail post={post} />
                  <Comments comments={comments} />
                </>
              ) : null
            }
           </Contents>

        </Wrapper>
      );
    }    
  }

const Wrapper = styled.div``;

const Contents = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = (state) => {
  console.log(state)
  return state.postDetail
}

export default connect(mapStateToProps)(PostDetail);