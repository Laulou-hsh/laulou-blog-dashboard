export const SNACKBAR_MAP = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
}

export const SNACKBAR_TITLE_MAP = {
  [SNACKBAR_MAP.SUCCESS]: 'Success',
  [SNACKBAR_MAP.INFO]: 'Info',
  [SNACKBAR_MAP.WARNING]: 'Warning',
  [SNACKBAR_MAP.DANGER]: 'Danger',
}

export const SNACKBAR_DESCRIPTION_MAP = {
  [SNACKBAR_MAP.SUCCESS]: 'This is Success!',
  [SNACKBAR_MAP.INFO]: 'This is Info',
  [SNACKBAR_MAP.WARNING]: 'This is Warning',
  [SNACKBAR_MAP.DANGER]: 'This is Danger',
}

export const SNACKBAR_ICON = {
  DONE: 'done',
  NOTIFICATIONS: 'notifications',
  TRAVEL_EXPLORE: 'travel_explore',
  CAMPAIGN: 'campaign',
}

export const SNACKBAR_ICON_COLOR = {
  WHITE: 'white',
  BLACK: 'black',
}

export const SNACKBAR_ICON_MAP = {
  [SNACKBAR_MAP.SUCCESS]: {component: SNACKBAR_ICON.DONE, color: SNACKBAR_ICON_COLOR.WHITE},
  [SNACKBAR_MAP.INFO]: {component: SNACKBAR_ICON.NOTIFICATIONS, color: SNACKBAR_ICON_COLOR.WHITE},
  [SNACKBAR_MAP.WARNING]: {component: SNACKBAR_ICON.TRAVEL_EXPLORE, color: SNACKBAR_ICON_COLOR.WHITE},
  [SNACKBAR_MAP.DANGER]: {component: SNACKBAR_ICON.CAMPAIGN, color: SNACKBAR_ICON_COLOR.WHITE},
}
