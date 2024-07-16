import { NgModule } from '@angular/core';


import { TablerIconsModule } from 'angular-tabler-icons';
import { IconEdit,IconTrash, IconDirectionSign,IconUserX,IconPlayerPlay
  ,IconCalculator, IconX, IconPlus, IconChefHat,IconListDetails
  ,IconAlarm,IconUserFilled,IconUser,IconArrowBearLeft, IconHourglassEmpty,IconSearch,IconUserPlus,IconRulerMeasure,IconHome,IconUserMinus,IconReceipt,IconEraser,IconBrandYoutubeFilled
} from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconPlus,
  IconEdit,
  IconUser,
  IconAlarm,
  IconUserFilled,
  IconTrash,
  IconDirectionSign,
  IconX,
  IconChefHat,
  IconSearch,
  IconUserPlus,
  IconUserMinus,
  IconUserX,
  IconEraser,
  IconBrandYoutubeFilled,
  IconHourglassEmpty,
  IconCalculator,
  IconPlayerPlay,
  IconListDetails,
  IconReceipt,
  IconRulerMeasure,
  IconHome,
  IconArrowBearLeft


};
@NgModule({
  declarations: [],
  imports: [
  TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }
