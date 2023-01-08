import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faArrowRightFromBracket,
  faBars,
  faCirclePlay,
  faCoffee,
  faEye,
  faEyeSlash,
  faGear,
  faHourglass,
  faPause,
  faPlay,
  faShare,
  faShuffle,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

enum IconName {
  Menu = 'Menu',
  Configuration = 'Configuration',
  Exit = 'Exit',
  Viewed = 'Viewed',
  NotViewed = 'NotViewed',
  Play = 'Play',
  PlayInverted = 'PlayInverted',
  Random = 'Random',
  Next = 'Next',
  Sound = 'Sound',
  Timer = 'Timer',
  Pause = 'Pause',
  Coffe = 'Coffe',
}

function getFaIcon(icon: IconName): IconDefinition {
  return {
    [IconName.Menu]: faBars,
    [IconName.Configuration]: faGear,
    [IconName.Exit]: faArrowRightFromBracket,
    [IconName.Viewed]: faEye,
    [IconName.NotViewed]: faEyeSlash,
    [IconName.Play]: faPlay,
    [IconName.PlayInverted]: faCirclePlay,
    [IconName.Random]: faShuffle,
    [IconName.Next]: faShare,
    [IconName.Sound]: faVolumeUp,
    [IconName.Timer]: faHourglass,
    [IconName.Pause]: faPause,
    [IconName.Coffe]: faCoffee,
  }[icon];
}

export { IconName, getFaIcon };
