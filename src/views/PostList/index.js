import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import { connect } from 'react-redux';

import Header from '../../components/Header';
import PostItem from '../../components/PostItem';

import { fetchPostList } from './action';

class PostList extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchPostList());
    }
  // state = {
  //   posts: []
  // }

  // async componentDidMount() {
  //   try {
  //     const postsSnapshot = await db.collection('posts').get();

  //     const posts = postsSnapshot.docs.map((snapshot) => {
  //       const data = snapshot.data();
  //       return {
  //         ...data,
  //         id: snapshot.id,
  //       }
  //     });

  //     if (posts && posts.length !== 0) {
  //       this.setState({
  //         posts
  //       });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render() {
    console.log(this.props)
    const { posts } = this.props;
    return (
      <Wrapper>
        <Header />
        <Contents>
          {posts.map((post) => {
            return <PostItem key={post.id} post={post} />
          })}
        </Contents>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div``;

const Contents = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const mapStatetoProps = (state) => {
  return state.postList;
}

export default connect(mapStatetoProps)(PostList);