export interface TopBlog {
  userId: number;
  id: number;
  title: string;
}

interface InitialState {
    isLoading: boolean,
    isError: boolean,
    data: TopBlog[]
}

export const initialState:InitialState = {
    isLoading: false,
    isError: false,
    data: []
};
