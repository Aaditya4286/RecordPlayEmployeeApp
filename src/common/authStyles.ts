import {StyleSheet} from 'react-native';
import {
  Screen,
  universalPaddingHorizontal,
} from '../theme/dimens';
import {colors} from '../theme/colors';

export const authStyles = StyleSheet.create({
  welcomeLogo: {
    height: Screen.Height / 2 - 30,
    width: Screen.Width - universalPaddingHorizontal,
    alignSelf: 'center',
    marginTop: '10%',
  },
  welcomeText: {
    alignItems: 'center',
    marginVertical: '10%',
  },
  registerButton: {
    marginTop: 20,
  },
  buttonContainer: {
    padding: universalPaddingHorizontal,
    backgroundColor: colors.white,
  },
  topText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signupText: {
    textAlign: 'center',
    marginTop: '10%',
  },
  signupText2: {
    textAlign: 'center',
  },
  registerText: {
    textAlign: 'center',
    marginBottom: 12,
  },
  // emailInput: {
  //   marginTop: 100,
  // },
  inputText: {
    marginTop: '10%',
    marginLeft: 5,
  },
  mainPagination: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
  },
  inputText2: {
    color: colors.primaryText,
    marginTop: '5%',
    marginLeft: 5,
  },
  swiperpageView: {
    backgroundColor: colors.white,
  },
  alreadyLoginView: {
    // alignItems: 'center',
    // textAlign:'center',
    flexDirection: 'row',
    // top:0,
    // bottom:0,
    // position:'absolute',
  },
  inputText3: {
    // textAlign: 'center',
  },
  inputText4: {
    // textAlign: 'center',
  },
  image: {
    height: 18,
    width: 22,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 18,
    right: 10,
  },
  OTPText: {
    textAlign: 'center',
    marginTop: '6%',
  },
  inputText6: {
    textAlign: 'center',
  },
  otpButton: {
    marginTop: 25,
    width: '92%',
    backgroundColor: colors.buttonBg,
  },
  verifytext: {
    textAlign: 'center',
  },
  countrybox: {
    height: 56,
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: 6,
    marginTop: 5,
  },
  periodTypeView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    // backgroundColor:'green'
  },
  countryimage: {
    height: 28,
    width: 28,
  },
  countryview: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-evenly',
    marginTop: 12,
  },
  VerifyButton: {
    marginTop: 20,
  },
  main: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dashboardButton: {
    marginTop: 20,
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
  forgotText: {
    textAlign: 'right',
    marginTop: 10,
  },
  phoneInputContainer: {
    width: '100%',
    backgroundColor: colors.white,
  },
  Bottomimage: {
    marginTop: 10,
    height: 20,
    width: 20,
  },
  accountView: {
    borderRadius: 6,
  },
  accountLogo: {
    height: 18,
    width: 16,
    marginTop: 2,
    marginLeft: 6,
  },
  maintabbarView: {
    flexDirection: 'row',
    borderRadius: 100,
  },
  tabbarView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 100,
  },
  lineView: {
    flexDirection: 'row',
    padding: 10,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  tabHeight: {
    marginTop: 20,
    flex: 1,
  },
  BottomText: {
    // color: colors.input,
  },
  swiper: {
    flex: 1,
  },
  mainSwipeTextView: {
    backgroundColor: colors.white,
  },
  fundsmainView: {
    // backgroundColor: colors.input,
    borderRadius: 6,
    marginTop: 20,
  },
  johnimage: {
    height: 70,
    width: 70,
  },
  editImage: {
    height: 20,
    width: 20,
    marginTop: 25,
  },
  columnView: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  rowfundsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 10,
  },
  leverageView: {
    // backgroundColor: colors.leverageview,
    borderRadius: 6,
    marginTop: 15,
    marginHorizontal: 16,
  },
  settingsImage: {
    height: 20,
    width: 20,
    marginTop: 14,
  },
  mt5View: {
    flexDirection: 'column',
  },
  setView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    paddingVertical: 7,
  },
  bankView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: colors.bankview,
    borderBottomLeftRadius: 6,
    paddingVertical: 10,
    borderBottomRightRadius: 6,
    marginTop: 12,
  },
  internalTransfer: {
    // backgroundColor: colors.bankview,
    borderBottomLeftRadius: 6,
    paddingVertical: 10,
    borderBottomRightRadius: 6,
    marginTop: 12,
  },
  internalBox: {
    // backgroundColor: colors.internal,
    marginHorizontal: 18,
    height: 55,
    borderRadius: 6,
  },
  internalHeading: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  internalTransferBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  deposit: {
    // backgroundColor: colors.green,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    // maxWidth: '80%',
  },
  depositImage: {
    height: 20,
    width: 20,
  },
  depositText: {
    marginTop: 5,
  },
  withdraw: {
    // backgroundColor: colors.purple,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  withdrawImage: {
    height: 20,
    width: 20,
  },
  withdrawText: {
    marginTop: 5,
  },
  history: {
    // backgroundColor: colors.oarche,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  historyImage: {
    height: 20,
    width: 20,
  },
  historyText: {
    marginTop: 5,
  },
  bankrowView: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  balanceView: {
    // backgroundColor: colors.bottomtab,
    borderRadius: 6,
    marginTop: 20,
    // borderColor: colors.bordercolor,
    borderWidth: 2,
  },
  balanceRow: {
    flexDirection: 'column',
  },
  marginRow: {
    flexDirection: 'column',
  },
  mainbalancemarginView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 7,
  },
  balanceText: {
    textAlign: 'right',
  },
  currentText: {
    marginTop: 34,
    paddingLeft: 5,
  },
  sheet2: {
    marginHorizontal: 18,
  },
  sheet3: {
    marginHorizontal: 8,
  },
  statusText: {
    textAlign: 'center',
    marginTop: 5,
  },
  picker: {
    // borderColor: colors.inactivedotstyle,
    borderWidth: 2,
    borderRadius: 6,
    marginTop: 5,
  },
  vectorImage: {
    height: 8,
    width: 16,
  },
  closeButton: {
    marginTop: 20,
    width: '47%',
  },
  closesubmitButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centImage: {
    height: 100,
    marginTop: 10,
    marginHorizontal: 16,
  },
  plusaccountImage: {
    height: 45,
    width: 40,
    marginTop: 5,
  },
  centView: {
    flexDirection: 'column',
  },
  centrowView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    width: '95%',
  },
  mamrowView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    width: '93%',
  },
  standardrowView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    width: '81%',
  },
  prorowView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    width: '65%',
  },
  popularImage: {
    position: 'absolute',
    height: 42,
    width: 74,
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  popularText: {
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'center',
  },

  phoneInput: {
    borderWidth: 2,
    // borderColor: colors.inactivedotstyle,
    borderRadius: 6,
    padding: 15,
  },
  phoneText: {
    color: colors.secondaryText,
  },
  flagStyle: {
    height: 28,
    borderRadius: 16,
  },
  subProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    marginRight: 6,
  },
  profileLogoStyle: {
    height: 48,
    width: 48,
    elevation: 4,
    // borderColor: colors.bordercolor,
    borderRadius: 6,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  profileTextView: {
    marginHorizontal: 15,
  },
  subTitleStyle: {
    marginTop: 1,
  },
  rightIconView: {
    alignSelf: 'center',
  },
  rightIconStyle: {
    width: 8,
    height: 16,
  },
  line: {
    height: 1,
    // backgroundColor: colors.inactivedotstyle,
    marginTop: 20,
    width: '95%',
    alignSelf: 'flex-end',
  },
  mainProfileView: {
    flexDirection: 'row',
  },
  profileLogoView: {
    alignSelf: 'center',
  },
  subProfileView: {
    flex: 1,
  },
  centText: {
    // paddingLeft: s(10),
    // marginTop: vs(10),
  },
  referImgStyle: {
    height: 246,
    width: 244,
    alignSelf: 'center',
    marginTop: 40,
  },
  placeHolderPadding: {
    paddingLeft: 10,
  },
  inputlabel: {
    marginTop: 20,
  },
  inputlabel2: {
    marginTop: 50,
  },
  otpText: {
    marginTop: 10,
    textAlign: 'center',
  },
  otpText2: {
    marginTop: 10,
  },
  sendOtpButton: {
    marginTop: 40,
  },
  otpTextView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  inputStyle: {
    width: '90%',
    height: 60,
    alignSelf: 'center',
    marginTop: 35,
  },
  codeStyle: {
    width: 40,
    height: 58,
    borderRadius: 6,
    // borderColor: colors.inactivedotstyle,
    color: colors.primaryText,
    borderBottomWidth: 1,
    borderWidth: 0,
    fontSize: 30,
    fontWeight: '500',
  },
  underlineStyleHighLighted: {
    borderColor: colors.primaryText,
  },
  forgotView: {
    alignSelf: 'flex-end',
    paddingRight: 8,
    marginTop: 10,
  },
});
