export const handlerPending = state => {
  state.isLoading = true;
};

export const handlerRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handlerFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload.data;
  state.error = null;
};

export const handlerFulfilledPost = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.concat([payload.data]);
  state.error = null;
};

export const handlerFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(({ id }) => id !== payload.data.id);
  state.error = null;
};
