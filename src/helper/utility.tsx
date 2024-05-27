import {Platform, Share} from 'react-native';
import {colors} from '../theme/colors';

export const shareToAny = message => {
  const shareOptions = {
    message: message,
  };

  Share.share(shareOptions);
};

export const validateEmail = email => {
  const expression =
    /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  return expression.test(email);
};

export const validateMobile = mobile => {
  if (mobile.length !== 10) {
    return false;
  }
  return true;
};

export const USE_NATIVE_DRIVER = Platform.select({
  ios: true,
  android: Platform.constants?.Release !== '12',
  default: true,
});

export const statusValidation = (status: string) => {
  let temp = {
    text_color: '',
    bg_color: '',
    title: '',
  };
  if (status === 'TO DO') {
    temp = {
      text_color: colors.status_one_text,
      bg_color: colors.status_one_text_bg,
      title: status,
    };
  } else if (status === 'IN PROGRESS') {
    temp = {
      text_color: colors.status_two_text,
      bg_color: colors.status_two_text_bg,
      title: status,
    };
  } else if (status === 'RESOLVED') {
    temp = {
      text_color: colors.status_three_text,
      bg_color: colors.status_three_text_bg,
      title: status,
    };
  }
  else if (status === 'PENDING') {
    temp = {
      text_color: colors.status_four_text,
      bg_color: colors.status_four_text_bg,
      title: "Pending",
    };
  }
  else if (status === 'REJECTED') {
    temp = {
      text_color: colors.status_one_text,
      bg_color: colors.status_one_text_bg,
      title: "Rejected",
    };
  }
  else if (status === 'APPROVED') {
    temp = {
      text_color: colors.status_three_text,
      bg_color: colors.status_three_text_bg,
      title: "Approved",
    };
  }
  
  return temp;
};
