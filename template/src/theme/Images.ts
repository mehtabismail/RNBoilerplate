import { ThemeVariables } from "./theme";


export default function ({ }: ThemeVariables) {
  return {
    svg: {
      LikeOutlined: require("./assets/svg/like_outlined.svg"),
      LikeFilled: require("./assets/svg/like-filled.svg"),
      HomeTab: require("./assets/svg/home_tab.svg"),
      ProfileTab: require("./assets/svg/profile_tab.svg"),
      ChatTab: require("./assets/svg/chat_tab.svg"),
      Catalogue: require("./assets/svg/catalogue_tab.svg"),
      HomeTabFilled: require("./assets/svg/home_tab_filled.svg"),
      ProfileTabFilled: require("./assets/svg/profile_tab_filled.svg"),
      ChatTabFilled: require("./assets/svg/chat_tab_filled.svg"),
      CatalogueFilled: require("./assets/svg/catalogue_tab_filled.svg"),
      Logout: require("./assets/svg/logout.svg"),
      Chat: require("./assets/svg/chat.svg"),
      Logo: require("./assets/svg/logo.svg"),
      Notification: require("./assets/svg/notification.svg"),
      ArrowRight: require("./assets/svg/arrow_right.svg"),
      BackButton: require("./assets/svg/back_button.svg"),
      Search: require('./assets/svg/search.svg'),
      CalenderFocused: require('./assets/svg/calender_focused.svg'),
      Clock: require('./assets/svg/clock.svg'),
      Calender: require('./assets/svg/calender.svg'),
      ArrowDown: require('./assets/svg/arrow_down.svg'),
      Upload: require('./assets/svg/upload.svg'),
      Settings: require('./assets/svg/settings.svg'),
      Users: require('./assets/svg/users.svg'),
      Lock: require('./assets/svg/lock.svg'),
      EditProfile: require('./assets/svg/edit_profile.svg'),
      Edit: require('./assets/svg/edit.svg'),
      Share: require('./assets/svg/share.svg'),
      Plus: require('./assets/svg/plus.svg'),
      Verified: require('./assets/svg/verified.svg'),
      Location: require('./assets/svg/location.svg'),
      Cross: require('../theme/assets/svg/cross.svg')
    },
    png: {
      TickToast: require("./assets/images/tickToast.jpg"),
      User: require('./assets/images/user.jpeg'),
    },
  };
}
