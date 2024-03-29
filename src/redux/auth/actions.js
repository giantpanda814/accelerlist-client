const authActions = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  ADMIN_LOGIN_REQUEST: "ADMIN_LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  SIGNUP_REQUEST: "SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_ERROR: "SIGNUP_ERROR",

  GET_USER_REQUEST: "GET_USER_REQUEST",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_ERROR: "GET_USER_ERROR",

  CREDENTIAL_VERIFY_REQUEST: "CREDENTIAL_VERIFY_REQUEST",
  CREDENTIAL_VERIFY_SUCCESS: "CREDENTIAL_VERIFY_SUCCESS",
  CREDENTIAL_VERIFY_ERROR: "CREDENTIAL_VERIFY_ERROR",

  CREDENTIAL_VERIFIED: "CREDENTIAL_VERIFIED",
  CREDENTIAL_NOT_VERIFIED: "CREDENTIAL_NOT_VERIFIED",
  UPDATE_USER_DATA: "UPDATE_USER_DATA",

  REFRESH_TOKEN_REQUEST: "REFRESH_TOKEN_REQUEST",
  REFRESH_TOKEN_SUCCESS: "REFRESH_TOKEN_SUCCESS",
  REFRESH_TOKEN_ERROR: "REFRESH_TOKEN_ERROR",

  GET_USER_INTERNATIONALIZATION_CONFIG_REQUEST:
    "GET_USER_INTERNATIONALIZATION_CONFIG_REQUEST",
  GET_USER_INTERNATIONALIZATION_CONFIG_REQUEST_SUCCESS:
    "GET_USER_INTERNATIONALIZATION_CONFIG_SUCCESS",
  GET_USER_INTERNATIONALIZATION_CONFIG_REQUEST_ERROR:
    "GET_USER_INTERNATIONALIZATION_CONFIG_REQUEST_ERROR",
  NAV_BAR_INDEX_REQUEST: "NAV_BAR_INDEX_REQUEST",

  SET_OPEN_MWS_AUTHORIZE_MODAL: "SET_OPEN_MWS_AUTHORIZE_MODAL",
  SET_CLOSE_MWS_AUTHORIZE_MODAL: "SET_CLOSE_MWS_AUTHORIZE_MODAL",

  PASSWORD_RESET_REQUEST: "PASSWORD_RESET_REQUEST",
  PASSWORD_RESET_REQUEST_SUCCESS: "PASSWORD_RESET_REQUEST_SUCCESS",
  PASSWORD_RESET_REQUEST_ERROR: "PASSWORD_RESET_REQUEST_ERROR",

  PASSWORD_UPDATE_REQUEST: "PASSWORD_UPDATE_REQUEST",
  PASSWORD_UPDATE_REQUEST_SUCCESS: "PASSWORD_UPDATE_REQUEST_SUCCESS",

	REDIRECT_TO_ONBOARDING: "REDIRECT_TO_ONBOARDING",

	redirectToOnboarding: () => ({
		type: authActions.REDIRECT_TO_ONBOARDING
	}),

  login: authData => ({
    type: authActions.LOGIN_REQUEST,
    authData
  }),

  adminLogin: authData => ({
    type: authActions.ADMIN_LOGIN_REQUEST,
    authData
  }),

  logout: redirect => ({
    type: authActions.LOGOUT,
    redirect
  }),

  signup: userData => ({
    type: authActions.SIGNUP_REQUEST,
    userData
  }),

  refreshToken: () => ({
    type: authActions.REFRESH_TOKEN_REQUEST
  }),

  getUser: () => ({
    type: authActions.GET_USER_REQUEST
  }),

  getUserInternationalizationConfig: () => ({
    type: authActions.GET_USER_INTERNATIONALIZATION_CONFIG_REQUEST
  }),

  verifyCredential: credentialData => ({
    type: authActions.CREDENTIAL_VERIFY_REQUEST,
    credentialData
  }),

  navBarIndexRequest: navBarIndex => ({
    type: authActions.NAV_BAR_INDEX_REQUEST,
    navBarIndex
  }),

  openMwsAuthorizeModal: () => ({
    type: authActions.SET_OPEN_MWS_AUTHORIZE_MODAL
  }),

  closeMwsAuthorizeModal: () => ({
    type: authActions.SET_CLOSE_MWS_AUTHORIZE_MODAL
  }),

  resetPassword: emailOrMobile => ({
    type: authActions.PASSWORD_RESET_REQUEST,
    emailOrMobile
  }),

  resetPasswordSuccess: message => ({
    type: authActions.PASSWORD_RESET_REQUEST_SUCCESS,
    message
  }),

  updatePassword: updatePayload => ({
    type: authActions.PASSWORD_UPDATE_REQUEST,
    updatePayload
  }),

  updateUserData: userData => ({
	type: authActions.UPDATE_USER_DATA,
	userData
  }),
};

export default authActions;
