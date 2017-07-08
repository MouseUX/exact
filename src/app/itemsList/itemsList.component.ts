import { Component } from '@angular/core';

@Component({
  selector: 'itemsList',
  styleUrls: ['itemsList.component.css'],
  templateUrl: 'itemsList.component.html',
})
export class ItemsListComponent {
  sources: Array<Object>;
  relatedOrgs: Array<Object>;
  timeOfContent: Array<Object>;
  relatedEntity: Array<Object>;
  itemList: Array<Object>;
  selectedItem: any;

  constructor() {
    this.sources = [
      { isChecked: true, name: 'Osint' },
      { isChecked: true, name: 'Social Networks' },
      { isChecked: false, name: 'Academic Research' },
      { isChecked: true, name: 'Sigint' },
      { isChecked: true, name: 'Cyber' },
      { isChecked: false, name: 'Visint' },
      { isChecked: true, name: 'Humint' },
    ];
    this.relatedOrgs = [
      { isChecked: true, name: 'IS/ISIS' },
      { isChecked: false, name: 'Al-Qeda/AQAP' },
      { isChecked: false, name: 'Jahabat al nusra' },
      { isChecked: true, name: 'Houthis' },
      { isChecked: true, name: 'Southern Movement' },
    ];
    this.timeOfContent = [
      { isChecked: true, name: 'Last 24 hours' },
      { isChecked: true, name: 'Last week' },
      { isChecked: true, name: 'Last month' },
      { isChecked: true, name: 'Last year' },
    ];
    this.relatedEntity = [
      { isChecked: true, name: 'Abu Bilal Al-Harbi ' },
      { isChecked: true, name: 'Abu Bakr al-Baghdadi' },
      { isChecked: true, name: 'Nasir al-Wuhayshi' },
      { isChecked: true, name: 'Qasim al-Raymi' },
    ];

    this.selectedItem = 0;
    this.itemList = [
      {
        Title: 'Saudis foil attack on Grand Mosque in Mecca',
        Brief: '23.06.17: Saudis foil attack on Grand Mosque in Mecca',
        Text:
          'Saudi security forces on\nFriday (June 23rd) prevented an imminent attack on the Grand Mosque in Mecca,\nthe country\'s Interior Ministry said on state-run TV.\n\n\n\nA suspect in the planned attack on the mosque blew himself up in\na nearby neighborhood when security forces surrounded a home where the man was\nhiding, according to the ministry.\n\n\n\nThe suspect refused to comply with demands to surrender, opened\nfire on security forces and then killed himself, officials said.\n\n\n\nThe explosion caused the partial collapse of the building in\nwhich the suspect was hiding. Six expatriates were injured and taken to a\nhospital, and five security personnel received minor injuries, a Saudi Press\nofficial in London told CNN.\n\n\n\nFive people, including one woman, suspected of involvement in\nthe plot were arrested. Three groups, two based in Mecca and one in Jeddah,\nplanned the attack, the Interior Ministry said.\n\n\n\nThe Grand\nMosque, or the Masjid al-Haram, is the largest mosque in the world and\nsurrounds Islam\'s holiest site, the Kaaba -- a cube-shaped shrine that\nworshipers circle during the Hajj, the annual pilgrimage that brings millions\nof people to Mecca.\n\n\nForeign involvement suspected\n\n\nThe Interior\nMinistry said the identity of the attacker was still being verified but pointed\nto foreign involvement, according to the state-run Saudi Press Agency.\n\n\n\n"They\nobeyed their evil and corrupt selves serving schemes managed from abroad whose\naim is to destabilize the security and stability of this blessed country,"\nthe ministry was quoted as saying.\n\n\n\n"The\nsecurity people, with the help of Almighty Allah, and then the unlimited\nsupport of the Custodian of the Two Holy Mosques and the Crown Prince, will be able\nto foil these criminal schemes and arrest those involved in them."\n\n\n\nUAE\nForeign Minister Sheikh Abdullah bin Zayed Al Nahyan condemned the attempted\nattack and said his country stood with Saudi Arabia in combating terrorism.\n\n\n\n"This\nheinous crime exposes the extent of terrorism and the savagery of those\nterrorist groups, and no one in their right mind can justify or explain\nit," he said in a statement Saturday.\n\n\nMosques targeted\n\n\nSaudi\nArabia has suffered a string of terror attacks in recent years, as well as\nthwarting a number of alleged plots.\n\n\n\nIn\nOctober, the Interior Ministry said Saudi security forces had arrested two\nseparate terrorist cells, one of which planned to attack a football World Cup\nqualifying match in Jeddah that month. Four Pakistani nationals were arrested\nin connection with that plot, while four Saudi nationals were detained from the\nother cell.\n\n\n\nThree\nsuicide bombings were carried out in July last year -- in Medina, Jeddah and\nQatif. Saudi authorities identified the Jeddah bomber as a Pakistani; two\nguards were wounded in the attack, close to the US consulate. The Medina\nattack, close to one of the holiest sites in Islam, killed four security\nguards. No group claimed responsibility for the attack, but Saudi officials\nblamed local cells sympathetic to ISIS.\n\n\n\nA Shia\nmosque in al-Ahsa was targeted in January 2016 in an attack that claimed at\nleast four lives. No claim of responsibility was made, but the attack was\nbelieved to have been carried out by ISIS or one of its affiliates.\n\n\n\nAt least\n13 people were killed in an explosion at a mosque in the Asir region of\nsouthwestern Saudi Arabia in August 2015 and five more in an attack on a Shia\nmosque in Saihat, on the country\'s east coast. ISIS or an ISIS affiliate were\nblamed.\n\n\nThe kingdom was rocked by two\nattacks in May 2015, both claimed by ISIS. One suicide bomber killed 21 people at the Imam Ali\nmosque in Qudayh and another, a\nman disguised as a woman, claimed\nthree lives when he blew himself up outside a mosque in Dammam.',
        'Publish Time': '2017-06-24T10:27',
        Source: 'CNN',
        EEI: 'Terror in the Gulf',
        Person: 'Abdullah bin Zayed Al Nahyan',
        Location: 'Mecca, Masjid al-Haram',
        Organization: 'The Interior Ministry',
        KeyPhrases: 'Attack on Grand Mosque, Saudi Arabia, UAE Foreign Minister, ISIS',
        Picture: 'terror in the gulf english 1.JPG',
      },
      {
        Title: 'Saudis foil attack on Grand Mosque in Mecca2',
        Brief: '23.06.17: Saudis foil attack on Grand Mosque in Mecca',
        Text:
          'Saudi security forces on\nFriday (June 23rd) prevented an imminent attack on the Grand Mosque in Mecca,\nthe country\'s Interior Ministry said on state-run TV.\n\n\n\nA suspect in the planned attack on the mosque blew himself up in\na nearby neighborhood when security forces surrounded a home where the man was\nhiding, according to the ministry.\n\n\n\nThe suspect refused to comply with demands to surrender, opened\nfire on security forces and then killed himself, officials said.\n\n\n\nThe explosion caused the partial collapse of the building in\nwhich the suspect was hiding. Six expatriates were injured and taken to a\nhospital, and five security personnel received minor injuries, a Saudi Press\nofficial in London told CNN.\n\n\n\nFive people, including one woman, suspected of involvement in\nthe plot were arrested. Three groups, two based in Mecca and one in Jeddah,\nplanned the attack, the Interior Ministry said.\n\n\n\nThe Grand\nMosque, or the Masjid al-Haram, is the largest mosque in the world and\nsurrounds Islam\'s holiest site, the Kaaba -- a cube-shaped shrine that\nworshipers circle during the Hajj, the annual pilgrimage that brings millions\nof people to Mecca.\n\n\nForeign involvement suspected\n\n\nThe Interior\nMinistry said the identity of the attacker was still being verified but pointed\nto foreign involvement, according to the state-run Saudi Press Agency.\n\n\n\n"They\nobeyed their evil and corrupt selves serving schemes managed from abroad whose\naim is to destabilize the security and stability of this blessed country,"\nthe ministry was quoted as saying.\n\n\n\n"The\nsecurity people, with the help of Almighty Allah, and then the unlimited\nsupport of the Custodian of the Two Holy Mosques and the Crown Prince, will be able\nto foil these criminal schemes and arrest those involved in them."\n\n\n\nUAE\nForeign Minister Sheikh Abdullah bin Zayed Al Nahyan condemned the attempted\nattack and said his country stood with Saudi Arabia in combating terrorism.\n\n\n\n"This\nheinous crime exposes the extent of terrorism and the savagery of those\nterrorist groups, and no one in their right mind can justify or explain\nit," he said in a statement Saturday.\n\n\nMosques targeted\n\n\nSaudi\nArabia has suffered a string of terror attacks in recent years, as well as\nthwarting a number of alleged plots.\n\n\n\nIn\nOctober, the Interior Ministry said Saudi security forces had arrested two\nseparate terrorist cells, one of which planned to attack a football World Cup\nqualifying match in Jeddah that month. Four Pakistani nationals were arrested\nin connection with that plot, while four Saudi nationals were detained from the\nother cell.\n\n\n\nThree\nsuicide bombings were carried out in July last year -- in Medina, Jeddah and\nQatif. Saudi authorities identified the Jeddah bomber as a Pakistani; two\nguards were wounded in the attack, close to the US consulate. The Medina\nattack, close to one of the holiest sites in Islam, killed four security\nguards. No group claimed responsibility for the attack, but Saudi officials\nblamed local cells sympathetic to ISIS.\n\n\n\nA Shia\nmosque in al-Ahsa was targeted in January 2016 in an attack that claimed at\nleast four lives. No claim of responsibility was made, but the attack was\nbelieved to have been carried out by ISIS or one of its affiliates.\n\n\n\nAt least\n13 people were killed in an explosion at a mosque in the Asir region of\nsouthwestern Saudi Arabia in August 2015 and five more in an attack on a Shia\nmosque in Saihat, on the country\'s east coast. ISIS or an ISIS affiliate were\nblamed.\n\n\nThe kingdom was rocked by two\nattacks in May 2015, both claimed by ISIS. One suicide bomber killed 21 people at the Imam Ali\nmosque in Qudayh and another, a\nman disguised as a woman, claimed\nthree lives when he blew himself up outside a mosque in Dammam.',
        'Publish Time': '2017-06-24T10:27',
        Source: 'CNN',
        EEI: 'Terror in the Gulf',
        Person: 'Abdullah bin Zayed Al Nahyan',
        Location: 'Mecca, Masjid al-Haram',
        Organization: 'The Interior Ministry',
        KeyPhrases: 'Attack on Grand Mosque, Saudi Arabia, UAE Foreign Minister, ISIS',
        Picture: 'terror in the gulf english 1.JPG',
      },
      {
        Title: 'Saudis foil attack on Grand Mosque in Mecca3',
        Brief: '23.06.17: Saudis foil attack on Grand Mosque in Mecca',
        Text:
          'Saudi security forces on\nFriday (June 23rd) prevented an imminent attack on the Grand Mosque in Mecca,\nthe country\'s Interior Ministry said on state-run TV.\n\n\n\nA suspect in the planned attack on the mosque blew himself up in\na nearby neighborhood when security forces surrounded a home where the man was\nhiding, according to the ministry.\n\n\n\nThe suspect refused to comply with demands to surrender, opened\nfire on security forces and then killed himself, officials said.\n\n\n\nThe explosion caused the partial collapse of the building in\nwhich the suspect was hiding. Six expatriates were injured and taken to a\nhospital, and five security personnel received minor injuries, a Saudi Press\nofficial in London told CNN.\n\n\n\nFive people, including one woman, suspected of involvement in\nthe plot were arrested. Three groups, two based in Mecca and one in Jeddah,\nplanned the attack, the Interior Ministry said.\n\n\n\nThe Grand\nMosque, or the Masjid al-Haram, is the largest mosque in the world and\nsurrounds Islam\'s holiest site, the Kaaba -- a cube-shaped shrine that\nworshipers circle during the Hajj, the annual pilgrimage that brings millions\nof people to Mecca.\n\n\nForeign involvement suspected\n\n\nThe Interior\nMinistry said the identity of the attacker was still being verified but pointed\nto foreign involvement, according to the state-run Saudi Press Agency.\n\n\n\n"They\nobeyed their evil and corrupt selves serving schemes managed from abroad whose\naim is to destabilize the security and stability of this blessed country,"\nthe ministry was quoted as saying.\n\n\n\n"The\nsecurity people, with the help of Almighty Allah, and then the unlimited\nsupport of the Custodian of the Two Holy Mosques and the Crown Prince, will be able\nto foil these criminal schemes and arrest those involved in them."\n\n\n\nUAE\nForeign Minister Sheikh Abdullah bin Zayed Al Nahyan condemned the attempted\nattack and said his country stood with Saudi Arabia in combating terrorism.\n\n\n\n"This\nheinous crime exposes the extent of terrorism and the savagery of those\nterrorist groups, and no one in their right mind can justify or explain\nit," he said in a statement Saturday.\n\n\nMosques targeted\n\n\nSaudi\nArabia has suffered a string of terror attacks in recent years, as well as\nthwarting a number of alleged plots.\n\n\n\nIn\nOctober, the Interior Ministry said Saudi security forces had arrested two\nseparate terrorist cells, one of which planned to attack a football World Cup\nqualifying match in Jeddah that month. Four Pakistani nationals were arrested\nin connection with that plot, while four Saudi nationals were detained from the\nother cell.\n\n\n\nThree\nsuicide bombings were carried out in July last year -- in Medina, Jeddah and\nQatif. Saudi authorities identified the Jeddah bomber as a Pakistani; two\nguards were wounded in the attack, close to the US consulate. The Medina\nattack, close to one of the holiest sites in Islam, killed four security\nguards. No group claimed responsibility for the attack, but Saudi officials\nblamed local cells sympathetic to ISIS.\n\n\n\nA Shia\nmosque in al-Ahsa was targeted in January 2016 in an attack that claimed at\nleast four lives. No claim of responsibility was made, but the attack was\nbelieved to have been carried out by ISIS or one of its affiliates.\n\n\n\nAt least\n13 people were killed in an explosion at a mosque in the Asir region of\nsouthwestern Saudi Arabia in August 2015 and five more in an attack on a Shia\nmosque in Saihat, on the country\'s east coast. ISIS or an ISIS affiliate were\nblamed.\n\n\nThe kingdom was rocked by two\nattacks in May 2015, both claimed by ISIS. One suicide bomber killed 21 people at the Imam Ali\nmosque in Qudayh and another, a\nman disguised as a woman, claimed\nthree lives when he blew himself up outside a mosque in Dammam.',
        'Publish Time': '2017-06-24T10:27',
        Source: 'CNN',
        EEI: 'Terror in the Gulf',
        Person: 'Abdullah bin Zayed Al Nahyan',
        Location: 'Mecca, Masjid al-Haram',
        Organization: 'The Interior Ministry',
        KeyPhrases: 'Attack on Grand Mosque, Saudi Arabia, UAE Foreign Minister, ISIS',
        Picture: 'terror in the gulf english 1.JPG',
      },
      {
        Title: 'Saudis foil attack on Grand Mosque in Mecca4',
        Brief: '23.06.17: Saudis foil attack on Grand Mosque in Mecca',
        Text:
          'Saudi security forces on\nFriday (June 23rd) prevented an imminent attack on the Grand Mosque in Mecca,\nthe country\'s Interior Ministry said on state-run TV.\n\n\n\nA suspect in the planned attack on the mosque blew himself up in\na nearby neighborhood when security forces surrounded a home where the man was\nhiding, according to the ministry.\n\n\n\nThe suspect refused to comply with demands to surrender, opened\nfire on security forces and then killed himself, officials said.\n\n\n\nThe explosion caused the partial collapse of the building in\nwhich the suspect was hiding. Six expatriates were injured and taken to a\nhospital, and five security personnel received minor injuries, a Saudi Press\nofficial in London told CNN.\n\n\n\nFive people, including one woman, suspected of involvement in\nthe plot were arrested. Three groups, two based in Mecca and one in Jeddah,\nplanned the attack, the Interior Ministry said.\n\n\n\nThe Grand\nMosque, or the Masjid al-Haram, is the largest mosque in the world and\nsurrounds Islam\'s holiest site, the Kaaba -- a cube-shaped shrine that\nworshipers circle during the Hajj, the annual pilgrimage that brings millions\nof people to Mecca.\n\n\nForeign involvement suspected\n\n\nThe Interior\nMinistry said the identity of the attacker was still being verified but pointed\nto foreign involvement, according to the state-run Saudi Press Agency.\n\n\n\n"They\nobeyed their evil and corrupt selves serving schemes managed from abroad whose\naim is to destabilize the security and stability of this blessed country,"\nthe ministry was quoted as saying.\n\n\n\n"The\nsecurity people, with the help of Almighty Allah, and then the unlimited\nsupport of the Custodian of the Two Holy Mosques and the Crown Prince, will be able\nto foil these criminal schemes and arrest those involved in them."\n\n\n\nUAE\nForeign Minister Sheikh Abdullah bin Zayed Al Nahyan condemned the attempted\nattack and said his country stood with Saudi Arabia in combating terrorism.\n\n\n\n"This\nheinous crime exposes the extent of terrorism and the savagery of those\nterrorist groups, and no one in their right mind can justify or explain\nit," he said in a statement Saturday.\n\n\nMosques targeted\n\n\nSaudi\nArabia has suffered a string of terror attacks in recent years, as well as\nthwarting a number of alleged plots.\n\n\n\nIn\nOctober, the Interior Ministry said Saudi security forces had arrested two\nseparate terrorist cells, one of which planned to attack a football World Cup\nqualifying match in Jeddah that month. Four Pakistani nationals were arrested\nin connection with that plot, while four Saudi nationals were detained from the\nother cell.\n\n\n\nThree\nsuicide bombings were carried out in July last year -- in Medina, Jeddah and\nQatif. Saudi authorities identified the Jeddah bomber as a Pakistani; two\nguards were wounded in the attack, close to the US consulate. The Medina\nattack, close to one of the holiest sites in Islam, killed four security\nguards. No group claimed responsibility for the attack, but Saudi officials\nblamed local cells sympathetic to ISIS.\n\n\n\nA Shia\nmosque in al-Ahsa was targeted in January 2016 in an attack that claimed at\nleast four lives. No claim of responsibility was made, but the attack was\nbelieved to have been carried out by ISIS or one of its affiliates.\n\n\n\nAt least\n13 people were killed in an explosion at a mosque in the Asir region of\nsouthwestern Saudi Arabia in August 2015 and five more in an attack on a Shia\nmosque in Saihat, on the country\'s east coast. ISIS or an ISIS affiliate were\nblamed.\n\n\nThe kingdom was rocked by two\nattacks in May 2015, both claimed by ISIS. One suicide bomber killed 21 people at the Imam Ali\nmosque in Qudayh and another, a\nman disguised as a woman, claimed\nthree lives when he blew himself up outside a mosque in Dammam.',
        'Publish Time': '2017-06-24T10:27',
        Source: 'CNN',
        EEI: 'Terror in the Gulf',
        Person: 'Abdullah bin Zayed Al Nahyan',
        Location: 'Mecca, Masjid al-Haram',
        Organization: 'The Interior Ministry',
        KeyPhrases: 'Attack on Grand Mosque, Saudi Arabia, UAE Foreign Minister, ISIS',
        Picture: 'terror in the gulf english 1.JPG',
      },
      {
        Title: 'Saudis foil attack on Grand Mosque in Mecca5',
        Brief: '23.06.17: Saudis foil attack on Grand Mosque in Mecca',
        Text:
          'Saudi security forces on\nFriday (June 23rd) prevented an imminent attack on the Grand Mosque in Mecca,\nthe country\'s Interior Ministry said on state-run TV.\n\n\n\nA suspect in the planned attack on the mosque blew himself up in\na nearby neighborhood when security forces surrounded a home where the man was\nhiding, according to the ministry.\n\n\n\nThe suspect refused to comply with demands to surrender, opened\nfire on security forces and then killed himself, officials said.\n\n\n\nThe explosion caused the partial collapse of the building in\nwhich the suspect was hiding. Six expatriates were injured and taken to a\nhospital, and five security personnel received minor injuries, a Saudi Press\nofficial in London told CNN.\n\n\n\nFive people, including one woman, suspected of involvement in\nthe plot were arrested. Three groups, two based in Mecca and one in Jeddah,\nplanned the attack, the Interior Ministry said.\n\n\n\nThe Grand\nMosque, or the Masjid al-Haram, is the largest mosque in the world and\nsurrounds Islam\'s holiest site, the Kaaba -- a cube-shaped shrine that\nworshipers circle during the Hajj, the annual pilgrimage that brings millions\nof people to Mecca.\n\n\nForeign involvement suspected\n\n\nThe Interior\nMinistry said the identity of the attacker was still being verified but pointed\nto foreign involvement, according to the state-run Saudi Press Agency.\n\n\n\n"They\nobeyed their evil and corrupt selves serving schemes managed from abroad whose\naim is to destabilize the security and stability of this blessed country,"\nthe ministry was quoted as saying.\n\n\n\n"The\nsecurity people, with the help of Almighty Allah, and then the unlimited\nsupport of the Custodian of the Two Holy Mosques and the Crown Prince, will be able\nto foil these criminal schemes and arrest those involved in them."\n\n\n\nUAE\nForeign Minister Sheikh Abdullah bin Zayed Al Nahyan condemned the attempted\nattack and said his country stood with Saudi Arabia in combating terrorism.\n\n\n\n"This\nheinous crime exposes the extent of terrorism and the savagery of those\nterrorist groups, and no one in their right mind can justify or explain\nit," he said in a statement Saturday.\n\n\nMosques targeted\n\n\nSaudi\nArabia has suffered a string of terror attacks in recent years, as well as\nthwarting a number of alleged plots.\n\n\n\nIn\nOctober, the Interior Ministry said Saudi security forces had arrested two\nseparate terrorist cells, one of which planned to attack a football World Cup\nqualifying match in Jeddah that month. Four Pakistani nationals were arrested\nin connection with that plot, while four Saudi nationals were detained from the\nother cell.\n\n\n\nThree\nsuicide bombings were carried out in July last year -- in Medina, Jeddah and\nQatif. Saudi authorities identified the Jeddah bomber as a Pakistani; two\nguards were wounded in the attack, close to the US consulate. The Medina\nattack, close to one of the holiest sites in Islam, killed four security\nguards. No group claimed responsibility for the attack, but Saudi officials\nblamed local cells sympathetic to ISIS.\n\n\n\nA Shia\nmosque in al-Ahsa was targeted in January 2016 in an attack that claimed at\nleast four lives. No claim of responsibility was made, but the attack was\nbelieved to have been carried out by ISIS or one of its affiliates.\n\n\n\nAt least\n13 people were killed in an explosion at a mosque in the Asir region of\nsouthwestern Saudi Arabia in August 2015 and five more in an attack on a Shia\nmosque in Saihat, on the country\'s east coast. ISIS or an ISIS affiliate were\nblamed.\n\n\nThe kingdom was rocked by two\nattacks in May 2015, both claimed by ISIS. One suicide bomber killed 21 people at the Imam Ali\nmosque in Qudayh and another, a\nman disguised as a woman, claimed\nthree lives when he blew himself up outside a mosque in Dammam.',
        'Publish Time': '2017-06-24T10:27',
        Source: 'CNN',
        EEI: 'Terror in the Gulf',
        Person: 'Abdullah bin Zayed Al Nahyan',
        Location: 'Mecca, Masjid al-Haram',
        Organization: 'The Interior Ministry',
        KeyPhrases: 'Attack on Grand Mosque, Saudi Arabia, UAE Foreign Minister, ISIS',
        Picture: 'terror in the gulf english 1.JPG',
      },
    ];
  }

  getSelectedItem() {
    return this.itemList[this.selectedItem];
  }

  changeSelected(i) {
    this.selectedItem = i;
  }
}
