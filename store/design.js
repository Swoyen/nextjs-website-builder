import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultState = {
  components: [],
  outlineShownTagId: "",
};

const designSlice = createSlice({
  name: "design",
  initialState: defaultState,
  reducers: {
    componentAdded: (design, action) => {
      design.components.push(action.payload);
    },
    outlineShown: (design, action) => {
      design.outlineShownTagId = action.payload;
    },
  },
});

export const addComponent = (component) => (dispatch, getState) => {
  return dispatch(componentAdded(component));
};

export const showOutline = (tagId) => (dispatch, getState) => {
  return dispatch(outlineShown(tagId));
};

export const getDesignComponents = createSelector(
  (state) => state.entities.design,
  (design) => design.components
);

export const getIsHighlighted = (tagId) =>
  createSelector(
    (state) => state.entities.design,
    (design) => design.outlineShownTagId === tagId
  );

const { componentAdded, outlineShown } = designSlice.actions;
export default designSlice.reducer;
