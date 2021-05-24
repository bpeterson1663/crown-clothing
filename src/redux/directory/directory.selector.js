import { createSelector } from 'reselect'

const selectDirectory = (state) => state.selectDirectory

export const selectDirectorySelections = createSelector([selectDirectory], (directory) => directory.selections)
