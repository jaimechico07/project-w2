import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconEdit, IconX
} from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconEdit,
  IconX

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
