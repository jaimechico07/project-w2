import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconEdit, IconTrash, IconDirectionSign,IconUserX, IconX, IconPlus, IconChefHat, IconSearch,IconUserPlus,IconUserMinus } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconEdit,
  IconTrash,
  IconDirectionSign,
  IconX,
  IconPlus,
  IconChefHat,
  IconSearch,
  IconUserPlus,
  IconUserMinus,
  IconUserX

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
