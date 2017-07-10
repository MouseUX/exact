import { Compiler, Component, Injector, TemplateRef, ViewChild, NgModuleRef } from '@angular/core';

import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { CustomModal } from '../custom.modal';

@Component({
  selector: 'entity',
  styleUrls: ['entity.component.css'],
  templateUrl: 'entity.component.html'
})
export class EntityComponent {
  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector) {}

  openModal() {
    this.modal.open(
      CustomModal,
      overlayConfigFactory(
        {
          isBlocking: false,
          title: 'اليمن: الحوثيون يطلقون صاروخا على سفينة إماراتية',
          image: 'yemens stability 7 arabic.jpg',
          content:           'اطلق الحوثيون في الليلة الفاصلة لأمس الأربعاء واليوم الخميس 15 جوان 2017، صاروخا على سفينة إماراتية قبالة ساحل اليمن مما أسفر عن إصابة أحد أفراد الطاقم.\n\nوجاء في بيان لوكالة الأنباء السعودية نقلا "تعرضت سفينة إماراتية لدى خروجها من ميناء المخا اليمني لهجوم بصاروخ موجه نفذته الميليشيات الحوثية، دون أن يسفر عن أضرار في السفينة... ونتج عن ذلك إصابة شخص واحد من الطاقم"\nويجدر الذكر أن ميناء المخا المطل على البحر الأحمر قريب من مضيق باب المندب الذي تمر عبره معظم شحنات النفط بالعالم.',

        },
        BSModalContext,
      ),
  );
  }
}
