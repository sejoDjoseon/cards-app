import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';

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
    [IconName.Configuration]: faCoffee,
    [IconName.Exit]: faCoffee,
    [IconName.Viewed]: faCoffee,
    [IconName.NotViewed]: faCoffee,
    [IconName.Play]: faCoffee,
    [IconName.PlayInverted]: faCoffee,
    [IconName.Random]: faCoffee,
    [IconName.Next]: faCoffee,
    [IconName.Sound]: faCoffee,
    [IconName.Timer]: faCoffee,
    [IconName.Pause]: faCoffee,
    [IconName.Coffe]: faCoffee,
  }[icon];
}

export { IconName, getFaIcon };
