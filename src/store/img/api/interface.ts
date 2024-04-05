interface InitialState {
  isLoading: boolean;
  isError: boolean;
  data: string;
}

export const initialState: InitialState = {
  isLoading: false,
  isError: false,
  data: "",
};
