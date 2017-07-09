import { Compiler, Component, Injector, TemplateRef, ViewChild, NgModuleRef } from '@angular/core';

import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { CustomModal } from '../custom.modal';

@Component({
  selector: 'reporter2',
  styleUrls: ['reporter2.component.css'],
  templateUrl: 'reporter2.component.html',
})
export class Reporter2Component {
  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector) {}

  openHumint() {
    this.modal.open(
      CustomModal,
      overlayConfigFactory(
        {
          isBlocking: false,
          title: 'HUMINT',
          image: 'humint.png',
          content:
            '09/09/16 – CIA Humint reports indicate that Islamic state and al-Qaeda in the Arabian Peninsula (AQAP) are working together in Yemen in order to maximise their efficiency in counteracting counterterrorism, as opposed to the way al-Qaeda branches and IS do in their remainder territories.\
',
        },
        BSModalContext,
      ),
    );
  }

  openOsint() {
    this.modal.open(
      CustomModal,
      overlayConfigFactory(
        {
          isBlocking: false,
          title: 'OSINT',
          image: 'socialnetworks.png',
          content: '',
        },
        BSModalContext,
      ),
    );
  }

  openSigint() {
    this.modal.open(
      CustomModal,
      overlayConfigFactory(
        {
          isBlocking: false,
          title: 'SIGINT',
          image: 'sigint.png',
          content:
            '24/06/17 – The Saudi Intelligence units of the Interior Ministry intercepted a phone call between two men, who are associated with ISIS, in which they had planned to commit a double suicide attack on the Grand Mosque in Mecca, at the peak of the Hajj.',
        },
        BSModalContext,
      ),
    );
  }

  openGeoint() {
    this.modal.open(
      CustomModal,
      overlayConfigFactory(
        {
          isBlocking: false,
          title: 'GEOINT',
          image: 'geoint.png',
          content: '24/06/17 – The Visint Corps of the NCA captured successfully the Islamic State’s leader in Yemen, Abu Bilal al-Harby:',
        },
        BSModalContext,
      ),
    );
  }

  openCyber() {
    this.modal.open(
      CustomModal,
      overlayConfigFactory(
        {
          isBlocking: false,
          title: 'CYBER',
          image: 'cyber.png',
          content:
            '09/05/16 – At the end of April 2015, the US Government announced the first attack conducted by the Cyber Command against online activities conducted by members of the ISIS. The war against the Islamic State also has cyberspace as a battlefield, for this reason, the US Cyber Command plans to run hacking operations and uses cyber weapons to destroy computer systems used by the ISIL, to destroy it functions (e.g. propaganda, economic support to militants) and to track its cyber hubs.\
At the recent meeting held in Hanover, Germany, the US President Barack Obama discussed with other leaders about the cyber strategy to contrast the Islamic State online.\
In March, Senior Pentagon officials confirmed the US Army’s first use of information warfare operations against the Islamic State as part of the campaign conducted to take back the Iraqi city of Mosul.\
The US military is using cyber tools to contrast the ISIS troops in the area, interfering members’ operation and communication.\
Skill shortage\
Security experts believe that the IS could speed up the growth of its cyber capabilities by paying cyber mercenaries or recruiting young hackers.\
Earlier 2016, intelligence experts reported that members of the IS were willing to pay Indian hackers to hack into government websites and gain access to sensitive documents. The members of the ISIS aim to create a database of potential Indian candidates from social media, who will hack government websites will receive up to $10,000 for every successful security breach.\
“There are various underground communities online where hackers interact regularly. Our investigation reveals that for the past six months, lucrative offers for stealing government data came pouring in and hackers were offered a huge sum. Such amount has never been offered to any Indian hacker before. We found that the offers were being made to spread ISIS reach in the country,” said the cyber-crime expert Kislay Choudhary.\
The hack of Government systems could allow terrorists to gather intelligence on their targets; the intelligence is aware that the Dash is focusing its recruiting activity on the Indian hacking community; many hackers are based out of various parts of South India, including Kashmir, Maharashtra, and Rajasthan.\
',
        },
        BSModalContext,
      ),
    );
  }
}
