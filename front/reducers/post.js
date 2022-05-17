export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "박종익",
      },
      content: "첫 번째 게시글 #해시태그",
      Images: [
        {
          src: "https://picsum.photos/id/237/200/300",
        },
        {
          src: "https://picsum.photos/id/237/200/300",
        },
        {
          src: "https://picsum.photos/id/237/200/300",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "durant",
          },
          content: "첫 번째 댓글",
        },
        {
          User: {
            nickname: "lebron",
          },
          content: "두 번째 댓글",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "박종익",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
